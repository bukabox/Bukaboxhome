/**
 * Networth System Page
 * Track Assets, Liabilities, and Net Worth
 */

import { useState } from 'react';
import { 
  Plus, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Home,
  Car,
  Briefcase,
  CreditCard,
  Building,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Edit,
  Trash2,
  PiggyBank
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Asset {
  id: string;
  name: string;
  category: 'property' | 'vehicle' | 'investment' | 'savings' | 'other';
  value: number;
  lastUpdated: string;
}

interface Liability {
  id: string;
  name: string;
  category: 'mortgage' | 'loan' | 'credit_card' | 'other';
  value: number;
  lastUpdated: string;
}

export default function NetworthPage() {
  const [assets] = useState<Asset[]>([
    {
      id: '1',
      name: 'Primary Residence',
      category: 'property',
      value: 450000,
      lastUpdated: '2024-12-15'
    },
    {
      id: '2',
      name: 'Investment Portfolio',
      category: 'investment',
      value: 125000,
      lastUpdated: '2024-12-17'
    },
    {
      id: '3',
      name: 'Savings Account',
      category: 'savings',
      value: 45000,
      lastUpdated: '2024-12-17'
    },
    {
      id: '4',
      name: 'Vehicle (Tesla Model 3)',
      category: 'vehicle',
      value: 35000,
      lastUpdated: '2024-12-10'
    },
    {
      id: '5',
      name: 'Emergency Fund',
      category: 'savings',
      value: 20000,
      lastUpdated: '2024-12-17'
    }
  ]);

  const [liabilities] = useState<Liability[]>([
    {
      id: '1',
      name: 'Home Mortgage',
      category: 'mortgage',
      value: 280000,
      lastUpdated: '2024-12-17'
    },
    {
      id: '2',
      name: 'Car Loan',
      category: 'loan',
      value: 15000,
      lastUpdated: '2024-12-17'
    },
    {
      id: '3',
      name: 'Credit Card Debt',
      category: 'credit_card',
      value: 5000,
      lastUpdated: '2024-12-17'
    }
  ]);

  // Net Worth History Data
  const networthHistory = [
    { month: 'Jul', networth: 320000 },
    { month: 'Aug', networth: 335000 },
    { month: 'Sep', networth: 342000 },
    { month: 'Oct', networth: 355000 },
    { month: 'Nov', networth: 365000 },
    { month: 'Dec', networth: 375000 }
  ];

  // Calculations
  const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0);
  const netWorth = totalAssets - totalLiabilities;
  const previousNetWorth = networthHistory[networthHistory.length - 2]?.networth || 0;
  const networthChange = netWorth - previousNetWorth;
  const networthChangePercent = ((networthChange / previousNetWorth) * 100).toFixed(1);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'property':
        return <Home className="w-5 h-5" />;
      case 'vehicle':
        return <Car className="w-5 h-5" />;
      case 'investment':
        return <TrendingUp className="w-5 h-5" />;
      case 'savings':
        return <PiggyBank className="w-5 h-5" />;
      case 'mortgage':
        return <Building className="w-5 h-5" />;
      case 'loan':
        return <Briefcase className="w-5 h-5" />;
      case 'credit_card':
        return <CreditCard className="w-5 h-5" />;
      default:
        return <Wallet className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'property': 'bg-blue-100 text-blue-700',
      'vehicle': 'bg-purple-100 text-purple-700',
      'investment': 'bg-green-100 text-green-700',
      'savings': 'bg-cyan-100 text-cyan-700',
      'mortgage': 'bg-orange-100 text-orange-700',
      'loan': 'bg-red-100 text-red-700',
      'credit_card': 'bg-pink-100 text-pink-700',
      'other': 'bg-gray-100 text-gray-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const formatCategory = (category: string) => {
    return category.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Networth System
          </h1>
          <p className="text-gray-600">
            Track your assets, liabilities, and net worth over time
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Assets */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm text-gray-600 mb-1">Total Assets</p>
          <p className="text-2xl font-bold text-gray-900">${totalAssets.toLocaleString()}</p>
          <p className="text-xs text-green-600 mt-1">{assets.length} items</p>
        </div>

        {/* Total Liabilities */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-red-50">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <ArrowDownRight className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-sm text-gray-600 mb-1">Total Liabilities</p>
          <p className="text-2xl font-bold text-gray-900">${totalLiabilities.toLocaleString()}</p>
          <p className="text-xs text-red-600 mt-1">{liabilities.length} items</p>
        </div>

        {/* Net Worth */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-white/20">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            {networthChange > 0 ? (
              <ArrowUpRight className="w-5 h-5" />
            ) : (
              <ArrowDownRight className="w-5 h-5" />
            )}
          </div>
          <p className="text-sm text-blue-100 mb-1">Net Worth</p>
          <p className="text-3xl font-bold">${netWorth.toLocaleString()}</p>
          <p className={`text-xs mt-1 ${networthChange > 0 ? 'text-blue-100' : 'text-red-200'}`}>
            {networthChange > 0 ? '+' : ''}${networthChange.toLocaleString()} ({networthChangePercent}%) this month
          </p>
        </div>
      </div>

      {/* Net Worth Trend Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="mb-6">
          <h3 className="text-gray-900 mb-1">Net Worth Trend</h3>
          <p className="text-sm text-gray-500">6-month overview</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={networthHistory}>
            <defs>
              <linearGradient id="colorNetworth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000)}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Area 
              type="monotone" 
              dataKey="networth" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fill="url(#colorNetworth)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assets Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-gray-900">Assets</h3>
              <p className="text-sm text-gray-500">{assets.length} items</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Asset
            </Button>
          </div>

          <div className="space-y-3">
            {assets.map((asset) => (
              <div 
                key={asset.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`p-2 rounded-lg ${getCategoryColor(asset.category)}`}>
                      {getCategoryIcon(asset.category)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{asset.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(asset.category)}`}>
                        {formatCategory(asset.category)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Value</p>
                    <p className="text-lg font-bold text-green-600">${asset.value.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Last updated</p>
                    <p className="text-xs text-gray-700">{new Date(asset.lastUpdated).toLocaleDateString('en-GB')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Assets Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-700">Total Assets</p>
              <p className="text-xl font-bold text-green-600">${totalAssets.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Liabilities Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-gray-900">Liabilities</h3>
              <p className="text-sm text-gray-500">{liabilities.length} items</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Liability
            </Button>
          </div>

          <div className="space-y-3">
            {liabilities.map((liability) => (
              <div 
                key={liability.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`p-2 rounded-lg ${getCategoryColor(liability.category)}`}>
                      {getCategoryIcon(liability.category)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{liability.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(liability.category)}`}>
                        {formatCategory(liability.category)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Amount Owed</p>
                    <p className="text-lg font-bold text-red-600">${liability.value.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Last updated</p>
                    <p className="text-xs text-gray-700">{new Date(liability.lastUpdated).toLocaleDateString('en-GB')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Liabilities Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-700">Total Liabilities</p>
              <p className="text-xl font-bold text-red-600">${totalLiabilities.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Net Worth Summary Card */}
      <div className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Current Net Worth</p>
            <p className="text-4xl font-bold text-gray-900">${netWorth.toLocaleString()}</p>
            <p className={`text-sm mt-2 ${networthChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {networthChange > 0 ? '↑' : '↓'} ${Math.abs(networthChange).toLocaleString()} ({networthChangePercent}%) from last month
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-2">Breakdown</p>
            <p className="text-sm text-green-600">Assets: ${totalAssets.toLocaleString()}</p>
            <p className="text-sm text-red-600">Liabilities: ${totalLiabilities.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
