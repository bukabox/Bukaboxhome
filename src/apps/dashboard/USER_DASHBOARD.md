# User Dashboard - BUKABOX

## Overview

User Dashboard adalah area member yang dilindungi autentikasi, di mana user yang sudah login dapat mengelola akun mereka, melihat subscription status, mengakses services, dan mengatur preferensi.

## Struktur File

```
/apps/dashboard/src/
├── pages/member/
│   ├── index.tsx           # Main Dashboard - Overview & Quick Actions
│   ├── subscription.tsx    # Subscription Management & Billing
│   └── settings.tsx        # Account Settings & Preferences
├── components/
│   ├── layout/
│   │   └── DashboardLayout.tsx  # Layout wrapper dengan sidebar navigation
│   └── ui/
│       ├── stat-card.tsx        # Component untuk menampilkan statistik
│       └── service-card.tsx     # Component untuk menampilkan service cards
└── app/
    ├── AuthProvider.tsx          # Context untuk authentication
    ├── SubscriptionProvider.tsx  # Context untuk subscription management
    └── ServiceGuard.tsx          # Guard component untuk protect routes
```

## Halaman-Halaman

### 1. Member Dashboard (`/member`)
**File:** `/apps/dashboard/src/pages/member/index.tsx`

**Fitur:**
- Welcome message dengan user name
- Stats grid menampilkan:
  - Current subscription tier
  - Active services count
  - Days remaining (jika ada expiration)
  - Member since date
- Service cards untuk 3 services:
  - BUKABOX Networth System
  - M4 ROI Tracker
  - Tax Engine & Automation
- Quick actions untuk:
  - Manage Subscription
  - Account Settings
  - Explore Plans
  - Contact Support
- Upsell banner (untuk Free/Starter tier)

**Protected by:** `AuthGuard` - Hanya membutuhkan authentication

### 2. Subscription Management (`/member/subscription`)
**File:** `/apps/dashboard/src/pages/member/subscription.tsx`

**Fitur:**
- Current plan overview dengan:
  - Plan tier
  - Status (active/inactive/trial/expired)
  - Next billing date
- Available plans comparison:
  - Free, Starter, Pro, Enterprise tiers
  - Feature comparison untuk setiap tier
  - Upgrade/Downgrade buttons
  - Current plan indicator
- Billing history table (untuk paid plans)
- Cancel subscription functionality dengan confirmation dialog

**Protected by:** `AuthGuard`

### 3. Account Settings (`/member/settings`)
**File:** `/apps/dashboard/src/pages/member/settings.tsx`

**Fitur:**
- Tab navigation untuk 4 sections:
  
  **Profile Tab:**
  - Profile picture upload
  - Edit name & email
  - Save/Cancel functionality
  
  **Security Tab:**
  - Change password form
  - Two-Factor Authentication (2FA) toggle
  
  **Notifications Tab:**
  - Email notifications toggle
  - Subscription reminders toggle
  - Product updates toggle
  - Marketing emails toggle
  
  **Danger Zone Tab:**
  - Delete account functionality dengan confirmation

**Protected by:** `AuthGuard`

## Komponen Pendukung

### DashboardLayout
**File:** `/apps/dashboard/src/components/layout/DashboardLayout.tsx`

Layout wrapper yang menyediakan:
- Sticky header dengan logo & user info
- Sidebar navigation (desktop)
- Mobile menu dengan slide-out sidebar
- Consistent spacing & styling
- Logout functionality

**Navigation items:**
- Dashboard (`/member`)
- Subscription (`/member/subscription`)
- Settings (`/member/settings`)

### StatCard
**File:** `/apps/dashboard/src/components/ui/stat-card.tsx`

Component untuk menampilkan statistik dengan:
- Title
- Value (string/number)
- Icon
- Optional trend indicator
- Optional description
- Color variants: blue, green, purple, orange

### ServiceCard
**File:** `/apps/dashboard/src/components/ui/service-card.tsx`

Component untuk menampilkan service information dengan:
- Service icon
- Active/Locked status badge
- Description
- Action buttons:
  - "Buka Dashboard" (jika active)
  - "Upgrade Now" (jika locked)
  - "Learn More" (optional)
- Color variants: blue, green, purple, orange

## Authentication & Authorization

### AuthProvider
**Context:** `useAuth()`

Provides:
- `user`: User object (email, name, picture)
- `isAuthenticated`: Boolean
- `login(user)`: Login with user data
- `loginWithGoogle(credentialResponse)`: Google OAuth login
- `logout()`: Logout dan clear session

### SubscriptionProvider
**Context:** `useSubscription()`

Provides:
- `subscription`: Subscription object
  - `tier`: 'free' | 'starter' | 'pro' | 'enterprise'
  - `status`: 'active' | 'inactive' | 'trial' | 'expired'
  - `expiresAt`: Date (optional)
  - `services`: { networth, roi, tax }
- `hasAccess(service)`: Check akses ke service tertentu
- `updateSubscription(subscription)`: Update subscription data

### Guards

**AuthGuard:**
- Protects routes yang membutuhkan authentication
- Redirect ke `/login` jika belum authenticated

**ServiceGuard:**
- Protects routes yang membutuhkan subscription tertentu
- Check authentication first, redirect ke `/login` jika belum authenticated
- Check service access, redirect ke `/pricing` jika tidak punya akses

## User Flow

### New User
1. Register → Login
2. Default: Free tier dengan semua services locked
3. Lihat dashboard dengan 0 active services
4. Upgrade melalui pricing page atau subscription page
5. Access services yang sudah disubscribe

### Existing User
1. Login via Google OAuth atau Email/Password
2. Load subscription data dari localStorage/API
3. Dashboard menampilkan stats & active services
4. Dapat mengakses:
   - Active services via service cards
   - Subscription management
   - Account settings
   - Upgrade/downgrade plan

### Subscription Management
1. View current plan & billing info
2. Compare available plans
3. Upgrade/Downgrade dengan payment flow
4. View billing history
5. Cancel subscription dengan confirmation

### Settings Management
1. Update profile information
2. Change password atau enable 2FA
3. Configure notification preferences
4. Delete account (danger zone)

## Integration Points

### Frontend State Management
- `localStorage`: Persist user & subscription data
- React Context: Global state management
- Local state: Form inputs & UI interactions

### Backend API (To be implemented)
User Dashboard akan memanggil API untuk:
- `/api/auth/login` - Authentication
- `/api/auth/logout` - Logout
- `/api/users/profile` - Get/Update user profile
- `/api/subscriptions/current` - Get subscription info
- `/api/subscriptions/upgrade` - Upgrade plan
- `/api/subscriptions/cancel` - Cancel subscription
- `/api/billing/history` - Get billing history
- `/api/settings/notifications` - Update notification preferences

### Payment Integration
- Xendit payment gateway untuk subscription payment
- Payment flow akan handle di checkout page
- Redirect ke dashboard setelah payment success

## Routing

```tsx
// Member Routes - Protected with AuthGuard
<Route path="/member" element={<AuthGuard><MemberDashboard /></AuthGuard>} />
<Route path="/member/subscription" element={<AuthGuard><MemberSubscription /></AuthGuard>} />
<Route path="/member/settings" element={<AuthGuard><MemberSettings /></AuthGuard>} />

// Service Routes - Protected with ServiceGuard
<Route path="/networth/*" element={<ServiceGuard service="networth">...</ServiceGuard>} />
<Route path="/roi/*" element={<ServiceGuard service="roi">...</ServiceGuard>} />
```

## Mock Data

Currently using mock data untuk development:
- Default subscription: Free tier dengan semua services locked
- Billing history: 2 sample invoices
- Member since: Dec 2024
- User data: Dari Google OAuth atau localStorage

## Next Steps

### Backend Implementation Required:
1. ✅ User authentication endpoints
2. ✅ Subscription CRUD endpoints
3. ✅ Payment gateway integration (Xendit)
4. ✅ Billing history tracking
5. ✅ Notification system
6. ✅ Profile management endpoints

### Features to Add:
- [ ] Activity log/Recent activity
- [ ] Usage statistics per service
- [ ] Invoice download (PDF)
- [ ] Payment method management
- [ ] Subscription renewal reminders
- [ ] Email notifications
- [ ] Team/Multi-user support (Enterprise)
- [ ] API key management

### UI Enhancements:
- [ ] Loading states untuk API calls
- [ ] Error handling & user feedback
- [ ] Success/Error toast notifications
- [ ] Form validation messages
- [ ] Skeleton loaders
- [ ] Empty states
- [ ] Confirmation dialogs consistency

## Styling & Branding

### Color Scheme:
- Primary: Blue gradient (`from-blue-600 to-blue-400`)
- Success: Green (`green-600`)
- Warning: Orange (`orange-600`)
- Danger: Red (`red-600`)
- Background: White dengan blue gradient (`from-blue-50 via-white to-blue-50`)

### Typography:
- Headings: Bold, gradient text untuk BUKABOX branding
- Body: Gray scale untuk readability
- Stats: Large, bold numbers

### Components:
- Rounded corners: `rounded-lg`, `rounded-xl`
- Shadows: `hover:shadow-lg` untuk interactive elements
- Borders: `border-gray-200`
- Transitions: Smooth hover effects

## Responsive Design

### Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Optimizations:
- Collapsible sidebar → Mobile menu
- Stack service cards vertically
- Full-width forms
- Touch-friendly buttons (min 44px height)
- Swipeable dialogs

## Accessibility

### Implemented:
- Semantic HTML
- ARIA labels untuk icons
- Keyboard navigation support
- Focus states untuk interactive elements
- Alt text untuk images

### To Improve:
- [ ] Screen reader testing
- [ ] Color contrast validation
- [ ] Keyboard shortcuts
- [ ] Skip navigation links
- [ ] ARIA live regions untuk notifications

---

**Last Updated:** December 2024  
**Status:** ✅ Fully Implemented & Ready for Backend Integration
