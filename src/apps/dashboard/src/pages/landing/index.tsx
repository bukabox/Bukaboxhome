/**
 * Landing Page (Homepage)
 * 
 * Main marketing page untuk BUKABOX.
 * Menampilkan Hero, Features, CTA, dan Footer.
 */

import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/layout/Footer';
import { SplashScreen } from '@/components/landing/SplashScreen';
import { Navbar } from '@/components/layout/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      navigate('/');
    } else if (page === 'pricing') {
      navigate('/pricing');
    } else if (page === 'features') {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SplashScreen />
      {showNavbar && <Navbar />}
      <div className={showNavbar ? "pt-16" : ""}>
        <div className="min-h-screen bg-white">
          <Hero onNavigate={handleNavigate} />
          <Features onNavigate={handleNavigate} />
          <CTA onNavigate={handleNavigate} />
          <Footer onNavigate={handleNavigate} />
        </div>
      </div>
    </>
  );
}