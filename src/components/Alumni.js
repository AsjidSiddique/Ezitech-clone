import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const alumni = [
  {
    name: 'Fatima S.',
    role: 'Graphic Designer',
    platform: 'LinkedIn',
    platformIcon: '💼',
    photo: 'https://ezitech.org/wp-content/uploads/2024/11/Screenshot-2024-11-02-013820.png',
    review:
      "I'm already impressed by the guidance and support from the mentors. Making accessible and creative design is now my passion. Thank you, Ezitech Institute!",
    stars: 5,
  },
  {
    name: 'Muhammad Z.',
    role: 'WordPress Developer',
    platform: 'Medium',
    platformIcon: '✍️',
    photo: 'https://ezitech.org/wp-content/uploads/2024/11/Screenshot-2024-11-02-124503.png',
    review:
      'Early in my Graphic Design internship, and I\'m already impressed by the mentorship and support. Ezitech provides the perfect environment to learn and grow as a designer.',
    stars: 5,
  },
  {
    name: 'Muhammad J.',
    role: 'WordPress Developer',
    platform: 'LinkedIn',
    platformIcon: '💼',
    photo: 'https://ezitech.org/wp-content/uploads/2024/11/Screenshot-2024-11-02-125156.png',
    review:
      'Just started my WordPress internship and I\'m already impressed by the mentorship and support. Ezitech offers a great environment to learn and build real skills.',
    stars: 5,
  },
  {
    name: 'Aima K.',
    role: 'Machine Learning Intern',
    platform: 'GitHub',
    platformIcon: '💻',
    photo: 'https://ezitech.org/wp-content/uploads/2024/11/Screenshot-2024-11-02-125510.png',
    review:
      "I'm in the early stages of my Machine Learning internship and already amazed by the level of expertise and support from the mentors. In-depth guidance makes complex topics easy to understand.",
    stars: 5,
  },
  {
    name: 'Sara M.',
    role: 'UI/UX Designer',
    platform: 'LinkedIn',
    platformIcon: '💼',
    photo: 'https://ezitech.org/wp-content/uploads/2024/11/Screenshot-2024-11-02-125946.png',
    review:
      'Ezitech has completely transformed my design thinking. The real-world projects helped me build a strong portfolio. Highly recommended for aspiring designers!',
    stars: 5,
  },
  {
    name: 'Ahmed R.',
    role: 'Full Stack Developer',
    platform: 'GitHub',
    platformIcon: '💻',
    photo: 'https://ezitech.org/wp-content/uploads/2024/11/Screenshot-2024-11-02-130701.png',
    review:
      'The MERN stack program at Ezitech is exceptional. Learned more in 3 months here than a year of self-study. The mentors are truly world-class.',
    stars: 5,
  },
  {
    name: 'Zara B.',
    role: 'Digital Marketer',
    platform: 'LinkedIn',
    platformIcon: '💼',
    photo: 'https://ezitech.org/wp-content/uploads/2024/11/Screenshot-2024-11-02-130900.png',
    review:
      'From zero knowledge to running full digital campaigns — Ezitech made it possible. The support system here is unlike any other institute.',
    stars: 5,
  },
];

export default function Alumni() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const visibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 3;
  };

  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => setPerView(visibleCount());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (alumni.length - perView + 1));
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, perView]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => Math.min(prev + 1, alumni.length - perView));
  };
  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-50 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-400/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Alumni Stories
          </div>
          <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 delay-100">
            Alumni <span className="text-gradient-blue">❤️</span>
          </h2>
          <p className="reveal text-gray-500 text-lg mt-4 max-w-2xl mx-auto delay-200">
            Our interns consistently share positive experiences, highlighting the practical skills and professional growth they achieve with us.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(calc(-${current * (100 / perView)}% - ${current * (24 / perView)}px))` }}
          >
            {alumni.map((person, i) => (
              <div
                key={i}
                className="flex-shrink-0 card-hover"
                style={{ width: `calc(${100 / perView}% - ${((perView - 1) * 24) / perView}px)` }}
              >
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-lg shadow-blue-50 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(person.stars)].map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">
                    "{person.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary-200"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=2196e8&color=fff&size=48`;
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">{person.name}</p>
                      <p className="text-gray-400 text-xs truncate">{person.role}</p>
                    </div>
                    <div className="text-xl">{person.platformIcon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-11 h-11 rounded-full border-2 border-primary-200 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: alumni.length - perView + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2.5 bg-primary-600' : 'w-2.5 h-2.5 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current >= alumni.length - perView}
            className="w-11 h-11 rounded-full border-2 border-primary-200 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Help text */}
        <p className="reveal text-center text-gray-400 mt-10 text-sm">
          Still have questions?{' '}
          <a href="#" className="text-primary-600 font-semibold hover:underline">Browse documentation</a>
          {' '}or{' '}
          <a href="#" className="text-primary-600 font-semibold hover:underline">submit a ticket</a>
        </p>
      </div>
    </section>
  );
}
