import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import PricingPage from './PricingPage';
import { CheckoutPlaceholder } from './components/checkout/CheckoutPlaceholder';
import { TermsOfService } from './components/legal/TermsOfService';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { RefundPolicy } from './components/legal/RefundPolicy';
import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Box, Menu, X } from 'lucide-react';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Show navbar after splash screen (3 seconds) or immediately if not on home page
  useEffect(() => {
    if (currentPage !== 'home') {
      setShowNavbar(true);
    } else {
      const timer = setTimeout(() => {
        setShowNavbar(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  // Scroll to top when changing pages
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {currentPage === 'home' && <SplashScreen />}
      
      {/* Navigation Bar */}
      {showNavbar && (
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
                  onClick={() => handlePageChange('pricing')}
                  className={currentPage === 'pricing' ? 'text-blue-600' : 'text-gray-600'}
                >
                  Pricing
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handlePageChange('checkout')}
                  className={currentPage === 'checkout' ? 'text-blue-600' : 'text-gray-600'}
                >
                  Checkout
                </Button>
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
                    onClick={() => handlePageChange('pricing')}
                    className={`justify-start ${currentPage === 'pricing' ? 'text-blue-600' : 'text-gray-600'}`}
                  >
                    Pricing
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => handlePageChange('checkout')}
                    className={`justify-start ${currentPage === 'checkout' ? 'text-blue-600' : 'text-gray-600'}`}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Page Content with padding for fixed navbar */}
      <div className={showNavbar ? "pt-16" : ""}>
        {currentPage === 'home' && (
          <div className="min-h-screen bg-white">
            <Hero />
            <Features />
            <CTA />
            <Footer onNavigate={handlePageChange} />
          </div>
        )}

        {currentPage === 'pricing' && <PricingPage onNavigate={handlePageChange} />}
        {currentPage === 'checkout' && <CheckoutPlaceholder onNavigate={handlePageChange} />}
        {currentPage === 'terms' && <TermsOfService onNavigate={handlePageChange} />}
        {currentPage === 'privacy' && <PrivacyPolicy onNavigate={handlePageChange} />}
        {currentPage === 'refund' && <RefundPolicy onNavigate={handlePageChange} />}
      </div>
    </>
  );
}