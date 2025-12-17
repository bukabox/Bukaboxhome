import { Box } from 'lucide-react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';
import { motion } from 'motion/react';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Box className="w-8 h-8 text-blue-400" />
              <span className="text-2xl">BUKABOX</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.youtube.com/@BUKABOX_id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/bukabox_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@bukabox_id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="TikTok"
              >
                <AiFillTikTok className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex gap-8 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Products</a>
            {onNavigate && (
              <button 
                onClick={() => onNavigate('pricing')}
                className="hover:text-white transition-colors"
              >
                Pricing
              </button>
            )}
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2025 BUKABOX. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
