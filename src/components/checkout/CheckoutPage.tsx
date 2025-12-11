import { motion } from 'motion/react';
import { Shield, CreditCard, Check, ArrowLeft, Lock, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { GoogleLoginModal } from '../auth/GoogleLoginModal';

interface CheckoutPageProps {
  onNavigate?: (page: 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund') => void;
  selectedPlan?: string;
}

// Plan data
const planDetails = {
  starter: {
    name: 'Starter',
    price: '59.000',
    features: [
      '1 active workspace',
      '100 monthly transactions',
      'Basic automation',
      'Access to Tax Engine Lite',
      'Email support',
    ],
  },
  pro: {
    name: 'Pro',
    price: '119.000',
    features: [
      'Unlimited workspace',
      'Unlimited transactions',
      'Advanced automation',
      'Full Tax Engine features',
      'API Integration',
      'Priority support',
    ],
  },
  studio: {
    name: 'Studio',
    price: '249.000',
    features: [
      'Everything in Pro',
      'Team collaboration (up to 10 seats)',
      'Shared automation templates',
      'Role permissions',
      'Admin dashboard',
    ],
  },
};

export function CheckoutPage({ onNavigate, selectedPlan = 'pro' }: CheckoutPageProps) {
  const { isAuthenticated, user } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'ewallet' | 'bank_transfer'>('credit_card');
  const [isProcessing, setIsProcessing] = useState(false);

  const plan = planDetails[selectedPlan as keyof typeof planDetails] || planDetails.pro;
  const priceNumber = parseInt(plan.price.replace('.', ''));
  const tax = Math.round(priceNumber * 0.11); // 11% PPN
  const total = priceNumber + tax;

  const handlePayment = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment simulation completed! In production, this would redirect to Xendit payment gateway.');
    }, 2000);
  };

  // If not logged in, show login prompt
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="mb-4 text-3xl">Login Required</h2>
            <p className="text-gray-600 mb-8">
              Please login to your account to continue with the checkout process.
            </p>
            <Button
              onClick={() => setShowLoginModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
            >
              Login to Continue
            </Button>
            <div className="mt-6">
              <button
                onClick={() => onNavigate?.('pricing')}
                className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2 mx-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Pricing
              </button>
            </div>
          </motion.div>
        </div>
        <GoogleLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => onNavigate?.('pricing')}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Pricing
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4 text-5xl md:text-6xl tracking-tight font-black">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
              Complete Your Subscription
            </span>
          </h1>
          <p className="text-xl text-slate-600">
            You're one step away from accessing BUKABOX {plan.name}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="mb-6 text-2xl">Order Summary</h2>
              
              {/* Plan Details */}
              <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{plan.name} Plan</h3>
                    <p className="text-sm text-gray-600">Monthly subscription</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Rp</div>
                    <div className="text-xl font-bold text-gray-900">{plan.price}</div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="pt-3 border-t border-blue-200">
                  <p className="text-xs text-gray-500 mb-2">Included:</p>
                  <ul className="space-y-1">
                    {plan.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.features.length > 3 && (
                      <li className="text-xs text-blue-600 pl-5">
                        +{plan.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>Rp {plan.price}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (PPN 11%)</span>
                  <span>Rp {tax.toLocaleString('id-ID')}</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-gray-900 text-xl">
                      Rp {total.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Billed monthly</p>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secured by SSL encryption</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Payment Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* User Info */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h2 className="mb-4 text-2xl">Account Information</h2>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <img 
                    src={user?.picture} 
                    alt={user?.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{user?.name}</div>
                    <div className="text-sm text-gray-600">{user?.email}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl">Payment Method</h2>
                <div className="space-y-3">
                  {/* Credit Card */}
                  <button
                    onClick={() => setPaymentMethod('credit_card')}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'credit_card'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'credit_card' ? 'border-blue-600' : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'credit_card' && (
                          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        )}
                      </div>
                      <CreditCard className="w-5 h-5 text-gray-700" />
                      <span className="font-medium text-gray-900">Credit/Debit Card</span>
                      <div className="ml-auto flex gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                      </div>
                    </div>
                  </button>

                  {/* E-Wallet */}
                  <button
                    onClick={() => setPaymentMethod('ewallet')}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'ewallet'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'ewallet' ? 'border-blue-600' : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'ewallet' && (
                          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        )}
                      </div>
                      <span className="font-medium text-gray-900">E-Wallet</span>
                      <span className="text-sm text-gray-500">(OVO, GoPay, DANA)</span>
                    </div>
                  </button>

                  {/* Bank Transfer */}
                  <button
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'bank_transfer'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'bank_transfer' ? 'border-blue-600' : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'bank_transfer' && (
                          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        )}
                      </div>
                      <span className="font-medium text-gray-900">Bank Transfer</span>
                      <span className="text-sm text-gray-500">(BCA, Mandiri, BNI, BRI)</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Secure Payment via Xendit</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Your payment will be processed securely through Xendit payment gateway. 
                      We never store your payment information. After clicking "Proceed to Payment", 
                      you will be redirected to complete the payment securely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded" defaultChecked />
                  <span className="text-sm text-gray-700">
                    I agree to the{' '}
                    <button onClick={() => onNavigate?.('terms')} className="text-blue-600 hover:underline">
                      Terms of Service
                    </button>
                    {' '}and{' '}
                    <button onClick={() => onNavigate?.('privacy')} className="text-blue-600 hover:underline">
                      Privacy Policy
                    </button>
                  </span>
                </label>
              </div>

              {/* Payment Button */}
              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  <>
                    Proceed to Payment - Rp {total.toLocaleString('id-ID')}
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                You will be redirected to Xendit secure payment page
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>PCI DSS Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Login Modal */}
      <GoogleLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  );
}
