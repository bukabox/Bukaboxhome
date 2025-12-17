export function TaxAutomation() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="240" fill="#EFF6FF" rx="12"/>
      
      {/* Header */}
      <rect x="20" y="20" width="110" height="8" rx="4" fill="#93C5FD"/>
      <rect x="20" y="35" width="75" height="6" rx="3" fill="#BFDBFE"/>
      
      {/* Automation Workflow Cards */}
      {/* Step 1 - Input */}
      <g>
        <rect x="20" y="60" width="80" height="65" rx="8" fill="white" stroke="#BFDBFE" strokeWidth="1.5"/>
        <circle cx="40" cy="78" r="10" fill="#3B82F6" opacity="0.15"/>
        <rect x="34" y="74" width="12" height="8" rx="1" fill="none" stroke="#3B82F6" strokeWidth="1.5"/>
        <path d="M37 78h6M40 75v6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="28" y="95" width="45" height="4" rx="2" fill="#DBEAFE"/>
        <rect x="28" y="102" width="35" height="3" rx="1.5" fill="#DBEAFE"/>
        <text x="50" y="118" fill="#1E40AF" fontSize="9" fontWeight="600" textAnchor="middle">Input</text>
      </g>
      
      {/* Arrow 1 */}
      <path d="M105 92h15" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round"/>
      <path d="M117 89l3 3-3 3" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      
      {/* Step 2 - Process */}
      <g>
        <rect x="125" y="60" width="80" height="65" rx="8" fill="white" stroke="#BFDBFE" strokeWidth="1.5"/>
        <circle cx="145" cy="78" r="10" fill="#8B5CF6" opacity="0.15"/>
        <circle cx="145" cy="78" r="6" fill="none" stroke="#8B5CF6" strokeWidth="1.5"/>
        <path d="M145 75v6M142 78h6" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="133" y="95" width="45" height="4" rx="2" fill="#EDE9FE"/>
        <rect x="133" y="102" width="38" height="3" rx="1.5" fill="#EDE9FE"/>
        <rect x="133" y="108" width="30" height="3" rx="1.5" fill="#EDE9FE"/>
        <text x="165" y="118" fill="#5B21B6" fontSize="9" fontWeight="600" textAnchor="middle">Calculate</text>
      </g>
      
      {/* Arrow 2 */}
      <path d="M210 92h15" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round"/>
      <path d="M222 89l3 3-3 3" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      
      {/* Step 3 - Output */}
      <g>
        <rect x="230" y="60" width="80" height="65" rx="8" fill="white" stroke="#BFDBFE" strokeWidth="1.5"/>
        <circle cx="250" cy="78" r="10" fill="#10B981" opacity="0.15"/>
        <path d="M247 78l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <rect x="238" y="95" width="40" height="4" rx="2" fill="#D1FAE5"/>
        <rect x="238" y="102" width="35" height="3" rx="1.5" fill="#D1FAE5"/>
        <text x="270" y="118" fill="#065F46" fontSize="9" fontWeight="600" textAnchor="middle">Output</text>
      </g>
      
      {/* Integration Icons */}
      <g>
        <rect x="325" y="60" width="55" height="65" rx="8" fill="white" stroke="#BFDBFE" strokeWidth="1.5"/>
        
        {/* API Icon */}
        <circle cx="352" cy="78" r="8" fill="#3B82F6" opacity="0.1"/>
        <rect x="347" y="75" width="10" height="6" rx="1" fill="none" stroke="#3B82F6" strokeWidth="1.2"/>
        
        {/* Cloud Icon */}
        <g transform="translate(343, 92)">
          <path d="M6 10c-1.7 0-3-1.3-3-3 0-1.4 1-2.6 2.3-2.9.2-1.4 1.4-2.4 2.7-2.4 1 0 1.9.5 2.4 1.3.3-.1.6-.2.9-.2 1.4 0 2.5 1.1 2.5 2.5 0 .3 0 .5-.1.8 1 .3 1.7 1.2 1.7 2.3 0 1.4-1.1 2.5-2.5 2.5H6z" 
                fill="#8B5CF6" opacity="0.6"/>
        </g>
        
        {/* Database Icon */}
        <g transform="translate(343, 105)">
          <ellipse cx="9" cy="3" rx="7" ry="2.5" fill="none" stroke="#10B981" strokeWidth="1.2"/>
          <path d="M2 3v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V3" fill="none" stroke="#10B981" strokeWidth="1.2"/>
        </g>
      </g>
      
      {/* Bottom Section - Dashboard Preview */}
      <rect x="20" y="145" width="360" height="75" rx="10" fill="white" stroke="#BFDBFE" strokeWidth="1.5"/>
      
      {/* Title */}
      <rect x="30" y="158" width="80" height="5" rx="2.5" fill="#BFDBFE"/>
      <rect x="30" y="168" width="55" height="4" rx="2" fill="#E0E7FF"/>
      
      {/* Tax Calculation Results */}
      <g>
        {/* Result Box 1 */}
        <rect x="30" y="182" width="100" height="28" rx="6" fill="#DBEAFE"/>
        <rect x="38" y="188" width="50" height="3" rx="1.5" fill="#3B82F6" opacity="0.4"/>
        <text x="90" y="202" fill="#1E40AF" fontSize="11" fontWeight="bold" textAnchor="end">Rp 12.5M</text>
        
        {/* Result Box 2 */}
        <rect x="142" y="182" width="100" height="28" rx="6" fill="#EDE9FE"/>
        <rect x="150" y="188" width="48" height="3" rx="1.5" fill="#8B5CF6" opacity="0.4"/>
        <text x="202" y="202" fill="#5B21B6" fontSize="11" fontWeight="bold" textAnchor="end">Rp 8.3M</text>
        
        {/* Result Box 3 */}
        <rect x="254" y="182" width="100" height="28" rx="6" fill="#D1FAE5"/>
        <rect x="262" y="188" width="45" height="3" rx="1.5" fill="#10B981" opacity="0.4"/>
        <text x="314" y="202" fill="#065F46" fontSize="11" fontWeight="bold" textAnchor="end">Rp 4.2M</text>
      </g>
      
      {/* Status Indicator */}
      <circle cx="370" cy="158" r="4" fill="#10B981"/>
      <text x="362" y="162" fill="#64748B" fontSize="8" textAnchor="end">Active</text>
    </svg>
  );
}
