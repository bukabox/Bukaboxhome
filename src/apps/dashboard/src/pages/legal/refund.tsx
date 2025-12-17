import { motion } from 'motion/react';
import { RotateCcw } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';

export default function RefundPolicyPage() {
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
                <RotateCcw className="w-8 h-8 text-white" />
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
              <h2 className="text-3xl mb-4 text-gray-900">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                BUKABOX provides digital subscription services. Due to the nature of digital products and instant access upon subscription activation, 
                our refund policy is limited. Please read this policy carefully before subscribing.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">No Refunds for Activated Subscriptions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once your subscription is activated and you have accessed premium features, refunds are not available. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>Partial month refunds</li>
                <li>Unused features or services</li>
                <li>Change of mind after activation</li>
                <li>Dissatisfaction with features</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Trial Period</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer a 7-day trial period for the Pro plan, allowing you to explore features before committing to a subscription. 
                If you cancel during the trial period and have not been charged, no refund is necessary.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Exceptions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds may be considered in the following exceptional circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li><strong>Technical Issues:</strong> If BUKABOX is unavailable for more than 48 consecutive hours due to system failure</li>
                <li><strong>Duplicate Charges:</strong> If you were accidentally charged twice for the same subscription period</li>
                <li><strong>Billing Errors:</strong> If there was an error in the amount charged</li>
                <li><strong>Unauthorized Access:</strong> If your account was compromised and unauthorized charges were made</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Refund requests for these exceptions must be submitted within 14 days of the charge with supporting documentation.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Cancellation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can cancel your subscription at any time from your account settings. Upon cancellation:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>Your access will continue until the end of your current billing period</li>
                <li>You will not be charged for subsequent periods</li>
                <li>No refund will be provided for the remaining days in the current billing cycle</li>
                <li>Your data will be retained according to our data retention policy</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you believe you qualify for a refund under our exceptions policy, please contact our support team at:{' '}
                <a href="mailto:support@bukabox.co.id" className="text-blue-600 hover:underline">
                  support@bukabox.co.id
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Include the following information in your request:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>Your account email address</li>
                <li>Transaction ID or payment receipt</li>
                <li>Reason for refund request with supporting details</li>
                <li>Date of the charge</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Processing Time</h2>
              <p className="text-gray-700 leading-relaxed">
                Approved refunds will be processed within 7-10 business days and credited back to your original payment method. 
                The time it takes for the refund to appear in your account depends on your payment provider.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Payment Gateway Fees</h2>
              <p className="text-gray-700 leading-relaxed">
                Please note that payment processing fees charged by third-party payment gateways (e.g., Xendit) are non-refundable 
                and may be deducted from any refund amount.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Chargebacks</h2>
              <p className="text-gray-700 leading-relaxed">
                If you initiate a chargeback with your bank or payment provider without first contacting us, 
                your BUKABOX account may be suspended pending resolution. We encourage you to contact our support team first 
                to resolve any billing concerns.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated effective date. 
                Please review this policy before subscribing.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
              <h2 className="text-3xl mb-4 text-gray-900">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about this Refund Policy, please contact us at:{' '}
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
