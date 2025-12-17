/**
 * Service Card Component
 * Displays service information with access status and action button
 */

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, Lock, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  dashboardUrl?: string;
  learnMoreUrl?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  isActive,
  dashboardUrl,
  learnMoreUrl,
  color = 'blue' 
}: ServiceCardProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      gradient: 'from-blue-600 to-blue-400',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      button: 'bg-green-600 hover:bg-green-700 text-white',
      gradient: 'from-green-600 to-green-400',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      gradient: 'from-purple-600 to-purple-400',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      button: 'bg-orange-600 hover:bg-orange-700 text-white',
      gradient: 'from-orange-600 to-orange-400',
    },
  };

  const styles = colorClasses[color];

  return (
    <div className={`bg-white rounded-xl border-2 ${isActive ? styles.border : 'border-gray-200'} p-6 hover:shadow-lg transition-all`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${styles.bg}`}>
          <Icon className={`w-8 h-8 ${styles.text}`} />
        </div>
        
        {isActive ? (
          <span className="flex items-center gap-1 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
            <CheckCircle className="w-4 h-4" />
            Active
          </span>
        ) : (
          <span className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            <Lock className="w-4 h-4" />
            Locked
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 min-h-[40px]">{description}</p>

      {/* Actions */}
      <div className="flex gap-3">
        {isActive && dashboardUrl ? (
          <Link 
            to={dashboardUrl}
            className={`flex-1 px-4 py-2 rounded-lg ${styles.button} text-center transition-colors`}
          >
            Buka Dashboard
          </Link>
        ) : (
          <Link 
            to="/pricing"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-center transition-colors"
          >
            Upgrade Now
          </Link>
        )}
        
        {learnMoreUrl && (
          <Link 
            to={learnMoreUrl}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 text-center transition-colors"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}
