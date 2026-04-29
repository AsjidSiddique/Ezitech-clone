import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Successful Interns', icon: '🎓' },
  { value: 10, suffix: '+', label: 'Internship Programs', icon: '📚' },
  { value: 50, suffix: '+', label: 'Industry Partners', icon: '🤝' },
  { value: 98, suffix: '%', label: 'Placement Rate', icon: '🚀' },
];

function Counter({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #2196e8 0%, transparent 50%), radial-gradient(circle at 80% 50%, #f97316 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Hundreds of <span className="text-gradient">Successful</span> Alumni
          </h2>
          <p className="reveal text-gray-400 mt-4 text-lg delay-100">
            Numbers that speak louder than words
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal glass rounded-3xl p-6 lg:p-8 text-center card-hover delay-${(i + 1) * 100}`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-display font-black text-4xl lg:text-5xl text-white mb-2">
                <Counter target={stat.value} suffix={stat.suffix} active={visible} />
              </div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
