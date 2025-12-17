import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';

export default function TermsOfServicePage() {
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
              <h2 className="text-3xl mb-4 text-gray-900">Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>Use BUKABOX for any illegal purposes.</li>
                <li>Share your account credentials with others.</li>
                <li>Attempt to reverse-engineer or hack the service.</li>
                <li>Upload malicious code or viruses.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Data & Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your data is protected according to our Privacy Policy. We use industry-standard encryption and security measures to protect your information. 
                We do not sell your data to third parties.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Cancellation & Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of your current billing period.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Refunds are not provided for partial months or unused features. Please see our Refund Policy for more details.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality of BUKABOX are owned by BUKABOX and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                BUKABOX is provided "as is" without any warranties. We are not liable for any damages arising from your use of the service, including but not limited to data loss, business interruption, or financial losses.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of BUKABOX after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about these Terms, please contact us at:{' '}
                <a href="mailto:support@bukabox.co.id" className="text-blue-600 hover:underline">
                  support@bukabox.co.id
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
