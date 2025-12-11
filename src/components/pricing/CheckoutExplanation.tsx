import { motion } from 'motion/react';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function CheckoutExplanation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="mb-4">Checkout & Billing</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  BUKABOX uses a secure billing system. Payments occur only after you log in to your dashboard.
                  <br /><br />
                  This public pricing page is provided to meet payment gateway verification requirements.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Login to Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}