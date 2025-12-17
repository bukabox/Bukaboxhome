import React from 'react';
import { ArrowRight, TrendingUp, PieChart, Calendar, Shield } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '../../components/landing/Navbar';
import { Footer } from '../../components/layout/Footer';

export default function NetworthFeaturePage() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Real-Time Updates',
      description: 'Dapatkan update nilai kekayaan secara real-time dengan integrasi langsung ke berbagai platform investasi dan perbankan.'
    },
    {
      icon: PieChart,
      title: 'Asset Allocation',
      description: 'Visualisasi distribusi aset Anda dan dapatkan rekomendasi untuk optimasi portfolio berdasarkan risk profile.'
    },
    {
      icon: Calendar,
      title: 'Goal Planning',
      description: 'Set target keuangan Anda dan monitor progress secara otomatis dengan proyeksi timeline yang akurat.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Lindungi data keuangan Anda dengan enkripsi tingkat tinggi dan akses yang terkontrol.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors mb-8"
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
                  className="px-8 py-4 bg-purple-200 text-purple-400 rounded-xl cursor-not-allowed"
                >
                  Coming Soon
                </button>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl transition-all text-center"
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
              <NetworthDashboard />
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
              Kelola kekayaan dengan tools yang powerful dan mudah digunakan
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
                  className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Siap Mengelola Kekayaan Anda?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Bergabunglah dengan ribuan pengguna yang sudah mengoptimalkan wealth management mereka
            </p>
            <Link
              to="/pricing"
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl hover:bg-purple-50 transition-all shadow-lg"
            >
              Lihat Plan & Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}