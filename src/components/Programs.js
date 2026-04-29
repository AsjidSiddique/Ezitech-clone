import React from 'react';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'App Development',
    icon: 'https://ezitech.org/wp-content/uploads/2024/11/app-development.png',
    description:
      'Develop cross-platform and native apps for iOS, Android, Windows, and Mac using the latest tools and frameworks.',
    color: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    tag: 'Mobile & Desktop',
  },
  {
    title: 'Graphics Designing',
    icon: 'https://ezitech.org/wp-content/uploads/2024/11/pen-tool.png',
    description:
      'Master graphic design with industry-standard tools. Bring your creative visions to life with expert guidance.',
    color: 'from-pink-500 to-rose-400',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    tag: 'Creative Arts',
  },
  {
    title: 'Artificial Intelligence',
    icon: 'https://ezitech.org/wp-content/uploads/2024/11/thinking.png',
    description:
      'Dive into Machine Learning, Deep Learning, and AI tools. Build intelligent systems and automate the future.',
    color: 'from-purple-600 to-indigo-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    tag: 'ML & Deep Learning',
  },
  {
    title: '2D/3D Architecture',
    icon: 'https://ezitech.org/wp-content/uploads/2024/11/architecture.png',
    description:
      'Learn architectural visualization and design. Create stunning 2D blueprints and photorealistic 3D models.',
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    tag: 'Architecture & Design',
  },
  {
    title: 'Web Development',
    icon: 'https://ezitech.org/wp-content/uploads/2024/11/programming.png',
    description:
      'Full-stack web development with MERN, WordPress and more. Build modern, scalable, and beautiful websites.',
    color: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    tag: 'Full-Stack',
  },
  {
    title: 'Digital Marketing',
    icon: 'https://ezitech.org/wp-content/uploads/2024/11/content-1.png',
    description:
      'SEO, Social Media, Content Marketing, and more. Drive growth and build powerful digital brand strategies.',
    color: 'from-red-500 to-orange-400',
    bg: 'bg-red-50',
    border: 'border-red-200',
    tag: 'Marketing & SEO',
  },
];

export default function Programs() {
  return (
    <section id="internships" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 via-accent-400 to-primary-600" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Our Internship Programs
          </div>
          <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 delay-100">
            Explore <span className="text-gradient-blue">In-Demand</span> Programs
          </h2>
          <p className="reveal text-gray-500 text-lg mt-4 max-w-2xl mx-auto delay-200">
            Hands-on internships designed to give you real industry experience and launch your tech career.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, i) => (
            <div
              key={program.title}
              className={`reveal card-hover rounded-3xl border ${program.border} ${program.bg} p-6 lg:p-8 relative overflow-hidden group cursor-pointer delay-${(i % 3 + 1) * 100}`}
            >
              {/* Gradient strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color} rounded-t-3xl`} />

              {/* Icon */}
              <div className="mb-5 flex items-start justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center p-2">
                  <img
                    src={program.icon}
                    alt={program.title}
                    className="w-10 h-10 object-contain"
                    onError={(e) => { e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232196e8"><rect width="24" height="24" rx="4"/></svg>'; }}
                  />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/60 text-gray-600`}>
                  {program.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{program.description}</p>

              {/* CTA */}
              <div className={`flex items-center gap-1 text-sm font-bold bg-gradient-to-r ${program.color} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
                Explore Program <ArrowRight size={16} className="text-primary-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
