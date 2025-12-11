import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const faqs = [
  {
    question: 'What is included in each plan?',
    answer: 'Each plan includes different levels of workspace access, transaction limits, and automation features. Starter is designed for individuals with basic needs, Pro offers unlimited access with advanced features and API integration, while Studio adds team collaboration capabilities for up to 10 seats with role permissions and admin controls.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your dashboard settings. Your access will continue until the end of your current billing period. No questions asked, and no cancellation fees apply.',
  },
  {
    question: 'How does billing renewal work?',
    answer: 'Subscriptions automatically renew each month on the same date you initially subscribed. You will receive a reminder email 3 days before renewal. Payments are processed securely through Xendit, and you can update your payment method or cancel anytime before the renewal date.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Refunds are not available for digital services once your subscription is activated and you have accessed the premium features. However, we offer a 7-day trial period on the Pro plan where you can explore features before committing. Please review your selected plan carefully before subscribing.',
  },
  {
    question: 'Are my financial data secure?',
    answer: 'Absolutely. We take data security seriously. All your financial data is encrypted both in transit and at rest using industry-standard encryption protocols. We comply with international data protection standards and never share your data with third parties. Our infrastructure is regularly audited for security compliance.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
