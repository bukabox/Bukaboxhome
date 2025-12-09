import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';

export default function App() {
  return (
    <>
      <SplashScreen />
      <div className="min-h-screen bg-white">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </>
  );
}