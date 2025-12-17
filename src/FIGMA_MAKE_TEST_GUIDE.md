# 🎯 BUKABOX - Figma Make Testing Guide

## ✅ Login Flow Sudah Diupdate!

Sekarang Anda bisa dengan mudah **login dan akses member page** langsung di Figma Make!

---

## 🚀 CARA LOGIN & AKSES MEMBER PAGE (3 Langkah)

### **Step 1: Buka Login Page**

Scroll ke bawah pada preview Figma Make, atau klik link di navbar:
- Cari tombol **"Login"** di navbar homepage
- Atau scroll ke section CTA yang ada tombol login
- Atau navigate manual ke URL `/login`

### **Step 2: Pilih Quick Test Login**

Anda akan lihat 4 pilihan tier:

```
┌─────────────────────────────────────────┐
│  [Free Tier]                            │  ← Semua service locked
│  [Starter Tier]                         │  ← Hanya Networth aktif
│  [Pro Tier] ⭐ RECOMMENDED              │  ← Semua service aktif
│  [Enterprise Tier]                      │  ← Full premium access
└─────────────────────────────────────────┘
```

**🎯 Klik "Pro Tier" (tombol hijau dengan badge "Recommended")**

### **Step 3: Otomatis Redirect ke Member Page!**

Setelah klik, Anda akan:
1. ✅ Melihat loading state "Logging in... Redirecting to dashboard"
2. ✅ Otomatis redirect ke halaman `/member` dalam 0.3 detik
3. ✅ Navbar berubah → menampilkan nama "Demo User" dan tombol "Dashboard"
4. ✅ Melihat member dashboard lengkap dengan stats dan services

---

## 🎨 Apa Yang Akan Anda Lihat Setelah Login

### **Navbar (Desktop):**
```
BUKABOX | Home | Features | Pricing | Dashboard | [Demo User] | [Logout]
                                        ↑ NEW!     ↑ Avatar      ↑ Icon
```

### **Member Dashboard:**
```
┌──────────────────────────────────────────────────────────┐
│  BUKABOX         Dashboard | [Demo User Avatar] | Logout │
├──────────┬───────────────────────────────────────────────┤
│          │  Welcome back, Demo! 👋    [Upgrade Plan]     │
│ Sidebar  │                                                │
│          │  [Current Plan] [Active Services] [Status]... │
│ • Dashboard                                               │
│ • Subscr.│  Your Services:                                │
│ • Settings│ ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│          │ │Networth │ │ROI Track│ │Tax Engine│         │
│ • Logout │ │✅ Active│ │✅ Active│ │✅ Active │         │
│          │ │[Buka]   │ │[Buka]   │ │[Coming] │         │
│          │ └─────────┘ └─────────┘ └─────────┘         │
│          │                                                │
│          │  Quick Actions:                                │
│          │  [Manage Sub] [Settings] [Plans] [Support]    │
└──────────┴───────────────────────────────────────────────┘
```

---

## 🧭 Navigasi Setelah Login

### **Dari Navbar:**
- **Click "Dashboard"** → Kembali ke `/member` 
- **Click nama/avatar** → Stay di current page (info display)
- **Click "Logout"** → Logout dan kembali ke homepage

### **Dari Member Dashboard:**

**Via Sidebar:**
- **Dashboard** → `/member`
- **Subscription** → `/member/subscription`
- **Settings** → `/member/settings`

**Via Service Cards:**
- **Networth "Buka Dashboard"** → `/networth` (Pro tier)
- **ROI "Buka Dashboard"** → `/roi/projects` (Pro tier)
- **Tax "Coming Soon"** → Placeholder (not yet available)

**Via Quick Actions:**
- **Manage Subscription** → `/member/subscription`
- **Account Settings** → `/member/settings`
- **Explore Plans** → `/pricing`
- **Contact Support** → Email link

---

## 🎯 Testing Scenarios di Figma Make

### ✅ Scenario 1: Full Access Testing (Pro Tier)

**Steps:**
1. Buka `/login`
2. Klik **"Pro Tier"** (green button)
3. Wait for redirect (0.3s)
4. Landed on `/member` dashboard

**Expected Results:**
- ✅ See "Pro" in Current Plan card
- ✅ See "3" in Active Services card
- ✅ All service cards show "Active" ✅ badge
- ✅ Can click "Buka Dashboard" on Networth → Navigate to `/networth`
- ✅ Can click "Buka Dashboard" on ROI → Navigate to `/roi/projects`
- ✅ Navbar shows "Dashboard" button
- ✅ Navbar shows "Demo User" with avatar

### ✅ Scenario 2: Limited Access Testing (Starter Tier)

**Steps:**
1. Logout first (if logged in)
2. Buka `/login`
3. Klik **"Starter Tier"** (blue button)
4. Wait for redirect

**Expected Results:**
- ✅ See "Starter" in Current Plan card
- ✅ See "1" in Active Services card
- ✅ Networth shows "Active" ✅
- ✅ ROI shows "Locked" 🔒
- ✅ Tax shows "Locked" 🔒
- ✅ Can access `/networth`
- ✅ Cannot access `/roi` (redirects to `/pricing`)

### ✅ Scenario 3: Free User Testing

**Steps:**
1. Logout
2. Buka `/login`
3. Klik **"Free Tier"** (gray button)

**Expected Results:**
- ✅ See "Free" in stats
- ✅ All services show "Locked" 🔒
- ✅ All buttons say "Upgrade Now"
- ✅ See upsell banner at bottom
- ✅ Clicking service → Goes to `/pricing`

---

## 🔄 Switching Between Tiers

### Method 1: Re-login
```
1. Click "Logout" in navbar
2. Go back to `/login`
3. Choose different tier
4. See updated access immediately
```

### Method 2: Browser Console (Advanced)
```javascript
// Open DevTools (F12 or Inspect)
// Paste this in Console:

// Switch to Pro
localStorage.setItem('bukabox_subscription', JSON.stringify({
  tier: 'pro',
  status: 'active',
  services: { networth: true, roi: true, tax: true }
}));
location.reload();

// Switch to Free
localStorage.setItem('bukabox_subscription', JSON.stringify({
  tier: 'free',
  status: 'active',
  services: { networth: false, roi: false, tax: false }
}));
location.reload();
```

---

## 🎨 UI Changes After Login

### Before Login (Public Navbar):
```
BUKABOX | Home | Features | Pricing
```

### After Login (Authenticated Navbar):
```
BUKABOX | Home | Features | Pricing | Dashboard | [Demo User] | [Logout]
                                        ↑ NEW!
```

**New Elements:**
1. **"Dashboard" button** → Quick access to `/member`
2. **User info pill** → Shows avatar + name (blue background)
3. **Logout icon button** → Click to logout

---

## 📱 Mobile Experience

On mobile (responsive view):

**Before Login:**
```
BUKABOX                [☰]
```

**After Login - Hamburger Menu:**
```
BUKABOX                [✕]

Home
Features  
Pricing

────────────────
[Avatar] Demo User
         demo@bukabox.com

👤 Dashboard
🚪 Logout
```

---

## 🔧 What's Been Fixed

### ✅ Previous Issue:
- Login button clicked → User set in navbar → **No redirect** ❌
- Had to manually navigate to `/member`

### ✅ Current Solution:
- Login button clicked → User set → **Auto redirect to `/member`** ✅
- Uses `window.location.href` for reliable redirect in Figma Make
- Instant access to member dashboard (0.3s delay)

### ✅ Additional Improvements:
- **"Dashboard" button in navbar** → One-click access to `/member` anytime
- **Better visual feedback** → Loading state during redirect
- **Clearer flow** → Login → Redirect → Dashboard (seamless)

---

## 🎯 Quick Access Flow Chart

```
Landing Page (/)
      ↓
Click "Login" or scroll to CTA
      ↓
Login Page (/login)
      ↓
Click "Pro Tier" ⭐
      ↓
[Loading 0.3s...]
      ↓
Member Dashboard (/member) ✅
      ↓
┌─────────┬─────────┬─────────┐
↓         ↓         ↓         ↓
Networth  ROI    Settings  Logout
(/networth) (/roi/projects)
```

---

## 💡 Tips untuk Testing di Figma Make

### 1. **Gunakan Pro Tier untuk demo lengkap**
   - Full access ke semua features
   - Bisa explore semua halaman
   - Best untuk showcase

### 2. **Test Navbar "Dashboard" button**
   - Setelah login, ada tombol "Dashboard" baru
   - Klik untuk cepat kembali ke `/member`
   - Works from any page

### 3. **Test Service Access**
   - Pro: Bisa akses Networth + ROI
   - Starter: Hanya Networth
   - Free: Semua locked

### 4. **Test Logout Flow**
   - Klik logout icon di navbar
   - Check bahwa redirect ke homepage
   - Check bahwa "Dashboard" button hilang

### 5. **Check Responsive**
   - Toggle mobile view di browser
   - Check hamburger menu
   - Check mobile dashboard layout

---

## 🐛 Troubleshooting di Figma Make

### Issue: Login tidak redirect

**Solution:**
- Tunggu 0.3 detik (ada delay kecil)
- Jika masih tidak redirect, refresh page
- Check browser console untuk errors

### Issue: Navbar tidak update setelah login

**Solution:**
- Hard refresh: `Ctrl + Shift + R` (Windows) atau `Cmd + Shift + R` (Mac)
- Atau clear localStorage: F12 → Console → `localStorage.clear()` → Reload

### Issue: "Dashboard" button tidak muncul di navbar

**Solution:**
- Check bahwa user sudah login (cek localStorage)
- Refresh page
- Re-login jika perlu

### Issue: Service cards semua locked padahal Pro tier

**Solution:**
```javascript
// Open Console (F12)
// Fix subscription:
localStorage.setItem('bukabox_subscription', JSON.stringify({
  tier: 'pro',
  status: 'active',
  services: { networth: true, roi: true, tax: true }
}));
location.reload();
```

---

## ✅ Checklist Testing

**Before Testing:**
- [ ] Figma Make preview is loaded
- [ ] Can see homepage with navbar
- [ ] Can scroll or navigate to login page

**During Login:**
- [ ] Click Quick Test Login button (any tier)
- [ ] See loading message "Logging in..."
- [ ] Page redirects automatically (0.3s)

**After Login:**
- [ ] Landed on `/member` dashboard
- [ ] Navbar shows "Dashboard" button
- [ ] Navbar shows user avatar + name
- [ ] Navbar shows logout icon
- [ ] Can see member dashboard content
- [ ] Can navigate via sidebar
- [ ] Can access services (if have access)
- [ ] Can logout successfully

---

## 🎉 Summary

### What Works Now:
✅ **Login Flow:** Click tier → Auto redirect to `/member`  
✅ **Navbar Updates:** Shows Dashboard button + user info  
✅ **Member Access:** Can see full dashboard immediately  
✅ **Navigation:** Can navigate to all member pages  
✅ **Service Access:** Tier-based access control works  
✅ **Logout:** Clean logout flow back to homepage  

### Best Way to Test:
```
1. Open Figma Make preview
2. Navigate to /login page
3. Click "Pro Tier" (green button) ⭐
4. Wait 0.3s
5. Enjoy member dashboard! 🎉
```

---

## 🚀 Ready to Test!

**Quick Start:**
1. **Scroll down** pada Figma Make preview (atau klik Login di navbar)
2. **Click "Pro Tier"** (tombol hijau)
3. **Done!** Anda sudah di member dashboard

**Explore:**
- Click "Dashboard" di navbar → `/member`
- Click "Buka Dashboard" di service cards → Service pages
- Click sidebar links → Other member pages
- Click "Logout" → Back to homepage

---

**Happy Testing!** 🎉

Jika ada masalah atau pertanyaan, check troubleshooting section di atas atau inspect browser console untuk error messages.

---

**Last Updated:** December 17, 2024  
**Environment:** Figma Make  
**Status:** ✅ Ready for Testing  
**Login URL:** Scroll to login section atau navigate ke `/login`
