import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, User, Box } from 'lucide-react';
import { Button } from '../ui/button';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface GoogleLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GoogleLoginModal({ isOpen, onClose }: GoogleLoginModalProps) {
  const { signInWithGoogle } = useAuth();
  const [showCustomLogin, setShowCustomLogin] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      await signInWithGoogle(credentialResponse.credential);
      onClose();
    } catch (error) {
      console.error('Google Login Failed:', error);
      alert('Google login gagal. Silakan coba lagi.');
    }
  };

  const handleGoogleError = () => {
    console.error('Google Login Failed');
    alert('Google login gagal. Silakan coba lagi.');
  };

  const handleCustomLogin = () => {
    if (!customEmail || !customName) {
      alert('Please enter both name and email');
      return;
    }

    // Generate avatar from name initials
    const picture = `https://ui-avatars.com/api/?name=${encodeURIComponent(customName)}&background=3b82f6&color=fff&size=128`;

    // For demo purposes - in production this would go through proper auth flow
    // This is just for testing without real Google OAuth
    console.log('Custom login:', { email: customEmail, name: customName, picture });
    
    setShowCustomLogin(false);
    setCustomEmail('');
    setCustomName('');
    onClose();
  };

  const handleQuickLogin = async (type: 'demo' | 'john') => {
    // For demo purposes - in production this would go through proper auth flow
    const users = {
      demo: {
        email: 'demo@bukabox.co.id',
        name: 'Demo User',
        picture: 'https://ui-avatars.com/api/?name=Demo+User&background=3b82f6&color=fff&size=128',
      },
      john: {
        email: 'john@example.com',
        name: 'John Doe',
        picture: 'https://ui-avatars.com/api/?name=John+Doe&background=059669&color=fff&size=128',
      },
    };

    console.log('Quick login:', users[type]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Logo & Title */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Box className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to BUKABOX</h2>
              <p className="text-gray-600">Sign in to continue to your account</p>
            </div>

            {!showCustomLogin ? (
              <>
                {/* Real Google Login Button */}
                <div className="mb-6 flex justify-center">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                    useOneTap={false}
                    theme="outline"
                    size="large"
                    text="continue_with"
                    shape="rectangular"
                    context="signin"
                    ux_mode="popup"
                    auto_select={false}
                  />
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or quick demo login</span>
                  </div>
                </div>

                {/* Quick Demo Login Buttons */}
                <div className="space-y-3 mb-6">
                  <Button
                    onClick={() => handleQuickLogin('demo')}
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-2 hover:border-blue-600 hover:bg-blue-50 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                      DU
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-gray-900">Demo User</div>
                      <div className="text-xs text-gray-500">demo@bukabox.co.id</div>
                    </div>
                  </Button>

                  <Button
                    onClick={() => handleQuickLogin('john')}
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-2 hover:border-green-600 hover:bg-green-50 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-semibold">
                      JD
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-gray-900">John Doe</div>
                      <div className="text-xs text-gray-500">john@example.com</div>
                    </div>
                  </Button>
                </div>

                {/* Custom Email Option */}
                <div className="text-center">
                  <button
                    onClick={() => setShowCustomLogin(true)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Or sign in with custom email
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Custom Login Form */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={customEmail}
                        onChange={(e) => setCustomEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleCustomLogin}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
                  >
                    Continue
                  </Button>

                  <button
                    onClick={() => {
                      setShowCustomLogin(false);
                      setCustomEmail('');
                      setCustomName('');
                    }}
                    className="w-full text-sm text-gray-600 hover:text-gray-900"
                  >
                    Back to login options
                  </button>
                </div>
              </>
            )}

            {/* Footer */}
            <div className="text-center text-xs text-gray-500 mt-6">
              By continuing, you agree to BUKABOX's{' '}
              <a href="/legal/terms" className="text-blue-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="/legal/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
