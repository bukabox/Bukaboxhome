# 🔐 Login & Access Member Page - Quick Guide

## ✅ Login Page Sudah Diupdate!

Halaman login sekarang memiliki **Quick Test Login** untuk memudahkan akses member page tanpa perlu Google OAuth.

---

## 🚀 Cara Akses Member Page

### Method 1: Quick Test Login (Recommended untuk Testing) ⚡

1. **Buka Browser**
   ```
   http://localhost:5173/login
   ```

2. **Pilih Tier Subscription** dari 4 opsi:
   
   **a) Free Tier** (Tidak ada akses service)
   - ❌ Networth: Locked
   - ❌ ROI: Locked
   - ❌ Tax: Locked
   - Semua service cards akan menampilkan "Upgrade Now"

   **b) Starter Tier** (Akses 1 service)
   - ✅ Networth: Active
   - ❌ ROI: Locked
   - ❌ Tax: Locked
   - Bisa akses `/networth`

   **c) Pro Tier** (Akses semua - RECOMMENDED) ⭐
   - ✅ Networth: Active
   - ✅ ROI: Active
   - ✅ Tax: Active (Coming Soon)
   - Bisa akses `/networth` dan `/roi/projects`

   **d) Enterprise Tier** (Full access + priority)
   - ✅ Networth: Active
   - ✅ ROI: Active
   - ✅ Tax: Active
   - Semua features unlocked

3. **Klik tombol tier yang Anda inginkan**

4. **Otomatis redirect ke `/member` dashboard** 🎉

---

### Method 2: Google OAuth (Production-ready)

1. **Buka Login Page**
   ```
   http://localhost:5173/login
   ```

2. **Klik "Login with Google" button**

3. **Pilih akun Google Anda**

4. **Otomatis redirect ke `/member`**

5. **Set subscription tier** (via DevTools Console):
   ```javascript
   // Pro Tier (semua akses)
   localStorage.setItem('bukabox_subscription', JSON.stringify({
     tier: 'pro',
     status: 'active',
     services: { networth: true, roi: true, tax: true },
     expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
   }));
   location.reload();
   ```

---

## 📍 URL Routes Available

### Public Pages (No Login Required)
```
http://localhost:5173/                     → Homepage
http://localhost:5173/pricing              → Pricing page
http://localhost:5173/contact              → Contact page
http://localhost:5173/features/networth    → Networth feature detail
http://localhost:5173/features/roi         → ROI feature detail
http://localhost:5173/features/tax         → Tax feature detail
```

### Auth Pages
```
http://localhost:5173/login                → Login page ⭐ START HERE
http://localhost:5173/register             → Register page (placeholder)
```

### Member Pages (Requires Login) 🔒
```
http://localhost:5173/member               → Member dashboard ⭐ MAIN DASHBOARD
http://localhost:5173/member/subscription  → Subscription management
http://localhost:5173/member/settings      → Account settings
```

### Service Pages (Requires Login + Subscription Access) 🔒

**Networth Service:**
```
http://localhost:5173/networth             → Networth dashboard
http://localhost:5173/networth/assets      → Assets management (placeholder)
http://localhost:5173/networth/liabilities → Liabilities management (placeholder)
http://localhost:5173/networth/reports     → Reports (placeholder)
```

**ROI Service:**
```
http://localhost:5173/roi/projects         → Projects list
http://localhost:5173/roi/project/proj-1   → Project dashboard (demo project)
http://localhost:5173/roi/project/proj-1/cashflow      → Cash flow (placeholder)
http://localhost:5173/roi/project/proj-1/assets        → Assets (placeholder)
http://localhost:5173/roi/project/proj-1/depreciation  → Depreciation (placeholder)
http://localhost:5173/roi/project/proj-1/reports       → Reports (placeholder)
```

---

## 🎯 Quick Test Scenarios

### Scenario 1: Test Free User Experience
```bash
1. Go to http://localhost:5173/login
2. Click "Free Tier" button
3. ✅ Redirected to /member
4. ✅ See "Free" in Current Plan card
5. ✅ All services show "Locked" 🔒
6. ✅ Click "Upgrade Now" on any service → Goes to /pricing
7. ✅ See upsell banner at bottom
```

### Scenario 2: Test Pro User Experience (Recommended)
```bash
1. Go to http://localhost:5173/login
2. Click "Pro Tier" button (the green one with "Recommended" badge)
3. ✅ Redirected to /member
4. ✅ See "Pro" in Current Plan card
5. ✅ See "3" in Active Services card
6. ✅ All services show "Active" ✅
7. ✅ Click "Buka Dashboard" on Networth → Goes to /networth
8. ✅ Click "Buka Dashboard" on ROI → Goes to /roi/projects
9. ✅ No upsell banner (because already Pro)
```

### Scenario 3: Test Navigation
```bash
1. Login as Pro user
2. ✅ Click sidebar: Dashboard, Subscription, Settings
3. ✅ Click Quick Actions: all 4 cards work
4. ✅ Click service cards: navigate to dashboards
5. ✅ Click logout → back to homepage
```

### Scenario 4: Test Service Access Protection
```bash
1. Login as Free user
2. Try to access http://localhost:5173/networth directly
3. ✅ Automatically redirected to /pricing (no access)
4. Now logout and login as Pro user
5. Try to access http://localhost:5173/networth again
6. ✅ Can access! Shows networth dashboard
```

---

## 🔧 Developer Console Commands

### Check Current Login Status
```javascript
// Check user
console.log(JSON.parse(localStorage.getItem('bukabox_user')));

// Check subscription
console.log(JSON.parse(localStorage.getItem('bukabox_subscription')));
```

### Manual Login (Alternative)
```javascript
// Login as Demo User
localStorage.setItem('bukabox_user', JSON.stringify({
  email: 'demo@bukabox.com',
  name: 'Demo User',
  picture: 'https://ui-avatars.com/api/?name=Demo+User&background=2563EB&color=fff&size=128',
  id: 'demo-user-pro'
}));

// Set Pro subscription
localStorage.setItem('bukabox_subscription', JSON.stringify({
  tier: 'pro',
  status: 'active',
  services: { networth: true, roi: true, tax: true },
  expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
}));

// Redirect to member
window.location.href = '/member';
```

### Logout
```javascript
localStorage.removeItem('bukabox_user');
localStorage.removeItem('bukabox_subscription');
window.location.href = '/';
```

### Change Tier (Without Re-login)
```javascript
// Change to Free
localStorage.setItem('bukabox_subscription', JSON.stringify({
  tier: 'free',
  status: 'active',
  services: { networth: false, roi: false, tax: false }
}));
location.reload();

// Change to Starter
localStorage.setItem('bukabox_subscription', JSON.stringify({
  tier: 'starter',
  status: 'active',
  services: { networth: true, roi: false, tax: false },
  expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
}));
location.reload();

// Change to Pro
localStorage.setItem('bukabox_subscription', JSON.stringify({
  tier: 'pro',
  status: 'active',
  services: { networth: true, roi: true, tax: true },
  expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
}));
location.reload();
```

---

## 🎨 What You'll See After Login

### Member Dashboard (/member) Overview:

```
┌─────────────────────────────────────────────────────────┐
│  HEADER: BUKABOX Logo | [Avatar] Demo User | [Logout]   │
└─────────────────────────────────────────────────────────┘

┌─────────┬───────────────────────────────────────────────┐
│ SIDEBAR │ MAIN CONTENT                                  │
│         │                                               │
│ Dashboard│ Welcome back, Demo! 👋    [Upgrade Plan]    │
│ Subscr. │                                               │
│ Settings│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐        │
│         │ │ Plan │ │Active│ │Status│ │Member│        │
│ Logout  │ │ Pro  │ │  3   │ │Active│ │Since │        │
│         │ └──────┘ └──────┘ └──────┘ └──────┘        │
│         │                                               │
│         │ Your Services                                 │
│         │ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│         │ │Networth  │ │ROI Track.│ │Tax Engine│      │
│         │ │✅ Active │ │✅ Active │ │✅ Active │      │
│         │ │[Buka]    │ │[Buka]    │ │[Coming]  │      │
│         │ └──────────┘ └──────────┘ └──────────┘      │
│         │                                               │
│         │ Quick Actions                                 │
│         │ [Manage Sub] [Settings] [Plans] [Support]    │
└─────────┴───────────────────────────────────────────────┘
```

---

## 🐛 Troubleshooting

### Problem: Can't access /member after login
**Solution:**
```javascript
// Check if user is logged in
console.log(localStorage.getItem('bukabox_user'));

// If null, login again
// Go to http://localhost:5173/login and click any Quick Login button
```

### Problem: Services showing "Locked" when they should be "Active"
**Solution:**
```javascript
// Check subscription
console.log(localStorage.getItem('bukabox_subscription'));

// Fix by setting Pro tier
localStorage.setItem('bukabox_subscription', JSON.stringify({
  tier: 'pro',
  status: 'active',
  services: { networth: true, roi: true, tax: true }
}));
location.reload();
```

### Problem: Redirected to /pricing when accessing service
**Solution:**
- You don't have access to that service in your current tier
- Login as Pro tier to get access to all services
- Or check subscription in console and update it

### Problem: Page shows blank/loading forever
**Solution:**
```bash
# Clear cache and reload
1. Open DevTools (F12)
2. Right-click Reload button → "Empty Cache and Hard Reload"
3. Or clear localStorage:
   localStorage.clear();
   location.reload();
```

---

## 📝 Summary Checklist

Before testing, make sure:

- ✅ Development server is running (`npm run dev`)
- ✅ Browser is open at `http://localhost:5173`
- ✅ Go to `/login` page first
- ✅ Choose a Quick Test Login tier (Pro recommended)
- ✅ Get redirected to `/member` automatically
- ✅ Explore dashboard, services, and navigation

---

## 🎯 Next Steps After Login

1. **Explore Member Dashboard** (`/member`)
   - Check stats cards
   - Test service cards
   - Try quick actions

2. **Navigate to Services** (if Pro/Starter)
   - Click "Buka Dashboard" on Networth → `/networth`
   - Click "Buka Dashboard" on ROI → `/roi/projects`

3. **Test Subscription Management** (`/member/subscription`)
   - View current plan
   - See plan comparison
   - Check billing history (mock data)

4. **Test Account Settings** (`/member/settings`)
   - Update profile (mock)
   - Change password (mock)
   - Notifications settings (mock)

5. **Test Logout**
   - Click logout icon in header
   - Should redirect to homepage
   - Try accessing `/member` → should redirect to `/login`

---

## 🎉 You're All Set!

**Quick Start Command:**
```bash
1. Open: http://localhost:5173/login
2. Click: "Pro Tier" (green button)
3. Done! You're in the member dashboard 🚀
```

**Need Help?**
- Check the troubleshooting section above
- Open DevTools console for errors
- Check localStorage for auth/subscription data

---

**Last Updated:** December 17, 2024  
**Development Server:** http://localhost:5173  
**Login URL:** http://localhost:5173/login ⭐ START HERE
