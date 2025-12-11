import { Box, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund';

interface HeroProps {
  onNavigate?: (page: PageType) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-0">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 text-center px-6 md:px-4">
        {/* Logo and Title */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <motion.div 
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Box className="w-24 h-24 md:w-32 md:h-32 text-blue-600 stroke-[1.5]" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full"></div>
          </motion.div>
          
          <motion.h1 
            className="text-8xl md:text-9xl tracking-tight font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
              BUKABOX
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          Breaking the Box
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <button
            onClick={() => onNavigate?.('pricing')}
            className="group px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Mulai Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-md"
          >
            Pelajari Lebih Lanjut
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button 
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.3
        }}
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-blue-600 rounded-full"></div>
        </div>
      </motion.button>
    </section>
  );
}