/**
 * ROI Project Dashboard Page
 * Detail overview untuk specific project dengan key metrics dan quick access
 */

import { useParams, Link } from 'react-router-dom';
import { useActiveProject } from '@/app/ActiveProjectProvider';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/stat-card';
import { 
  TrendingUp,
  DollarSign,
  Calendar,
  BarChart3,
  ArrowLeft,
  ArrowUpRight,
  Wallet,
  Receipt,
  FileText,
  Clock
} from 'lucide-react';

export default function ROIProjectDashboard() {
  const { projectId } = useParams();
  const { activeProject } = useActiveProject();

  // Mock data - akan diganti dengan API call
  const mockProject = {
    id: projectId || 'demo',
    name: 'Property Investment - Jakarta Selatan',
    description: 'Apartment investment di area Jakarta Selatan untuk rental income',
    startDate: '2024-01-15',
    status: 'active',
    
    // Financial metrics
    totalInvestment: 800000000,
    totalInflows: 85000000,
    totalOutflows: 820000000,
    netCashFlow: -735000000,
    currentValue: 850000000,
    roi: 6.25,
    irr: 12.5,
    paybackPeriod: 48, // months
    
    // Counts
    assetCount: 3,
    cashflowCount: 24,
    
    // Dates
    lastUpdated: new Date().toISOString(),
  };

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
      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/roi/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {mockProject.name}
                </h1>
                {getStatusBadge(mockProject.status)}
              </div>
              <p className="text-gray-600 mb-3">
                {mockProject.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                Started {new Date(mockProject.startDate).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Edit Project
            </button>
          </div>
        </div>

        {/* Key Metrics - Hero Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-blue-100 mb-2">Return on Investment</p>
              <p className="text-4xl font-bold mb-1">{formatPercent(mockProject.roi)}</p>
              <p className="text-blue-100 text-sm">Current ROI</p>
            </div>
            <div>
              <p className="text-blue-100 mb-2">Internal Rate of Return</p>
              <p className="text-4xl font-bold mb-1">{formatPercent(mockProject.irr)}</p>
              <p className="text-blue-100 text-sm">Annualized IRR</p>
            </div>
            <div>
              <p className="text-blue-100 mb-2">Payback Period</p>
              <p className="text-4xl font-bold mb-1">{mockProject.paybackPeriod}</p>
              <p className="text-blue-100 text-sm">Months to break even</p>
            </div>
          </div>
        </div>

        {/* Financial Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Investment"
            value={formatCurrency(mockProject.totalInvestment)}
            icon={DollarSign}
            description="Initial capital"
            color="blue"
          />
          <StatCard
            title="Current Value"
            value={formatCurrency(mockProject.currentValue)}
            icon={TrendingUp}
            description="Market value"
            color="green"
          />
          <StatCard
            title="Total Inflows"
            value={formatCurrency(mockProject.totalInflows)}
            icon={ArrowUpRight}
            description={`${mockProject.cashflowCount} transactions`}
            color="emerald"
          />
          <StatCard
            title="Total Outflows"
            value={formatCurrency(mockProject.totalOutflows)}
            icon={Receipt}
            description="Including investment"
            color="red"
          />
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link
            to={`/roi/project/${projectId}/cashflow`}
            className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Receipt className="w-6 h-6 text-blue-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Cash Flow</h3>
            <p className="text-gray-600 text-sm mb-3">
              Track inflows and outflows
            </p>
            <p className="text-xs text-gray-500">
              {mockProject.cashflowCount} transactions
            </p>
          </Link>

          <Link
            to={`/roi/project/${projectId}/assets`}
            className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <Wallet className="w-6 h-6 text-green-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Assets</h3>
            <p className="text-gray-600 text-sm mb-3">
              Manage project assets
            </p>
            <p className="text-xs text-gray-500">
              {mockProject.assetCount} assets tracked
            </p>
          </Link>

          <Link
            to={`/roi/project/${projectId}/depreciation`}
            className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Depreciation</h3>
            <p className="text-gray-600 text-sm mb-3">
              Asset depreciation schedule
            </p>
            <p className="text-xs text-gray-500">
              View schedules
            </p>
          </Link>

          <Link
            to={`/roi/project/${projectId}/reports`}
            className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Reports</h3>
            <p className="text-gray-600 text-sm mb-3">
              Detailed analytics & insights
            </p>
            <p className="text-xs text-gray-500">
              View reports
            </p>
          </Link>
        </div>

        {/* Recent Activity / Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cash Flow Summary */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
            <h3 className="font-semibold text-lg mb-4">Cash Flow Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Inflows</p>
                  <p className="text-xl font-bold text-green-600">
                    {formatCurrency(mockProject.totalInflows)}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <ArrowUpRight className="w-6 h-6 text-green-600" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Outflows</p>
                  <p className="text-xl font-bold text-red-600">
                    {formatCurrency(mockProject.totalOutflows)}
                  </p>
                </div>
                <div className="p-3 bg-red-100 rounded-lg">
                  <Receipt className="w-6 h-6 text-red-600" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Net Cash Flow</p>
                  <p className="text-xl font-bold text-blue-600">
                    {formatCurrency(mockProject.netCashFlow)}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <Link
              to={`/roi/project/${projectId}/cashflow`}
              className="mt-4 block text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all transactions →
            </Link>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
            <h3 className="font-semibold text-lg mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Return on Investment (ROI)</span>
                <span className="text-lg font-bold text-green-600">{formatPercent(mockProject.roi)}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Internal Rate of Return (IRR)</span>
                <span className="text-lg font-bold text-blue-600">{formatPercent(mockProject.irr)}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Payback Period</span>
                <span className="text-lg font-bold text-orange-600">{mockProject.paybackPeriod} months</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Project Duration</span>
                <span className="text-lg font-bold text-purple-600">
                  {Math.floor((new Date().getTime() - new Date(mockProject.startDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} months
                </span>
              </div>
            </div>

            <Link
              to={`/roi/project/${projectId}/reports`}
              className="mt-4 block text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View detailed reports →
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
