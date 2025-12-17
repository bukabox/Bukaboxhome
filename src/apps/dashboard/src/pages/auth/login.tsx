/**
 * Login Page
 * User authentication dengan Google OAuth atau Quick Test Login
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/app/AuthProvider';
import { GoogleLogin } from '@react-oauth/google';
import { LogIn, Zap, Chrome } from 'lucide-react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithGoogle, login } = useAuth();
  const navigate = useNavigate();

  // Handle Google OAuth success
  const handleGoogleSuccess = (credentialResponse: any) => {
    loginWithGoogle(credentialResponse);
    navigate('/member');
  };

  // Quick Test Login (untuk development/testing)
  const handleQuickLogin = (tier: 'free' | 'starter' | 'pro' | 'enterprise') => {
    setIsLoading(true);
    
    // Mock user data
    const mockUser = {
      email: 'demo@bukabox.com',
      name: 'Demo User',
      picture: 'https://ui-avatars.com/api/?name=Demo+User&background=2563EB&color=fff&size=128',
      id: 'demo-user-' + tier,
    };

    // Mock subscription based on tier
    const mockSubscription = {
      free: {
        tier: 'free' as const,
        status: 'active' as const,
        services: { networth: false, roi: false, tax: false },
      },
      starter: {
        tier: 'starter' as const,
        status: 'active' as const,
        services: { networth: true, roi: false, tax: false },
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      },
      pro: {
        tier: 'pro' as const,
        status: 'active' as const,
        services: { networth: true, roi: true, tax: true },
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      },
      enterprise: {
        tier: 'enterprise' as const,
        status: 'active' as const,
        services: { networth: true, roi: true, tax: true },
      },
    };

    // Login user
    login(mockUser);
    
    // Set subscription
    localStorage.setItem('bukabox_subscription', JSON.stringify(mockSubscription[tier]));

    setTimeout(() => {
      setIsLoading(false);
      navigate('/member');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
              BUKABOX
            </h1>
          </Link>
          <p className="text-gray-600">
            Masuk ke akun Anda untuk mengakses dashboard
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {/* Google Login */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Chrome className="w-4 h-4" />
              Login dengan Google
            </h3>
            <div className="flex justify-center p-4 bg-gray-50 rounded-lg">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => console.log('Login Failed')}
                theme="outline"
                size="large"
                text="continue_with"
                locale="id"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">
                ATAU
              </span>
            </div>
          </div>

          {/* Quick Test Login */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-500" />
              Quick Test Login (Development)
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Login cepat untuk testing tanpa Google OAuth. Pilih tier subscription:
            </p>

            <div className="space-y-2">
              {/* Free Tier */}
              <button
                onClick={() => handleQuickLogin('free')}
                disabled={isLoading}
                className="w-full p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                      Free Tier
                    </p>
                    <p className="text-xs text-gray-500">
                      Tidak ada akses service (semua locked)
                    </p>
                  </div>
                  <LogIn className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </div>
              </button>

              {/* Starter Tier */}
              <button
                onClick={() => handleQuickLogin('starter')}
                disabled={isLoading}
                className="w-full p-4 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                      Starter Tier
                    </p>
                    <p className="text-xs text-gray-500">
                      Akses: Networth ✅ | ROI ❌ | Tax ❌
                    </p>
                  </div>
                  <LogIn className="w-5 h-5 text-blue-400 group-hover:text-blue-600" />
                </div>
              </button>

              {/* Pro Tier */}
              <button
                onClick={() => handleQuickLogin('pro')}
                disabled={isLoading}
                className="w-full p-4 rounded-lg border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-green-600 flex items-center gap-2">
                      Pro Tier
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">
                      Akses: Networth ✅ | ROI ✅ | Tax ✅
                    </p>
                  </div>
                  <LogIn className="w-5 h-5 text-green-400 group-hover:text-green-600" />
                </div>
              </button>

              {/* Enterprise Tier */}
              <button
                onClick={() => handleQuickLogin('enterprise')}
                disabled={isLoading}
                className="w-full p-4 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                      Enterprise Tier
                    </p>
                    <p className="text-xs text-gray-500">
                      Akses: All services + Priority support
                    </p>
                  </div>
                  <LogIn className="w-5 h-5 text-purple-400 group-hover:text-purple-600" />
                </div>
              </button>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-blue-600 font-medium">
                Logging in... Redirecting to dashboard
              </p>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Belum punya akun?{' '}
            <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Daftar sekarang
            </Link>
          </p>
          <p className="text-xs text-gray-500">
            <Link to="/" className="hover:text-gray-700">
              ← Kembali ke Homepage
            </Link>
          </p>
        </div>

        {/* Dev Note */}
        <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-xs text-orange-800">
            <strong>💡 Development Mode:</strong> Quick Test Login tersedia untuk memudahkan testing. 
            Di production, hanya Google OAuth yang akan aktif.
          </p>
        </div>
      </div>
    </div>
  );
}
