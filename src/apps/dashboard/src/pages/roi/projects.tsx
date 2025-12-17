/**
 * ROI Projects Page
 * Menampilkan daftar project investments dengan kemampuan create, edit, delete
 */

import { useState } from 'react';
import { useAuth } from '@/app/AuthProvider';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  Plus, 
  Search,
  FolderOpen,
  TrendingUp,
  Calendar,
  DollarSign,
  MoreVertical,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  status: 'active' | 'completed' | 'archived';
  totalInvestment: number;
  currentValue: number;
  roi: number;
}

export default function ROIProjects() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock data - akan diganti dengan API call
  const mockProjects: Project[] = [
    {
      id: 'proj-1',
      name: 'Property Investment - Jakarta Selatan',
      description: 'Apartment investment di area Jakarta Selatan untuk rental income',
      startDate: '2024-01-15',
      status: 'active',
      totalInvestment: 800000000,
      currentValue: 850000000,
      roi: 6.25,
    },
    {
      id: 'proj-2',
      name: 'Stock Portfolio - Tech Sector',
      description: 'Investment portfolio focused on technology sector stocks',
      startDate: '2023-06-01',
      status: 'active',
      totalInvestment: 150000000,
      currentValue: 185000000,
      roi: 23.33,
    },
    {
      id: 'proj-3',
      name: 'Coffee Shop Business',
      description: 'Small coffee shop business in BSD area',
      startDate: '2023-03-10',
      status: 'completed',
      totalInvestment: 250000000,
      currentValue: 320000000,
      roi: 28.0,
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (percent: number) => {
    return `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 text-green-700 border-green-200',
      completed: 'bg-blue-100 text-blue-700 border-blue-200',
      archived: 'bg-gray-100 text-gray-700 border-gray-200',
    };
    const labels = {
      active: 'Active',
      completed: 'Completed',
      archived: 'Archived',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const filteredProjects = mockProjects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate totals
  const totalInvestment = mockProjects.reduce((sum, p) => sum + p.totalInvestment, 0);
  const totalCurrentValue = mockProjects.reduce((sum, p) => sum + p.currentValue, 0);
  const totalROI = ((totalCurrentValue - totalInvestment) / totalInvestment) * 100;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                ROI Tracker - Projects
              </h1>
              <p className="text-gray-600">
                Manage and track return on investment for all your projects.
              </p>
            </div>
            
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Create Project
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Investment</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalInvestment)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Value</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalCurrentValue)}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-blue-100">Portfolio ROI</p>
                <p className="text-3xl font-bold">{formatPercent(totalROI)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gray-100 rounded-full">
                <FolderOpen className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {searchQuery ? 'No projects found' : 'No projects yet'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery 
                ? 'Try a different search term'
                : 'Start by creating your first investment project to track ROI'}
            </p>
            {!searchQuery && (
              <button
                onClick={() => setShowCreateModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Create First Project
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.name}
                        </h3>
                        {getStatusBadge(project.status)}
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Investment</p>
                      <p className="font-semibold text-gray-900">
                        {formatCurrency(project.totalInvestment)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Current Value</p>
                      <p className="font-semibold text-gray-900">
                        {formatCurrency(project.currentValue)}
                      </p>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">ROI</span>
                    <span className={`text-lg font-bold ${project.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatPercent(project.roi)}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    Started {new Date(project.startDate).toLocaleDateString('id-ID', { 
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      to={`/roi/project/${project.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </Link>
                    <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="px-4 py-2 border-2 border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Create Modal Placeholder */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6">
              <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
              <p className="text-gray-600 mb-6">
                Create project form will be implemented here with backend integration.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
