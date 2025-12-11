import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, Calculator, LineChart, Target, Bell, Shield } from 'lucide-react';
import { ROITracker } from '../illustrations/ROITracker';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund' | 'features' | 'networth' | 'roi-tracker' | 'tax-automation';

interface ROITrackerPageProps {
  onNavigate?: (page: PageType) => void;
}

export function ROITrackerPage({ onNavigate }: ROITrackerPageProps) {
  const features = [
    {
      icon: Calculator,
      title: 'Automatic ROI Calculation',
      description: 'Hitung ROI secara otomatis dari semua investasi Anda dengan akurasi tinggi. Tidak perlu lagi hitung manual di spreadsheet.'
    },
    {
      icon: LineChart,
      title: 'Performance Tracking',
      description: 'Monitor performa investasi real-time dengan grafik interaktif yang menampilkan trend, volatilitas, dan historical performance.'
    },
    {
      icon: Target,
      title: 'Benchmark Comparison',
      description: 'Bandingkan performa portfolio Anda dengan market benchmark seperti IHSG, S&P500, atau custom benchmark lainnya.'
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Dapatkan notifikasi otomatis saat ROI mencapai target tertentu atau ada perubahan signifikan pada portfolio.'
    },
    {
      icon: Shield,
      title: 'Risk Analysis',
      description: 'Analisis risk-adjusted returns dengan metrik seperti Sharpe Ratio, Maximum Drawdown, dan Volatility Score.'
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Optimization',
      description: 'Rekomendasi otomatis untuk optimasi portfolio berdasarkan risk tolerance dan investment goals Anda.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate?.('home')}
            className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors mb-8"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Live & Ready</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
                <span className="font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  M4
                </span>
                <br />
                ROI Tracker
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Tracking ROI investasi dengan akurasi tinggi dan visualisasi data yang powerful untuk keputusan lebih baik. 
                Dashboard profesional yang dirancang khusus untuk investor aktif.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open('https://m4-roi-tracker.bukabox.id', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  Menuju Dashboard
                </button>
                <button
                  onClick={() => onNavigate?.('pricing')}
                  className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-colors"
                >
                  Lihat Pricing
                </button>
              </div>

              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-3xl text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl text-slate-900">Rp 50M+</div>
                  <div className="text-sm text-slate-600">Assets Tracked</div>
                </div>
                <div>
                  <div className="text-3xl text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-green-100">
                <ROITracker />
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
              Tools profesional untuk tracking dan optimasi ROI investasi Anda
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
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
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
              Mulai tracking ROI Anda dalam 3 langkah mudah
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Input Investasi',
                description: 'Masukkan data investasi Anda - bisa manual atau import dari spreadsheet. Support berbagai jenis aset.'
              },
              {
                step: '02',
                title: 'Auto Calculate',
                description: 'Sistem otomatis menghitung ROI, CAGR, dan metrik penting lainnya dengan real-time price updates.'
              },
              {
                step: '03',
                title: 'Analyze & Optimize',
                description: 'Dapatkan insights dan rekomendasi untuk meningkatkan returns dan mengelola risk dengan lebih baik.'
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
                <div className="text-7xl font-black text-green-100 mb-4">{item.step}</div>
                <h3 className="text-2xl mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-green-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl">
                JD
              </div>
              <div>
                <div className="text-xl text-slate-900 mb-1">John Doe</div>
                <div className="text-sm text-slate-600">Angel Investor</div>
              </div>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed italic mb-6">
              "M4 ROI Tracker mengubah cara saya mengelola portfolio investasi. Yang tadinya butuh berjam-jam di spreadsheet, 
              sekarang bisa selesai dalam hitungan menit dengan visualisasi yang jauh lebih baik. Highly recommended!"
            </p>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </motion.div>
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
            className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Mulai Track ROI Anda Sekarang
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Dashboard sudah ready. Akses sekarang dan optimalkan investasi Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://m4-roi-tracker.bukabox.id', '_blank')}
                className="px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-green-50 transition-colors font-medium"
              >
                Menuju Dashboard
              </button>
              <button
                onClick={() => onNavigate?.('pricing')}
                className="px-8 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors border-2 border-white"
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
