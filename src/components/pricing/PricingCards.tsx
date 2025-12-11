import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { GoogleLoginModal } from '../auth/GoogleLoginModal';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '59.000',
    description: 'For individuals who want basic financial tracking and project automation.',
    features: [
      '1 active workspace',
      '100 monthly transactions',
      'Basic automation',
      'Access to Tax Engine Lite',
      'Email support',
    ],
    popular: false,
    buttonText: 'Choose Starter',
  },
  {
    name: 'Pro',
    price: '119.000',
    description: 'Best for creators and small businesses who need full automation and financial tools.',
    features: [
      'Unlimited workspace',
      'Unlimited transactions',
      'Advanced automation',
      'Full Tax Engine features',
      'API Integration',
      'Priority support',
    ],
    popular: true,
    buttonText: 'Choose Pro',
  },
  {
    name: 'Studio',
    price: '249.000',
    description: 'For teams and agencies that require collaboration features.',
    features: [
      'Everything in Pro',
      'Team collaboration (up to 10 seats)',
      'Shared automation templates',
      'Role permissions',
      'Admin dashboard',
    ],
    popular: false,
    buttonText: 'Choose Studio',
  },
];

export function PricingCards() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useAuth();

  const handlePlanSelect = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      // In production, this would redirect to checkout
      alert('Redirecting to secure checkout...');
    }
  };

  return (
    <section id="pricing-cards" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full flex flex-col p-8 ${
                  tier.popular
                    ? 'border-2 border-blue-600 shadow-xl'
                    : 'border border-gray-200 shadow-md'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="mb-2">{tier.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-gray-600">Rp</span>
                    <span className="mx-1">{tier.price}</span>
                    <span className="text-gray-600">/ bulan</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handlePlanSelect}
                  className={
                    tier.popular
                      ? 'w-full bg-blue-600 hover:bg-blue-700 text-white'
                      : 'w-full bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600'
                  }
                >
                  {tier.buttonText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Google Login Modal */}
      <GoogleLoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </section>
  );
}