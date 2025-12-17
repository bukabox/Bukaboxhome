/**
 * Projects Page - ROI Box
 * List of projects with metric card blocks
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Calendar,
  Target,
  MoreVertical,
  Edit,
  Trash2,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Button } from '../components/ui/button';

interface Project {
  id: string;
  name: string;
  investment: number;
  returns: number;
  roi: number;
  status: 'active' | 'completed' | 'paused';
  startDate: string;
  endDate?: string;
  category: string;
}

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [projects] = useState<Project[]>([
    {
      id: '1',
      name: 'E-commerce Platform',
      investment: 50000,
      returns: 72500,
      roi: 45,
      status: 'active',
      startDate: '2024-01-15',
      category: 'Tech'
    },
    {
      id: '2',
      name: 'Real Estate Investment',
      investment: 200000,
      returns: 240000,
      roi: 20,
      status: 'completed',
      startDate: '2023-06-01',
      endDate: '2024-12-01',
      category: 'Property'
    },
    {
      id: '3',
      name: 'Stock Portfolio',
      investment: 75000,
      returns: 82500,
      roi: 10,
      status: 'active',
      startDate: '2024-03-10',
      category: 'Finance'
    },
    {
      id: '4',
      name: 'Restaurant Business',
      investment: 100000,
      returns: 95000,
      roi: -5,
      status: 'active',
      startDate: '2024-02-20',
      category: 'Business'
    },
    {
      id: '5',
      name: 'Crypto Investment',
      investment: 30000,
      returns: 42000,
      roi: 40,
      status: 'active',
      startDate: '2024-04-05',
      category: 'Crypto'
    },
    {
      id: '6',
      name: 'SaaS Startup',
      investment: 150000,
      returns: 195000,
      roi: 30,
      status: 'active',
      startDate: '2023-09-15',
      category: 'Tech'
    }
  ]);

  const totalInvestment = projects.reduce((sum, p) => sum + p.investment, 0);
  const totalReturns = projects.reduce((sum, p) => sum + p.returns, 0);
  const averageROI = ((totalReturns - totalInvestment) / totalInvestment * 100).toFixed(1);
  const activeProjects = projects.filter(p => p.status === 'active').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'paused':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Tech': 'bg-purple-100 text-purple-700',
      'Property': 'bg-orange-100 text-orange-700',
      'Finance': 'bg-blue-100 text-blue-700',
      'Business': 'bg-green-100 text-green-700',
      'Crypto': 'bg-yellow-100 text-yellow-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ROI Box - Projects
          </h1>
          <p className="text-gray-600">
            Track and analyze your investment returns
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
      </div>

      {/* Summary Cards (Like MetricCard) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Investment */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Total Investment</p>
          <p className="text-2xl font-bold text-gray-900">${totalInvestment.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">{projects.length} projects</p>
        </div>

        {/* Total Returns */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm text-gray-600 mb-1">Total Returns</p>
          <p className="text-2xl font-bold text-gray-900">${totalReturns.toLocaleString()}</p>
          <p className="text-xs text-green-600 mt-1">+${(totalReturns - totalInvestment).toLocaleString()} profit</p>
        </div>

        {/* Average ROI */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            {parseFloat(averageROI) > 0 ? (
              <ArrowUpRight className="w-5 h-5 text-green-600" />
            ) : (
              <ArrowDownRight className="w-5 h-5 text-red-600" />
            )}
          </div>
          <p className="text-sm text-gray-600 mb-1">Average ROI</p>
          <p className="text-2xl font-bold text-gray-900">{averageROI}%</p>
          <p className={`text-xs mt-1 ${parseFloat(averageROI) > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {parseFloat(averageROI) > 0 ? 'Above target' : 'Below target'}
          </p>
        </div>

        {/* Active Projects */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-orange-50">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-1">Active Projects</p>
          <p className="text-2xl font-bold text-gray-900">{activeProjects}</p>
          <p className="text-xs text-gray-500 mt-1">In progress</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">All Projects</h2>
        <div className="flex items-center gap-2">
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Paused</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Categories</option>
            <option>Tech</option>
            <option>Property</option>
            <option>Finance</option>
            <option>Business</option>
            <option>Crypto</option>
          </select>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
          >
            {/* Card Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* ROI Badge */}
              <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                project.roi > 0 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-red-50 text-red-700'
              }`}>
                {project.roi > 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span className="font-bold">{project.roi > 0 ? '+' : ''}{project.roi}% ROI</span>
              </div>
            </div>

            {/* Card Body - Metrics */}
            <div className="p-6 space-y-4">
              {/* Investment */}
              <div>
                <p className="text-xs text-gray-500 mb-1">Investment</p>
                <p className="text-lg font-bold text-gray-900">${project.investment.toLocaleString()}</p>
              </div>

              {/* Returns */}
              <div>
                <p className="text-xs text-gray-500 mb-1">Current Returns</p>
                <p className="text-lg font-bold text-gray-900">${project.returns.toLocaleString()}</p>
                <p className={`text-xs mt-0.5 ${
                  project.returns > project.investment 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {project.returns > project.investment ? '+' : ''}
                  ${(project.returns - project.investment).toLocaleString()} profit
                </p>
              </div>

              {/* Date */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Started: {new Date(project.startDate).toLocaleDateString('en-GB')}</span>
                </div>
                {project.endDate && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>Ended: {new Date(project.endDate).toLocaleDateString('en-GB')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer - Actions */}
            <div className="px-6 pb-6 flex items-center gap-2">
              <button className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button className="px-4 py-2 border border-red-200 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no projects) */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Target className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">No projects yet</h3>
          <p className="text-gray-600 mb-6">Start tracking your investment returns by creating your first project</p>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-lg">
            <Plus className="w-4 h-4 mr-2" />
            Create First Project
          </Button>
        </div>
      )}
    </div>
  );
}
