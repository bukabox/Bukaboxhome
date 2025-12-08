import { Box } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Box className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl mb-6 text-white">
          Siap Berkembang Bersama ?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan kreator independen yang telah memulai perjalanan mereka bersama BUKABOX
        </p>
        <a 
          href="https://www.youtube.com/@BUKABOX_id" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          Subscribe di YouTube
        </a>
      </div>
    </section>
  );
}