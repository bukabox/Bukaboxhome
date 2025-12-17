# BUKABOX Architecture

## 🎯 Overview

BUKABOX adalah platform subscription-based untuk financial management tools yang terdiri dari:
1. **Networth System** - Account-level service untuk tracking aset & liabilitas
2. **M4 ROI Tracker** - Project-level service untuk analisis ROI properti
3. **Tax Engine & Automation** - Tax calculation & reporting

## 🏛️ Architecture Principles

### 1. Service Level Separation

#### Account-Level Services
- **Networth System**
- Satu user = satu instance
- Data di-scope per user account
- Tidak membutuhkan project/workspace context

#### Project-Level Services
- **ROI Tracker**
- Satu user bisa punya multiple projects
- Data di-scope per project
- Membutuhkan project selection/switching
- Menggunakan `ActiveProjectProvider` di frontend

### 2. Frontend Architecture

```
pages/                      # 1:1 mapping dengan Figma screens
├── auth/                   # Public pages
├── member/                 # Account/user management
├── networth/              # Account-level: 1 user = 1 instance
└── roi/                   # Project-level: 1 user = N projects
    ├── projects.tsx       # Project selector
    └── project/[id]/      # Project-specific pages
```

### 3. Backend Architecture

```
modules/
├── auth/                  # Authentication & authorization
├── users/                 # User management
├── subscription/          # Xendit integration
├── projects/              # Project domain (for ROI)
└── services/
    ├── networth/         # Account-level service
    └── roi/              # Project-level service
```

### 4. Guards & Middleware

#### Frontend Guards
- `AuthGuard` - Protects authenticated routes
- `SubscriptionGuard` - Checks subscription tier
- `ServiceGuard` - Verifies service access
- `ActiveProjectProvider` - ROI only: manages active project context

#### Backend Middleware
- `auth_guard.py` - JWT validation
- `subscription_guard.py` - Subscription tier check
- `project_guard.py` - ROI only: project ownership validation

## 🔐 Authentication Flow

1. Google OAuth 2.0 login
2. Backend generates JWT token
3. Frontend stores token in localStorage
4. All API calls include token in Authorization header
5. Backend validates token on every request

## 💳 Subscription Flow

1. User selects plan on Pricing page
2. Redirects to Checkout page
3. Payment processed via Xendit (from dashboard, not real-time)
4. Backend updates subscription tier
5. Frontend updates access permissions

## 🗄️ Database Schema

### Core Tables
- `users` - User accounts
- `subscriptions` - Subscription records
- `projects` - ROI projects (project-level services only)

### Service Tables
- `networth_*` - Networth data (linked to user_id)
- `roi_*` - ROI data (linked to project_id)
- `tax_*` - Tax data

## 🚀 Deployment

### Frontend (Fly.io)
- Domain: `bukabox.co.id`
- Build: Vite production build
- Serve: Static files via CDN

### Backend (Fly.io)
- Domain: `api.bukabox.co.id`
- Framework: FastAPI
- Database: PostgreSQL

## 📊 Data Flow

```
User → Frontend (React) → API (FastAPI) → Database (PostgreSQL)
                ↓                            ↓
           localStorage              Xendit (payments)
```

## 🎨 Design System

- Brand colors: White + Blue gradient
- Typography: Default from globals.css
- Components: Shadcn/ui
- Icons: Lucide React
- Charts: Recharts

## 🔄 State Management

- **Global State**: React Context (Auth, Subscription)
- **Project State**: ActiveProjectProvider (ROI only)
- **Local State**: useState/useReducer
- **Server State**: React Query (planned)

## 📱 Responsive Design

- Desktop-first approach
- Mobile breakpoint: 768px (md)
- Tablet: Inherits desktop layout with adjustments
- Mobile: Stacked layout with hamburger menu
