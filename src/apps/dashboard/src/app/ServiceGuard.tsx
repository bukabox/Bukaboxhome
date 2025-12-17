import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useSubscription } from './SubscriptionProvider';

interface ServiceGuardProps {
  service: 'networth' | 'roi' | 'tax';
  children: ReactNode;
  fallbackPath?: string;
}

/**
 * ServiceGuard
 * 
 * Guard component untuk melindungi routes yang membutuhkan subscription tertentu.
 * 
 * Usage:
 * <Route path="/networth" element={
 *   <ServiceGuard service="networth">
 *     <NetworthDashboard />
 *   </ServiceGuard>
 * } />
 */
export function ServiceGuard({ service, children, fallbackPath = '/pricing' }: ServiceGuardProps) {
  const { isAuthenticated } = useAuth();
  const { hasAccess } = useSubscription();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to pricing if no access to service
  if (!hasAccess(service)) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
}

/**
 * AuthGuard
 * 
 * Simple guard untuk route yang hanya membutuhkan authentication (tidak perlu subscription).
 * 
 * Usage:
 * <Route path="/member" element={
 *   <AuthGuard>
 *     <MemberDashboard />
 *   </AuthGuard>
 * } />
 */
export function AuthGuard({ children, fallbackPath = '/login' }: { children: ReactNode; fallbackPath?: string }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
}
