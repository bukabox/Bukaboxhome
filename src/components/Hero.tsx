import { Box, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20 md:py-0">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 text-center px-5 sm:px-6 md:px-4 w-full max-w-screen-xl mx-auto">
        {/* Logo and Title */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 mb-5 sm:mb-6 md:mb-8">
          <div className="relative">
            <Box className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 text-blue-600 stroke-[1.5]" />
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-600 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-600 rounded-full"></div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-9xl tracking-tight font-black px-2">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
              BUKABOX
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-2xl text-slate-600 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Breaking the Box
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            Mulai Sekarang
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-md">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-blue-600 rounded-full"></div>
        </div>
      </button>
    </section>
  );
}