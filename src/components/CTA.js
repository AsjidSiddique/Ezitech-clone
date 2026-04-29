import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="register" className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-navy p-10 lg:p-16 text-white shadow-2xl shadow-primary-200">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold text-primary-200 mb-4">
                <Sparkles size={14} />
                Limited Seats Available
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Ready to get started?
              </h2>
              <p className="text-primary-200 text-base sm:text-lg leading-relaxed">
                At Ezitech, we constantly push boundaries to deliver excellence. Our commitment to quality and innovation makes us your trusted partner for growth and success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 flex-shrink-0">
              <a
                href="#internships"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-lg text-base whitespace-nowrap"
              >
                GET STARTED NOW <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/923184485469"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 text-base whitespace-nowrap"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
