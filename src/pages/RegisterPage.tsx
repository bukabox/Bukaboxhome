/**
 * Register Page - Google OAuth Sign Up
 * Halaman registrasi dengan Google OAuth authentication
 */

import { useNavigate } from 'react-router-dom';
import { GoogleLoginModal } from '../components/auth/GoogleLoginModal';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to BUKABOX
          </h1>
          <p className="text-lg text-gray-600">
            Sign up to get started with your subscription
          </p>
        </div>

        {/* Google Login Modal */}
        <GoogleLoginModal isOpen={showModal} onClose={handleClose} />

        {/* Quick Login Alternative */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-3">
            Atau untuk quick test tanpa Google:
          </p>
          <button
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Quick Test Login →
          </button>
        </div>
      </div>
    </div>
  );
}
