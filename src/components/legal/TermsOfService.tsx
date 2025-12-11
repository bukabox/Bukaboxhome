import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

interface TermsOfServiceProps {
  onNavigate?: (page: 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund') => void;
}

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl tracking-tight font-black">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
                Terms of Service – BUKABOX
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
            <h2 className="text-3xl mb-4 text-gray-900">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BUKABOX is a digital software service offering subscription-based access to automation tools, workspace features, and financial processing utilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using BUKABOX, you agree to these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Subscription & Billing</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Users must create an account to subscribe.</li>
              <li>Subscription fees are billed in advance.</li>
              <li>Payments are processed securely through integrated billing partners (e.g., Xendit).</li>
              <li>Subscriptions renew automatically unless cancelled.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Cancellation</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Users may cancel anytime from their dashboard.</li>
              <li>Cancellation stops the next billing cycle.</li>
              <li>Active periods remain accessible until expiry.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Digital Services</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>BUKABOX does not provide physical goods.</li>
              <li>All features are digital and delivered instantly upon payment.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Accountability</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Users are responsible for the accuracy of data they input.</li>
              <li>BUKABOX is not liable for financial decisions made based on user-generated data.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Prohibited Uses</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Misuse, hacking attempts, or unauthorized automation injections are prohibited.</li>
              <li>No reselling or redistribution of internal tools.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Data Security</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>BUKABOX uses encryption and secure storage.</li>
              <li>We do not sell or share personal data without consent.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Modification of Terms</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>BUKABOX may update Terms at any time.</li>
              <li>Continued use of services means acceptance of updates.</li>
            </ul>
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
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => onNavigate('refund')}
                  className="hover:text-blue-600 transition-colors"
                >
                  Refund Policy
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
