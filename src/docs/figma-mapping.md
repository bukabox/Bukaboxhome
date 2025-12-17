# Figma to Code Mapping

Dokumen ini menjelaskan mapping 1:1 antara Figma screens dengan file struktur di codebase.

## 🎨 Principle: 1 Figma Screen = 1 Page File

Setiap screen di Figma harus memiliki file page yang sesuai di `apps/dashboard/src/pages/`.

## 📂 Current Structure Mapping

### Public Pages (Marketing Site)

| Figma Screen | File Path | Route | Status |
|-------------|-----------|-------|---------|
| Landing Page | `/pages/landing/index.tsx` | `/` | ✅ Existing |
| Pricing Page | `/pages/pricing/index.tsx` | `/pricing` | ✅ Existing |
| Contact Page | `/pages/contact/index.tsx` | `/contact` | ✅ Existing |

### Authentication Pages

| Figma Screen | File Path | Route | Status |
|-------------|-----------|-------|---------|
| Login | `/pages/auth/login.tsx` | `/login` | 🔨 To Build |
| Register | `/pages/auth/register.tsx` | `/register` | 🔨 To Build |
| Reset Password | `/pages/auth/reset-password.tsx` | `/reset-password` | 🔨 To Build |

### Member Pages (Account Management)

| Figma Screen | File Path | Route | Status |
|-------------|-----------|-------|---------|
| Member Dashboard | `/pages/member/index.tsx` | `/member` | 🔨 To Build |
| Subscription | `/pages/member/subscription.tsx` | `/member/subscription` | 🔨 To Build |
| Settings | `/pages/member/settings.tsx` | `/member/settings` | 🔨 To Build |

### Networth Pages (Account-Level Service)

| Figma Screen | File Path | Route | Status |
|-------------|-----------|-------|---------|
| Networth Dashboard | `/pages/networth/index.tsx` | `/networth` | 🔨 To Build |
| Assets | `/pages/networth/assets.tsx` | `/networth/assets` | 🔨 To Build |
| Liabilities | `/pages/networth/liabilities.tsx` | `/networth/liabilities` | 🔨 To Build |
| Reports | `/pages/networth/reports.tsx` | `/networth/reports` | 🔨 To Build |

### ROI Pages (Project-Level Service)

| Figma Screen | File Path | Route | Status |
|-------------|-----------|-------|---------|
| Projects List | `/pages/roi/projects.tsx` | `/roi/projects` | 🔨 To Build |
| Project Dashboard | `/pages/roi/project/[projectId]/index.tsx` | `/roi/project/:id` | 🔨 To Build |
| Cashflow | `/pages/roi/project/[projectId]/cashflow.tsx` | `/roi/project/:id/cashflow` | 🔨 To Build |
| Assets | `/pages/roi/project/[projectId]/assets.tsx` | `/roi/project/:id/assets` | 🔨 To Build |
| Depreciation | `/pages/roi/project/[projectId]/depreciation.tsx` | `/roi/project/:id/depreciation` | 🔨 To Build |
| Reports | `/pages/roi/project/[projectId]/reports.tsx` | `/roi/project/:id/reports` | 🔨 To Build |

## 🧩 Components Hierarchy

### Shared Components
Komponen yang digunakan di multiple pages:

```
/components/
├── layout/
│   ├── DashboardLayout.tsx      # Main dashboard wrapper
│   ├── PublicLayout.tsx         # Public pages wrapper
│   └── AuthLayout.tsx           # Auth pages wrapper
│
├── navigation/
│   ├── Navbar.tsx               # Top navigation
│   ├── Sidebar.tsx              # Dashboard sidebar
│   └── Breadcrumb.tsx           # Breadcrumb navigation
│
├── table/
│   ├── DataTable.tsx            # Generic data table
│   └── Pagination.tsx           # Table pagination
│
├── chart/
│   ├── LineChart.tsx            # Line chart wrapper
│   ├── BarChart.tsx             # Bar chart wrapper
│   └── PieChart.tsx             # Pie chart wrapper
│
└── modal/
    ├── ConfirmDialog.tsx        # Confirmation modal
    └── FormModal.tsx            # Form modal wrapper
```

### Feature-Specific Components
Komponen yang specific untuk satu feature:

```
/components/
├── landing/
│   ├── Hero.tsx
│   ├── Features.tsx
│   └── CTA.tsx
│
├── pricing/
│   ├── PricingCards.tsx
│   └── FAQ.tsx
│
└── networth/
    ├── AssetForm.tsx
    └── LiabilityForm.tsx
```

## 🎯 Naming Conventions

### Pages
- PascalCase: `NetworthDashboard.tsx`
- Index files untuk base route: `index.tsx`
- Dynamic routes: `[projectId]/index.tsx`

### Components
- PascalCase: `DashboardLayout.tsx`
- One component per file
- Kebab-case folder names: `navigation/`

### Hooks
- camelCase with `use` prefix: `useAuth.ts`

### Services
- camelCase: `auth.ts`, `subscription.ts`

## 🔄 Migration Status

### Phase 1: Infrastructure Setup ✅
- [x] Create folder structure
- [x] Setup Vite config
- [x] Setup routing

### Phase 2: Marketing Site Migration 🔨
- [ ] Migrate landing page
- [ ] Migrate pricing page
- [ ] Migrate contact page

### Phase 3: Dashboard Core 📋
- [ ] Build authentication pages
- [ ] Build member pages
- [ ] Build dashboard layout

### Phase 4: Services 📋
- [ ] Build Networth pages
- [ ] Build ROI pages
- [ ] Build Tax pages

## 📝 Notes

1. **Dynamic Routes**: ROI menggunakan dynamic routes karena project-based
2. **Nested Layouts**: Dashboard pages menggunakan DashboardLayout
3. **Guards**: Protected routes menggunakan guards di router level
4. **Context**: ActiveProjectProvider hanya di ROI routes
