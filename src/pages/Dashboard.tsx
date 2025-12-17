/**
 * Main Dashboard Page - BUKABOX App
 * Dashboard utama dengan sidebar navigation dan overview stats
 */

import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { 
  LayoutDashboard, 
  TrendingUp,
  Calculator,
  FileText,
  Settings,
  LogOut,
  ChevronDown,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const menuItems = [
    {
      section: 'MAIN',
      items: [
        { 
          id: 'overview', 
          label: 'Overview', 
          icon: LayoutDashboard, 
          path: '/dashboard',
          active: location.pathname === '/dashboard'
        }
      ]
    },
    {
      section: 'SERVICES',
      items: [
        { 
          id: 'networth', 
          label: 'Networth Tracker', 
          icon: TrendingUp, 
          path: '/dashboard/networth',
          active: location.pathname.startsWith('/dashboard/networth')
        },
        { 
          id: 'projects', 
          label: 'ROI Box', 
          icon: Calculator, 
          path: '/dashboard/projects',
          active: location.pathname.startsWith('/dashboard/projects')
        }
      ]
    },
    {
      section: 'ACCOUNT',
      items: [
        { 
          id: 'settings', 
          label: 'Settings', 
          icon: Settings, 
          path: '/dashboard/settings',
          active: location.pathname.startsWith('/dashboard/settings')
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className={`hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 transition-all duration-300 ${sidebarOpen ? 'lg:w-64' : 'lg:w-20'}`}>
        {/* Sidebar Header - User Profile */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img 
              src={user.picture} 
              alt={user.name}
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{user.name}</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500 capitalize">{user.subscription || 'Free'}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-6">
              {sidebarOpen && (
                <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {section.section}
                </h3>
              )}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      item.active
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 flex-shrink-0 ${item.active ? 'text-blue-600' : 'text-gray-500'}`} />
                    {sidebarOpen && <span className="truncate">{item.label}</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer - Logout */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            {/* Mobile Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={user.picture} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-blue-500"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
                  <span className="text-xs text-gray-500 capitalize">{user.subscription || 'Free'}</span>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-4 overflow-y-auto">
              {menuItems.map((section, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {section.section}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          navigate(item.path);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                          item.active
                            ? 'bg-blue-50 text-blue-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-600' : 'text-gray-500'}`} />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Mobile Logout */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>

              {/* Logo */}
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                BUKABOX
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {/* Search Bar - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm text-gray-700 w-48"
                />
              </div>

              {/* Notifications */}
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Upgrade Button */}
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-lg hidden md:flex">
                Upgrade
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}