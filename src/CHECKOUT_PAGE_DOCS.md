# 🛒 Checkout Page - Complete Documentation

## ✨ Overview

Halaman Checkout yang lengkap untuk menyelesaikan pembayaran subscription BUKABOX. Halaman ini hanya bisa diakses setelah user login dan memilih plan dari Pricing page.

---

## 🎯 User Flow

```
1. User di Pricing page
2. Klik "Choose Pro" (atau plan lainnya)
   ├─ Belum Login → Login Modal muncul
   └─ Sudah Login → Navigate ke Checkout Page
3. Checkout Page tampil dengan:
   - Plan details yang dipilih
   - Order summary
   - Payment method selection
   - User account info
4. User pilih payment method
5. Klik "Proceed to Payment"
6. Redirect ke Xendit gateway (simulated)
```

---

## 📁 New Files

### `/components/checkout/CheckoutPage.tsx`
**Full-featured checkout page dengan:**

#### Features:
- ✅ **Login Protection** - Redirect ke login jika belum login
- ✅ **Selected Plan Display** - Menampilkan detail plan yang dipilih
- ✅ **Order Summary** - Subtotal, tax (PPN 11%), total
- ✅ **Payment Method Selection** - Credit card, E-wallet, Bank transfer
- ✅ **User Account Display** - Avatar, name, email, verified badge
- ✅ **Security Badges** - SSL, encryption, PCI DSS badges
- ✅ **Terms Agreement** - Checkbox untuk terms & privacy
- ✅ **Processing State** - Loading state saat payment processing
- ✅ **Responsive Design** - Mobile & desktop optimized

---

## 🎨 Page Sections

### 1. **Header Section**
- Back button ke Pricing page
- Page title dengan gradient text
- Subtitle dengan plan name

### 2. **Order Summary (Left Column)**
```tsx
- Plan Details Card
  ├─ Plan name & price
  ├─ Monthly subscription label
  ├─ Top 3 features preview
  └─ "+X more features" link
  
- Price Breakdown
  ├─ Subtotal
  ├─ Tax (PPN 11%)
  └─ Total (bold, larger font)
  
- Security Badge
  └─ SSL encryption indicator
```

### 3. **Payment Form (Right Column)**
```tsx
- Account Information
  ├─ User avatar
  ├─ Name & email
  └─ Verified badge
  
- Payment Method Selection
  ├─ Credit/Debit Card (Visa, Mastercard)
  ├─ E-Wallet (OVO, GoPay, DANA)
  └─ Bank Transfer (BCA, Mandiri, BNI, BRI)
  
- Payment Information Box
  └─ Xendit security notice
  
- Terms Agreement Checkbox
  
- Payment Button
  └─ Shows total amount
```

### 4. **Footer Trust Badges**
- SSL Secured
- 256-bit Encryption
- PCI DSS Compliant

---

## 💳 Payment Methods

### 1. Credit/Debit Card
- Visa logo
- Mastercard logo
- Default selected

### 2. E-Wallet
- OVO
- GoPay
- DANA

### 3. Bank Transfer
- BCA
- Mandiri
- BNI
- BRI

---

## 📊 Plan Details Data

```typescript
const planDetails = {
  starter: {
    name: 'Starter',
    price: '59.000',
    features: [...5 features],
  },
  pro: {
    name: 'Pro',
    price: '119.000',
    features: [...6 features],
  },
  studio: {
    name: 'Studio',
    price: '249.000',
    features: [...5 features],
  },
};
```

### Default Plan:
- Jika `selectedPlan` undefined → Default ke "Pro"

---

## 🔢 Price Calculation

```typescript
const priceNumber = parseInt(plan.price.replace('.', ''));
const tax = Math.round(priceNumber * 0.11); // PPN 11%
const total = priceNumber + tax;
```

### Example (Pro Plan):
- Subtotal: Rp 119.000
- Tax (11%): Rp 13.090
- **Total: Rp 132.090**

---

## 🔐 Login Protection

Jika user **belum login** saat akses Checkout page:

```tsx
return (
  <div>
    <Lock icon />
    <h2>Login Required</h2>
    <p>Please login to continue...</p>
    <Button>Login to Continue</Button>
    <Link>Back to Pricing</Link>
  </div>
);
```

---

## 🎮 Interactive Elements

### Payment Method Radio Buttons
```tsx
onClick={() => setPaymentMethod('credit_card')}

States:
- credit_card (default)
- ewallet
- bank_transfer

Visual:
- Selected: Blue border, blue background, filled radio
- Unselected: Gray border, white background, empty radio
```

### Payment Button
```tsx
handlePayment() {
  if (!isAuthenticated) {
    setShowLoginModal(true);
    return;
  }
  
  setIsProcessing(true);
  
  // Simulate payment (2 seconds)
  setTimeout(() => {
    setIsProcessing(false);
    alert('Payment simulation completed!');
  }, 2000);
}

Button States:
- Normal: "Proceed to Payment - Rp XXX"
- Processing: "Processing..." with spinner
- Disabled when processing
```

---

## 🔄 Updated Files

### 1. `/App.tsx`
**Changes:**
- ✅ Import `CheckoutPage` (instead of CheckoutPlaceholder)
- ✅ State `selectedPlan` untuk track plan yang dipilih
- ✅ Function `handlePageChange(page, planId?)` dengan planId parameter
- ✅ Pass `selectedPlan` ke CheckoutPage component

### 2. `/PricingPage.tsx`
**Changes:**
- ✅ Interface `PricingPageProps` with planId parameter
- ✅ Pass `onNavigate` prop ke `PricingCards`

### 3. `/components/pricing/PricingCards.tsx`
**Changes:**
- ✅ Added `id` field ke setiap plan ('starter', 'pro', 'studio')
- ✅ Interface `PricingCardsProps` with onNavigate
- ✅ Function `handlePlanSelect(planId)`:
  - Belum login → Show login modal
  - Sudah login → Navigate ke checkout dengan planId
- ✅ Pass `planId` ke `onNavigate('checkout', planId)`

---

## 🎬 Testing Scenarios

### Scenario 1: Complete Flow (Logged In)
```
1. Login dengan Demo User
2. Go to Pricing page
3. Klik "Choose Pro"
4. ✅ Redirect ke Checkout page
5. ✅ Pro plan details tampil di order summary
6. ✅ User info tampil (avatar, name, email)
7. Pilih payment method "E-Wallet"
8. ✅ E-wallet selected (blue border)
9. Klik "Proceed to Payment"
10. ✅ Button shows "Processing..." with spinner
11. ✅ After 2 seconds, alert muncul
12. ✅ Button kembali normal
```

### Scenario 2: Not Logged In
```
1. Logout (jika sedang login)
2. Go to Pricing page
3. Klik "Choose Starter"
4. ✅ Login modal muncul
5. Login dengan "John Doe"
6. ✅ Modal close
7. ✅ Redirect ke Checkout page
8. ✅ Starter plan details tampil
9. ✅ Total: Rp 65.490 (59.000 + 11% tax)
```

### Scenario 3: Direct Access (No Login)
```
1. Logout
2. Navigate langsung ke Checkout (via navbar)
3. ✅ "Login Required" screen tampil
4. Klik "Login to Continue"
5. ✅ Login modal muncul
6. Login
7. ✅ Checkout page tampil
8. ✅ Default plan: Pro
```

### Scenario 4: Back Navigation
```
1. Di Checkout page
2. Klik "Back to Pricing" button
3. ✅ Navigate ke Pricing page
4. ✅ Smooth scroll to top
```

### Scenario 5: Terms Links
```
1. Di Checkout page
2. Klik "Terms of Service" link
3. ✅ Navigate ke Terms page
4. Back to checkout
5. Klik "Privacy Policy" link
6. ✅ Navigate ke Privacy page
```

---

## 📱 Responsive Behavior

### Desktop (lg and up):
```
Grid: 2 columns (1/3 + 2/3)
- Left: Order Summary (sticky)
- Right: Payment Form
```

### Mobile (< lg):
```
Stack vertically:
1. Order Summary (top)
2. Payment Form (bottom)
```

### Sticky Behavior:
```css
.sticky.top-24 /* Order summary sticks on scroll (desktop only) */
```

---

## 🎨 Color Scheme

### Primary:
- Blue-600: Buttons, borders, selected states
- Blue-50: Background for selected items
- Blue-100: Borders for info boxes

### Success:
- Green-600: Verified badge, security icons

### Neutral:
- Gray-50: Input backgrounds
- Gray-200: Borders
- Gray-600: Secondary text
- Gray-900: Primary text

---

## 🚀 Production Integration

### Real Xendit Integration:

```typescript
const handlePayment = async () => {
  setIsProcessing(true);
  
  try {
    // 1. Create invoice via backend
    const response = await fetch('/api/checkout/create-invoice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        planId: selectedPlan,
        paymentMethod: paymentMethod,
        userEmail: user.email,
      }),
    });
    
    const { invoiceUrl } = await response.json();
    
    // 2. Redirect to Xendit payment page
    window.location.href = invoiceUrl;
    
  } catch (error) {
    console.error('Payment error:', error);
    alert('Payment failed. Please try again.');
    setIsProcessing(false);
  }
};
```

### Backend API Example (Node.js):

```javascript
// POST /api/checkout/create-invoice
const Xendit = require('xendit-node');
const x = new Xendit({ secretKey: process.env.XENDIT_SECRET_KEY });

const { Invoice } = x;
const invoiceSpecificOptions = {};
const i = new Invoice(invoiceSpecificOptions);

const invoice = await i.createInvoice({
  externalID: `bukabox-${Date.now()}`,
  amount: total,
  payerEmail: req.body.userEmail,
  description: `BUKABOX ${planName} Subscription`,
  successRedirectURL: 'https://bukabox.com/success',
  failureRedirectURL: 'https://bukabox.com/failed',
});

res.json({ invoiceUrl: invoice.invoice_url });
```

---

## 📋 Checklist

### Pre-launch:
- [ ] All plans calculate tax correctly
- [ ] Payment method selection works
- [ ] Login protection functional
- [ ] Back navigation works
- [ ] Terms links navigate correctly
- [ ] Responsive on mobile
- [ ] Processing state shows properly
- [ ] User info displays correctly

### Production:
- [ ] Replace payment simulation with Xendit API
- [ ] Add backend invoice creation endpoint
- [ ] Add success/failure redirect pages
- [ ] Add email confirmation
- [ ] Add subscription activation logic
- [ ] Add error handling
- [ ] Add payment retry mechanism
- [ ] Add transaction logging

---

## 🐛 Known Limitations

### Current (Demo Mode):
1. **No real payment** - Just simulation with alert
2. **No invoice generation** - Would need backend API
3. **No email confirmation** - Would need email service
4. **No subscription activation** - Would need database

### Solutions:
See "Production Integration" section above

---

## 💡 Tips

### Change tax percentage:
```typescript
// Line ~70
const tax = Math.round(priceNumber * 0.11); // Change 0.11 to desired %
```

### Add discount code:
```tsx
// Add before price breakdown
<div className="mb-4">
  <input 
    type="text" 
    placeholder="Discount code"
    className="w-full px-3 py-2 border rounded-lg"
  />
</div>

// Update calculation
const discount = 10000; // Rp 10.000
const total = priceNumber + tax - discount;
```

### Change default plan:
```typescript
// Line ~65
const plan = planDetails[selectedPlan as keyof typeof planDetails] || planDetails.starter;
// Change .pro to .starter or .studio
```

---

**Status**: ✅ Fully Implemented  
**Version**: 1.0  
**Last Updated**: 2025-01-11  
**Dependencies**: Auth Context, Motion, Lucide React
