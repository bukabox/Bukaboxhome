import { motion } from 'motion/react';
import { FileText, Shield, RotateCcw } from 'lucide-react';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund';

interface LegalFooterProps {
  onNavigate?: (page: PageType) => void;
}

export function LegalFooter({ onNavigate }: LegalFooterProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <RotateCcw className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Refund Policy</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Refunds are not available for digital services once activated. Please review your selected plan before subscribing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Secure Payments</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    All payments are processed through Xendit with bank-level encryption. Your payment information is never stored on our servers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {onNavigate ? (
                <>
                  <button 
                    onClick={() => onNavigate('terms')}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Terms of Service
                  </button>
                  <span className="text-gray-300">•</span>
                  <button 
                    onClick={() => onNavigate('privacy')}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </button>
                  <span className="text-gray-300">•</span>
                  <button 
                    onClick={() => onNavigate('refund')}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Refund Policy
                  </button>
                </>
              ) : (
                <>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Terms of Service
                  </a>
                  <span className="text-gray-300">•</span>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </a>
                  <span className="text-gray-300">•</span>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Refund Policy
                  </a>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}