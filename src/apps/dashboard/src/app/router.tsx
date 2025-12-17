import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './AuthProvider';
import { SubscriptionProvider } from './SubscriptionProvider';
import { ActiveProjectProvider } from './ActiveProjectProvider';
import { ServiceGuard, AuthGuard } from './ServiceGuard';

// Lazy load pages for better performance
import { lazy, Suspense } from 'react';

// Public pages (Marketing Site)
const LandingPage = lazy(() => import('@/pages/landing'));
const PricingPage = lazy(() => import('@/pages/pricing'));
const ContactPage = lazy(() => import('@/pages/contact'));

// Legal pages
const TermsPage = lazy(() => import('@/pages/legal/terms'));
const PrivacyPage = lazy(() => import('@/pages/legal/privacy'));
const RefundPage = lazy(() => import('@/pages/legal/refund'));

// Feature detail pages
const NetworthFeaturePage = lazy(() => import('@/pages/features/networth'));
const ROIFeaturePage = lazy(() => import('@/pages/features/roi'));
const TaxFeaturePage = lazy(() => import('@/pages/features/tax'));

// Checkout
const CheckoutPage = lazy(() => import('@/pages/checkout'));

// Auth pages
const LoginPage = lazy(() => import('@/pages/auth/login'));
const RegisterPage = lazy(() => import('@/pages/auth/register'));
const ResetPasswordPage = lazy(() => import('@/pages/auth/reset-password'));

// Member pages (Account Management) - Protected with AuthGuard
const MemberDashboard = lazy(() => import('@/pages/member'));
const MemberSubscription = lazy(() => import('@/pages/member/subscription'));
const MemberSettings = lazy(() => import('@/pages/member/settings'));

// Networth pages (Account-Level Service) - Protected with ServiceGuard
const NetworthDashboard = lazy(() => import('@/pages/networth'));
const NetworthAssets = lazy(() => import('@/pages/networth/assets'));
const NetworthLiabilities = lazy(() => import('@/pages/networth/liabilities'));
const NetworthReports = lazy(() => import('@/pages/networth/reports'));

// ROI pages (Project-Level Service) - Protected with ServiceGuard + ActiveProjectProvider
const ROIProjects = lazy(() => import('@/pages/roi/projects'));
const ROIProjectDashboard = lazy(() => import('@/pages/roi/project/[projectId]'));
const ROIProjectCashflow = lazy(() => import('@/pages/roi/project/[projectId]/cashflow'));
const ROIProjectAssets = lazy(() => import('@/pages/roi/project/[projectId]/assets'));
const ROIProjectDepreciation = lazy(() => import('@/pages/roi/project/[projectId]/depreciation'));
const ROIProjectReports = lazy(() => import('@/pages/roi/project/[projectId]/reports'));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '259632371100-lcvi0bedl024rjgl3t2s1q77oaglb9qu.apps.googleusercontent.com';

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <SubscriptionProvider>
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />

                {/* Legal Routes */}
                <Route path="/legal/terms" element={<TermsPage />} />
                <Route path="/legal/privacy" element={<PrivacyPage />} />
                <Route path="/legal/refund" element={<RefundPage />} />

                {/* Feature Detail Routes */}
                <Route path="/features/networth" element={<NetworthFeaturePage />} />
                <Route path="/features/roi" element={<ROIFeaturePage />} />
                <Route path="/features/tax" element={<TaxFeaturePage />} />

                {/* Auth Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />

                {/* Member Routes - Requires Auth Only */}
                <Route path="/member" element={
                  <AuthGuard>
                    <MemberDashboard />
                  </AuthGuard>
                } />
                <Route path="/member/subscription" element={
                  <AuthGuard>
                    <MemberSubscription />
                  </AuthGuard>
                } />
                <Route path="/member/settings" element={
                  <AuthGuard>
                    <MemberSettings />
                  </AuthGuard>
                } />

                {/* Networth Routes - Account-Level Service */}
                <Route path="/networth" element={
                  <ServiceGuard service="networth">
                    <NetworthDashboard />
                  </ServiceGuard>
                } />
                <Route path="/networth/assets" element={
                  <ServiceGuard service="networth">
                    <NetworthAssets />
                  </ServiceGuard>
                } />
                <Route path="/networth/liabilities" element={
                  <ServiceGuard service="networth">
                    <NetworthLiabilities />
                  </ServiceGuard>
                } />
                <Route path="/networth/reports" element={
                  <ServiceGuard service="networth">
                    <NetworthReports />
                  </ServiceGuard>
                } />

                {/* ROI Routes - Project-Level Service */}
                <Route path="/roi/*" element={
                  <ServiceGuard service="roi">
                    <ActiveProjectProvider>
                      <Routes>
                        <Route path="projects" element={<ROIProjects />} />
                        <Route path="project/:projectId" element={<ROIProjectDashboard />} />
                        <Route path="project/:projectId/cashflow" element={<ROIProjectCashflow />} />
                        <Route path="project/:projectId/assets" element={<ROIProjectAssets />} />
                        <Route path="project/:projectId/depreciation" element={<ROIProjectDepreciation />} />
                        <Route path="project/:projectId/reports" element={<ROIProjectReports />} />
                      </Routes>
                    </ActiveProjectProvider>
                  </ServiceGuard>
                } />

                {/* 404 */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-gray-600">Halaman tidak ditemukan</p>
                      <a href="/" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
                        Kembali ke Homepage
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SubscriptionProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
