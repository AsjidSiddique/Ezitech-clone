import React from 'react';
import { Search, ClipboardCheck, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search size={28} />,
    title: 'Discover Tech',
    description:
      'Explore internships across various technologies that align with your career goals. Start your journey by selecting a field that excites you.',
    color: 'from-blue-500 to-cyan-400',
    bgLight: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    number: '02',
    icon: <ClipboardCheck size={28} />,
    title: 'Evaluate Skill',
    description:
      'Our process includes an interview and a short evaluation test to assess your skills and readiness, helping us match you with the right opportunity.',
    color: 'from-purple-500 to-indigo-400',
    bgLight: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    number: '03',
    icon: <TrendingUp size={28} />,
    title: 'Track Record',
    description:
      'Once selected, gain access to our portal to monitor your internship progress, track your achievements, and stay on top of your goals.',
    color: 'from-orange-500 to-amber-400',
    bgLight: 'bg-orange-50',
    border: 'border-orange-200',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary-50 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Simple Process
          </div>
          <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 delay-100">
            Shaping <span className="text-gradient-blue">Empowering</span> Future IT Talent
          </h2>
          <p className="reveal text-gray-500 text-lg mt-4 max-w-xl mx-auto delay-200">
            Through a Seamless &amp; Proven Process
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-orange-300 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`reveal card-hover relative z-10 rounded-3xl border ${step.border} ${step.bgLight} p-8 text-center delay-${(i + 1) * 100}`}
            >
              {/* Big number */}
              <div
                className={`absolute -top-5 right-6 font-display font-black text-7xl bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 select-none pointer-events-none`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg`}
              >
                {step.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Help text */}
        <p className="reveal text-center text-gray-400 mt-12 text-sm delay-400">
          Still have questions?{' '}
          <a href="#" className="text-primary-600 font-semibold hover:underline">Browse documentation</a>
          {' '}or{' '}
          <a href="#" className="text-primary-600 font-semibold hover:underline">submit a ticket</a>
        </p>
      </div>
    </section>
  );
}
