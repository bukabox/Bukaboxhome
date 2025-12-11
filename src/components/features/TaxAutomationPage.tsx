import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Zap, FileCheck, RefreshCw, Database, Cloud } from 'lucide-react';
import { TaxAutomation } from '../illustrations/TaxAutomation';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund' | 'features' | 'networth' | 'roi-tracker' | 'tax-automation';

interface TaxAutomationPageProps {
  onNavigate?: (page: PageType) => void;
}

export function TaxAutomationPage({ onNavigate }: TaxAutomationPageProps) {
  const features = [
    {
      icon: Zap,
      title: 'Automatic Calculation',
      description: 'Hitung pajak secara otomatis dari semua transaksi bisnis Anda. Sistem pintar yang mempelajari pola transaksi dan kategori pengeluaran.'
    },
    {
      icon: FileCheck,
      title: 'Compliance Ready',
      description: 'Format laporan sesuai dengan standar DJP dan peraturan perpajakan Indonesia. Siap untuk audit kapan saja.'
    },
    {
      icon: RefreshCw,
      title: 'Workflow Automation',
      description: 'Otomasi alur kerja perpajakan dari input data, kalkulasi, hingga pelaporan. Hemat waktu hingga 80% dari proses manual.'
    },
    {
      icon: Database,
      title: 'Smart Data Integration',
      description: 'Integrasi langsung dengan sistem accounting, e-commerce, dan payment gateway untuk sinkronisasi data otomatis.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Storage',
      description: 'Semua dokumen pajak tersimpan aman di cloud dengan backup otomatis. Akses dari mana saja, kapan saja.'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Insights',
      description: 'Dapatkan rekomendasi tax optimization berbasis AI untuk meminimalkan beban pajak secara legal dan efektif.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate?.('home')}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8"
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
                  className="px-8 py-4 bg-slate-300 text-slate-500 rounded-xl cursor-not-allowed"
                >
                  Menuju Dashboard
                </button>
                <button
                  onClick={() => onNavigate?.('pricing')}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Lihat Pricing
                </button>
              </div>

              <p className="text-sm text-slate-500 mt-4">
                * Dashboard dalam tahap development. Join waitlist untuk update terbaru!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-100">
                <TaxAutomation />
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
              Solusi lengkap untuk automasi perpajakan bisnis modern
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
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
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
              Automasi perpajakan dalam 3 langkah sederhana
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect & Import',
                description: 'Hubungkan sistem accounting atau import data transaksi dari berbagai sumber. Support multi-format dan API integration.'
              },
              {
                step: '02',
                title: 'Auto Processing',
                description: 'AI engine otomatis mengkategorikan transaksi, menghitung pajak, dan mengidentifikasi potensi deduction.'
              },
              {
                step: '03',
                title: 'Report & File',
                description: 'Generate laporan pajak sesuai format DJP dan submit langsung melalui dashboard atau export untuk review.'
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
                <div className="text-7xl font-black text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-2xl mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Kenapa Perlu Tax Automation?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Hemat Waktu 80%',
                description: 'Proses yang biasanya memakan waktu berjam-jam atau bahkan berhari-hari, sekarang selesai dalam hitungan menit.',
                stat: '80%'
              },
              {
                title: 'Minimalisir Error',
                description: 'Kalkulasi otomatis mengurangi human error hingga mendekati nol. Lebih akurat dan reliable.',
                stat: '99.9%'
              },
              {
                title: 'Compliance Guaranteed',
                description: 'Selalu up-to-date dengan peraturan pajak terbaru. Hindari denda dan masalah compliance.',
                stat: '100%'
              },
              {
                title: 'Cost Efficient',
                description: 'Kurangi biaya operasional dan konsultan pajak dengan automasi yang powerful dan efisien.',
                stat: '60%'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100"
              >
                <div className="text-5xl font-black text-blue-600 mb-4">{item.stat}</div>
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
            className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Siap Automasi Perpajakan Anda?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Daftar sekarang dan dapatkan early bird discount saat launching!
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
                className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
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
