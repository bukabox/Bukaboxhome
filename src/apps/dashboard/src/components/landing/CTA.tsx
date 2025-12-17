import { PiggyBank, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund' | 'features' | 'networth' | 'roi-tracker' | 'tax-automation';

interface CTAProps {
  onNavigate?: (page: PageType) => void;
}

export function CTA({ onNavigate }: CTAProps = {}) {
  const features = [
    {
      icon: TrendingUp,
      title: 'ROI Tracking',
      description: 'Monitor performa investasi real-time',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: PiggyBank,
      title: 'Networth System',
      description: 'Track semua aset dalam satu dashboard',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Sparkles,
      title: 'Tax Automation',
      description: 'Otomasi perpajakan dan compliance',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <PiggyBank className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Siap Kelola Keuangan dengan Lebih Baik?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Bergabunglah dengan 500+ investor dan profesional yang sudah mempercayai BUKABOX 
            untuk mengelola wealth management dan financial tracking mereka
          </motion.p>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-blue-100">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => onNavigate?.('pricing')}
              className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <span className="font-medium">Mulai Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Lihat Features
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl text-white mb-1">500+</div>
                <div className="text-sm text-blue-100">Active Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-white mb-1">Rp 50M+</div>
                <div className="text-sm text-blue-100">Assets Tracked</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-white mb-1">99%</div>
                <div className="text-sm text-blue-100">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
