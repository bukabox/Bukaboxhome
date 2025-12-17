import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';

interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

interface ActiveProjectContextType {
  activeProject: Project | null;
  projects: Project[];
  setActiveProject: (project: Project | null) => void;
  addProject: (project: Project) => void;
  removeProject: (projectId: string) => void;
}

const ActiveProjectContext = createContext<ActiveProjectContextType | undefined>(undefined);

/**
 * ActiveProjectProvider - ROI ONLY
 * 
 * Provider ini hanya digunakan untuk ROI service karena ROI adalah project-level service.
 * User bisa memiliki multiple projects dan perlu switch antar projects.
 * 
 * TIDAK DIGUNAKAN untuk:
 * - Networth (account-level, 1 user = 1 instance)
 * - Tax Engine (account-level)
 */
export function ActiveProjectProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user } = useAuth();
  const [activeProject, setActiveProjectState] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  // Load projects and active project from localStorage
  useEffect(() => {
    if (isAuthenticated && user) {
      const savedProjects = localStorage.getItem(`bukabox_roi_projects_${user.email}`);
      const savedActiveProjectId = localStorage.getItem(`bukabox_roi_active_project_${user.email}`);

      if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        setProjects(parsedProjects);

        // Restore active project if exists
        if (savedActiveProjectId) {
          const activeProj = parsedProjects.find((p: Project) => p.id === savedActiveProjectId);
          if (activeProj) {
            setActiveProjectState(activeProj);
          }
        }
      }
    } else {
      setProjects([]);
      setActiveProjectState(null);
    }
  }, [isAuthenticated, user]);

  const setActiveProject = (project: Project | null) => {
    setActiveProjectState(project);
    if (user) {
      if (project) {
        localStorage.setItem(`bukabox_roi_active_project_${user.email}`, project.id);
      } else {
        localStorage.removeItem(`bukabox_roi_active_project_${user.email}`);
      }
    }
  };

  const addProject = (project: Project) => {
    const newProjects = [...projects, project];
    setProjects(newProjects);
    if (user) {
      localStorage.setItem(`bukabox_roi_projects_${user.email}`, JSON.stringify(newProjects));
    }
  };

  const removeProject = (projectId: string) => {
    const newProjects = projects.filter(p => p.id !== projectId);
    setProjects(newProjects);
    
    // If active project is removed, clear it
    if (activeProject?.id === projectId) {
      setActiveProject(null);
    }
    
    if (user) {
      localStorage.setItem(`bukabox_roi_projects_${user.email}`, JSON.stringify(newProjects));
    }
  };

  return (
    <ActiveProjectContext.Provider value={{ 
      activeProject, 
      projects, 
      setActiveProject, 
      addProject, 
      removeProject 
    }}>
      {children}
    </ActiveProjectContext.Provider>
  );
}

export function useActiveProject() {
  const context = useContext(ActiveProjectContext);
  if (context === undefined) {
    throw new Error('useActiveProject must be used within an ActiveProjectProvider');
  }
  return context;
}
