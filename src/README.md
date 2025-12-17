# BUKABOX Monorepo

Platform subscription digital untuk financial management tools (Networth System, M4 ROI Tracker, Tax Engine & Automation).

## 🏗️ Struktur Proyek

```
BUKABOX/
├── apps/
│   ├── dashboard/          # Frontend React + Vite
│   └── api/                # Backend FastAPI (Coming Soon)
├── docs/                   # Dokumentasi
└── infra/                  # Infrastructure configs
```

## 🚀 Quick Start

### Frontend (Dashboard)

```bash
cd apps/dashboard
npm install
npm run dev
```

### Backend (API)

```bash
cd apps/api
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## 📦 Tech Stack

### Frontend
- React 18 + TypeScript
- Vite
- TailwindCSS
- React Router v6
- Google OAuth 2.0
- Recharts (for data visualization)
- Shadcn/ui components

### Backend (Planned)
- FastAPI
- PostgreSQL
- SQLAlchemy
- Xendit Payment Gateway

## 🌐 Deployment

- **Frontend**: `bukabox.co.id` (Fly.io)
- **Backend**: `api.bukabox.co.id` (Fly.io)

## 📚 Dokumentasi

- [Architecture](./docs/architecture.md)
- [Figma Mapping](./docs/figma-mapping.md)
- [Migration Guide](./docs/migration.md)

## ⚖️ License

Proprietary - BUKABOX © 2024
