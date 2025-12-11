import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../../contexts/AuthContext';

interface GoogleLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GoogleLoginModal({ isOpen, onClose }: GoogleLoginModalProps) {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleGoogleLogin = () => {
    // Mock Google login - in real app this would trigger OAuth flow
    if (email) {
      const name = email.split('@')[0];
      const mockPicture = `https://ui-avatars.com/api/?name=${name}&background=3B82F6&color=fff`;
      login(email, name, mockPicture);
      onClose();
      setEmail('');
    }
  };

  const handleQuickLogin = (demoEmail: string, demoName: string) => {
    const mockPicture = `https://ui-avatars.com/api/?name=${demoName}&background=3B82F6&color=fff`;
    login(demoEmail, demoName, mockPicture);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <h2 className="text-2xl text-gray-900 mb-2">Sign in to BUKABOX</h2>
                <p className="text-gray-600">Continue with your Google account</p>
              </div>

              {/* Demo Login Buttons */}
              <div className="space-y-3 mb-6">
                <p className="text-sm text-gray-500 text-center mb-2">Quick Demo Login:</p>
                <button
                  onClick={() => handleQuickLogin('demo@bukabox.co.id', 'Demo User')}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                    D
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Demo User</div>
                    <div className="text-sm text-gray-500">demo@bukabox.co.id</div>
                  </div>
                </button>

                <button
                  onClick={() => handleQuickLogin('john@example.com', 'John Doe')}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm">
                    J
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-500">john@example.com</div>
                  </div>
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or enter custom email</span>
                </div>
              </div>

              {/* Custom Email Input */}
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGoogleLogin()}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />

                <button
                  onClick={handleGoogleLogin}
                  disabled={!email}
                  className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Continue with Google
                </button>
              </div>

              {/* Footer note */}
              <p className="text-xs text-gray-500 text-center mt-6">
                This is a demo login. In production, this would use real Google OAuth.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
