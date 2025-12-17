/**
 * Member Subscription Page
 * Manage subscription, view billing history, and upgrade/downgrade plans
 */

import { useSubscription } from '@/app/SubscriptionProvider';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  Check, 
  X, 
  CreditCard, 
  Calendar,
  AlertCircle,
  Download,
  ExternalLink,
  Shield,
  Zap,
  Users,
  Crown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MemberSubscription() {
  const { subscription, updateSubscription } = useSubscription();
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  // Subscription tiers configuration
  const tiers = [
    {
      id: 'free',
      name: 'Free',
      price: 'Rp 0',
      period: '/month',
      icon: Shield,
      features: [
        { name: 'Basic account access', included: true },
        { name: 'BUKABOX Networth System', included: false },
        { name: 'M4 ROI Tracker', included: false },
        { name: 'Tax Engine & Automation', included: false },
        { name: 'Priority support', included: false },
      ],
      services: { networth: false, roi: false, tax: false },
    },
    {
      id: 'starter',
      name: 'Starter',
      price: 'Rp 99,000',
      period: '/month',
      icon: Zap,
      popular: true,
      features: [
        { name: 'All Free features', included: true },
        { name: 'BUKABOX Networth System', included: true },
        { name: 'M4 ROI Tracker', included: false },
        { name: 'Tax Engine & Automation', included: false },
        { name: 'Email support', included: true },
      ],
      services: { networth: true, roi: false, tax: false },
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 'Rp 199,000',
      period: '/month',
      icon: Crown,
      features: [
        { name: 'All Starter features', included: true },
        { name: 'BUKABOX Networth System', included: true },
        { name: 'M4 ROI Tracker', included: true },
        { name: 'Tax Engine & Automation', included: true },
        { name: 'Priority support', included: true },
      ],
      services: { networth: true, roi: true, tax: true },
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      icon: Users,
      features: [
        { name: 'All Pro features', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'SLA guarantee', included: true },
        { name: '24/7 phone support', included: true },
      ],
      services: { networth: true, roi: true, tax: true },
    },
  ];

  const currentTier = subscription?.tier || 'free';
  const currentPlan = tiers.find(t => t.id === currentTier);

  // Mock billing history
  const billingHistory = [
    {
      id: '1',
      date: '2024-12-01',
      plan: 'Starter Plan',
      amount: 'Rp 99,000',
      status: 'paid',
      invoice: '#INV-001',
    },
    {
      id: '2',
      date: '2024-11-01',
      plan: 'Starter Plan',
      amount: 'Rp 99,000',
      status: 'paid',
      invoice: '#INV-002',
    },
  ];

  const handleUpgrade = (tierId: string) => {
    const tier = tiers.find(t => t.id === tierId);
    if (!tier) return;

    // In production, this would redirect to payment gateway
    alert(`Redirecting to payment for ${tier.name} plan...`);
    
    // For demo, update subscription directly
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);

    updateSubscription({
      tier: tierId as any,
      status: 'active',
      expiresAt,
      services: tier.services,
    });
  };

  const handleCancelSubscription = () => {
    if (confirm('Are you sure you want to cancel your subscription?')) {
      updateSubscription({
        tier: 'free',
        status: 'active',
        services: { networth: false, roi: false, tax: false },
      });
      setShowCancelDialog(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscription Management</h1>
          <p className="text-gray-600">Manage your BUKABOX subscription and billing</p>
        </div>

        {/* Current Plan Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Current Plan</h2>
              <p className="text-gray-600">You are currently on the {currentPlan?.name} plan</p>
            </div>
            
            {subscription?.status === 'active' && currentTier !== 'free' && (
              <button
                onClick={() => setShowCancelDialog(true)}
                className="px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
              >
                Cancel Subscription
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <CreditCard className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Plan</p>
                <p className="font-semibold text-gray-900">{currentPlan?.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-semibold text-gray-900 capitalize">{subscription?.status || 'Inactive'}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Next Billing</p>
                <p className="font-semibold text-gray-900">
                  {subscription?.expiresAt 
                    ? new Date(subscription.expiresAt).toLocaleDateString('id-ID')
                    : 'N/A'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Available Plans */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              const isCurrent = tier.id === currentTier;
              
              return (
                <div 
                  key={tier.id}
                  className={`
                    bg-white rounded-xl border-2 p-6 relative
                    ${isCurrent ? 'border-blue-500 shadow-lg' : 'border-gray-200'}
                    ${tier.popular ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
                  `}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {isCurrent && (
                    <div className="absolute -top-3 right-4">
                      <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Current Plan
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                      <span className="text-gray-600">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {!isCurrent && tier.id !== 'enterprise' && (
                    <button
                      onClick={() => handleUpgrade(tier.id)}
                      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      {tier.id === 'free' ? 'Downgrade' : 'Upgrade'}
                    </button>
                  )}

                  {tier.id === 'enterprise' && (
                    <a
                      href="mailto:sales@bukabox.com"
                      className="block w-full px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors text-center"
                    >
                      Contact Sales
                    </a>
                  )}

                  {isCurrent && (
                    <button
                      disabled
                      className="w-full px-4 py-2 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed"
                    >
                      Current Plan
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Billing History */}
        {currentTier !== 'free' && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Billing History</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Plan</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {billingHistory.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {new Date(item.date).toLocaleDateString('id-ID')}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">{item.plan}</td>
                      <td className="py-3 px-4 text-sm text-gray-900 font-semibold">{item.amount}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                          <Download className="w-4 h-4" />
                          {item.invoice}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Cancel Dialog */}
        {showCancelDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cancel Subscription?</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel your subscription? You will lose access to all premium features.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCancelDialog(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  Keep Subscription
                </button>
                <button
                  onClick={handleCancelSubscription}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
