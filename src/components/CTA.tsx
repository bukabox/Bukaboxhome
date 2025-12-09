import { Box } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Box className="w-16 h-16 text-white" />
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-5xl mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          Siap Berkembang Bersama ?
        </motion.h2>
        <motion.p 
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          Bergabunglah dengan ribuan kreator independen yang telah memulai perjalanan mereka bersama BUKABOX
        </motion.p>
        <motion.a 
          href="https://www.youtube.com/@BUKABOX_id?sub_confirmation=1" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          Join Now
        </motion.a>
      </div>
    </section>
  );
}