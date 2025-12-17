# BUKABOX

> Financial Management Platform - Subscription-based digital services untuk mengelola keuangan pribadi dan bisnis.

[![Status](https://img.shields.io/badge/status-in%20development-yellow)]()
[![Frontend](https://img.shields.io/badge/frontend-React%2018-blue)]()
[![Backend](https://img.shields.io/badge/backend-FastAPI-green)]()

## 🎯 Project Overview

BUKABOX adalah platform manajemen keuangan berbasis subscription yang menyediakan tiga layanan utama:

1. **BUKABOX Networth System** - Track assets & liabilities untuk monitor kekayaan bersih
2. **M4 ROI Tracker** - Kalkulasi ROI untuk project-based investments dengan cash flow & depreciation
3. **Tax Engine & Automation** - Automasi perhitungan pajak dan compliance (Coming Soon)

### Key Features

- 🔐 **Google OAuth 2.0** - Secure authentication
- 💳 **Subscription Plans** - Free, Starter, Pro, Enterprise tiers
- 📊 **Service Access Control** - Role-based access ke features
- 💰 **Xendit Payment** - Indonesian payment gateway integration
- 📱 **Responsive Design** - Mobile-first approach dengan Tailwind CSS
- 🚀 **Modern Stack** - React + FastAPI + PostgreSQL

---

## 📁 Project Structure

```
BUKABOX/
│
├── apps/                               # Deployable applications
│   │
│   ├── dashboard/                      # FRONTEND (bukabox.co.id)
│   │   ├── Dockerfile
│   │   ├── fly.toml
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   │
│   │   └── src/
│   │       ├── app/                    # Core application logic
│   │       │   ├── router.tsx          # Route configuration
│   │       │   ├── AuthProvider.tsx    # Auth context
│   │       │   ├── SubscriptionProvider.tsx  # Subscription state
│   │       │   ├── ServiceGuard.tsx    # Access control guards
│   │       │   └── ActiveProjectProvider.tsx # ROI project context
│   │       │
│   │       ├── pages/                  # Page components
│   │       │   ├── auth/               # Login, register
│   │       │   ├── member/             # Master dashboard
│   │       │   ├── networth/           # Account-level service
│   │       │   └── roi/                # Project-level service
│   │       │
│   │       ├── components/             # Reusable UI components
│   │       │   ├── auth/
│   │       │   ├── landing/
│   │       │   ├── layout/
│   │       │   ├── pricing/
│   │       │   └── ui/
│   │       │
│   │       ├── services/               # API integration layer
│   │       │   ├── api.ts              # Base HTTP client
│   │       │   ├── auth.ts
│   │       │   ├── subscription.ts
│   │       │   ├── networth.ts
│   │       │   └── roi.ts
│   │       │
│   │       ├── hooks/                  # Custom React hooks
│   │       │   ├── useAuth.ts
│   │       │   ├── useSubscription.ts
│   │       │   └── useActiveProject.ts
│   │       │
│   │       └── utils/                  # Utilities
│   │           ├── constants.ts
│   │           └── formatter.ts
│   │
│   └── api/                            # BACKEND (api.bukabox.co.id)
│       ├── Dockerfile
│       ├── fly.toml
│       ├── requirements.txt
│       │
│       └── app/
│           ├── main.py                 # FastAPI application
│           ├── config.py               # Configuration
│           │
│           ├── database/
│           │   ├── session.py          # DB connection
│           │   └── models.py           # Base models
│           │
│           ├── middleware/
│           │   ├── auth_guard.py       # JWT authentication
│           │   ├── subscription_guard.py # Subscription verification
│           │   └── project_guard.py    # Project ownership check
│           │
│           ├── modules/
│           │   ├── auth/               # Authentication
│           │   ├── users/              # User management
│           │   ├── subscription/       # Subscription & billing
│           │   ├── projects/           # Project entity (ROI)
│           │   └── services/
│           │       ├── networth/       # Networth service
│           │       └── roi/            # ROI service
│           │
│           └── utils/
│               ├── jwt.py
│               ├── password.py
│               └── validators.py
│
├── infra/                              # Infrastructure configs
│   ├── fly/
│   │   ├── dashboard.md
│   │   └── api.md
│   └── docker/
│       └── docker-compose.yml
│
├── docs/                               # Documentation
│   ├── architecture.md                 # System architecture
│   ├── services.md                     # Services documentation
│   ├── migration.md                    # Migration guide
│   └── USER_DASHBOARD.md               # User dashboard docs
│
└── README.md                           # This file
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (for frontend)
- **Python** 3.11+ (for backend)
- **PostgreSQL** 14+ (for database)
- **Docker** (optional, for containerized development)

### Frontend Setup

```bash
# Navigate to frontend
cd apps/dashboard

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your values

# Run development server
npm run dev

# Open http://localhost:5173
```

### Backend Setup

```bash
# Navigate to backend
cd apps/api

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment variables
cp .env.example .env
# Edit .env with your values

# Run migrations
alembic upgrade head

# Run development server
uvicorn app.main:app --reload

# Open http://localhost:8000/docs for API documentation
```

### Database Setup

```bash
# Using Docker Compose
docker-compose up -d postgres

# Or install PostgreSQL locally and create database
createdb bukabox
```

---

## 🏗️ Architecture

### Tech Stack

#### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v4
- **State Management:** React Context API
- **HTTP Client:** Native Fetch API

#### Backend
- **Framework:** FastAPI (Python)
- **Database:** PostgreSQL with SQLAlchemy ORM
- **Authentication:** JWT + Google OAuth 2.0
- **Validation:** Pydantic
- **Payment Gateway:** Xendit

#### Infrastructure
- **Hosting:** Fly.io (Frontend + Backend + Database)
- **Domain:** bukabox.co.id (Frontend), api.bukabox.co.id (Backend)
- **SSL:** Automatic via Fly.io

### Service Types

BUKABOX memiliki 2 tipe service:

#### 1. Account-Level Service (Networth)
- **Scope:** Data per user account
- **Access:** Subscription-based only
- **Example:** User's total assets & liabilities

#### 2. Project-Level Service (ROI Tracker)
- **Scope:** Data per project per user
- **Access:** Subscription + Project ownership
- **Example:** Multiple investment projects

📖 Read more in [docs/services.md](docs/services.md)

---

## 📊 Subscription Plans

| Feature | Free | Starter | Pro | Enterprise |
|---------|------|---------|-----|------------|
| **Price** | Rp 0 | Rp 99k/mo | Rp 199k/mo | Custom |
| **Networth System** | ❌ | ✅ | ✅ | ✅ |
| **ROI Tracker** | ❌ | ❌ | ✅ | ✅ |
| **Tax Engine** | ❌ | ❌ | ✅ | ✅ |
| **Support** | Community | Email | Priority | 24/7 Phone |

---

## 🔐 Authentication Flow

1. User clicks "Login with Google"
2. Google OAuth consent screen
3. Receive credential (JWT token)
4. Frontend decodes token → Extract user info
5. Backend verifies & creates session
6. Store access token in localStorage
7. All API requests include: `Authorization: Bearer {token}`

---

## 🛡️ Access Control

### Frontend Guards

```typescript
// Subscription-based access
<Route 
  path="/networth/*" 
  element={
    <ServiceGuard service="networth">
      <NetworthPages />
    </ServiceGuard>
  } 
/>

// Subscription + Project ownership
<Route 
  path="/roi/project/:projectId/*" 
  element={
    <ServiceGuard service="roi">
      <ActiveProjectProvider>
        <ProjectPages />
      </ActiveProjectProvider>
    </ServiceGuard>
  } 
/>
```

### Backend Guards

```python
# Subscription guard
@router.get("/networth/summary")
@subscription_guard(service="networth")
async def get_networth_summary(current_user: User = Depends(get_current_user)):
    return networthService.get_summary(current_user.id)

# Project guard
@router.get("/projects/{project_id}/cashflows")
@subscription_guard(service="roi")
@project_guard()
async def get_cashflows(project_id: str, current_user: User = Depends(get_current_user)):
    return roiService.get_cashflows(project_id)
```

---

## 📱 User Dashboard

User Dashboard adalah area member yang dilindungi autentikasi:

### Pages

- **`/member`** - Overview dashboard dengan stats & quick actions
- **`/member/subscription`** - Manage subscription & billing
- **`/member/settings`** - Account settings & preferences

### Features

- ✅ Subscription tier display
- ✅ Active services count
- ✅ Service cards dengan status (Active/Locked)
- ✅ Quick actions (Upgrade, Settings, Support)
- ✅ Plan comparison & upgrade flow
- ✅ Billing history
- ✅ Profile management
- ✅ Security settings (Password, 2FA)
- ✅ Notification preferences

📖 Read more in [docs/USER_DASHBOARD.md](apps/dashboard/USER_DASHBOARD.md)

---

## 🔌 API Documentation

### Base URL
- **Development:** `http://localhost:8000`
- **Production:** `https://api.bukabox.co.id`

### Endpoints

#### Authentication
```
POST   /api/auth/login          # Email/password login
POST   /api/auth/google         # Google OAuth
POST   /api/auth/refresh        # Refresh token
POST   /api/auth/logout         # Logout
```

#### Subscriptions
```
GET    /api/subscriptions/me    # Get current subscription
POST   /api/subscriptions       # Create subscription
PUT    /api/subscriptions/:id   # Update subscription
DELETE /api/subscriptions/:id   # Cancel subscription
GET    /api/billing/history     # Get billing history
```

#### Networth Service
```
GET    /api/networth/summary    # Account summary
GET    /api/networth/assets     # List assets
POST   /api/networth/assets     # Create asset
PUT    /api/networth/assets/:id # Update asset
DELETE /api/networth/assets/:id # Delete asset
```

#### ROI Service
```
GET    /api/projects            # List projects
POST   /api/projects            # Create project
GET    /api/projects/:id        # Get project
GET    /api/projects/:id/cashflows     # Cash flows
GET    /api/projects/:id/reports/roi   # ROI calculation
```

📖 Full API docs available at `/docs` (Swagger UI) when running backend

---

## 🧪 Testing

### Frontend Tests
```bash
cd apps/dashboard
npm run test
npm run test:coverage
```

### Backend Tests
```bash
cd apps/api
pytest
pytest --cov=app tests/
```

### E2E Tests
```bash
# Coming soon
```

---

## 🚢 Deployment

### Frontend (Fly.io)

```bash
cd apps/dashboard

# Build
npm run build

# Deploy
fly deploy
```

### Backend (Fly.io)

```bash
cd apps/api

# Deploy
fly deploy

# Run migrations
fly ssh console -a bukabox-api
alembic upgrade head
```

### Environment Variables

#### Frontend
```env
VITE_API_BASE_URL=https://api.bukabox.co.id
VITE_GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
```

#### Backend
```env
DATABASE_URL=postgresql://...
JWT_SECRET=xxx
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
XENDIT_API_KEY=xxx
```

---

## 📚 Documentation

- [Architecture](docs/architecture.md) - System architecture & design
- [Services](docs/services.md) - Service types & implementation
- [Migration](docs/migration.md) - Migration from old structure
- [User Dashboard](apps/dashboard/USER_DASHBOARD.md) - Dashboard documentation

---

## 🛠️ Development

### Code Style

- **Frontend:** ESLint + Prettier
- **Backend:** Black + isort + flake8

### Commit Convention

```
feat: Add new feature
fix: Bug fix
docs: Documentation update
style: Code style changes
refactor: Code refactoring
test: Add tests
chore: Maintenance tasks
```

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This project is proprietary and confidential.

---

## 👥 Team

- **Project Lead:** [Your Name]
- **Frontend:** [Team Members]
- **Backend:** [Team Members]
- **Design:** [Team Members]

---

## 📞 Support

- **Email:** support@bukabox.com
- **Documentation:** [docs/](docs/)
- **Issues:** [GitHub Issues](https://github.com/your-org/bukabox/issues)

---

## 🗺️ Roadmap

### Phase 1: MVP (Current) ✅
- [x] Landing pages & pricing
- [x] Google OAuth authentication
- [x] Member dashboard
- [x] Subscription management
- [x] Services layer
- [ ] Backend API implementation
- [ ] Database setup
- [ ] Payment integration (Xendit)

### Phase 2: Core Services
- [ ] Networth System implementation
- [ ] ROI Tracker implementation
- [ ] Reports & analytics
- [ ] Mobile responsive improvements

### Phase 3: Advanced Features
- [ ] Tax Engine & Automation
- [ ] Multi-currency support
- [ ] Data export (PDF, Excel)
- [ ] Team collaboration (Enterprise)

### Phase 4: Scale
- [ ] API rate limiting
- [ ] Caching layer (Redis)
- [ ] Monitoring & alerts
- [ ] Performance optimization

---

## 📊 Project Status

- **Architecture:** ✅ Complete
- **Frontend Structure:** ✅ Complete (85%)
- **Backend Structure:** 🔄 In Progress (30%)
- **Database:** ⏳ Planned
- **Deployment:** ⏳ Planned
- **Documentation:** ✅ Complete

**Last Updated:** December 17, 2024

---

Made with ❤️ by BUKABOX Team
