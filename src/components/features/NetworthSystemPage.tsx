import { motion } from 'motion/react';
import { ArrowLeft, PiggyBank, TrendingUp, BarChart3, Wallet, PieChart, Activity } from 'lucide-react';
import { NetworthDashboard } from '../illustrations/NetworthDashboard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund' | 'features' | 'networth' | 'roi-tracker' | 'tax-automation';

interface NetworthSystemPageProps {
  onNavigate?: (page: PageType) => void;
}

export function NetworthSystemPage({ onNavigate }: NetworthSystemPageProps) {
  const features = [
    {
      icon: Wallet,
      title: 'Multi-Asset Tracking',
      description: 'Pantau semua aset Anda dalam satu dashboard - dari properti, investasi saham, reksa dana, hingga crypto dan aset digital lainnya.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Updates',
      description: 'Dapatkan update nilai kekayaan secara real-time dengan integrasi langsung ke berbagai platform investasi dan perbankan.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Analisis mendalam tentang pertumbuhan kekayaan Anda dengan grafik interaktif, trend analysis, dan predictive insights.'
    },
    {
      icon: PieChart,
      title: 'Asset Allocation',
      description: 'Visualisasi distribusi aset Anda dan dapatkan rekomendasi untuk optimasi portfolio berdasarkan risk profile.'
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Track performa setiap aset dan bandingkan dengan benchmark market untuk keputusan investasi yang lebih baik.'
    },
    {
      icon: PiggyBank,
      title: 'Goal Planning',
      description: 'Set target keuangan Anda dan monitor progress secara otomatis dengan proyeksi timeline yang akurat.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate?.('home')}
            className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Home</span>
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
                <PiggyBank className="w-4 h-4" />
                <span className="text-sm font-medium">Coming Soon</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
                <span className="font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  BUKABOX
                </span>
                <br />
                Networth System
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Platform all-in-one untuk memantau dan mengoptimalkan kekayaan bersih Anda secara real-time. 
                Kelola semua aset dalam satu dashboard yang powerful dan mudah digunakan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  disabled
                  className="px-8 py-4 bg-slate-300 text-slate-500 rounded-xl cursor-not-allowed"
                >
                  Menuju Dashboard
                </button>
                <button
                  onClick={() => onNavigate?.('pricing')}
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  Lihat Pricing
                </button>
              </div>

              <p className="text-sm text-slate-500 mt-4">
                * Dashboard akan tersedia segera. Daftar waitlist untuk early access!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-purple-100">
                <NetworthDashboard />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Semua yang Anda butuhkan untuk mengelola kekayaan dengan lebih efektif
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
              Cara Kerja
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple dan mudah digunakan dalam 3 langkah
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Assets',
                description: 'Hubungkan semua akun investasi, bank, dan aset digital Anda dengan aman menggunakan enkripsi tingkat bank.'
              },
              {
                step: '02',
                title: 'Auto-Sync Data',
                description: 'Sistem secara otomatis mengupdate nilai semua aset Anda secara real-time dari berbagai sumber.'
              },
              {
                step: '03',
                title: 'Monitor & Optimize',
                description: 'Dapatkan insights mendalam dan rekomendasi untuk mengoptimalkan pertumbuhan kekayaan Anda.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-7xl font-black text-purple-100 mb-4">{item.step}</div>
                <h3 className="text-2xl mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Siap Mengelola Kekayaan Anda?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan waitlist dan dapatkan early access saat diluncurkan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                disabled
                className="px-8 py-4 bg-white/20 text-white rounded-xl cursor-not-allowed"
              >
                Menuju Dashboard (Soon)
              </button>
              <button
                onClick={() => onNavigate?.('pricing')}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl hover:bg-purple-50 transition-colors"
              >
                Lihat Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
