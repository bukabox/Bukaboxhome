/**
 * Dashboard Overview Page
 * Main overview dengan stats, charts, dan quick actions
 */

import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Calculator, 
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  Activity,
  Calendar,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function DashboardOverview() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    {
      label: 'Total Balance',
      value: '$45,280',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue'
    },
    {
      label: 'Active Services',
      value: '3',
      change: '+1 this month',
      trend: 'up',
      icon: Activity,
      color: 'green'
    },
    {
      label: 'ROI Projects',
      value: '8',
      change: '2 in progress',
      trend: 'neutral',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      label: 'Last Updated',
      value: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short' }),
      change: 'Today',
      trend: 'neutral',
      icon: Calendar,
      color: 'orange'
    }
  ];

  // Recent Activity Data
  const recentActivity = [
    {
      name: 'Jessica Jones',
      role: 'Networth Tracker',
      status: 'Updated assets',
      time: '2h ago',
      avatar: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTkxMDE0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      status_online: true
    },
    {
      name: 'Luca Ferragosto',
      role: 'ROI Calculator',
      status: 'New project added',
      time: '5h ago',
      avatar: 'https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjU5Mzc2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status_online: false
    }
  ];

  // Monthly Summary Data (Area Chart like in App-Dashboard)
  const monthlySummaryData = [
    { date: '14.08', amount: 0 },
    { date: '16.08', amount: 85000 },
    { date: '18.08', amount: 92000 },
    { date: '20.08', amount: 134100 }
  ];

  // Daily Activity Data (Bar Chart)
  const dailyActivityData = [
    { hour: '11', guests: 15 },
    { hour: '12', guests: 18 },
    { hour: '13', guests: 35 },
    { hour: '14', guests: 48 },
    { hour: '15', guests: 30 },
    { hour: '16', guests: 25 },
    { hour: '17', guests: 40 },
    { hour: '18', guests: 52 },
    { hour: '19', guests: 35 },
    { hour: '20', guests: 60 },
    { hour: '21', guests: 65 },
    { hour: '22', guests: 38 }
  ];

  // Reviews Data
  const reviews = [
    {
      platform: 'Facebook Review',
      user: 'Jessica Jones',
      rating: 3,
      avatar: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTkxMDE0OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      platform: 'Yelp Review',
      user: 'James Prince',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjU5Mzc2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">
          Welcome back, {user?.name?.split(' ')[0]}! Here's your account summary.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${
                stat.color === 'blue' ? 'bg-blue-50' :
                stat.color === 'green' ? 'bg-green-50' :
                stat.color === 'purple' ? 'bg-purple-50' :
                'bg-orange-50'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'purple' ? 'text-purple-600' :
                  'text-orange-600'
                }`} />
              </div>
              {stat.trend === 'up' && (
                <ArrowUpRight className="w-5 h-5 text-green-600" />
              )}
              {stat.trend === 'down' && (
                <ArrowDownRight className="w-5 h-5 text-red-600" />
              )}
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className={`text-xs ${
              stat.trend === 'up' ? 'text-green-600' :
              stat.trend === 'down' ? 'text-red-600' :
              'text-gray-500'
            }`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Two Column Layout - Main Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-gray-900">Recent Activity</h3>
                <p className="text-sm text-gray-500">{new Date().toLocaleDateString('en-GB')}</p>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-4 py-4 first:pt-0">
                  <div className="relative">
                    <img 
                      src={activity.avatar} 
                      alt={activity.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                    />
                    {activity.status_online && (
                      <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.name}</p>
                    <p className="text-sm text-gray-500">{activity.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">{activity.status}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-sm text-gray-500 hover:text-gray-700 mt-4 w-full text-center">
              See more
            </button>
          </div>

          {/* Daily Activity Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="mb-6">
              <h3 className="text-gray-900 mb-1">Daily Activity</h3>
              <p className="text-sm text-gray-500">Number of users / hour</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-gray-400">Opening hours on {new Date().toLocaleDateString('en-GB')}</span>
                <span className="text-xs text-cyan-600">11:00 - 22:00</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dailyActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="hour" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar 
                  dataKey="guests" 
                  fill="#67e8f9" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column - Sidebar (1/3 width) */}
        <div className="space-y-6">
          {/* Monthly Summary */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900">Monthly Summary</h3>
              <select className="text-sm text-gray-500 border-none focus:outline-none cursor-pointer bg-transparent">
                <option>August</option>
                <option>September</option>
                <option>October</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={monthlySummaryData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#67e8f9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#67e8f9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
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
                  dataKey="amount" 
                  stroke="#06b6d4" 
                  strokeWidth={2}
                  fill="url(#colorAmount)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h2 className="text-gray-900">$134,100</h2>
              <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">{review.platform}</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Read review
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={review.avatar} 
                    alt={review.user}
                    className="w-10 h-10 rounded-full border-2 border-gray-200"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{review.user}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => navigate('/dashboard/networth')}
                className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                <TrendingUp className="w-5 h-5 text-blue-600 mb-1" />
                <p className="text-xs font-medium text-gray-700">Networth</p>
              </button>
              <button 
                onClick={() => navigate('/dashboard/projects')}
                className="p-3 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors"
              >
                <Calculator className="w-5 h-5 text-green-600 mb-1" />
                <p className="text-xs font-medium text-gray-700">ROI Box</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}