import { motion } from 'motion/react';
import { Check, X, PiggyBank, TrendingUp, Sparkles } from 'lucide-react';

export function FeatureComparison() {
  const features = [
    {
      category: 'M4 ROI Tracker',
      icon: TrendingUp,
      color: 'text-green-600',
      items: [
        { name: 'Investment portfolios', basic: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'ROI calculation', basic: 'Basic', pro: 'Advanced', enterprise: 'Advanced + AI' },
        { name: 'Data entry', basic: 'Manual', pro: 'Auto-sync', enterprise: 'Auto-sync + API' },
        { name: 'Reports', basic: 'Monthly', pro: 'Real-time', enterprise: 'Custom' },
        { name: 'Performance alerts', basic: false, pro: true, enterprise: true },
        { name: 'Benchmark comparison', basic: false, pro: true, enterprise: true },
      ]
    },
    {
      category: 'BUKABOX Networth System',
      icon: PiggyBank,
      color: 'text-purple-600',
      items: [
        { name: 'Dashboard access', basic: false, pro: true, enterprise: true },
        { name: 'Multi-asset tracking', basic: false, pro: 'Up to 20', enterprise: 'Unlimited' },
        { name: 'Real-time updates', basic: false, pro: true, enterprise: true },
        { name: 'Asset allocation insights', basic: false, pro: true, enterprise: true },
        { name: 'Goal planning', basic: false, pro: 'Basic', enterprise: 'Advanced' },
        { name: 'Predictive analytics', basic: false, pro: false, enterprise: true },
      ]
    },
    {
      category: 'Tax Engine & Automation',
      icon: Sparkles,
      color: 'text-blue-600',
      items: [
        { name: 'Tax calculation', basic: false, pro: false, enterprise: 'Automatic' },
        { name: 'Workflow automation', basic: false, pro: false, enterprise: true },
        { name: 'Compliance reporting', basic: false, pro: false, enterprise: true },
        { name: 'Data integrations', basic: false, pro: false, enterprise: 'Unlimited' },
        { name: 'AI-powered optimization', basic: false, pro: false, enterprise: true },
        { name: 'Dedicated support', basic: false, pro: false, enterprise: true },
      ]
    },
  ];

  const renderValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm text-slate-700">{value}</span>;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Perbandingan Fitur Detail
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Lihat detail lengkap apa yang Anda dapatkan di setiap plan
          </p>
        </motion.div>

        {/* Mobile: Accordion Style */}
        <div className="md:hidden space-y-6">
          {features.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
              >
                <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <h3 className="text-lg text-slate-900">{section.category}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-slate-100 pb-4 last:border-0">
                      <div className="mb-3 text-slate-900">{item.name}</div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Basic</div>
                          {renderValue(item.basic)}
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Pro</div>
                          {renderValue(item.pro)}
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Enterprise</div>
                          {renderValue(item.enterprise)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: Table Style */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
                <th className="py-6 px-6 text-left">Features</th>
                <th className="py-6 px-6 text-center">Basic</th>
                <th className="py-6 px-6 text-center bg-blue-600">
                  <div className="flex flex-col items-center gap-2">
                    <span>Pro</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Popular</span>
                  </div>
                </th>
                <th className="py-6 px-6 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((section, sectionIndex) => {
                const Icon = section.icon;
                return (
                  <motion.tr
                    key={sectionIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  >
                    <td colSpan={4} className="py-0">
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-4 px-6 border-y border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <Icon className={`w-6 h-6 ${section.color}`} />
                          </div>
                          <h3 className="text-lg text-slate-900">{section.category}</h3>
                        </div>
                      </div>
                      <table className="w-full">
                        <tbody>
                          {section.items.map((item, itemIndex) => (
                            <tr
                              key={itemIndex}
                              className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                              <td className="py-4 px-6 text-slate-700">{item.name}</td>
                              <td className="py-4 px-6 text-center">{renderValue(item.basic)}</td>
                              <td className="py-4 px-6 text-center bg-blue-50/50">{renderValue(item.pro)}</td>
                              <td className="py-4 px-6 text-center">{renderValue(item.enterprise)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg mb-2 text-slate-900">Basic</h4>
            <p className="text-sm text-slate-600">Perfect untuk individual yang baru mulai tracking investasi dengan M4 ROI Tracker</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-600 shadow-lg"
          >
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <PiggyBank className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg mb-2 text-slate-900">Pro</h4>
            <p className="text-sm text-slate-600">Comprehensive wealth management dengan ROI Tracker + Networth System untuk serious investors</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg mb-2 text-slate-900">Enterprise</h4>
            <p className="text-sm text-slate-600">Complete solution dengan tax automation untuk bisnis dan high-net-worth individuals</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
