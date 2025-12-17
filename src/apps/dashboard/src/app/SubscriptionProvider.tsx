import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';

type PlanTier = 'free' | 'starter' | 'pro' | 'enterprise';

interface Subscription {
  tier: PlanTier;
  status: 'active' | 'inactive' | 'trial' | 'expired';
  expiresAt?: Date;
  services: {
    networth: boolean;
    roi: boolean;
    tax: boolean;
  };
}

interface SubscriptionContextType {
  subscription: Subscription | null;
  hasAccess: (service: 'networth' | 'roi' | 'tax') => boolean;
  updateSubscription: (subscription: Subscription) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  // Load subscription from localStorage or fetch from API
  useEffect(() => {
    if (isAuthenticated) {
      const savedSubscription = localStorage.getItem('bukabox_subscription');
      if (savedSubscription) {
        setSubscription(JSON.parse(savedSubscription));
      } else {
        // Default free tier for new users
        const defaultSubscription: Subscription = {
          tier: 'free',
          status: 'active',
          services: {
            networth: false,
            roi: false,
            tax: false,
          },
        };
        setSubscription(defaultSubscription);
        localStorage.setItem('bukabox_subscription', JSON.stringify(defaultSubscription));
      }
    } else {
      setSubscription(null);
    }
  }, [isAuthenticated]);

  const hasAccess = (service: 'networth' | 'roi' | 'tax'): boolean => {
    if (!subscription || subscription.status !== 'active') return false;
    return subscription.services[service];
  };

  const updateSubscription = (newSubscription: Subscription) => {
    setSubscription(newSubscription);
    localStorage.setItem('bukabox_subscription', JSON.stringify(newSubscription));
  };

  return (
    <SubscriptionContext.Provider value={{ subscription, hasAccess, updateSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
}
