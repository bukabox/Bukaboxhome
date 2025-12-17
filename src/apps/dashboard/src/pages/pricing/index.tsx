/**
 * Pricing Page
 * 
 * Menampilkan pricing tiers dan features comparison.
 * Accessible dari router URL: /pricing
 */

import Navbar from '@/components/landing/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PricingHero } from '@/components/pricing/PricingHero';
import { PricingCards } from '@/components/pricing/PricingCards';
import { FeatureComparison } from '@/components/pricing/FeatureComparison';
import { HowItWorks } from '@/components/pricing/HowItWorks';
import { CheckoutExplanation } from '@/components/pricing/CheckoutExplanation';
import { FAQ } from '@/components/pricing/FAQ';
import { LegalFooter } from '@/components/pricing/LegalFooter';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <PricingHero />
        <PricingCards />
        <FeatureComparison />
        <HowItWorks />
        <CheckoutExplanation />
        <FAQ />
        <LegalFooter />
        <Footer />
      </div>
    </>
  );
}