# BUKABOX Architecture Documentation

## System Overview

BUKABOX adalah platform financial management berbasis subscription dengan arsitektur monorepo yang terdiri dari frontend (React + Vite) dan backend (FastAPI + PostgreSQL).

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT                               │
│                   (Browser / Mobile Web)                     │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ HTTPS
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    FRONTEND (Vite + React)                   │
│                     bukabox.co.id                            │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Pages Layer                                           │ │
│  │  - Landing, Pricing, Contact                           │ │
│  │  - Auth (Login, Register)                              │ │
│  │  - Member Dashboard                                     │ │
│  │  - Service Pages (Networth, ROI, Tax)                  │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  State Management                                      │ │
│  │  - AuthProvider (User session)                         │ │
│  │  - SubscriptionProvider (Plans & access)               │ │
│  │  - ActiveProjectProvider (ROI tracking)                │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Services Layer (API Client)                           │ │
│  │  - api.ts (Base HTTP client)                           │ │
│  │  - auth.ts, subscription.ts, networth.ts, roi.ts       │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ REST API
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    BACKEND (FastAPI)                         │
│                   api.bukabox.co.id                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Middleware Layer                                      │ │
│  │  - auth_guard (JWT validation)                         │ │
│  │  - subscription_guard (Plan verification)              │ │
│  │  - project_guard (ROI project ownership)               │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Modules                                               │ │
│  │  - auth/ (Login, OAuth, JWT)                           │ │
│  │  - users/ (Profile, settings)                          │ │
│  │  - subscription/ (Plans, billing)                      │ │
│  │  - projects/ (Project entity for ROI)                  │ │
│  │  - services/                                            │ │
│  │    - networth/ (Assets, liabilities)                   │ │
│  │    - roi/ (Cash flow, depreciation)                    │ │
│  │    - tax/ (Calculations, compliance)                   │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ SQL
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                  DATABASE (PostgreSQL)                       │
│  - users, subscriptions, billing_history                    │
│  - projects (ROI tracker)                                   │
│  - networth_assets, networth_liabilities                    │
│  - roi_cashflows, roi_assets, roi_depreciation              │
│  - tax_records, tax_calculations                            │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend (`/apps/dashboard`)
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v4
- **State:** React Context API
- **Auth:** Google OAuth 2.0
- **HTTP Client:** Native Fetch API
- **Deployment:** Fly.io

### Backend (`/apps/api`)
- **Framework:** FastAPI (Python)
- **Database:** PostgreSQL with SQLAlchemy
- **Auth:** JWT + OAuth 2.0
- **Validation:** Pydantic
- **Payment:** Xendit Gateway
- **Deployment:** Fly.io

## Directory Structure

### Frontend Structure
```
apps/dashboard/src/
├── app/                        # Core application logic
│   ├── router.tsx              # Route configuration
│   ├── AuthProvider.tsx        # Auth context & state
│   ├── SubscriptionProvider.tsx # Subscription context & state
│   ├── ServiceGuard.tsx        # Route guards
│   └── ActiveProjectProvider.tsx # ROI project context
│
├── pages/                      # Page components
│   ├── auth/
│   │   └── login.tsx
│   ├── member/                 # Master dashboard
│   │   ├── index.tsx           # Overview
│   │   ├── subscription.tsx    # Plan management
│   │   └── settings.tsx        # Account settings
│   ├── networth/               # Account-level service
│   │   ├── index.tsx
│   │   ├── assets.tsx
│   │   ├── liabilities.tsx
│   │   └── reports.tsx
│   └── roi/                    # Project-level service
│       ├── projects.tsx        # Project list
│       └── project/[projectId]/
│           ├── index.tsx       # Project overview
│           ├── cashflow.tsx    # Cash flow management
│           ├── assets.tsx      # Asset tracking
│           ├── depreciation.tsx # Depreciation schedule
│           └── reports.tsx     # ROI reports
│
├── components/                 # Reusable UI components
│   ├── auth/
│   ├── landing/
│   ├── layout/
│   ├── pricing/
│   └── ui/
│
├── services/                   # API integration layer
│   ├── api.ts                  # Base HTTP client
│   ├── auth.ts                 # Auth endpoints
│   ├── subscription.ts         # Subscription endpoints
│   ├── networth.ts             # Networth endpoints
│   └── roi.ts                  # ROI endpoints
│
├── hooks/                      # Custom React hooks
│   ├── useAuth.ts
│   ├── useSubscription.ts
│   └── useActiveProject.ts
│
└── utils/                      # Utilities
    ├── constants.ts
    └── formatter.ts
```

### Backend Structure
```
apps/api/app/
├── main.py                     # FastAPI application entry
├── config.py                   # Configuration management
│
├── database/
│   ├── session.py              # Database session
│   └── models.py               # Base models
│
├── middleware/
│   ├── auth_guard.py           # JWT authentication
│   ├── subscription_guard.py   # Subscription verification
│   └── project_guard.py        # ROI project ownership
│
├── modules/
│   ├── auth/                   # Authentication
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── services.py
│   ├── users/                  # User management
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── services.py
│   ├── subscription/           # Subscription management
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── services.py
│   ├── projects/               # Project entity
│   │   ├── models.py
│   │   ├── routes.py
│   │   └── services.py
│   └── services/
│       ├── networth/           # Account-level service
│       │   ├── models.py
│       │   ├── routes.py
│       │   └── services.py
│       └── roi/                # Project-level service
│           ├── models.py
│           ├── routes.py
│           └── services.py
│
└── utils/
    ├── jwt.py
    ├── password.py
    └── validators.py
```

## Service Architecture

### Account-Level Service (Networth)
- **Scope:** Per user account
- **Access:** Subscription-based
- **Guard:** `subscription_guard(service='networth')`
- **Data Model:** One record set per user
- **Example:** User's total assets and liabilities

### Project-Level Service (ROI)
- **Scope:** Per project per user
- **Access:** Subscription-based + Project ownership
- **Guard:** `subscription_guard(service='roi')` + `project_guard()`
- **Data Model:** Multiple projects per user
- **Example:** Multiple real estate investments

## Authentication Flow

```
1. User clicks "Login with Google"
   ↓
2. Google OAuth consent screen
   ↓
3. Google returns credential (JWT token)
   ↓
4. Frontend decodes token → Extract user info
   ↓
5. Send to backend → Verify & create session
   ↓
6. Backend returns access token
   ↓
7. Store token in localStorage
   ↓
8. All API requests include: Authorization: Bearer {token}
```

## Subscription Guard Flow

```
1. User accesses protected route (e.g., /networth)
   ↓
2. ServiceGuard component checks:
   - isAuthenticated? → No: Redirect to /login
   - hasAccess(service)? → No: Redirect to /pricing
   - Yes: Render component
   ↓
3. Component makes API call
   ↓
4. Backend middleware validates:
   - JWT valid?
   - Subscription active?
   - Service included in plan?
   ↓
5. Return data or 403 Forbidden
```

## Project Guard Flow (ROI Only)

```
1. User accesses /roi/project/:projectId
   ↓
2. ServiceGuard checks subscription access
   ↓
3. ActiveProjectProvider loads project data
   ↓
4. API validates:
   - Project exists?
   - User owns project?
   ↓
5. Return project data or 404 Not Found
```

## State Management

### AuthProvider
```typescript
interface AuthContext {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  loginWithGoogle: (response: any) => void;
  logout: () => void;
}
```

### SubscriptionProvider
```typescript
interface SubscriptionContext {
  subscription: Subscription | null;
  hasAccess: (service: string) => boolean;
  updateSubscription: (sub: Subscription) => void;
}
```

### ActiveProjectProvider (ROI Only)
```typescript
interface ActiveProjectContext {
  activeProject: Project | null;
  setActiveProject: (project: Project) => void;
  clearActiveProject: () => void;
}
```

## API Endpoints

### Auth Module
```
POST   /api/auth/login          # Email/password login
POST   /api/auth/google         # Google OAuth
POST   /api/auth/refresh        # Refresh token
POST   /api/auth/logout         # Logout
```

### User Module
```
GET    /api/users/me            # Get current user
PUT    /api/users/me            # Update profile
PATCH  /api/users/me/password   # Change password
DELETE /api/users/me            # Delete account
```

### Subscription Module
```
GET    /api/subscriptions/me    # Get current subscription
POST   /api/subscriptions       # Create subscription
PUT    /api/subscriptions/:id   # Update subscription
DELETE /api/subscriptions/:id   # Cancel subscription
GET    /api/billing/history     # Get billing history
```

### Networth Module
```
GET    /api/networth/summary    # Account summary
GET    /api/networth/assets     # List assets
POST   /api/networth/assets     # Create asset
PUT    /api/networth/assets/:id # Update asset
DELETE /api/networth/assets/:id # Delete asset
# Same for liabilities
```

### ROI Module
```
GET    /api/projects            # List user's projects
POST   /api/projects            # Create project
GET    /api/projects/:id        # Get project details
PUT    /api/projects/:id        # Update project
DELETE /api/projects/:id        # Delete project

# Project-level resources
GET    /api/projects/:id/cashflows
POST   /api/projects/:id/cashflows
GET    /api/projects/:id/assets
GET    /api/projects/:id/depreciation
GET    /api/projects/:id/reports
```

## Database Schema

### Core Tables
```sql
-- Users
users (
  id, email, name, picture, 
  google_id, created_at, updated_at
)

-- Subscriptions
subscriptions (
  id, user_id, tier, status,
  started_at, expires_at, created_at
)

-- Subscription Services
subscription_services (
  id, subscription_id, service_name,
  is_active, created_at
)

-- Billing History
billing_history (
  id, user_id, subscription_id,
  amount, status, invoice_url,
  paid_at, created_at
)
```

### Networth Tables
```sql
networth_assets (
  id, user_id, name, type,
  value, acquisition_date, created_at
)

networth_liabilities (
  id, user_id, name, type,
  amount, interest_rate, created_at
)
```

### ROI Tables
```sql
projects (
  id, user_id, name, description,
  start_date, end_date, status, created_at
)

roi_cashflows (
  id, project_id, date, type,
  amount, description, created_at
)

roi_assets (
  id, project_id, name, type,
  purchase_price, purchase_date,
  useful_life, salvage_value, created_at
)

roi_depreciation (
  id, asset_id, year, month,
  depreciation_amount, book_value, created_at
)
```

## Deployment Architecture

### Frontend Deployment (Fly.io)
```yaml
# fly.toml for dashboard
app = "bukabox-dashboard"
primary_region = "sin"

[env]
  VITE_API_BASE_URL = "https://api.bukabox.co.id"
  VITE_GOOGLE_CLIENT_ID = "xxx.apps.googleusercontent.com"

[http_service]
  internal_port = 3000
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
```

### Backend Deployment (Fly.io)
```yaml
# fly.toml for api
app = "bukabox-api"
primary_region = "sin"

[env]
  DATABASE_URL = "postgresql://..."
  GOOGLE_CLIENT_ID = "xxx"
  XENDIT_API_KEY = "xxx"

[http_service]
  internal_port = 8000
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
```

## Security Considerations

### Frontend
- ✅ HTTPS only (enforced by Fly.io)
- ✅ JWT stored in localStorage (with httpOnly cookie option for production)
- ✅ CORS configuration
- ✅ Input validation on forms
- ✅ XSS prevention (React escapes by default)

### Backend
- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ SQL injection prevention (SQLAlchemy ORM)
- ✅ Rate limiting
- ✅ CORS whitelist
- ✅ Environment variables for secrets
- ✅ Input validation (Pydantic)

## Performance Optimization

### Frontend
- Code splitting by route
- Lazy loading for components
- Image optimization
- Caching API responses
- Debouncing user inputs

### Backend
- Database indexing
- Query optimization
- Response caching
- Connection pooling
- Async operations

## Monitoring & Logging

### Frontend
- Error tracking (Sentry)
- Analytics (Google Analytics)
- Performance monitoring (Web Vitals)

### Backend
- Application logs (structured JSON)
- Error tracking (Sentry)
- API metrics (Prometheus)
- Database query monitoring

## Scalability Plan

### Phase 1 (Current - MVP)
- Single frontend server
- Single API server
- Shared PostgreSQL database
- Manual deployment

### Phase 2 (Growth)
- Multiple frontend instances (auto-scaling)
- Multiple API instances (load balanced)
- Database read replicas
- Redis for caching
- CI/CD pipeline

### Phase 3 (Scale)
- CDN for static assets
- Microservices architecture
- Database sharding
- Message queue (RabbitMQ/Redis)
- Kubernetes orchestration

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Status:** Production Ready
