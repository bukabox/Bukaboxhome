import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { GoogleLoginModal } from '../auth/GoogleLoginModal';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';

export function PricingHero() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user } = useAuth();
  const isAuthenticated = !!user;

  const handleSubscribeClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      // Scroll to pricing cards
      document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDashboardClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      window.location.href = '/member';
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 md:py-28">
      {/* Decorative elements - same as homepage */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            <span className="text-sm font-medium">Simple, Transparent Pricing</span>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Pilih Plan yang Tepat
            </span>
            <br />
            <span className="text-slate-900">untuk Kebutuhan Anda</span>
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Dari basic ROI tracking hingga complete wealth management dengan tax automation. 
            Semua plan include instant activation setelah pembayaran.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={handleSubscribeClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Lihat Semua Plan
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDashboardClick}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl shadow-md transition-all duration-300"
            >
              Try Dashboard
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
              <div className="text-2xl md:text-3xl text-blue-600 mb-1">500+</div>
              <div className="text-xs md:text-sm text-slate-600">Active Users</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-purple-100">
              <div className="text-2xl md:text-3xl text-purple-600 mb-1">Rp 50M+</div>
              <div className="text-xs md:text-sm text-slate-600">Assets Tracked</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
              <div className="text-2xl md:text-3xl text-blue-600 mb-1">99%</div>
              <div className="text-xs md:text-sm text-slate-600">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Login Modal */}
      <GoogleLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </section>
  );
}
