import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  'Hands-on real-world project experience',
  'Expert mentorship from industry professionals',
  'Hybrid learning: online + in-person sessions',
  'Internationally recognized certifications',
  'Placement assistance & career support',
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="reveal-left relative">
            <div className="relative">
              <img
                src="https://ezitech.org/wp-content/uploads/2026/03/pexels-readymade-3964576.jpg"
                alt="Ezitech students"
                className="w-full rounded-3xl shadow-2xl object-cover h-80 sm:h-96"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop';
                }}
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-black text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">500+</p>
                    <p className="text-gray-400 text-xs">Successful Interns</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-primary-400 to-primary-600"
                    />
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-bold">
                    +
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-4 shadow-xl">
                <p className="font-black text-2xl">10+</p>
                <p className="text-xs text-primary-200">Programs</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              What we do
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-5 leading-tight">
              Empowering Connections
              <span className="block text-gradient-blue">in the Digital World</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4">
              We equip future professionals with the essential tools to thrive in both traditional and digital IT landscapes.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              With years of experience and countless successful placements, Ezitech Institute has perfected a unique learning process that goes beyond theory. We delve deep into practical skills and real-world applications, helping students understand, connect, and excel in the ever-evolving tech market.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                  <CheckCircle size={18} className="text-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#internships" className="btn-primary" style={{ display: 'inline-flex' }}>
              More About Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
