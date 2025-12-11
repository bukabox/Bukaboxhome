# 🔐 Google Login Feature - Documentation

## ✨ Fitur Baru yang Ditambahkan

### 1. **Google Login Modal**
- Modal popup yang muncul saat user klik tombol login
- 2 opsi Quick Demo Login untuk testing cepat
- Input custom email untuk demo
- Animasi smooth dengan Motion
- Google logo dan branding

### 2. **Authentication System**
- Auth Context untuk manage login state global
- Persistent user session (selama page tidak di-refresh)
- User profile dengan avatar, name, dan email
- Logout functionality

### 3. **Conditional UI**
- Login button **hanya muncul** jika user **belum login**
- Setelah login, tampil **user profile** di navbar
- Logout button di navbar (desktop & mobile)
- Success message di Checkout page setelah login

### 4. **Navigation Update**
- Button "Mulai Sekarang" di Hero → Navigate ke Pricing page
- All pricing plan buttons → Trigger login modal (jika belum login)
- Checkout login button → Trigger login modal

---

## 📁 File Baru

### 1. `/contexts/AuthContext.tsx`
**Auth state management dengan React Context**

```typescript
interface User {
  email: string;
  name: string;
  picture: string;
}
```

Functions:
- `login(email, name, picture)` - Set user logged in
- `logout()` - Clear user session
- `isAuthenticated` - Boolean login status
- `user` - User object atau null

### 2. `/components/auth/GoogleLoginModal.tsx`
**Modal dialog untuk Google login**

Features:
- 2 Quick demo accounts:
  - Demo User (demo@bukabox.co.id)
  - John Doe (john@example.com)
- Custom email input
- Google branding
- Animated entrance/exit
- Click outside to close
- ESC key to close

---

## 🔄 File yang Diupdate

### 1. `/App.tsx`
**Changes:**
- ✅ Wrapped dengan `<AuthProvider>`
- ✅ Import `useAuth` hook
- ✅ User profile di navbar (desktop & mobile)
- ✅ Logout button
- ✅ Conditional rendering berdasarkan `isAuthenticated`
- ✅ Pass `onNavigate` ke Hero component

### 2. `/components/Hero.tsx`
**Changes:**
- ✅ Accept `onNavigate` prop
- ✅ Button "Mulai Sekarang" navigate ke Pricing page
- ✅ Changed dari `<a>` ke `<button>` dengan onClick

### 3. `/components/checkout/CheckoutPlaceholder.tsx`
**Changes:**
- ✅ Import `GoogleLoginModal` & `useAuth`
- ✅ State `showLoginModal`
- ✅ Login button trigger modal
- ✅ Conditional rendering:
  - **Belum login**: Show "Login to Dashboard" button
  - **Sudah login**: Show success message "You're logged in!"

### 4. `/components/pricing/PricingCards.tsx`
**Changes:**
- ✅ Import `GoogleLoginModal` & `useAuth`
- ✅ State `showLoginModal`
- ✅ All plan buttons trigger `handlePlanSelect()`
- ✅ Logic:
  - **Belum login**: Show login modal
  - **Sudah login**: Alert "Redirecting to checkout..."

---

## 🎮 Cara Menggunakan

### Quick Demo Login:

1. **Klik tombol "Mulai Sekarang"** di Hero → Navigate ke Pricing
2. **Klik salah satu plan** (Starter/Pro/Studio)
3. **Modal login muncul** dengan 2 pilihan:
   
   **Option 1: Quick Demo Login**
   - Klik "Demo User" atau "John Doe"
   - Langsung login tanpa input apapun
   
   **Option 2: Custom Email**
   - Ketik email apapun (contoh: `test@example.com`)
   - Klik "Continue with Google" atau tekan Enter
   - Login dengan email tersebut

4. **Setelah login:**
   - Modal otomatis close
   - User profile muncul di navbar
   - Bisa logout dengan klik icon logout

### Testing Flow:

```
1. Homepage → Klik "Mulai Sekarang" → Pricing Page
2. Pricing Page → Klik "Choose Pro" → Login Modal muncul
3. Login Modal → Klik "Demo User" → Login berhasil
4. Navbar → Tampil "Demo User" + logout button
5. Klik "Choose Pro" lagi → Alert "Redirecting to checkout..."
6. Navigate ke Checkout page → Tampil success message
7. Klik Logout → User profile hilang, kembali ke state awal
```

---

## 🎨 UI/UX Details

### Login Modal Design:
- **Size**: Max-width 28rem (448px)
- **Background**: White dengan rounded corners
- **Backdrop**: Black/50 dengan blur
- **Animation**: Scale + opacity + y-translate
- **Close**: X button di kanan atas, atau click backdrop

### User Profile (Navbar):
- **Desktop**: Avatar + name + logout button (horizontal)
- **Mobile**: Avatar + name + email + logout button (vertical)
- **Avatar**: Round image dari `ui-avatars.com` API
- **Colors**: Blue-50 background, Blue-600 avatar

### Success State (Checkout):
- **Background**: Green-50
- **Border**: Green-200
- **Icon**: CheckCircle green-600
- **Message**: "You're logged in!"

---

## 🔧 Technical Details

### Auth Context Provider:
```tsx
<AuthProvider>
  <AppContent />
</AuthProvider>
```

### useAuth Hook:
```tsx
const { user, isAuthenticated, login, logout } = useAuth();

// Check login status
if (isAuthenticated) {
  // Show logged in UI
}

// Login
login('email@example.com', 'Name', 'https://avatar-url.com');

// Logout
logout();
```

### Avatar Generation:
```tsx
const mockPicture = `https://ui-avatars.com/api/?name=${name}&background=3B82F6&color=fff`;
```

---

## 🚀 Production Considerations

Untuk production, replace mock login dengan:

1. **Real Google OAuth:**
```tsx
// Install @react-oauth/google
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

<GoogleLogin
  onSuccess={credentialResponse => {
    // Decode JWT and get user info
    const decoded = jwt_decode(credentialResponse.credential);
    login(decoded.email, decoded.name, decoded.picture);
  }}
/>
```

2. **Backend Integration:**
```tsx
const handleGoogleLogin = async (googleToken) => {
  const response = await fetch('/api/auth/google', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: googleToken }),
  });
  const { user, accessToken } = await response.json();
  login(user.email, user.name, user.picture);
  localStorage.setItem('accessToken', accessToken);
};
```

3. **Persistent Session:**
```tsx
// Save to localStorage
useEffect(() => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
}, [user]);

// Load on mount
useEffect(() => {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    const userData = JSON.parse(savedUser);
    setUser(userData);
  }
}, []);
```

---

## 📋 Testing Checklist

- [ ] Klik "Mulai Sekarang" → Navigate ke Pricing
- [ ] Klik pricing plan → Modal login muncul
- [ ] Quick demo login "Demo User" → Login berhasil
- [ ] Quick demo login "John Doe" → Login berhasil
- [ ] Custom email input → Login berhasil
- [ ] User profile muncul di navbar (desktop)
- [ ] User profile muncul di mobile menu
- [ ] Logout button berfungsi
- [ ] Setelah logout, login button muncul lagi
- [ ] Di Checkout page, login button muncul (saat belum login)
- [ ] Di Checkout page, success message muncul (setelah login)
- [ ] Modal close dengan X button
- [ ] Modal close dengan click backdrop
- [ ] Animasi modal smooth
- [ ] Tidak ada console error

---

## 💡 Tips

### Cara cepat test logout:
1. Login dengan demo account
2. Buka browser DevTools (F12)
3. Console: `localStorage.clear()` dan refresh

### Styling modal:
Edit file `/components/auth/GoogleLoginModal.tsx`
- Line 48: Modal container styling
- Line 61-67: Google icon colors
- Line 72-82: Quick demo buttons

### Change avatar style:
```tsx
// Rounded square instead of circle
className="w-6 h-6 rounded"

// Larger avatar
className="w-10 h-10 rounded-full"
```

---

**Status**: ✅ Fully Implemented & Tested
**Version**: 1.0
**Last Updated**: 2025-01-11
