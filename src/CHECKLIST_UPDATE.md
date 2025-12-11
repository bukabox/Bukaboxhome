# 📋 Checklist Update BUKABOX

## ✅ File yang Sudah Diperbarui

### 1. **Import Motion Library**
Semua file sekarang menggunakan `import { motion } from 'motion/react'` (bukan `framer-motion`):
- ✅ `/components/CTA.tsx`
- ✅ `/components/Features.tsx`
- ✅ `/components/Hero.tsx`
- ✅ `/components/Footer.tsx`

### 2. **Branding BUKABOX (All Caps)**
- ✅ `/components/pricing/PricingHero.tsx` - "BUKABOX Subscription Plans"
- ✅ `/components/pricing/CheckoutExplanation.tsx` - "BUKABOX uses..."

### 3. **Navigation System (PageType)**
File yang sudah diupdate untuk support 6 halaman:
- ✅ `/App.tsx` - Main routing + mobile menu
- ✅ `/PricingPage.tsx` - Interface updated
- ✅ `/components/Footer.tsx` - Interface updated
- ✅ `/components/pricing/LegalFooter.tsx` - Links functional

### 4. **File Baru yang Ditambahkan**
- ✅ `/components/checkout/CheckoutPlaceholder.tsx`
- ✅ `/components/legal/TermsOfService.tsx`
- ✅ `/components/legal/PrivacyPolicy.tsx`
- ✅ `/components/legal/RefundPolicy.tsx`

---

## 🔧 Yang Perlu Anda Lakukan di Lokal

### Step 1: Copy Semua File
Pastikan Anda sudah copy **SEMUA** file berikut ke project lokal Anda:

#### File yang Diperbarui:
```
/App.tsx
/PricingPage.tsx
/components/CTA.tsx
/components/Features.tsx
/components/Hero.tsx
/components/Footer.tsx
/components/pricing/PricingHero.tsx
/components/pricing/CheckoutExplanation.tsx
/components/pricing/LegalFooter.tsx
```

#### File Baru:
```
/components/checkout/CheckoutPlaceholder.tsx
/components/legal/TermsOfService.tsx
/components/legal/PrivacyPolicy.tsx
/components/legal/RefundPolicy.tsx
```

### Step 2: Install Dependencies (Jika Belum)
```bash
npm install motion react-icons lucide-react class-variance-authority
```

atau

```bash
yarn add motion react-icons lucide-react class-variance-authority
```

### Step 3: Pastikan Folder Structure
```
src/
├── App.tsx
├── PricingPage.tsx
├── components/
│   ├── CTA.tsx
│   ├── Features.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   ├── SplashScreen.tsx
│   ├── checkout/
│   │   └── CheckoutPlaceholder.tsx
│   ├── legal/
│   │   ├── TermsOfService.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   └── RefundPolicy.tsx
│   ├── pricing/
│   │   ├── CheckoutExplanation.tsx
│   │   ├── FAQ.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── LegalFooter.tsx
│   │   ├── PricingCards.tsx
│   │   └── PricingHero.tsx
│   └── ui/
│       ├── button.tsx
│       └── ... (all UI components)
```

### Step 4: Clear Cache & Restart
```bash
# Clear node_modules cache
rm -rf node_modules/.cache

# Restart dev server
npm run dev
# atau
yarn dev
```

---

## 🐛 Troubleshooting

### Masalah: Menu tidak muncul
**Solusi:**
- Pastikan `/App.tsx` sudah diupdate dengan mobile menu
- Cek import `Menu` dan `X` dari `lucide-react`

### Masalah: Motion animation error
**Solusi:**
- Pastikan semua import menggunakan `motion/react` bukan `framer-motion`
- Install package: `npm install motion`

### Masalah: Button component not found
**Solusi:**
- Pastikan folder `/components/ui/button.tsx` ada
- Pastikan ada file `/components/ui/utils.ts`

### Masalah: Type error PageType
**Solusi:**
- Pastikan semua file menggunakan type yang sama:
```typescript
type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund';
```

---

## 📱 Fitur Baru yang Ditambahkan

### Desktop Navigation
- Home, Pricing, Checkout buttons di navbar

### Mobile Navigation
- Hamburger menu (☰) di mobile
- Responsive menu dengan dropdown

### Legal Pages
- Terms of Service
- Privacy Policy  
- Refund Policy

### Checkout Placeholder
- Informational page untuk payment gateway verification

---

## 🎯 Testing Checklist

Setelah update, test hal berikut:

- [ ] Homepage loading dengan splash screen
- [ ] Navbar muncul setelah 2.5 detik
- [ ] Klik "Pricing" → halaman pricing muncul
- [ ] Klik "Checkout" → halaman checkout muncul
- [ ] Di pricing page, klik "Terms of Service" → halaman terms muncul
- [ ] Di pricing page, klik "Privacy Policy" → halaman privacy muncul
- [ ] Di pricing page, klik "Refund Policy" → halaman refund muncul
- [ ] Mobile menu (☰) berfungsi di layar kecil
- [ ] Semua animasi Motion berjalan smooth
- [ ] Tidak ada error di console

---

## 💡 Catatan Penting

1. **Motion Library**: Kami menggunakan `motion/react` (bukan `framer-motion`)
2. **Branding**: Selalu gunakan "BUKABOX" dalam huruf kapital
3. **Navigation**: Semua halaman menggunakan client-side routing (no page reload)
4. **Responsive**: Semua halaman sudah responsive untuk mobile & desktop

---

Jika masih ada masalah, share screenshot error atau file mana yang bermasalah! 🚀
