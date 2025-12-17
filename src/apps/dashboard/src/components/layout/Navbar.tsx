import { Box, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFeatureScroll = () => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      // Already on homepage, just scroll
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Box className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-gray-900">BUKABOX</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className={location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={handleFeatureScroll}
              className="text-gray-600 hover:text-blue-600"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/pricing')}
              className={location.pathname === '/pricing' ? 'text-blue-600' : 'text-gray-600'}
            >
              Pricing
            </Button>

            {/* User Menu or Login */}
            {isAuthenticated && user ? (
              <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-300">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50">
                  <img 
                    src={user.picture} 
                    alt={user.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-900">{user.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-gray-600"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/');
                }}
                className={`justify-start ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={handleFeatureScroll}
                className="justify-start text-gray-600 hover:text-blue-600"
              >
                Features
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/pricing');
                }}
                className={`justify-start ${location.pathname === '/pricing' ? 'text-blue-600' : 'text-gray-600'}`}
              >
                Pricing
              </Button>

              {/* Mobile User Menu */}
              {isAuthenticated && user && (
                <>
                  <div className="flex items-center gap-2 px-3 py-2 mt-2 border-t border-gray-200">
                    <img 
                      src={user.picture} 
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="justify-start text-red-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
