import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    tag: 'Best Hybrid Internships in Pakistan',
    title: 'Launch Your Career in',
    highlight: 'Tech & Innovation',
    subtitle:
      'Join Ezitech Institute and gain hands-on experience with expert mentorship, real-world projects, and guaranteed career growth.',
    image: 'https://ezitech.org/wp-content/uploads/2026/03/pexels-readymade-3964576.jpg',
    cta: 'Explore Internships',
    ctaSecondary: 'Learn More',
  },
  {
    tag: 'Transform Your Future',
    title: 'Become a Skilled',
    highlight: 'Game Developer',
    subtitle:
      'Bring your game ideas to life with cutting-edge tools and technologies. Build, launch, and level up your skills.',
    image: 'https://ezitech.org/wp-content/uploads/revslider/rotating-words1/01-1.jpg',
    cta: 'Start Internship',
    ctaSecondary: 'View Programs',
  },
  {
    tag: 'Expert-Led Training',
    title: 'Master the Digital',
    highlight: 'Landscape',
    subtitle:
      'Get the knowledge, tools, and support you need to excel in the ever-evolving digital world.',
    image: 'https://ezitech.org/wp-content/uploads/revslider/o/7/ccc4adf5fca3dd374161cef903a4ae19.webp',
    cta: 'Get Started',
    ctaSecondary: 'About Us',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 400);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${animating ? 'opacity-0' : 'opacity-30'}`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary-600/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent-400/10 blur-3xl" />
      <div
        className="particle w-16 h-16 top-1/4 right-1/3"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="particle w-8 h-8 top-3/4 right-1/4"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="particle w-12 h-12 top-1/2 left-1/4"
        style={{ animationDelay: '4s' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div
          className={`transition-all duration-500 ${
            animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-primary-300 text-sm font-semibold tracking-wide">
              {slide.tag}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-2 max-w-4xl">
            {slide.title}
          </h1>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6 max-w-4xl text-gradient">
            {slide.highlight}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#internships" className="btn-primary text-base">
              {slide.cta}
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-outline text-base">
              <Play size={18} className="text-accent-400" />
              {slide.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-primary-600/30 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-primary-400' : 'w-2 h-2 bg-white/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-primary-600/30 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest rotate-90 origin-center translate-y-8">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>
    </section>
  );
}
