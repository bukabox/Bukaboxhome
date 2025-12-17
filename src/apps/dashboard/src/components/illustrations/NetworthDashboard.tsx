export function NetworthDashboard() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="240" fill="#F8FAFC" rx="12"/>
      
      {/* Header */}
      <rect x="20" y="20" width="120" height="8" rx="4" fill="#CBD5E1"/>
      <rect x="20" y="35" width="80" height="6" rx="3" fill="#E2E8F0"/>
      
      {/* Metric Cards */}
      {/* Card 1 - Total Balance */}
      <rect x="20" y="60" width="85" height="70" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
      <circle cx="35" cy="75" r="8" fill="#8B5CF6" opacity="0.2"/>
      <path d="M32 75h6M35 72v6" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="28" y="90" width="50" height="4" rx="2" fill="#E2E8F0"/>
      <rect x="28" y="100" width="35" height="6" rx="3" fill="#1E293B"/>
      <rect x="28" y="110" width="25" height="3" rx="1.5" fill="#10B981" opacity="0.6"/>
      
      {/* Card 2 - Revenue */}
      <rect x="115" y="60" width="85" height="70" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
      <circle cx="130" cy="75" r="8" fill="#10B981" opacity="0.2"/>
      <path d="M127 78l3-6 3 6M130 78v-6" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="123" y="90" width="45" height="4" rx="2" fill="#E2E8F0"/>
      <rect x="123" y="100" width="30" height="6" rx="3" fill="#1E293B"/>
      <rect x="123" y="110" width="25" height="3" rx="1.5" fill="#10B981" opacity="0.6"/>
      
      {/* Card 3 - Expenses */}
      <rect x="210" y="60" width="85" height="70" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
      <circle cx="225" cy="75" r="8" fill="#F59E0B" opacity="0.2"/>
      <path d="M222 72l6 6M228 72l-6 6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="218" y="90" width="45" height="4" rx="2" fill="#E2E8F0"/>
      <rect x="218" y="100" width="32" height="6" rx="3" fill="#1E293B"/>
      <rect x="218" y="110" width="20" height="3" rx="1.5" fill="#EF4444" opacity="0.6"/>
      
      {/* Card 4 - Net Profit */}
      <rect x="305" y="60" width="75" height="70" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
      <circle cx="318" cy="75" r="8" fill="#3B82F6" opacity="0.2"/>
      <path d="M315 75h6M318 72v6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="313" y="90" width="40" height="4" rx="2" fill="#E2E8F0"/>
      <rect x="313" y="100" width="28" height="6" rx="3" fill="#1E293B"/>
      <rect x="313" y="110" width="22" height="3" rx="1.5" fill="#10B981" opacity="0.6"/>
      
      {/* Chart Section */}
      <rect x="20" y="150" width="360" height="70" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
      <rect x="30" y="160" width="60" height="4" rx="2" fill="#CBD5E1"/>
      
      {/* Simple Line Chart */}
      <path 
        d="M40 200 L70 195 L100 185 L130 190 L160 175 L190 170 L220 165 L250 155 L280 150 L310 145 L340 140" 
        stroke="#3B82F6" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Area under line */}
      <path 
        d="M40 200 L70 195 L100 185 L130 190 L160 175 L190 170 L220 165 L250 155 L280 150 L310 145 L340 140 L340 210 L40 210 Z" 
        fill="url(#gradient1)" 
        opacity="0.2"
      />
      
      {/* Dots on line */}
      <circle cx="340" cy="140" r="3.5" fill="#3B82F6"/>
      <circle cx="280" cy="150" r="3" fill="#3B82F6" opacity="0.6"/>
      <circle cx="220" cy="165" r="3" fill="#3B82F6" opacity="0.6"/>
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
