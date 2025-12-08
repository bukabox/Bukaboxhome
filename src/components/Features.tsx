import { PiggyBank, BanknoteArrowDown, BrainCircuit } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: PiggyBank,
      title: 'BUKABOX Networth System',
      description: 'Aplikasi canggih untuk memantau pertumbuhan kekayaan Anda dengan presisi tinggi dan fitur analitik kompleks',
      badge: 'Soon'
    },
    {
      icon: BanknoteArrowDown,
      title: 'M4 Return Tracker',
      description: 'Dashboard tracking return investasi paling efektif dan efisien berbasis produk terbaik di kelasnya'
    },
    {
      icon: BrainCircuit,
      title: 'Upcoming Product',
      description: 'Inovasi terbaru sedang kami kembangkan untuk Anda - Stay tuned!'
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Kenapa <span className="font-black">BUKABOX</span>?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Temukan produk unggulan kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              >
                {feature.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {feature.badge}
                  </div>
                )}
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}