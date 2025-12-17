# 🚀 Quick Start Guide - BUKABOX

## Prerequisites

Pastikan sudah terinstall:
- ✅ **Node.js** 18+ ([Download](https://nodejs.org/))
- ✅ **npm** atau **yarn**
- ✅ **Git**

## Setup dalam 3 Langkah

### 1️⃣ Clone & Setup

```bash
# Clone repository (jika dari git)
git clone https://github.com/your-org/bukabox.git
cd bukabox

# Atau jika sudah ada, masuk ke folder
cd apps/dashboard
```

### 2️⃣ Install Dependencies

```bash
# Install packages
npm install

# Atau menggunakan yarn
yarn install
```

### 3️⃣ Setup Environment & Run

```bash
# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

**✨ Done! Buka browser di:** http://localhost:5173

---

## 📋 Detailed Setup (Jika Ada Masalah)

### Step-by-Step Installation

```bash
# 1. Masuk ke folder dashboard
cd apps/dashboard

# 2. Cek Node.js version (harus 18+)
node --version

# 3. Install dependencies
npm install

# 4. Setup environment variables
cp .env.example .env

# 5. Edit .env jika perlu
# nano .env  (Linux/Mac)
# notepad .env  (Windows)

# 6. Run development server
npm run dev
```

### Environment Variables

Edit file `.env`:

```env
# API Backend (saat ini mock, nanti akan connect ke real API)
VITE_API_BASE_URL=http://localhost:8000

# Google OAuth (sudah ada default, bisa diganti dengan milik sendiri)
VITE_GOOGLE_CLIENT_ID=259632371100-lcvi0bedl024rjgl3t2s1q77oaglb9qu.apps.googleusercontent.com
```

---

## 🎯 Akses Halaman

### Public Pages (Langsung Bisa Diakses)

```bash
# Homepage
http://localhost:5173/

# Pricing
http://localhost:5173/pricing

# Contact
http://localhost:5173/contact

# Feature Details
http://localhost:5173/features/networth
http://localhost:5173/features/roi
http://localhost:5173/features/tax
```

### Protected Pages (Perlu Login)

```bash
# 1. Login dulu
http://localhost:5173/login

# 2. Klik "Login with Google"

# 3. Setelah login, bisa akses:
http://localhost:5173/member              # Dashboard
http://localhost:5173/member/subscription # Subscription
http://localhost:5173/member/settings     # Settings

# 4. Service pages (jika punya subscription)
http://localhost:5173/networth            # Networth System
http://localhost:5173/roi/projects        # ROI Tracker
```

---

## 🔐 Testing Login

### Cara Login untuk Development

1. **Buka halaman login:**
   ```
   http://localhost:5173/login
   ```

2. **Klik "Login with Google"**

3. **Pilih akun Google Anda**

4. **Setelah berhasil:**
   - Otomatis redirect ke `/member`
   - User info tersimpan di localStorage
   - Bisa akses semua protected pages

### Mock Subscription untuk Testing

Saat ini menggunakan mock data. Default subscription setelah login:

```javascript
// Default mock subscription (bisa diubah di DevTools)
{
  tier: 'pro',          // free, starter, pro, enterprise
  status: 'active',
  services: ['networth', 'roi', 'tax']
}
```

**Cara ubah subscription untuk testing:**

1. Buka browser DevTools (F12)
2. Console tab
3. Jalankan:
   ```javascript
   // Set ke Free plan (tidak ada akses service)
   localStorage.setItem('bukabox_subscription', JSON.stringify({
     tier: 'free',
     status: 'active',
     services: []
   }));
   
   // Set ke Starter plan (akses networth saja)
   localStorage.setItem('bukabox_subscription', JSON.stringify({
     tier: 'starter',
     status: 'active',
     services: ['networth']
   }));
   
   // Set ke Pro plan (akses semua)
   localStorage.setItem('bukabox_subscription', JSON.stringify({
     tier: 'pro',
     status: 'active',
     services: ['networth', 'roi', 'tax']
   }));
   
   // Refresh page
   location.reload();
   ```

---

## 🧭 Navigation Flow

```
1. Start at Homepage (/)
   ↓
2. Click "Login" → /login
   ↓
3. Login with Google
   ↓
4. Redirect to Member Dashboard (/member)
   ↓
5. Navigate via Sidebar:
   - Dashboard
   - Subscription
   - Settings
   ↓
6. Access Services (if subscribed):
   - Click "Open Networth" → /networth
   - Click "Open ROI" → /roi/projects
```

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Run tests (when available)
npm run test
```

---

## 📱 Testing Responsive Design

### Desktop View
```
Browser width: 1280px+
- Full sidebar visible
- Grid layouts
- Desktop navigation
```

### Tablet View
```
Browser width: 768px - 1279px
- Collapsible sidebar
- Adjusted grid
- Touch-friendly
```

### Mobile View
```
Browser width: < 768px
- Hamburger menu
- Stacked layout
- Mobile-first design
```

**Cara Test:**
1. Buka DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Pilih device (iPhone, iPad, dll)

---

## 🔍 Troubleshooting

### Port Sudah Digunakan

**Error:** `Port 5173 is already in use`

**Solution:**
```bash
# Kill process di port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9

# Atau gunakan port lain
npm run dev -- --port 3000
```

### Module Not Found

**Error:** `Cannot find module '@/...'`

**Solution:**
```bash
# Re-install dependencies
rm -rf node_modules
npm install

# Restart dev server
npm run dev
```

### Google OAuth Error

**Error:** `invalid_client` atau OAuth tidak jalan

**Solution:**
1. Pastikan `.env` file ada
2. Check `VITE_GOOGLE_CLIENT_ID` di `.env`
3. Restart dev server setelah edit `.env`
4. Clear browser cache

### Build Error

**Error:** Build gagal

**Solution:**
```bash
# Clear cache dan rebuild
npm run clean  # jika ada
rm -rf dist
npm run build
```

---

## 📂 Folder Structure (Quick Reference)

```
apps/dashboard/
├── src/
│   ├── app/              # Core logic (Router, Providers, Guards)
│   ├── pages/            # Page components
│   │   ├── landing/      # Homepage
│   │   ├── pricing/      # Pricing page
│   │   ├── contact/      # Contact page
│   │   ├── auth/         # Login, register
│   │   ├── member/       # Member dashboard
│   │   ├── networth/     # Networth service
│   │   └── roi/          # ROI service
│   ├── components/       # Reusable components
│   ├── services/         # API integration
│   ├── hooks/            # Custom hooks
│   └── utils/            # Utilities
├── .env.example          # Environment template
├── .env                  # Your environment (don't commit!)
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

---

## 🎨 Customization

### Change Colors

Edit `src/styles/globals.css`:

```css
:root {
  /* Primary colors (Blue) */
  --color-primary: #2563eb;      /* Biru utama */
  --color-primary-dark: #1e40af; /* Biru gelap */
  
  /* Change to your brand colors */
  --color-primary: #your-color;
}
```

### Change Logo/Branding

1. Edit text "BUKABOX" di components
2. Ganti font jika perlu di `globals.css`
3. Update favicon di `index.html`

---

## 📚 Dokumentasi Lainnya

- **[Pages URL Guide](PAGES_URL_GUIDE.md)** - Semua URL & halaman
- **[Architecture](docs/architecture.md)** - System architecture
- **[Services](docs/services.md)** - Service documentation
- **[User Dashboard](apps/dashboard/USER_DASHBOARD.md)** - Dashboard guide
- **[Migration](docs/migration.md)** - Migration from old structure

---

## 🚀 Next Steps

1. **Explore Pages**
   - Jelajahi semua halaman
   - Test navigation
   - Try login flow

2. **Test Features**
   - Member dashboard
   - Subscription management
   - Service access control

3. **Customize**
   - Edit content
   - Change colors
   - Add features

4. **Backend Integration**
   - Wait for backend API
   - Update service endpoints
   - Test real data flow

---

## 💡 Tips

### Hot Module Replacement (HMR)
- Setiap save file, halaman otomatis update
- Tidak perlu refresh manual
- State tetap terjaga

### React DevTools
```bash
# Install extension:
# Chrome: React Developer Tools
# Firefox: React DevTools

# Gunakan untuk inspect:
# - Component tree
# - Props & State
# - Context values
```

### Browser Console
```bash
# Check user state
JSON.parse(localStorage.getItem('bukabox_user'))

# Check subscription
JSON.parse(localStorage.getItem('bukabox_subscription'))

# Check ROI projects
JSON.parse(localStorage.getItem('bukabox_roi_projects_your@email.com'))
```

---

## ✅ Checklist

Setup:
- [ ] Node.js 18+ installed
- [ ] Clone/download project
- [ ] `cd apps/dashboard`
- [ ] `npm install`
- [ ] Copy `.env.example` to `.env`
- [ ] `npm run dev`

Testing:
- [ ] Open http://localhost:5173
- [ ] Navigate to /pricing
- [ ] Navigate to /contact
- [ ] Login with Google
- [ ] Access /member dashboard
- [ ] Test subscription page
- [ ] Test settings page
- [ ] Try service pages (if subscribed)

---

**Need Help?**
- Check [PAGES_URL_GUIDE.md](PAGES_URL_GUIDE.md) untuk detail URL
- Check [Troubleshooting](#troubleshooting) section
- Open browser console untuk debug
- Check terminal untuk error messages

**Happy Coding! 🎉**
