# Migration Guide

Panduan untuk migrasi dari struktur lama ke struktur monorepo baru.

## 🗺️ Migration Roadmap

### Phase 1: Setup Infrastructure ✅
1. ✅ Create folder structure
2. ✅ Create documentation
3. 🔨 Setup Vite config
4. 🔨 Setup routing
5. 🔨 Setup providers

### Phase 2: Migrate Marketing Site
1. Migrate landing page components
2. Migrate pricing page
3. Migrate legal pages
4. Update routing

### Phase 3: Migrate Authentication
1. Migrate AuthContext
2. Create auth pages
3. Setup Google OAuth
4. Test authentication flow

### Phase 4: Build Dashboard Core
1. Create dashboard layout
2. Create navigation components
3. Setup protected routes
4. Create member pages

### Phase 5: Build Services
1. Networth service pages
2. ROI service pages
3. Tax service pages

## 📦 File Migration Map

### From Root to apps/dashboard/src

```
OLD LOCATION                              →  NEW LOCATION
================================================================================

# Core App Files
/App.tsx                                  →  /apps/dashboard/src/app/router.tsx
/contexts/AuthContext.tsx                 →  /apps/dashboard/src/app/AuthProvider.tsx
                                          →  /apps/dashboard/src/app/SubscriptionProvider.tsx (new)
                                          →  /apps/dashboard/src/app/ActiveProjectProvider.tsx (new)

# Marketing Site Components
/components/Hero.tsx                      →  /apps/dashboard/src/components/landing/Hero.tsx
/components/Features.tsx                  →  /apps/dashboard/src/components/landing/Features.tsx
/components/CTA.tsx                       →  /apps/dashboard/src/components/landing/CTA.tsx
/components/Footer.tsx                    →  /apps/dashboard/src/components/layout/Footer.tsx
/components/SplashScreen.tsx              →  /apps/dashboard/src/components/landing/SplashScreen.tsx

# Pages
/PricingPage.tsx                          →  /apps/dashboard/src/pages/pricing/index.tsx
/ContactPage.tsx                          →  /apps/dashboard/src/pages/contact/index.tsx

# Pricing Components
/components/pricing/*                     →  /apps/dashboard/src/components/pricing/*

# Checkout
/components/checkout/CheckoutPage.tsx     →  /apps/dashboard/src/pages/checkout/index.tsx
/components/checkout/CheckoutPlaceholder.tsx  →  (deprecated)

# Legal
/components/legal/TermsOfService.tsx      →  /apps/dashboard/src/pages/legal/terms.tsx
/components/legal/PrivacyPolicy.tsx       →  /apps/dashboard/src/pages/legal/privacy.tsx
/components/legal/RefundPolicy.tsx        →  /apps/dashboard/src/pages/legal/refund.tsx

# Features Detail Pages
/components/features/NetworthSystemPage.tsx   →  /apps/dashboard/src/pages/features/networth.tsx
/components/features/ROITrackerPage.tsx       →  /apps/dashboard/src/pages/features/roi.tsx
/components/features/TaxAutomationPage.tsx    →  /apps/dashboard/src/pages/features/tax.tsx

# Illustrations
/components/illustrations/*               →  /apps/dashboard/src/components/illustrations/*

# UI Components
/components/ui/*                          →  /apps/dashboard/src/components/ui/*

# Auth Components
/components/auth/GoogleLoginModal.tsx     →  /apps/dashboard/src/components/auth/GoogleLoginModal.tsx

# Styles
/styles/globals.css                       →  /apps/dashboard/src/styles/globals.css
```

## 🔧 Import Path Updates

### Before
```typescript
import { Hero } from './components/Hero';
import { useAuth } from './contexts/AuthContext';
import { Button } from './components/ui/button';
```

### After
```typescript
import { Hero } from '@/components/landing/Hero';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
```

## 🛠️ Step-by-Step Migration

### Step 1: Create apps/dashboard structure

```bash
mkdir -p apps/dashboard/src/{app,pages,components,hooks,services,utils,styles}
mkdir -p apps/dashboard/src/pages/{auth,member,networth,roi,pricing,contact,legal,features,checkout}
mkdir -p apps/dashboard/src/components/{layout,navigation,landing,pricing,auth,ui,illustrations}
```

### Step 2: Copy files with new structure

```bash
# Example: Migrate Hero component
cp /components/Hero.tsx /apps/dashboard/src/components/landing/Hero.tsx

# Update imports inside the file
# Change relative imports to use @ alias
```

### Step 3: Update Vite config

Add path aliases:
```typescript
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Step 4: Update package.json

```json
{
  "name": "@bukabox/dashboard",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

### Step 5: Create index.html in apps/dashboard

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BUKABOX - Financial Management Platform</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Step 6: Create main.tsx entry point

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/router';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## 🧪 Testing Migration

### Checklist
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Authentication flow works
- [ ] Styling is preserved
- [ ] Assets load correctly
- [ ] Build succeeds
- [ ] Production bundle size is acceptable

### Commands
```bash
# Development
cd apps/dashboard
npm run dev

# Production build
npm run build

# Preview production
npm run preview
```

## ⚠️ Common Issues

### Issue: Module not found
**Solution**: Check import paths, ensure @ alias is configured

### Issue: Styles not loading
**Solution**: Verify globals.css is imported in main.tsx

### Issue: Assets 404
**Solution**: Check public folder location and Vite config

### Issue: Build fails
**Solution**: Run TypeScript check: `tsc --noEmit`

## 📝 Post-Migration Cleanup

1. ✅ Verify all features work
2. ✅ Delete old files from root
3. ✅ Update .gitignore
4. ✅ Update README
5. ✅ Update deployment configs

## 🚀 Deployment Changes

### Before
```bash
# Deploy from root
fly deploy
```

### After
```bash
# Deploy dashboard
cd apps/dashboard
fly deploy -c fly.toml

# Deploy API
cd apps/api
fly deploy -c fly.toml
```

## 📚 References

- [Vite Documentation](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/)
- [Fly.io Deployment](https://fly.io/docs/)
