/**
 * Login Page - Quick Test Login
 * Halaman login dengan Quick Test untuk akses member dashboard
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Check, Zap, Star, Building2, ArrowLeft } from 'lucide-react';

type TierType = 'free' | 'starter' | 'pro' | 'enterprise';

interface TierConfig {
  id: TierType;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  features: string[];
  recommended?: boolean;
}

const tiers: TierConfig[] = [
  {
    id: 'free',
    name: 'Free Tier',
    icon: <Zap className="w-6 h-6" />,
    color: 'text-gray-700',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    features: ['Basic access', 'Limited features', 'Community support']
  },
  {
    id: 'starter',
    name: 'Starter Tier',
    icon: <Star className="w-6 h-6" />,
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    features: ['All Free features', 'Advanced tools', 'Email support']
  },
  {
    id: 'pro',
    name: 'Pro Tier',
    icon: <Check className="w-6 h-6" />,
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-400',
    features: ['All Starter features', 'Premium tools', 'Priority support', 'Analytics'],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Tier',
    icon: <Building2 className="w-6 h-6" />,
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-400',
    features: ['All Pro features', 'Unlimited access', 'Dedicated support', 'Custom solutions']
  }
];

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<TierType | null>(null);

  const handleQuickLogin = async (tier: TierType) => {
    setIsLoading(tier);

    // Simulate quick login with tier-based mock user
    const mockUsers = {
      free: {
        email: 'free@bukabox.com',
        name: 'Free User',
        picture: 'https://ui-avatars.com/api/?name=Free+User&background=6b7280&color=fff',
        subscription: 'free'
      },
      starter: {
        email: 'starter@bukabox.com',
        name: 'Starter User',
        picture: 'https://ui-avatars.com/api/?name=Starter+User&background=3b82f6&color=fff',
        subscription: 'starter'
      },
      pro: {
        email: 'pro@bukabox.com',
        name: 'Pro User',
        picture: 'https://ui-avatars.com/api/?name=Pro+User&background=10b981&color=fff',
        subscription: 'pro'
      },
      enterprise: {
        email: 'enterprise@bukabox.com',
        name: 'Enterprise User',
        picture: 'https://ui-avatars.com/api/?name=Enterprise+User&background=8b5cf6&color=fff',
        subscription: 'enterprise'
      }
    };

    // Delay untuk loading effect
    await new Promise(resolve => setTimeout(resolve, 300));

    login(mockUsers[tier]);
    
    // Redirect to member dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quick Test Login
          </h1>
          <p className="text-lg text-gray-600">
            Pilih tier untuk langsung akses Member Dashboard
          </p>
          <p className="text-sm text-gray-500 mt-2">
            (Demo mode - No real authentication required)
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative border-2 ${tier.borderColor} ${tier.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer`}
              onClick={() => handleQuickLogin(tier.id)}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                    Recommended
                  </span>
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`${tier.color}`}>
                  {tier.icon}
                </div>
                <h3 className={`text-xl font-bold ${tier.color}`}>
                  {tier.name}
                </h3>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Login Button */}
              <Button
                className={`w-full ${
                  tier.recommended
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                    : 'bg-gray-900 hover:bg-gray-800'
                } text-white`}
                disabled={isLoading !== null}
              >
                {isLoading === tier.id ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Logging in...</span>
                  </div>
                ) : (
                  'Quick Test Login'
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Ini adalah Quick Test Login untuk demo purposes.
          </p>
          <p className="text-sm text-gray-500">
            Untuk real authentication, gunakan{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Google OAuth Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}