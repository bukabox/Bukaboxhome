# BUKABOX Services Documentation

## Service Types Overview

BUKABOX memiliki dua tipe service berdasarkan scope data:

1. **Account-Level Service** - Data per user account
2. **Project-Level Service** - Data per project per user

## 1. Account-Level Service: Networth System

### Overview
BUKABOX Networth System adalah service untuk tracking net worth (kekayaan bersih) user dengan menghitung total assets dikurangi total liabilities.

### Service Characteristics
- **Scope:** Per user account
- **Access Control:** Subscription-based only
- **Guard:** `ServiceGuard(service='networth')`
- **Available in:** Starter, Pro, Enterprise plans

### Data Model

```typescript
// Frontend Types
interface NetworthAsset {
  id: string;
  userId: string;
  name: string;
  type: 'cash' | 'investment' | 'property' | 'vehicle' | 'other';
  value: number;
  acquisitionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface NetworthLiability {
  id: string;
  userId: string;
  name: string;
  type: 'loan' | 'mortgage' | 'credit_card' | 'other';
  amount: number;
  interestRate: number;
  createdAt: Date;
  updatedAt: Date;
}

interface NetworthSummary {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  assetsByType: Record<string, number>;
  liabilitiesByType: Record<string, number>;
  trend: {
    month: string;
    value: number;
  }[];
}
```

### Backend Database Schema

```sql
-- Assets table
CREATE TABLE networth_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('cash', 'investment', 'property', 'vehicle', 'other')),
  value DECIMAL(15, 2) NOT NULL,
  acquisition_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Liabilities table
CREATE TABLE networth_liabilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('loan', 'mortgage', 'credit_card', 'other')),
  amount DECIMAL(15, 2) NOT NULL,
  interest_rate DECIMAL(5, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_networth_assets_user_id ON networth_assets(user_id);
CREATE INDEX idx_networth_liabilities_user_id ON networth_liabilities(user_id);
```

### API Endpoints

```python
# Get networth summary
GET /api/networth/summary
Response: NetworthSummary

# Assets CRUD
GET    /api/networth/assets              # List all assets
POST   /api/networth/assets              # Create asset
GET    /api/networth/assets/:id          # Get asset details
PUT    /api/networth/assets/:id          # Update asset
DELETE /api/networth/assets/:id          # Delete asset

# Liabilities CRUD
GET    /api/networth/liabilities         # List all liabilities
POST   /api/networth/liabilities         # Create liability
GET    /api/networth/liabilities/:id     # Get liability details
PUT    /api/networth/liabilities/:id     # Update liability
DELETE /api/networth/liabilities/:id     # Delete liability

# Reports
GET    /api/networth/reports/trend       # Historical trend
GET    /api/networth/reports/breakdown   # Asset/Liability breakdown
```

### Frontend Pages

```
/networth               → Dashboard overview
/networth/assets        → Asset management
/networth/liabilities   → Liability management
/networth/reports       → Reports & analytics
```

### Access Flow

```
1. User navigates to /networth
   ↓
2. ServiceGuard checks:
   - isAuthenticated? → Redirect to /login if false
   - hasAccess('networth')? → Redirect to /pricing if false
   ↓
3. Component renders
   ↓
4. Fetch data: GET /api/networth/summary
   ↓
5. Backend middleware validates:
   - JWT valid?
   - Subscription active?
   - 'networth' service included in plan?
   ↓
6. Return data or 403 Forbidden
```

---

## 2. Project-Level Service: M4 ROI Tracker

### Overview
M4 ROI Tracker adalah service untuk menghitung Return on Investment (ROI) untuk project-based investments dengan tracking cash flow, asset depreciation, dan financial reports.

### Service Characteristics
- **Scope:** Per project per user
- **Access Control:** Subscription + Project ownership
- **Guard:** `ServiceGuard(service='roi')` + `ProjectGuard`
- **Available in:** Pro, Enterprise plans

### Why Project-Level?

**User dapat memiliki multiple projects:**
- Property Investment A
- Property Investment B
- Business Investment C

**Setiap project punya data independen:**
- Cash flows
- Assets & depreciation
- ROI calculations

### Data Model

```typescript
// Project Entity
interface Project {
  id: string;
  userId: string;
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  status: 'active' | 'completed' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

// Cash Flow
interface ROICashFlow {
  id: string;
  projectId: string;
  date: Date;
  type: 'inflow' | 'outflow';
  category: string;
  amount: number;
  description: string;
  createdAt: Date;
}

// Asset
interface ROIAsset {
  id: string;
  projectId: string;
  name: string;
  type: string;
  purchasePrice: number;
  purchaseDate: Date;
  usefulLife: number;  // in months
  salvageValue: number;
  depreciationMethod: 'straight_line' | 'declining_balance';
  createdAt: Date;
}

// Depreciation Schedule
interface ROIDepreciation {
  id: string;
  assetId: string;
  year: number;
  month: number;
  depreciationAmount: number;
  accumulatedDepreciation: number;
  bookValue: number;
  createdAt: Date;
}

// ROI Report
interface ROIReport {
  projectId: string;
  totalInflows: number;
  totalOutflows: number;
  netCashFlow: number;
  totalDepreciation: number;
  roi: number;
  irr: number;
  paybackPeriod: number;
}
```

### Backend Database Schema

```sql
-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cash flows table
CREATE TABLE roi_cashflows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('inflow', 'outflow')),
  category VARCHAR(100) NOT NULL,
  amount DECIMAL(15, 2) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Assets table
CREATE TABLE roi_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL,
  purchase_price DECIMAL(15, 2) NOT NULL,
  purchase_date DATE NOT NULL,
  useful_life INTEGER NOT NULL,  -- in months
  salvage_value DECIMAL(15, 2) DEFAULT 0,
  depreciation_method VARCHAR(50) DEFAULT 'straight_line',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Depreciation schedule table
CREATE TABLE roi_depreciation (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  asset_id UUID NOT NULL REFERENCES roi_assets(id) ON DELETE CASCADE,
  year INTEGER NOT NULL,
  month INTEGER NOT NULL,
  depreciation_amount DECIMAL(15, 2) NOT NULL,
  accumulated_depreciation DECIMAL(15, 2) NOT NULL,
  book_value DECIMAL(15, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(asset_id, year, month)
);

-- Indexes
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_roi_cashflows_project_id ON roi_cashflows(project_id);
CREATE INDEX idx_roi_assets_project_id ON roi_assets(project_id);
CREATE INDEX idx_roi_depreciation_asset_id ON roi_depreciation(asset_id);
```

### API Endpoints

```python
# Project Management
GET    /api/projects                    # List user's projects
POST   /api/projects                    # Create new project
GET    /api/projects/:id                # Get project details
PUT    /api/projects/:id                # Update project
DELETE /api/projects/:id                # Delete project

# Cash Flows (Project-scoped)
GET    /api/projects/:id/cashflows      # List cash flows
POST   /api/projects/:id/cashflows      # Create cash flow
PUT    /api/projects/:id/cashflows/:cfId  # Update cash flow
DELETE /api/projects/:id/cashflows/:cfId  # Delete cash flow

# Assets (Project-scoped)
GET    /api/projects/:id/assets         # List assets
POST   /api/projects/:id/assets         # Create asset
PUT    /api/projects/:id/assets/:assetId  # Update asset
DELETE /api/projects/:id/assets/:assetId  # Delete asset

# Depreciation (Asset-scoped)
GET    /api/projects/:id/assets/:assetId/depreciation  # Get schedule
POST   /api/projects/:id/assets/:assetId/depreciation/recalculate  # Recalculate

# Reports (Project-scoped)
GET    /api/projects/:id/reports/roi    # ROI calculation
GET    /api/projects/:id/reports/cashflow  # Cash flow analysis
GET    /api/projects/:id/reports/summary   # Project summary
```

### Frontend Pages

```
/roi/projects                          → Project list
/roi/project/:projectId                → Project dashboard
/roi/project/:projectId/cashflow       → Cash flow management
/roi/project/:projectId/assets         → Asset management
/roi/project/:projectId/depreciation   → Depreciation schedule
/roi/project/:projectId/reports        → ROI reports
```

### Access Flow

```
1. User navigates to /roi/projects
   ↓
2. ServiceGuard checks subscription access to 'roi'
   ↓
3. Fetch projects: GET /api/projects
   ↓
4. User selects project → Navigate to /roi/project/:projectId
   ↓
5. ActiveProjectProvider checks:
   - Project exists?
   - User owns project? (project.userId === currentUser.id)
   ↓
6. Load project data
   ↓
7. Subsequent API calls use projectId in URL
   ↓
8. Backend project_guard validates:
   - JWT valid?
   - Project exists?
   - User owns project?
   ↓
9. Return data or 403/404
```

### ActiveProjectProvider

```typescript
// Context for managing active project
interface ActiveProjectContext {
  activeProject: Project | null;
  setActiveProject: (project: Project) => void;
  clearActiveProject: () => void;
}

// Usage in component
const { activeProject } = useActiveProject();

// All API calls use activeProject.id
const cashflows = await roiService.getCashFlows(activeProject.id);
```

---

## 3. Tax Engine & Automation (Future)

### Overview
Tax Engine adalah service untuk automasi perhitungan pajak dan compliance.

### Service Characteristics
- **Scope:** Per user account (Account-Level)
- **Access Control:** Subscription-based
- **Guard:** `ServiceGuard(service='tax')`
- **Available in:** Pro, Enterprise plans
- **Status:** Planned for future implementation

### Planned Features
- Automatic tax calculation
- Tax form generation
- Compliance tracking
- Tax optimization recommendations
- Integration with government tax systems

---

## Service Comparison

| Feature | Networth | ROI Tracker | Tax Engine |
|---------|----------|-------------|------------|
| **Service Type** | Account-Level | Project-Level | Account-Level |
| **Data Scope** | Per User | Per Project | Per User |
| **Access Control** | Subscription only | Subscription + Ownership | Subscription only |
| **Multi-entity** | No (1 set per user) | Yes (Many projects per user) | No |
| **Available in** | Starter, Pro, Enterprise | Pro, Enterprise | Pro, Enterprise |
| **Status** | ✅ Implemented | ✅ Implemented | 🔄 Planned |

---

## Guard Implementation

### Frontend Guards

```typescript
// ServiceGuard.tsx - Subscription check
<Route 
  path="/networth/*" 
  element={
    <ServiceGuard service="networth">
      <NetworthPages />
    </ServiceGuard>
  } 
/>

// For ROI, combine with ActiveProjectProvider
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
# Subscription guard (Account-level service)
@router.get("/networth/summary")
@subscription_guard(service="networth")
async def get_networth_summary(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # User automatically has access if they reach here
    return networthService.get_summary(db, current_user.id)

# Project guard (Project-level service)
@router.get("/projects/{project_id}/cashflows")
@subscription_guard(service="roi")
@project_guard()
async def get_cashflows(
    project_id: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Verify ownership in guard
    project = db.query(Project).filter(
        Project.id == project_id,
        Project.user_id == current_user.id
    ).first()
    
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    return roiService.get_cashflows(db, project_id)
```

---

## Service Integration Flow

### 1. User Journey - Networth (Account-Level)

```
Login → Dashboard → View Services → Click "Networth"
  ↓
Check subscription (ServiceGuard)
  ↓
Load networth summary (GET /api/networth/summary)
  ↓
Display dashboard with:
  - Total assets
  - Total liabilities
  - Net worth
  - Trends
```

### 2. User Journey - ROI (Project-Level)

```
Login → Dashboard → View Services → Click "ROI Tracker"
  ↓
Check subscription (ServiceGuard)
  ↓
Load projects list (GET /api/projects)
  ↓
User selects project
  ↓
Set active project (ActiveProjectProvider)
  ↓
Load project data:
  - Cash flows
  - Assets
  - Depreciation schedule
  - ROI reports
  ↓
User can switch between projects
```

---

## Best Practices

### Account-Level Services
1. ✅ One data set per user
2. ✅ Simpler access control (subscription only)
3. ✅ Direct user_id foreign keys
4. ✅ No need for project context

### Project-Level Services
1. ✅ Multiple projects per user
2. ✅ Two-layer access control (subscription + ownership)
3. ✅ Always validate project ownership
4. ✅ Use ActiveProjectProvider for state management
5. ✅ Include project_id in all API endpoints

### Security
1. ✅ Always validate JWT tokens
2. ✅ Check subscription status before access
3. ✅ For project-level: Verify ownership
4. ✅ Use database-level foreign key constraints
5. ✅ Implement proper error handling (404 vs 403)

---

**Last Updated:** December 2024  
**Status:** Networth & ROI Implemented, Tax Planned
