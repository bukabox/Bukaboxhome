/**
 * Networth Dashboard Page
 * Main dashboard untuk BUKABOX Networth System
 * Menampilkan net worth summary, quick stats, dan recent activities
 */

import { useState } from 'react';
import { useAuth } from '@/app/AuthProvider';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/stat-card';
import { 
  TrendingUp, 
  DollarSign, 
  Wallet, 
  CreditCard,
  Plus,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NetworthDashboard() {
  const { user } = useAuth();

  // Mock data - akan diganti dengan API call
  const mockData = {
    totalAssets: 1250000000,
    totalLiabilities: 450000000,
    netWorth: 800000000,
    monthlyChange: 5.2,
    assetCount: 8,
    liabilityCount: 3,
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
    return `${percent > 0 ? '+' : ''}${percent.toFixed(1)}%`;
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Net Worth Overview
              </h1>
              <p className="text-gray-600">
                Track your total assets and liabilities to monitor your financial health.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
              <Link
                to="/networth/assets"
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                Add Asset
              </Link>
            </div>
          </div>
        </div>

        {/* Net Worth Summary Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-blue-100 mb-2">Your Total Net Worth</p>
              <h2 className="text-4xl font-bold mb-1">
                {formatCurrency(mockData.netWorth)}
              </h2>
              <div className="flex items-center gap-2">
                {mockData.monthlyChange > 0 ? (
                  <ArrowUpRight className="w-4 h-4 text-green-300" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-300" />
                )}
                <span className={mockData.monthlyChange > 0 ? 'text-green-300' : 'text-red-300'}>
                  {formatPercent(mockData.monthlyChange)} from last month
                </span>
              </div>
            </div>
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <TrendingUp className="w-8 h-8" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-blue-400/30">
            <div>
              <p className="text-blue-100 text-sm mb-1">Total Assets</p>
              <p className="text-2xl font-bold">{formatCurrency(mockData.totalAssets)}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-1">Total Liabilities</p>
              <p className="text-2xl font-bold">{formatCurrency(mockData.totalLiabilities)}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Assets"
            value={formatCurrency(mockData.totalAssets)}
            icon={Wallet}
            description={`${mockData.assetCount} items tracked`}
            color="blue"
          />
          <StatCard
            title="Total Liabilities"
            value={formatCurrency(mockData.totalLiabilities)}
            icon={CreditCard}
            description={`${mockData.liabilityCount} items tracked`}
            color="red"
          />
          <StatCard
            title="Asset Items"
            value={mockData.assetCount.toString()}
            icon={DollarSign}
            description="Active assets"
            color="green"
          />
          <StatCard
            title="Liability Items"
            value={mockData.liabilityCount.toString()}
            icon={CreditCard}
            description="Active liabilities"
            color="orange"
          />
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/networth/assets"
            className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Manage Assets</h3>
            <p className="text-gray-600 text-sm">
              Track cash, investments, property, and other valuable assets
            </p>
          </Link>

          <Link
            to="/networth/liabilities"
            className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                <CreditCard className="w-6 h-6 text-red-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Manage Liabilities</h3>
            <p className="text-gray-600 text-sm">
              Track loans, mortgages, credit cards, and other debts
            </p>
          </Link>

          <Link
            to="/networth/reports"
            className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <PieChart className="w-6 h-6 text-purple-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2">View Reports</h3>
            <p className="text-gray-600 text-sm">
              Analyze trends, breakdowns, and historical data
            </p>
          </Link>
        </div>

        {/* Recent Activity / Getting Started */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <h3 className="font-semibold text-lg mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                1
              </div>
              <div>
                <h4 className="font-medium mb-1">Add Your Assets</h4>
                <p className="text-sm text-gray-600">
                  Start by adding your cash, investments, property, and other valuable assets.
                </p>
                <Link to="/networth/assets" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block">
                  Add assets →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                2
              </div>
              <div>
                <h4 className="font-medium mb-1">Add Your Liabilities</h4>
                <p className="text-sm text-gray-600">
                  Add loans, mortgages, credit card debt, and other liabilities.
                </p>
                <Link to="/networth/liabilities" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block">
                  Add liabilities →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                3
              </div>
              <div>
                <h4 className="font-medium mb-1">Monitor Your Progress</h4>
                <p className="text-sm text-gray-600">
                  Track your net worth over time and analyze trends with detailed reports.
                </p>
                <Link to="/networth/reports" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block">
                  View reports →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
