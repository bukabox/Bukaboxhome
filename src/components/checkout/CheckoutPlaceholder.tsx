import { motion } from 'motion/react';
import { Shield, LogIn, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface CheckoutPlaceholderProps {
  onNavigate?: (page: 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund') => void;
}

export function CheckoutPlaceholder({ onNavigate }: CheckoutPlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4 text-5xl md:text-6xl tracking-tight font-black">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
              Checkout – BUKABOX Subscription
            </span>
          </h1>
          <p className="text-xl text-slate-600">
            This page demonstrates how users proceed with subscription payment.
          </p>
        </motion.div>

        {/* Information Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12 border border-blue-100"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="mb-4 text-3xl">How Checkout Works</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                BUKABOX uses a secure internal billing system. Subscriptions are paid only after the user logs in to their dashboard.
                <br /><br />
                This placeholder page is shown publicly to meet verification requirements from Xendit and other payment gateways.
                <br /><br />
                <strong>Real payments do not occur on this page.</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ready to Continue Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="mb-6 text-3xl">Ready to continue?</h2>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Login to Dashboard
          </Button>
          <p className="text-sm text-gray-600">
            You will complete subscription payment after logging in.
          </p>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-2">1. Select Plan</h3>
            <p className="text-gray-600 text-sm">Choose your subscription tier on the Pricing page</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-2">2. Login</h3>
            <p className="text-gray-600 text-sm">Access your secure dashboard</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-2">3. Pay Securely</h3>
            <p className="text-gray-600 text-sm">Complete payment through encrypted gateway</p>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            {onNavigate && (
              <>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => onNavigate('terms')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Terms
                </button>
                <button 
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Privacy
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
