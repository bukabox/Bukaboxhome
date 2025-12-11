import { motion } from 'motion/react';
import { DollarSign } from 'lucide-react';

interface RefundPolicyProps {
  onNavigate?: (page: 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund') => void;
}

export function RefundPolicy({ onNavigate }: RefundPolicyProps) {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl tracking-tight font-black">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
                Refund Policy – BUKABOX
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Digital Service Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              BUKABOX provides digital software services that are activated instantly upon payment. Because the service is fully accessible immediately, refunds are generally not available.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Subscription Payments</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Payments are billed in advance.</li>
              <li>No partial refunds for unused time.</li>
              <li>Users may cancel anytime to stop future billing.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Failed Payments</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>If renewal fails, system will retry based on payment provider rules.</li>
              <li>Subscription may be paused if payment cannot be collected.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Duplicate Charges</h2>
            <p className="text-gray-700 leading-relaxed">
              If a rare duplicate charge occurs, BUKABOX will investigate and may issue a refund after verification.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Chargebacks</h2>
            <p className="text-gray-700 leading-relaxed">
              Chargebacks filed without legitimate justification may result in account suspension.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For refund inquiries, contact <a href="mailto:support@bukabox.co.id" className="text-blue-600 hover:text-blue-700">support@bukabox.co.id</a>
            </p>
          </section>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-12 mt-12 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            {onNavigate && (
              <>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => onNavigate('terms')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Terms
                </button>
                <button 
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
