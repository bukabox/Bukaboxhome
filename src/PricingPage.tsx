import { PricingHero } from './components/pricing/PricingHero';
import { PricingCards } from './components/pricing/PricingCards';
import { HowItWorks } from './components/pricing/HowItWorks';
import { CheckoutExplanation } from './components/pricing/CheckoutExplanation';
import { FAQ } from './components/pricing/FAQ';
import { LegalFooter } from './components/pricing/LegalFooter';
import { Footer } from './components/Footer';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund';

interface PricingPageProps {
  onNavigate?: (page: PageType) => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PricingHero />
      <PricingCards />
      <HowItWorks />
      <CheckoutExplanation />
      <FAQ />
      <LegalFooter onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}