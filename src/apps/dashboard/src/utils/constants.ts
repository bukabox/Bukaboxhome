/**
 * Application Constants
 */

export const APP_NAME = 'BUKABOX';
export const APP_DESCRIPTION = 'Financial Management Platform';

export const ROUTES = {
  // Public
  HOME: '/',
  PRICING: '/pricing',
  CONTACT: '/contact',
  CHECKOUT: '/checkout',
  
  // Legal
  TERMS: '/legal/terms',
  PRIVACY: '/legal/privacy',
  REFUND: '/legal/refund',
  
  // Features
  FEATURE_NETWORTH: '/features/networth',
  FEATURE_ROI: '/features/roi',
  FEATURE_TAX: '/features/tax',
  
  // Auth
  LOGIN: '/login',
  REGISTER: '/register',
  RESET_PASSWORD: '/reset-password',
  
  // Member
  MEMBER: '/member',
  MEMBER_SUBSCRIPTION: '/member/subscription',
  MEMBER_SETTINGS: '/member/settings',
  
  // Networth
  NETWORTH: '/networth',
  NETWORTH_ASSETS: '/networth/assets',
  NETWORTH_LIABILITIES: '/networth/liabilities',
  NETWORTH_REPORTS: '/networth/reports',
  
  // ROI
  ROI_PROJECTS: '/roi/projects',
  ROI_PROJECT: '/roi/project',
} as const;

export const SUBSCRIPTION_TIERS = {
  FREE: 'free',
  STARTER: 'starter',
  PRO: 'pro',
  ENTERPRISE: 'enterprise',
} as const;

export const SERVICES = {
  NETWORTH: 'networth',
  ROI: 'roi',
  TAX: 'tax',
} as const;

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

export const STORAGE_KEYS = {
  USER: 'bukabox_user',
  SUBSCRIPTION: 'bukabox_subscription',
  ROI_PROJECTS: (email: string) => `bukabox_roi_projects_${email}`,
  ROI_ACTIVE_PROJECT: (email: string) => `bukabox_roi_active_project_${email}`,
} as const;
