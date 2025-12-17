import { PiggyBank, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { NetworthDashboard } from '../illustrations/NetworthDashboard';
import { ROITracker } from '../illustrations/ROITracker';
import { TaxAutomation } from '../illustrations/TaxAutomation';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund' | 'features' | 'networth' | 'roi-tracker' | 'tax-automation';

interface FeaturesProps {
  onNavigate?: (page: PageType) => void;
}

export function Features({ onNavigate }: FeaturesProps = {}) {
  const features = [
    {
      icon: PiggyBank,
      title: 'BUKABOX Networth System',
      description: 'Platform all-in-one untuk memantau dan mengoptimalkan kekayaan bersih Anda secara real-time',
      illustration: NetworthDashboard,
      badge: 'Soon',
      badgeColor: 'bg-purple-600',
      gradient: 'from-purple-50 to-blue-50',
      iconBg: 'bg-purple-600',
      page: 'networth' as PageType,
      highlights: [
        'Dashboard kekayaan real-time',
        'Multi-asset tracking',
        'Analytics & insights'
      ]
    },
    {
      icon: TrendingUp,
      title: 'M4 ROI Tracker',
      description: 'Tracking ROI investasi dengan akurasi tinggi dan visualisasi data yang powerful untuk keputusan lebih baik',
      illustration: ROITracker,
      badge: 'Live',
      badgeColor: 'bg-green-600',
      gradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-600',
      page: 'roi-tracker' as PageType,
      highlights: [
        'ROI calculator otomatis',
        'Performance benchmarking',
        'Portfolio optimization'
      ]
    },
    {
      icon: Sparkles,
      title: 'Tax Engine & Automation',
      description: 'Sistem otomasi perpajakan dan workflow management untuk efisiensi maksimal bisnis dan keuangan Anda',
      illustration: TaxAutomation,
      badge: 'Coming',
      badgeColor: 'bg-blue-600',
      gradient: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-blue-600',
      page: 'tax-automation' as PageType,
      highlights: [
        'Auto tax calculation',
        'Workflow automation',
        'Smart integrations'
      ]
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Kenapa <span className="font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BUKABOX</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Platform digital all-in-one untuk mengelola keuangan dan investasi Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8 }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                    <feature.illustration />
                  </div>
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 ${feature.badgeColor} text-white text-xs rounded-full shadow-lg backdrop-blur-sm`}>
                    {feature.badge}
                  </div>

                  {/* Icon */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button 
                    onClick={() => onNavigate?.(feature.page)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-blue-50 hover:to-blue-100 text-slate-900 rounded-lg transition-all duration-300 group-hover:shadow-md border border-slate-200"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Decorative Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300 pointer-events-none`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
