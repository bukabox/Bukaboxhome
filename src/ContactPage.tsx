import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from './components/ui/button';
import { Footer } from './components/Footer';
import { useState } from 'react';

type PageType = 'home' | 'pricing' | 'checkout' | 'terms' | 'privacy' | 'refund' | 'features' | 'networth' | 'roi-tracker' | 'tax-automation';

interface ContactPageProps {
  onNavigate?: (page: PageType) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda sudah diterima. Tim kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Hubungi Kami</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Mari Berkomunikasi
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Punya pertanyaan tentang BUKABOX? Tim kami siap membantu Anda. 
              Kirim pesan dan kami akan merespons dalam 24 jam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg mb-2 text-slate-900">Email</h3>
              <p className="text-sm text-slate-600 mb-2">Kirim email ke tim support kami</p>
              <a href="mailto:support@bukabox.co.id" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                support@bukabox.co.id
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-2 text-slate-900">Phone</h3>
              <p className="text-sm text-slate-600 mb-2">Hubungi kami via WhatsApp</p>
              <a href="tel:+62812345678" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                +62 812-3456-789
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg mb-2 text-slate-900">Jam Operasional</h3>
              <p className="text-sm text-slate-600 mb-2">Senin - Jumat</p>
              <p className="text-green-600 text-sm font-medium">09:00 - 18:00 WIB</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
            >
              <h2 className="text-3xl mb-2 text-slate-900">Kirim Pesan</h2>
              <p className="text-slate-600 mb-8">Isi form di bawah ini dan kami akan segera merespons</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subjek
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="general">Pertanyaan Umum</option>
                    <option value="pricing">Pertanyaan Pricing</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership & Business</option>
                    <option value="feedback">Feedback & Saran</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </Button>
              </form>
            </motion.div>

            {/* Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl mb-4 text-slate-900">Pertanyaan Umum</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base text-slate-900 mb-2">Berapa lama respon time support?</h4>
                    <p className="text-sm text-slate-600">Tim kami biasanya merespons dalam 24 jam kerja untuk semua pertanyaan.</p>
                  </div>
                  <div>
                    <h4 className="text-base text-slate-900 mb-2">Apakah ada trial gratis?</h4>
                    <p className="text-sm text-slate-600">Ya! Kami menyediakan 14 hari trial untuk semua plan dengan full access ke features.</p>
                  </div>
                  <div>
                    <h4 className="text-base text-slate-900 mb-2">Bagaimana cara upgrade plan?</h4>
                    <p className="text-sm text-slate-600">Anda bisa upgrade plan kapan saja dari dashboard dengan pembayaran pro-rata.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-slate-900">Lokasi Kantor</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Jakarta Selatan, Indonesia<br />
                      Remote-first company
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl mb-3">Partnership Opportunities</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Tertarik untuk bermitra dengan BUKABOX? Hubungi tim business development kami.
                </p>
                <a 
                  href="mailto:partnership@bukabox.co.id"
                  className="inline-block px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 text-sm font-medium"
                >
                  Hubungi BD Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
