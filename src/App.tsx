import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MemberDashboard from './pages/MemberDashboard';
import Dashboard from './pages/Dashboard';
import DashboardOverview from './pages/DashboardOverview';
import ProjectsPage from './pages/ProjectsPage';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import PricingPage from './PricingPage';
import ContactPage from './ContactPage';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { TermsOfService } from './components/legal/TermsOfService';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { RefundPolicy } from './components/legal/RefundPolicy';
import { NetworthSystemPage } from './components/features/NetworthSystemPage';
import { ROITrackerPage } from './components/features/ROITrackerPage';
import { TaxAutomationPage } from './components/features/TaxAutomationPage';
import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Box, Menu, X, User, LogOut } from 'lucide-react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund' | 'features' | 'networth' | 'roi-tracker' | 'tax-automation';

const GOOGLE_CLIENT_ID = '259632371100-lcvi0bedl024rjgl3t2s1q77oaglb9qu.apps.googleusercontent.com';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on contact page (router-based)
  const isContactPage = location.pathname === '/contact';
  const isPricingPage = location.pathname === '/pricing';
  const isMemberPage = location.pathname.startsWith('/member') || 
                       location.pathname.startsWith('/login') || 
                       location.pathname.startsWith('/register') ||
                       location.pathname.startsWith('/dashboard');

  // Show navbar after splash screen (3 seconds) or immediately if not on home page
  useEffect(() => {
    if (currentPage !== 'home' || isContactPage || isPricingPage) {
      setShowNavbar(true);
    } else {
      const timer = setTimeout(() => {
        setShowNavbar(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentPage, isContactPage, isPricingPage]);

  // Scroll to top when changing pages
  const handlePageChange = (page: PageType, planId?: string) => {
    // If we're on contact or pricing page (router-based), navigate back to home first
    if (isContactPage || isPricingPage) {
      navigate('/');
    }
    setCurrentPage(page);
    setSelectedPlan(planId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Contact navigation
  const handleContactClick = () => {
    setMobileMenuOpen(false);
    navigate('/contact');
  };

  // Handle Pricing navigation
  const handlePricingClick = () => {
    setMobileMenuOpen(false);
    navigate('/pricing');
  };

  return (
    <>
      {currentPage === 'home' && <SplashScreen />}
      
      {/* Navigation Bar - Hidden on member pages */}
      {showNavbar && !isMemberPage && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <button 
                onClick={() => handlePageChange('home')}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Box className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-gray-900">BUKABOX</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="ghost"
                  onClick={() => handlePageChange('home')}
                  className={currentPage === 'home' ? 'text-blue-600' : 'text-gray-600'}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    if (currentPage === 'home') {
                      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      handlePageChange('home');
                      setTimeout(() => {
                        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Features
                </Button>
                <Button
                  variant="ghost"
                  onClick={handlePricingClick}
                  className={isPricingPage ? 'text-blue-600' : 'text-gray-600'}
                >
                  Pricing
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleContactClick}
                  className={`justify-start ${isContactPage ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  Contact
                </Button>

                {/* User Menu or Login */}
                {isAuthenticated && user ? (
                  <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-300">
                    <Button
                      variant="ghost"
                      onClick={() => navigate('/dashboard')}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      Dashboard
                    </Button>
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
                ) : (
                  <div className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-300">
                    <Button
                      variant="ghost"
                      onClick={() => navigate('/login')}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => navigate('/register')}
                      className="bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-lg"
                    >
                      Get Started
                    </Button>
                  </div>
                )}
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
                    onClick={() => handlePageChange('home')}
                    className={`justify-start ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
                  >
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      if (currentPage === 'home') {
                        setMobileMenuOpen(false);
                        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        handlePageChange('home');
                        setTimeout(() => {
                          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="justify-start text-gray-600 hover:text-blue-600"
                  >
                    Features
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handlePricingClick}
                    className={`justify-start ${isPricingPage ? 'text-blue-600' : 'text-gray-600'}`}
                  >
                    Pricing
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleContactClick}
                    className={`justify-start ${isContactPage ? 'text-blue-600' : 'text-gray-600'}`}
                  >
                    Contact
                  </Button>

                  {/* Mobile User Menu */}
                  {isAuthenticated && user ? (
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
                          setMobileMenuOpen(false);
                          navigate('/dashboard');
                        }}
                        className="justify-start text-gray-600"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={logout}
                        className="justify-start text-red-600"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-gray-200">
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigate('/login');
                        }}
                        className="justify-start text-gray-600"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigate('/register');
                        }}
                        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                      >
                        Get Started
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Page Content with padding for fixed navbar */}
      <div className={showNavbar && !isMemberPage ? "pt-16" : ""}>
        <Routes>
          <Route path="/contact" element={<ContactPage onNavigate={handlePageChange} />} />
          <Route path="/pricing" element={<PricingPage onNavigate={handlePageChange} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/member" element={<MemberDashboard />} />
          
          {/* Dashboard Routes with Nested Structure */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="networth" element={<div className="p-6 bg-white rounded-xl">Networth Tracker (Coming Soon)</div>} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="roi" element={<div className="p-6 bg-white rounded-xl">ROI Calculator (Coming Soon)</div>} />
            <Route path="tax" element={<div className="p-6 bg-white rounded-xl">Tax Automation (Coming Soon)</div>} />
            <Route path="settings" element={<div className="p-6 bg-white rounded-xl">Settings (Coming Soon)</div>} />
          </Route>

          <Route path="*" element={
            <>
              {currentPage === 'home' && (
                <div className="min-h-screen bg-white">
                  <Hero onNavigate={handlePageChange} />
                  <Features onNavigate={handlePageChange} />
                  <CTA onNavigate={handlePageChange} />
                  <Footer onNavigate={handlePageChange} />
                </div>
              )}

              {currentPage === 'pricing' && <PricingPage onNavigate={handlePageChange} />}
              {currentPage === 'checkout' && <CheckoutPage onNavigate={handlePageChange} selectedPlan={selectedPlan} />}
              {currentPage === 'terms' && <TermsOfService onNavigate={handlePageChange} />}
              {currentPage === 'privacy' && <PrivacyPolicy onNavigate={handlePageChange} />}
              {currentPage === 'refund' && <RefundPolicy onNavigate={handlePageChange} />}
              {currentPage === 'networth' && <NetworthSystemPage onNavigate={handlePageChange} />}
              {currentPage === 'roi-tracker' && <ROITrackerPage onNavigate={handlePageChange} />}
              {currentPage === 'tax-automation' && <TaxAutomationPage onNavigate={handlePageChange} />}
            </>
          } />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}