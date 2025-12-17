# 📍 Panduan URL - BUKABOX Pages

## 🚀 Cara Menjalankan Development Server

```bash
# 1. Masuk ke folder dashboard
cd apps/dashboard

# 2. Install dependencies (jika belum)
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka browser di:
http://localhost:5173
```

---

## 📋 Daftar Semua Halaman & URL

### 🏠 PUBLIC PAGES (Tidak Perlu Login)

| Halaman | URL | File Location | Deskripsi |
|---------|-----|---------------|-----------|
| **Homepage** | `/` | `src/pages/landing/index.tsx` | Landing page dengan hero, features, CTA |
| **Pricing** | `/pricing` | `src/pages/pricing/index.tsx` | Pricing tiers & comparison |
| **Contact** | `/contact` | `src/pages/contact/index.tsx` | Contact form |
| **Checkout** | `/checkout` | `src/pages/checkout/index.tsx` | Checkout flow (placeholder) |

#### Legal Pages
| Halaman | URL | File Location |
|---------|-----|---------------|
| Terms of Service | `/legal/terms` | `src/pages/legal/terms/index.tsx` |
| Privacy Policy | `/legal/privacy` | `src/pages/legal/privacy/index.tsx` |
| Refund Policy | `/legal/refund` | `src/pages/legal/refund/index.tsx` |

#### Feature Detail Pages
| Halaman | URL | File Location |
|---------|-----|---------------|
| Networth Feature | `/features/networth` | `src/pages/features/networth/index.tsx` |
| ROI Tracker Feature | `/features/roi` | `src/pages/features/roi-tracker/index.tsx` |
| Tax Engine Feature | `/features/tax` | `src/pages/features/tax-automation/index.tsx` |

---

### 🔐 AUTH PAGES (Authentication)

| Halaman | URL | File Location | Deskripsi |
|---------|-----|---------------|-----------|
| **Login** | `/login` | `src/pages/auth/login.tsx` | Login dengan Google OAuth |
| **Register** | `/register` | `src/pages/auth/register.tsx` | Registration page |
| **Reset Password** | `/reset-password` | `src/pages/auth/reset-password.tsx` | Password reset |

**Cara Login:**
1. Buka `/login`
2. Klik "Login with Google"
3. Pilih akun Google
4. Akan redirect ke `/member`

---

### 👤 MEMBER PAGES (Perlu Login - Protected by AuthGuard)

| Halaman | URL | File Location | Deskripsi |
|---------|-----|---------------|-----------|
| **Dashboard** | `/member` | `src/pages/member/index.tsx` | Master dashboard overview |
| **Subscription** | `/member/subscription` | `src/pages/member/subscription.tsx` | Manage subscription & billing |
| **Settings** | `/member/settings` | `src/pages/member/settings.tsx` | Account settings (4 tabs) |

**Access Flow:**
```
Login Required → AuthGuard checks → Render page
```

**Dashboard Features:**
- Stats grid (Plan, Services, Days, Member Since)
- Service cards (Networth, ROI, Tax)
- Quick actions (Subscription, Settings, Support)

**Subscription Page:**
- Current plan display
- Tier comparison table
- Upgrade/downgrade buttons
- Billing history

**Settings Page:**
- **Profile Tab:** Name, email, photo
- **Security Tab:** Password, 2FA
- **Notifications Tab:** Email, push preferences
- **Danger Zone:** Delete account

---

### 💰 NETWORTH PAGES (Perlu Subscription - Account-Level Service)

| Halaman | URL | File Location | Status |
|---------|-----|---------------|--------|
| **Dashboard** | `/networth` | `src/pages/networth/index.tsx` | ✅ Structure ready |
| **Assets** | `/networth/assets` | `src/pages/networth/assets.tsx` | ⏳ Placeholder |
| **Liabilities** | `/networth/liabilities` | `src/pages/networth/liabilities.tsx` | ⏳ Placeholder |
| **Reports** | `/networth/reports` | `src/pages/networth/reports.tsx` | ⏳ Placeholder |

**Access Flow:**
```
Login Required → ServiceGuard checks subscription → 
Has 'networth' access? → Yes: Render / No: Redirect to /pricing
```

**Required Plans:** Starter, Pro, Enterprise

**Planned Features:**
- Total assets & liabilities tracking
- Net worth calculation
- Asset breakdown by type
- Historical trends

---

### 📊 ROI TRACKER PAGES (Perlu Subscription - Project-Level Service)

#### Project List
| Halaman | URL | File Location | Status |
|---------|-----|---------------|--------|
| **Projects** | `/roi/projects` | `src/pages/roi/projects.tsx` | ✅ Implemented |

#### Project Detail (Per Project)
| Halaman | URL Pattern | File Location | Status |
|---------|-------------|---------------|--------|
| **Dashboard** | `/roi/project/:projectId` | `src/pages/roi/project/[projectId]/index.tsx` | ✅ Implemented |
| **Cash Flow** | `/roi/project/:projectId/cashflow` | `src/pages/roi/project/[projectId]/cashflow.tsx` | ✅ Implemented |
| **Assets** | `/roi/project/:projectId/assets` | `src/pages/roi/project/[projectId]/assets.tsx` | ✅ Implemented |
| **Depreciation** | `/roi/project/:projectId/depreciation` | `src/pages/roi/project/[projectId]/depreciation.tsx` | ✅ Implemented |
| **Reports** | `/roi/project/:projectId/reports` | `src/pages/roi/project/[projectId]/reports.tsx` | ✅ Implemented |

**Access Flow:**
```
Login Required → ServiceGuard checks subscription → 
Has 'roi' access? → ActiveProjectProvider loads project →
User owns project? → Yes: Render / No: 404
```

**Required Plans:** Pro, Enterprise

**Example URLs:**
```
/roi/projects
/roi/project/abc123
/roi/project/abc123/cashflow
/roi/project/abc123/assets
/roi/project/abc123/depreciation
/roi/project/abc123/reports
```

**Features:**
- Project list dengan create/edit/delete
- Cash flow tracking (inflow/outflow)
- Asset management dengan depreciation
- ROI calculation & reports
- IRR & payback period

---

## 🎨 Component Locations

### Layout Components
```
src/components/layout/
├── Navbar.tsx              → Navbar untuk authenticated users
├── Footer.tsx              → Footer global
└── DashboardLayout.tsx     → Sidebar layout untuk /member area
```

### Landing Components
```
src/components/landing/
├── Navbar.tsx              → Navbar untuk public pages
├── Hero.tsx                → Hero section
├── Features.tsx            → Features showcase
├── CTA.tsx                 → Call to action
└── SplashScreen.tsx        → Loading screen
```

### UI Components
```
src/components/ui/
├── button.tsx              → Button component
├── card.tsx                → Card component
├── badge.tsx               → Badge component
├── stat-card.tsx           → Stats display card
└── service-card.tsx        → Service feature card
```

---

## 🔍 Quick Access Guide

### 1. Untuk Melihat Landing Pages
```bash
# Start dev server
npm run dev

# Buka browser:
http://localhost:5173              # Homepage
http://localhost:5173/pricing      # Pricing
http://localhost:5173/contact      # Contact
http://localhost:5173/features/roi # ROI feature detail
```

### 2. Untuk Melihat Member Dashboard
```bash
# 1. Login dulu
http://localhost:5173/login

# 2. Setelah login, akses:
http://localhost:5173/member              # Dashboard
http://localhost:5173/member/subscription # Subscription
http://localhost:5173/member/settings     # Settings
```

### 3. Untuk Melihat Service Pages (ROI)
```bash
# Pastikan sudah login dan punya subscription Pro/Enterprise

# ROI Pages:
http://localhost:5173/roi/projects                    # Project list
http://localhost:5173/roi/project/demo-project        # Project detail
http://localhost:5173/roi/project/demo-project/cashflow
```

### 4. Untuk Melihat Networth Pages
```bash
# Pastikan sudah login dan punya subscription Starter/Pro/Enterprise

http://localhost:5173/networth                # Dashboard
http://localhost:5173/networth/assets         # Assets
http://localhost:5173/networth/liabilities    # Liabilities
```

---

## 🛠️ Testing Access Control

### Test Scenario 1: Public Access (No Login)
```
✅ Can access: /, /pricing, /contact, /features/*
❌ Cannot access: /member, /networth, /roi
→ Will redirect to /login
```

### Test Scenario 2: Logged In (Free Plan)
```
✅ Can access: /member, /member/subscription, /member/settings
❌ Cannot access: /networth, /roi
→ Will redirect to /pricing with message
```

### Test Scenario 3: Logged In (Starter Plan)
```
✅ Can access: /member, /networth
❌ Cannot access: /roi
→ Will redirect to /pricing for ROI
```

### Test Scenario 4: Logged In (Pro Plan)
```
✅ Can access: All pages
```

---

## 🧭 Navigation Flow

```
Homepage (/)
├── Click "Pricing" → /pricing
├── Click "Contact" → /contact
├── Click "Features" dropdown
│   ├── Networth System → /features/networth
│   ├── ROI Tracker → /features/roi
│   └── Tax Engine → /features/tax
├── Click "Login" → /login
│   └── After login → /member
│
Member Dashboard (/member)
├── Sidebar Navigation
│   ├── Dashboard → /member
│   ├── Subscription → /member/subscription
│   └── Settings → /member/settings
│
├── Service Cards
│   ├── Click "Open Networth" → /networth
│   └── Click "Open ROI" → /roi/projects
│
└── Quick Actions
    ├── Manage Subscription → /member/subscription
    ├── Account Settings → /member/settings
    └── View Pricing → /pricing
```

---

## 📱 Responsive Testing

### Desktop (1280px+)
```bash
# Semua fitur visible
# Sidebar expanded
# Full width content
```

### Tablet (768px - 1279px)
```bash
# Sidebar collapsible
# Touch-friendly buttons
# Responsive grid
```

### Mobile (< 768px)
```bash
# Hamburger menu
# Stacked layout
# Mobile-optimized forms
```

---

## 🔧 Development Tips

### Hot Module Replacement (HMR)
Vite mendukung HMR, jadi setiap perubahan code akan langsung terlihat tanpa refresh.

### Browser DevTools
```bash
# Inspect network calls
# Check console for errors
# View state in React DevTools
```

### Clear Cache
```bash
# Jika ada masalah, clear localStorage
localStorage.clear()

# Atau clear browser cache
Ctrl + Shift + Delete
```

---

## 📊 File Structure Mapping

```
URL Pattern              →  File Location
=====================================
/                        →  src/pages/landing/index.tsx
/pricing                 →  src/pages/pricing/index.tsx
/contact                 →  src/pages/contact/index.tsx
/login                   →  src/pages/auth/login.tsx
/member                  →  src/pages/member/index.tsx
/member/subscription     →  src/pages/member/subscription.tsx
/member/settings         →  src/pages/member/settings.tsx
/networth                →  src/pages/networth/index.tsx
/networth/assets         →  src/pages/networth/assets.tsx
/roi/projects            →  src/pages/roi/projects.tsx
/roi/project/:id         →  src/pages/roi/project/[projectId]/index.tsx
/roi/project/:id/cashflow →  src/pages/roi/project/[projectId]/cashflow.tsx
```

---

## ✅ Checklist untuk Development

- [ ] Clone repository
- [ ] `cd apps/dashboard`
- [ ] `npm install`
- [ ] Create `.env` file (copy from `.env.example`)
- [ ] `npm run dev`
- [ ] Buka `http://localhost:5173`
- [ ] Test navigation ke semua pages
- [ ] Test login flow
- [ ] Test member dashboard
- [ ] Test service guards

---

**Last Updated:** December 17, 2024  
**Development Server:** http://localhost:5173  
**Total Pages:** 25+ pages
