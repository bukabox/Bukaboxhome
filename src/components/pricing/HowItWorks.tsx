import { motion } from 'motion/react';
import { CreditCard, Zap, Unlock } from 'lucide-react';

const steps = [
  {
    icon: CreditCard,
    title: 'Choose a plan',
    description: 'Select the subscription tier that matches your needs.',
  },
  {
    icon: Zap,
    title: 'Complete payment',
    description: 'Payments are processed securely via Xendit. After payment, your subscription activates instantly.',
  },
  {
    icon: Unlock,
    title: 'Access premium features',
    description: 'Your account automatically unlocks the features based on your selected plan.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">How Subscription Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and instant activation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
