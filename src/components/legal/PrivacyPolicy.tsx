import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate?: (page: 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund') => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl tracking-tight font-black">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
                Privacy Policy – BUKABOX
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
            <h2 className="text-3xl mb-4 text-gray-900">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              BUKABOX respects your privacy. This policy explains how we collect, use, and protect your data.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Account information (email, name)</li>
              <li>Usage data inside the application</li>
              <li>Billing information via third-party payment partners</li>
              <li>Device and browser metadata</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">How We Use Data</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>To provide subscription-based services</li>
              <li>To enhance automation workflows</li>
              <li>To support billing, notifications, and authentication</li>
              <li>To improve product performance</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Third-Party Payment Providers</h2>
            <p className="text-gray-700 leading-relaxed">
              All subscription payments are processed through secure partners such as Xendit.
              <br /><br />
              BUKABOX does not store complete payment card details.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Data Protection</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Encryption in transit and at rest</li>
              <li>Limited staff access</li>
              <li>Regular system audits</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">User Rights</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Access and export your data</li>
              <li>Request correction</li>
              <li>Delete your account</li>
              <li>Opt-out of email notifications</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Cookies</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Analytics cookies</li>
              <li>Session authentication cookies</li>
              <li>You may disable cookies but some features may not function</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-3xl mb-4 text-gray-900">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Questions? Contact <a href="mailto:support@bukabox.co.id" className="text-blue-600 hover:text-blue-700">support@bukabox.co.id</a>
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
