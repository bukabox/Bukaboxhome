/**
 * Member Dashboard Page
 * Main dashboard for logged-in users showing overview, active services, and quick actions
 */

import { useAuth } from '@/app/AuthProvider';
import { useSubscription } from '@/app/SubscriptionProvider';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/stat-card';
import { ServiceCard } from '@/components/ui/service-card';
import { 
  TrendingUp, 
  Activity, 
  Calendar,
  PieChart,
  LineChart,
  FileText,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MemberDashboard() {
  const { user } = useAuth();
  const { subscription, hasAccess } = useSubscription();

  // Get active services count
  const activeServicesCount = subscription 
    ? Object.values(subscription.services).filter(Boolean).length 
    : 0;

  // Get subscription tier display name
  const tierNames = {
    free: 'Free',
    starter: 'Starter',
    pro: 'Pro',
    enterprise: 'Enterprise',
  };

  const currentTier = subscription ? tierNames[subscription.tier] : 'Free';

  // Calculate days until expiration (if applicable)
  const daysUntilExpiration = subscription?.expiresAt 
    ? Math.ceil((new Date(subscription.expiresAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.name?.split(' ')[0] || 'User'}! 👋
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your BUKABOX account today.
              </p>
            </div>
            
            <Link 
              to="/pricing"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Upgrade Plan
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Current Plan"
            value={currentTier}
            icon={TrendingUp}
            description="Your subscription tier"
            color="blue"
          />
          
          <StatCard
            title="Active Services"
            value={activeServicesCount}
            icon={Activity}
            description={`${3 - activeServicesCount} more available`}
            color="green"
          />
          
          {daysUntilExpiration && daysUntilExpiration > 0 ? (
            <StatCard
              title="Days Remaining"
              value={daysUntilExpiration}
              icon={Calendar}
              description="Until subscription expires"
              color="orange"
            />
          ) : (
            <StatCard
              title="Status"
              value={subscription?.status === 'active' ? 'Active' : 'Inactive'}
              icon={Calendar}
              description="Account status"
              color={subscription?.status === 'active' ? 'green' : 'orange'}
            />
          )}
          
          <StatCard
            title="Member Since"
            value="Dec 2024"
            icon={Activity}
            description="Account creation date"
            color="purple"
          />
        </div>

        {/* Services Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Your Services</h2>
              <p className="text-gray-600">Manage and access your active services</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="BUKABOX Networth System"
              description="Track your assets and liabilities to monitor your financial health over time."
              icon={PieChart}
              isActive={hasAccess('networth')}
              dashboardUrl="/networth"
              learnMoreUrl="/features/networth"
              color="blue"
            />

            <ServiceCard
              title="M4 ROI Tracker"
              description="Calculate and monitor ROI for your projects with detailed cash flow analysis."
              icon={LineChart}
              isActive={hasAccess('roi')}
              dashboardUrl="/roi/projects"
              learnMoreUrl="/features/roi"
              color="green"
            />

            <ServiceCard
              title="Tax Engine & Automation"
              description="Automate tax calculations and compliance with intelligent tax management."
              icon={FileText}
              isActive={hasAccess('tax')}
              learnMoreUrl="/features/tax"
              color="purple"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              to="/member/subscription"
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manage Subscription</p>
                  <p className="text-sm text-gray-500">View and update your plan</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
            </Link>

            <Link 
              to="/member/settings"
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Account Settings</p>
                  <p className="text-sm text-gray-500">Update your profile</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
            </Link>

            <Link 
              to="/pricing"
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Explore Plans</p>
                  <p className="text-sm text-gray-500">Upgrade or change plan</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
            </Link>

            <a 
              href="mailto:support@bukabox.com"
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Contact Support</p>
                  <p className="text-sm text-gray-500">Get help from our team</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Upsell Banner - Only show if not on Pro or Enterprise */}
        {subscription && (subscription.tier === 'free' || subscription.tier === 'starter') && (
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-8 text-white">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Unlock More Features</h3>
                <p className="text-blue-100">
                  Upgrade to Pro or Enterprise to access all BUKABOX services and unlock your full potential.
                </p>
              </div>
              <Link 
                to="/pricing"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                View Plans
              </Link>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
