import { motion } from 'motion/react';
import { Check, X, PiggyBank, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { GoogleLoginModal } from '../auth/GoogleLoginModal';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

const pricingTiers = [
  {
    id: 'basic',
    name: 'Basic',
    price: '49.000',
    description: 'Mulai journey keuangan Anda dengan tools essential untuk tracking ROI',
    icon: TrendingUp,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    features: [
      { name: 'M4 ROI Tracker - Basic', included: true },
      { name: 'Manual data entry', included: true },
      { name: 'Basic ROI calculation', included: true },
      { name: '5 investment portfolios', included: true },
      { name: 'Monthly reports', included: true },
      { name: 'Email support', included: true },
      { name: 'BUKABOX Networth System', included: false },
      { name: 'Tax Engine & Automation', included: false },
    ],
    popular: false,
    buttonText: 'Mulai Basic',
    gradient: 'from-blue-50 to-slate-50',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '149.000',
    description: 'Unlock semua features untuk manajemen keuangan dan investasi yang comprehensive',
    icon: PiggyBank,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    features: [
      { name: 'M4 ROI Tracker - Pro', included: true },
      { name: 'Auto-sync data integration', included: true },
      { name: 'Advanced analytics & insights', included: true },
      { name: 'Unlimited portfolios', included: true },
      { name: 'Real-time alerts', included: true },
      { name: 'BUKABOX Networth System', included: true },
      { name: 'Multi-asset tracking', included: true },
      { name: 'Priority support 24/7', included: true },
      { name: 'Tax Engine & Automation', included: false },
    ],
    popular: true,
    buttonText: 'Pilih Pro',
    gradient: 'from-purple-50 to-blue-50',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '349.000',
    description: 'Solusi complete dengan tax automation untuk bisnis dan high-net-worth individuals',
    icon: Sparkles,
    iconBg: 'bg-gradient-to-br from-blue-600 to-purple-600',
    iconColor: 'text-white',
    features: [
      { name: 'Everything in Pro', included: true },
      { name: 'Tax Engine & Automation', included: true },
      { name: 'Automatic tax calculation', included: true },
      { name: 'Workflow automation', included: true },
      { name: 'API integrations', included: true },
      { name: 'Custom reporting', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'White-label option', included: true },
    ],
    popular: false,
    buttonText: 'Hubungi Sales',
    gradient: 'from-slate-50 to-blue-50',
  },
];

interface PricingCardsProps {
  onNavigate?: (page: 'home' | 'pricing' | 'checkout', planId?: string) => void;
}

export function PricingCards({ onNavigate }: PricingCardsProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useAuth();

  const handlePlanSelect = (planId: string) => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      // Navigate to checkout with selected plan
      if (onNavigate) {
        onNavigate('checkout', planId);
      }
    }
  };

  return (
    <section id="pricing-cards" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-slate-900">
            Semua Plan Include
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dashboard yang powerful, support professional, dan akses ke semua updates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card
                  className={`relative h-full flex flex-col overflow-hidden ${
                    tier.popular
                      ? 'border-2 border-purple-600 shadow-2xl scale-105'
                      : 'border border-slate-200 shadow-lg'
                  }`}
                >
                  {tier.popular && (
                    <>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-1.5 shadow-lg">
                          Most Popular
                        </Badge>
                      </div>
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600`}></div>
                    </>
                  )}
                  
                  {/* Header with gradient background */}
                  <div className={`bg-gradient-to-br ${tier.gradient} p-8 pb-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${tier.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className={`w-6 h-6 ${tier.iconColor}`} />
                      </div>
                      <h3 className="text-2xl text-slate-900">{tier.name}</h3>
                    </div>
                    
                    <div className="flex items-baseline mb-3">
                      <span className="text-slate-600 text-sm mr-1">Rp</span>
                      <span className="text-4xl text-slate-900">{tier.price}</span>
                      <span className="text-slate-600 text-sm ml-2">/ bulan</span>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="p-8 pt-6 flex-grow bg-white">
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3">
                          {feature.included ? (
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3.5 w-3.5 text-green-600" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <X className="h-3.5 w-3.5 text-slate-400" />
                            </div>
                          )}
                          <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handlePlanSelect(tier.id)}
                      className={
                        tier.popular
                          ? 'w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg'
                          : 'w-full bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-600'
                      }
                    >
                      {tier.buttonText}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Semua plan termasuk 14 hari money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Instant activation</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Login Modal */}
      <GoogleLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </section>
  );
}