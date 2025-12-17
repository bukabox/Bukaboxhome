import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MetricCard } from "./components/MetricCard";
import { CrewMember } from "./components/CrewMember";
import { ReviewCard } from "./components/ReviewCard";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

export default function App() {
  const [activeMenu, setActiveMenu] = useState("overview");

  // Mock data for charts
  const dailyActivityData = [
    { day: "11", guests: 15 },
    { day: "12", guests: 18 },
    { day: "13", guests: 35 },
    { day: "14", guests: 48 },
    { day: "15", guests: 30 },
    { day: "16", guests: 25 },
    { day: "17", guests: 40 },
    { day: "18", guests: 52 },
    { day: "19", guests: 35 },
    { day: "20", guests: 60 },
    { day: "21", guests: 65 },
    { day: "22", guests: 38 },
  ];

  const monthlyTakingsData = [
    { date: "14.08", amount: 0 },
    { date: "16.08", amount: 85000 },
    { date: "18.08", amount: 92000 },
    { date: "20.08", amount: 134100 },
  ];

  const crewMembers = [
    {
      name: "Jessica Jones",
      role: "Waitress | Afternoon shift",
      shift: "On Shift | 1.4",
      avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTkxMDE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "online" as const,
    },
    {
      name: "Luca Ferragosto",
      role: "Waiter | Morning shift",
      shift: "Shift finished | 1.7",
      avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjU5Mzc2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "offline" as const,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-900">Overview - Restaurant "Soul"</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">20.08.2018</span>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Upgrade
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Takings"
              value="$ 6,280"
              trend="down"
            />
            <MetricCard
              title="Guests Goal"
              value="131"
              subtitle="170"
              loading
            />
            <MetricCard
              title="Avg. Waiting Time"
              value="22 min"
              trend="up"
            />
            <MetricCard
              title="Customer Satisfaction"
              value="4.00"
              rating={4}
              trend="up"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Crew Section */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900">Crew 20.08.2018</h3>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {crewMembers.map((member, index) => (
                    <CrewMember key={index} {...member} />
                  ))}
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700 mt-4 w-full text-center">
                  See more
                </button>
              </Card>

              {/* Daily Activity Chart */}
              <Card className="p-6">
                <div className="mb-6">
                  <h3 className="text-gray-900 mb-1">Daily Activity</h3>
                  <p className="text-sm text-gray-500">Number of guests / hour</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-400">Opening hours on 20.08</span>
                    <span className="text-xs text-cyan-600">11:00 - 22:00</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={dailyActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="day" 
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
              </Card>
            </div>

            {/* Right Column - Secondary Info */}
            <div className="space-y-6">
              {/* Monthly Takings */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Monthly Takings</h3>
                  <select className="text-sm text-gray-500 border-none focus:outline-none cursor-pointer">
                    <option>August</option>
                  </select>
                </div>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart data={monthlyTakingsData}>
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
                </div>
              </Card>

              {/* Reviews */}
              <div className="space-y-4">
                <ReviewCard
                  platform="Facebook Review"
                  reviewer="Jessica Jones"
                  avatar="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTkxMDE0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  rating={3}
                  onReadReview={() => alert("Reading Facebook review...")}
                />
                <ReviewCard
                  platform="Yelp Review"
                  reviewer="James Prince"
                  avatar="https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjU5Mzc2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  rating={5}
                  onReadReview={() => alert("Reading Yelp review...")}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
