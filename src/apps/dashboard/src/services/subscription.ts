/**
 * Subscription Service
 * 
 * Handle all subscription-related API calls.
 */

import { api } from './api';

export interface Subscription {
  id: string;
  userId: string;
  tier: 'free' | 'starter' | 'pro' | 'enterprise';
  status: 'active' | 'inactive' | 'trial' | 'expired';
  expiresAt?: string;
  services: {
    networth: boolean;
    roi: boolean;
    tax: boolean;
  };
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  tier: string;
  price: number;
  interval: 'monthly' | 'yearly';
  features: string[];
}

export const subscriptionService = {
  /**
   * Get current user subscription
   */
  async getCurrentSubscription(): Promise<Subscription> {
    return api.get<Subscription>('/subscriptions/current');
  },

  /**
   * Get all available plans
   */
  async getPlans(): Promise<SubscriptionPlan[]> {
    return api.get<SubscriptionPlan[]>('/subscriptions/plans');
  },

  /**
   * Create checkout session (Xendit)
   */
  async createCheckoutSession(planId: string): Promise<{ checkoutUrl: string }> {
    return api.post('/subscriptions/checkout', { planId });
  },

  /**
   * Cancel subscription
   */
  async cancelSubscription(): Promise<{ message: string }> {
    return api.post('/subscriptions/cancel');
  },

  /**
   * Resume subscription
   */
  async resumeSubscription(): Promise<{ message: string }> {
    return api.post('/subscriptions/resume');
  },

  /**
   * Get subscription history
   */
  async getSubscriptionHistory(): Promise<any[]> {
    return api.get('/subscriptions/history');
  },
};
