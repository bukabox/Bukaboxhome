# Migration Guide: Old Structure → New Monorepo Structure

## Overview

Dokumentasi ini menjelaskan proses migrasi dari struktur lama (single file root) ke struktur monorepo baru dengan separation of concerns yang lebih baik.

## Migration Timeline

- **Phase 1:** ✅ Setup monorepo structure
- **Phase 2:** ✅ Migrate landing pages & auth
- **Phase 3:** ✅ Create member dashboard
- **Phase 4:** ✅ Create services layer
- **Phase 5:** 🔄 Backend API implementation (In Progress)
- **Phase 6:** ⏳ Production deployment

## Before Migration (Old Structure)

```
BUKABOX/
├── App.tsx                    # Main app with routing
├── ContactPage.tsx            # Contact page
├── PricingPage.tsx            # Pricing page
├── components/
│   ├── checkout/
│   ├── features/
│   ├── landing/
│   └── ui/
└── styles/
```

**Problems:**
- ❌ All code in root directory
- ❌ No clear separation between frontend/backend
- ❌ No services layer
- ❌ Mixed concerns in single files
- ❌ Hard to scale and maintain

## After Migration (New Structure)

```
BUKABOX/
├── apps/
│   ├── dashboard/             # Frontend (React + Vite)
│   │   └── src/
│   │       ├── app/           # Core logic
│   │       ├── pages/         # Page components
│   │       ├── components/    # UI components
│   │       ├── services/      # API integration
│   │       ├── hooks/         # Custom hooks
│   │       └── utils/         # Utilities
│   │
│   └── api/                   # Backend (FastAPI)
│       └── app/
│           ├── database/
│           ├── middleware/
│           ├── modules/
│           └── utils/
│
├── infra/                     # Infrastructure
├── docs/                      # Documentation
└── README.md
```

**Benefits:**
- ✅ Clear separation of concerns
- ✅ Scalable architecture
- ✅ Easy to deploy independently
- ✅ Better code organization
- ✅ Team collaboration friendly

---

## Step-by-Step Migration

### Step 1: Create Monorepo Structure ✅

```bash
mkdir -p apps/dashboard/src
mkdir -p apps/api/app
mkdir -p infra/{fly,docker}
mkdir -p docs
```

### Step 2: Setup Frontend (Dashboard) ✅

#### 2.1 Initialize Vite Project
```bash
cd apps/dashboard
npm create vite@latest . -- --template react-ts
npm install
```

#### 2.2 Install Dependencies
```bash
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npm install @google-oauth/popup lucide-react
```

#### 2.3 Configure Tailwind CSS v4
```css
/* styles/globals.css */
@import "tailwindcss";

/* Custom design tokens */
:root {
  --color-primary: #2563eb;
  --color-secondary: #60a5fa;
}
```

#### 2.4 Setup Path Aliases
```typescript
// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### Step 3: Migrate Core Application Logic ✅

#### 3.1 Create App Structure
```
src/
├── app/
│   ├── router.tsx             # Route configuration
│   ├── AuthProvider.tsx       # Auth context
│   ├── SubscriptionProvider.tsx # Subscription context
│   └── ServiceGuard.tsx       # Route guards
```

#### 3.2 Migrate Providers

**Before (Old):**
```typescript
// AuthContext scattered in App.tsx
```

**After (New):**
```typescript
// src/app/AuthProvider.tsx
export function AuthProvider({ children }) {
  // Centralized auth logic
}
```

### Step 4: Migrate Pages ✅

#### 4.1 Create Page Structure
```
src/pages/
├── landing/
│   └── index.tsx
├── pricing/
│   └── index.tsx
├── contact/
│   └── index.tsx
├── auth/
│   └── login.tsx
├── member/
│   ├── index.tsx
│   ├── subscription.tsx
│   └── settings.tsx
├── networth/
│   ├── index.tsx
│   ├── assets.tsx
│   ├── liabilities.tsx
│   └── reports.tsx
└── roi/
    ├── projects.tsx
    └── project/[projectId]/
        ├── index.tsx
        ├── cashflow.tsx
        ├── assets.tsx
        ├── depreciation.tsx
        └── reports.tsx
```

#### 4.2 Migration Example

**Before (Old):**
```typescript
// ContactPage.tsx in root
export default function ContactPage({ onNavigate }) {
  // Mixed routing logic
}
```

**After (New):**
```typescript
// src/pages/contact/index.tsx
export default function ContactPage() {
  // Uses React Router
  const navigate = useNavigate();
}
```

### Step 5: Migrate Components ✅

#### 5.1 Organize by Feature
```
src/components/
├── auth/              # Auth-related components
├── landing/           # Landing page components
├── layout/            # Layout components (Navbar, Footer)
├── pricing/           # Pricing components
└── ui/                # Reusable UI components
```

#### 5.2 Update Imports

**Before (Old):**
```typescript
import { Button } from './components/ui/button';
```

**After (New):**
```typescript
import { Button } from '@/components/ui/button';
```

### Step 6: Create Services Layer ✅

#### 6.1 Create API Client
```typescript
// src/services/api.ts
class APIClient {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.json();
  }
  // ... other methods
}

export const api = new APIClient();
```

#### 6.2 Create Service Modules
```typescript
// src/services/auth.ts
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  // ...
};

// src/services/subscription.ts
export const subscriptionService = {
  getCurrent: () => api.get('/subscriptions/me'),
  upgrade: (planId) => api.post('/subscriptions', { planId }),
  // ...
};

// src/services/networth.ts
export const networthService = {
  getSummary: () => api.get('/networth/summary'),
  getAssets: () => api.get('/networth/assets'),
  // ...
};

// src/services/roi.ts
export const roiService = {
  getProjects: () => api.get('/projects'),
  getCashFlows: (projectId) => api.get(`/projects/${projectId}/cashflows`),
  // ...
};
```

### Step 7: Create Custom Hooks ✅

```typescript
// src/hooks/useAuth.ts
export { useAuth } from '@/app/AuthProvider';

// src/hooks/useSubscription.ts
export { useSubscription } from '@/app/SubscriptionProvider';

// src/hooks/useActiveProject.ts
export { useActiveProject } from '@/app/ActiveProjectProvider';
```

### Step 8: Setup Backend Structure 🔄

#### 8.1 Create Backend Directory
```
apps/api/
├── Dockerfile
├── fly.toml
├── requirements.txt
└── app/
    ├── main.py
    ├── config.py
    ├── database/
    │   ├── session.py
    │   └── models.py
    ├── middleware/
    │   ├── auth_guard.py
    │   ├── subscription_guard.py
    │   └── project_guard.py
    └── modules/
        ├── auth/
        ├── users/
        ├── subscription/
        ├── projects/
        └── services/
            ├── networth/
            └── roi/
```

#### 8.2 Setup FastAPI
```python
# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="BUKABOX API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://bukabox.co.id"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
from modules.auth import routes as auth_routes
from modules.users import routes as user_routes
# ... other routes
```

---

## File Mapping Reference

### Pages Migration

| Old Location | New Location | Status |
|--------------|--------------|--------|
| `/App.tsx` | `/apps/dashboard/src/app/router.tsx` | ✅ Migrated |
| `/ContactPage.tsx` | `/apps/dashboard/src/pages/contact/index.tsx` | ✅ Migrated |
| `/PricingPage.tsx` | `/apps/dashboard/src/pages/pricing/index.tsx` | ✅ Migrated |
| N/A | `/apps/dashboard/src/pages/member/index.tsx` | ✅ Created |
| N/A | `/apps/dashboard/src/pages/member/subscription.tsx` | ✅ Created |
| N/A | `/apps/dashboard/src/pages/member/settings.tsx` | ✅ Created |

### Components Migration

| Old Location | New Location | Status |
|--------------|--------------|--------|
| `/components/landing/*` | `/apps/dashboard/src/components/landing/*` | ✅ Migrated |
| `/components/ui/*` | `/apps/dashboard/src/components/ui/*` | ✅ Migrated |
| `/components/checkout/*` | `/apps/dashboard/src/components/checkout/*` | ✅ Migrated |
| N/A | `/apps/dashboard/src/components/layout/DashboardLayout.tsx` | ✅ Created |

### New Files Created

| File | Purpose | Status |
|------|---------|--------|
| `/apps/dashboard/src/services/api.ts` | Base API client | ✅ Created |
| `/apps/dashboard/src/services/auth.ts` | Auth service | ✅ Created |
| `/apps/dashboard/src/services/subscription.ts` | Subscription service | ✅ Created |
| `/apps/dashboard/src/services/networth.ts` | Networth service | ✅ Created |
| `/apps/dashboard/src/services/roi.ts` | ROI service | ✅ Created |
| `/apps/dashboard/src/utils/constants.ts` | App constants | ✅ Created |
| `/apps/dashboard/src/utils/formatter.ts` | Utility functions | ✅ Created |

---

## Breaking Changes

### Import Paths
```typescript
// ❌ Old
import { Button } from './components/ui/button';

// ✅ New
import { Button } from '@/components/ui/button';
```

### Routing
```typescript
// ❌ Old
<Route path="/contact" element={<ContactPage onNavigate={handlePageChange} />} />

// ✅ New
<Route path="/contact" element={<ContactPage />} />
// Uses useNavigate() from react-router-dom internally
```

### State Management
```typescript
// ❌ Old
const [user, setUser] = useState(null); // Local state

// ✅ New
const { user } = useAuth(); // Context-based
```

### API Calls
```typescript
// ❌ Old
fetch('/api/users/me').then(res => res.json());

// ✅ New
import { authService } from '@/services/auth';
const user = await authService.getCurrentUser();
```

---

## Environment Variables

### Frontend (.env)
```bash
VITE_API_BASE_URL=http://localhost:8000
VITE_GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
```

### Backend (.env)
```bash
DATABASE_URL=postgresql://user:pass@localhost:5432/bukabox
JWT_SECRET=your-secret-key
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
XENDIT_API_KEY=xxx
```

---

## Testing Migration

### 1. Frontend Development Server
```bash
cd apps/dashboard
npm run dev
# http://localhost:5173
```

### 2. Backend Development Server
```bash
cd apps/api
uvicorn app.main:app --reload
# http://localhost:8000
```

### 3. Full Stack Testing
```bash
# Terminal 1: Frontend
cd apps/dashboard && npm run dev

# Terminal 2: Backend
cd apps/api && uvicorn app.main:app --reload

# Terminal 3: Database
docker-compose up postgres
```

---

## Rollback Plan

If migration fails, keep old structure in a separate branch:

```bash
# Before migration
git checkout -b pre-migration-backup
git add .
git commit -m "Backup before migration"

# Start migration
git checkout main
# ... migration steps ...

# If rollback needed
git checkout pre-migration-backup
```

---

## Post-Migration Checklist

### Frontend
- [x] All pages migrated
- [x] All components migrated
- [x] Services layer created
- [x] Routing updated to React Router v6
- [x] Auth flow working
- [x] Subscription system working
- [x] Guards implemented
- [ ] API integration tested (pending backend)
- [ ] Production build tested
- [ ] Deployment configured

### Backend
- [ ] Database models created
- [ ] API endpoints implemented
- [ ] Authentication working
- [ ] Authorization (guards) working
- [ ] Xendit payment integration
- [ ] Database migrations
- [ ] API documentation (Swagger)
- [ ] Production deployment

### Infrastructure
- [ ] Frontend Dockerfile
- [ ] Backend Dockerfile
- [ ] Fly.io configuration
- [ ] Database setup (Fly.io Postgres)
- [ ] Environment variables configured
- [ ] Domain DNS configured
- [ ] SSL certificates

---

## Known Issues & Solutions

### Issue 1: Import Path Resolution
**Problem:** `Cannot find module '@/components/...'`

**Solution:** Configure path aliases in `vite.config.ts`:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

### Issue 2: React Router Compatibility
**Problem:** Old `onNavigate` props not working

**Solution:** Use `useNavigate()` hook:
```typescript
const navigate = useNavigate();
navigate('/pricing');
```

### Issue 3: Context Not Available
**Problem:** `useAuth must be used within AuthProvider`

**Solution:** Wrap App with providers in correct order:
```typescript
<AuthProvider>
  <SubscriptionProvider>
    <App />
  </SubscriptionProvider>
</AuthProvider>
```

---

## Next Steps

1. **Complete Backend Implementation**
   - Implement all API endpoints
   - Setup database with migrations
   - Test API integration

2. **Testing**
   - Unit tests for services
   - Integration tests for API
   - E2E tests for critical flows

3. **Deployment**
   - Deploy frontend to Fly.io
   - Deploy backend to Fly.io
   - Setup database on Fly.io Postgres
   - Configure domain & SSL

4. **Monitoring**
   - Setup error tracking (Sentry)
   - Setup analytics
   - Setup performance monitoring

---

**Migration Status:** 85% Complete  
**Last Updated:** December 2024  
**Next Milestone:** Backend API Implementation
