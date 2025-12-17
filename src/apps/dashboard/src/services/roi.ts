/**
 * ROI Service
 * 
 * Project-level service untuk analisis ROI properti.
 * 1 user = N projects
 * Membutuhkan project context untuk semua operasi.
 */

import { api } from './api';

export interface Project {
  id: string;
  userId: string;
  name: string;
  description?: string;
  propertyType: 'residential' | 'commercial' | 'land';
  status: 'planning' | 'active' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface Cashflow {
  id: string;
  projectId: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string;
  description?: string;
  recurring: boolean;
  createdAt: string;
}

export interface ProjectAsset {
  id: string;
  projectId: string;
  name: string;
  category: string;
  value: number;
  purchaseDate: string;
  depreciable: boolean;
  depreciationRate?: number;
  createdAt: string;
}

export interface ROISummary {
  projectId: string;
  totalIncome: number;
  totalExpense: number;
  netCashflow: number;
  totalAssets: number;
  roi: number;
  roiPercentage: number;
}

export const roiService = {
  /**
   * Get all projects for current user
   */
  async getProjects(): Promise<Project[]> {
    return api.get<Project[]>('/roi/projects');
  },

  /**
   * Get project by ID
   */
  async getProject(projectId: string): Promise<Project> {
    return api.get<Project>(`/roi/projects/${projectId}`);
  },

  /**
   * Create new project
   */
  async createProject(data: Omit<Project, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<Project> {
    return api.post<Project>('/roi/projects', data);
  },

  /**
   * Update project
   */
  async updateProject(projectId: string, data: Partial<Project>): Promise<Project> {
    return api.put<Project>(`/roi/projects/${projectId}`, data);
  },

  /**
   * Delete project
   */
  async deleteProject(projectId: string): Promise<void> {
    return api.delete(`/roi/projects/${projectId}`);
  },

  /**
   * Get ROI summary for project
   */
  async getROISummary(projectId: string): Promise<ROISummary> {
    return api.get<ROISummary>(`/roi/projects/${projectId}/summary`);
  },

  /**
   * Get all cashflows for project
   */
  async getCashflows(projectId: string): Promise<Cashflow[]> {
    return api.get<Cashflow[]>(`/roi/projects/${projectId}/cashflows`);
  },

  /**
   * Create cashflow entry
   */
  async createCashflow(projectId: string, data: Omit<Cashflow, 'id' | 'projectId' | 'createdAt'>): Promise<Cashflow> {
    return api.post<Cashflow>(`/roi/projects/${projectId}/cashflows`, data);
  },

  /**
   * Update cashflow entry
   */
  async updateCashflow(projectId: string, cashflowId: string, data: Partial<Cashflow>): Promise<Cashflow> {
    return api.put<Cashflow>(`/roi/projects/${projectId}/cashflows/${cashflowId}`, data);
  },

  /**
   * Delete cashflow entry
   */
  async deleteCashflow(projectId: string, cashflowId: string): Promise<void> {
    return api.delete(`/roi/projects/${projectId}/cashflows/${cashflowId}`);
  },

  /**
   * Get all assets for project
   */
  async getAssets(projectId: string): Promise<ProjectAsset[]> {
    return api.get<ProjectAsset[]>(`/roi/projects/${projectId}/assets`);
  },

  /**
   * Create asset
   */
  async createAsset(projectId: string, data: Omit<ProjectAsset, 'id' | 'projectId' | 'createdAt'>): Promise<ProjectAsset> {
    return api.post<ProjectAsset>(`/roi/projects/${projectId}/assets`, data);
  },

  /**
   * Update asset
   */
  async updateAsset(projectId: string, assetId: string, data: Partial<ProjectAsset>): Promise<ProjectAsset> {
    return api.put<ProjectAsset>(`/roi/projects/${projectId}/assets/${assetId}`, data);
  },

  /**
   * Delete asset
   */
  async deleteAsset(projectId: string, assetId: string): Promise<void> {
    return api.delete(`/roi/projects/${projectId}/assets/${assetId}`);
  },

  /**
   * Get depreciation schedule
   */
  async getDepreciationSchedule(projectId: string): Promise<any[]> {
    return api.get(`/roi/projects/${projectId}/depreciation`);
  },

  /**
   * Get project reports
   */
  async getReports(projectId: string, startDate?: string, endDate?: string): Promise<any> {
    return api.get(`/roi/projects/${projectId}/reports`, {
      params: { startDate, endDate } as any,
    });
  },
};
