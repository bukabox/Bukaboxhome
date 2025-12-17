import React from 'react';
import { ArrowRight, LineChart, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '../../components/landing/Navbar';
import { Footer } from '../../components/layout/Footer';

export default function ROITrackerFeaturePage() {
  const features = [
    {
      icon: DollarSign,
      title: 'Automatic ROI Calculation',
      description: 'Hitung ROI secara otomatis dari semua investasi Anda dengan akurasi tinggi. Tidak perlu lagi hitung manual di spreadsheet.'
    },
    {
      icon: LineChart,
      title: 'Performance Tracking',
      description: 'Monitor performa investasi real-time dengan grafik interaktif yang menampilkan trend, volatilitas, dan historical performance.'
    },
    {
      icon: BarChart3,
      title: 'Benchmark Comparison',
      description: 'Bandingkan performa portfolio Anda dengan market benchmark seperti IHSG, S&P500, atau custom benchmark lainnya.'
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Optimization',
      description: 'Rekomendasi otomatis untuk optimasi portfolio berdasarkan risk tolerance dan investment goals Anda.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5" />
            <span>Kembali ke Home</span>
          </Link>

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
                <Link
                  to="/roi/projects"
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-xl transition-all text-center"
                >
                  Menuju Dashboard
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-xl transition-all text-center"
                >
                  Lihat Pricing
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ROITracker />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              Fitur Unggulan
            </h2>
            <p className="text-xl text-slate-600">
              Tools profesional untuk tracking dan optimasi ROI investasi Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Siap Maksimalkan ROI Investasi?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Bergabunglah dengan ribuan investor yang sudah mengoptimalkan portfolio mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roi/projects"
                className="inline-block px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-green-50 transition-all shadow-lg"
              >
                Mulai Sekarang
              </Link>
              <Link
                to="/pricing"
                className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-xl transition-all"
              >
                Lihat Plan & Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}