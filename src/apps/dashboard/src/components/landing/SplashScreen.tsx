import { Box } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Splash screen akan hilang setelah 2.5 detik
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
          initial={{ opacity: 1 }}
          exit={{ 
            scale: 10,
            opacity: 0
          }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ 
              scale: [0, 1.2, 1, 1.05, 1],
              opacity: [0, 1, 1, 1, 1],
              rotate: [-180, 0, 0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.4, 0.6, 0.8, 1]
            }}
          >
            <Box className="w-48 h-48 text-white stroke-[1.5]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
