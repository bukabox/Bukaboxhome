import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20">
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
              <h2 className="text-3xl mb-4 text-gray-900">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                BUKABOX values your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li><strong>Account Information:</strong> Name, email address, and authentication details when you create an account.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with BUKABOX, including features used, time spent, and actions taken.</li>
                <li><strong>Financial Data:</strong> Transaction records, investment data, and other financial information you input into the system.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies for functionality and analytics.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information is used to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>Provide and improve BUKABOX services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important updates, notifications, and support messages</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mt-4">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Encrypted storage of sensitive information</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Secure backup systems</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information to third parties. We may share your data only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li><strong>Service Providers:</strong> With trusted partners who help us operate BUKABOX (e.g., payment processors, hosting providers)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>Access your personal data stored in BUKABOX</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Export your data in a portable format</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Cookies & Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide personalized features. 
                You can control cookie settings through your browser, but disabling cookies may affect functionality.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal data for as long as your account is active or as needed to provide services. 
                After account deletion, we may retain certain information for legal compliance, fraud prevention, or legitimate business purposes.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                BUKABOX is not intended for users under the age of 18. We do not knowingly collect personal information from children. 
                If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. 
                We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions or concerns about this Privacy Policy or your personal data, please contact us at:{' '}
                <a href="mailto:privacy@bukabox.co.id" className="text-blue-600 hover:underline">
                  privacy@bukabox.co.id
                </a>
              </p>
            </section>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: December 17, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
