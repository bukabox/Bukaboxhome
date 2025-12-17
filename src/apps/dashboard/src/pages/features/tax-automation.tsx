import React from 'react';
import { ArrowRight, FileText, Calculator, Clock, Shield } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '../../components/landing/Navbar';
import { Footer } from '../../components/layout/Footer';

export default function TaxAutomationFeaturePage() {
  const features = [
    {
      icon: Calculator,
      title: 'Automatic Calculation',
      description: 'Hitung pajak secara otomatis dari semua transaksi bisnis Anda. Sistem pintar yang mempelajari pola transaksi dan kategori pengeluaran.'
    },
    {
      icon: FileText,
      title: 'Compliance Ready',
      description: 'Format laporan sesuai dengan standar DJP dan peraturan perpajakan Indonesia. Siap untuk audit kapan saja.'
    },
    {
      icon: Clock,
      title: 'Workflow Automation',
      description: 'Otomasi alur kerja perpajakan dari input data, kalkulasi, hingga pelaporan. Hemat waktu hingga 80% dari proses manual.'
    },
    {
      icon: Shield,
      title: 'Security and Privacy',
      description: 'Data Anda aman dan terlindungi dengan enkripsi tingkat tinggi. Kepatuhan terhadap standar keamanan data.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Coming Soon</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
                <span className="font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tax Engine
                </span>
                <br />
                & Automation
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sistem otomasi perpajakan dan workflow management untuk efisiensi maksimal bisnis dan keuangan Anda. 
                Kelola pajak dengan mudah, cepat, dan akurat.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  disabled
                  className="px-8 py-4 bg-blue-200 text-blue-400 rounded-xl cursor-not-allowed"
                >
                  Coming Soon
                </button>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl transition-all text-center"
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
              <TaxAutomation />
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
              Otomasi perpajakan yang lengkap untuk efisiensi maksimal
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
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Siap Otomasi Perpajakan Bisnis?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Bergabunglah dengan bisnis-bisnis yang sudah menghemat waktu hingga 80% dalam proses perpajakan
            </p>
            <Link
              to="/pricing"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-lg"
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