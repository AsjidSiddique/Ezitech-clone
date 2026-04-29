import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight, Heart } from 'lucide-react';

const exploreLinks = ['About Us', 'Partners', 'Portfolio', 'Careers', 'Blog'];
const internshipLinks = ['Strategy', 'eCommerce', 'Digital Marketing', 'Branding', 'Design'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-accent-400 to-primary-600" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex mb-5">
              <img
                src="https://ezitech.org/wp-content/uploads/2021/07/blue-official.png"
                alt="Ezitech Logo"
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span
                className="font-display font-bold text-2xl text-white hidden"
              >
                EZITECH
              </span>
            </a>

            {/* Address */}
            <div className="space-y-3 text-gray-400 text-sm mb-6">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Office #204, St. Annas Plaza, Main Hafeez-e-Mir Road, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+923184485469" className="hover:text-primary-400 transition-colors">
                  (012) 315-7777860
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@ezitech.org" className="hover:text-primary-400 transition-colors">
                  info@ezitech.org
                </a>
              </div>
            </div>

            {/* Developer Info Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-xs text-primary-300 font-semibold uppercase tracking-wider mb-3">
                🧑‍💻 Developed By
              </p>
              <p className="font-display font-bold text-white text-lg mb-1">Asjad Saddique</p>
              <p className="text-gray-400 text-xs mb-3">Full-Stack Developer · Islamabad, Pakistan</p>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:asjadsaddique4@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <Mail size={13} className="text-primary-400" />
                  asjadsaddique4@gmail.com
                </a>
                <a
                  href="tel:+923184485469"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <Phone size={13} className="text-primary-400" />
                  +92-318-4485469
                </a>
                <a
                  href="https://linkedin.com/in/asjid-siddique-4b0125357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={13} className="text-primary-400" />
                  linkedin.com/in/asjid-siddique
                </a>
                <a
                  href="https://github.com/AsjidSiddique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <Github size={13} className="text-primary-400" />
                  github.com/AsjidSiddique
                </a>
              </div>
            </div>
          </div>

          {/* Explore More */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5">Explore More</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Internships */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5">Internships</h4>
            <ul className="space-y-3">
              {internshipLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#internships"
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5">Updates</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to get the latest news &amp; updates.
            </p>
            {subscribed ? (
              <div className="bg-primary-600/20 border border-primary-400/30 rounded-xl p-4 text-primary-300 text-sm font-semibold text-center">
                ✅ Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary justify-center text-sm"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { href: 'https://linkedin.com/in/asjid-siddique-4b0125357', icon: <Linkedin size={16} />, label: 'LinkedIn' },
                { href: 'https://github.com/AsjidSiddique', icon: <Github size={16} />, label: 'GitHub' },
                { href: 'mailto:asjadsaddique4@gmail.com', icon: <Mail size={16} />, label: 'Email' },
                { href: 'tel:+923184485469', icon: <Phone size={16} />, label: 'Phone' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-600/20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © 2024 Ezitech Institute. All rights reserved. | Design &amp; Develop by Ezitech Solutions
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-primary-400 transition-colors">Terms &amp; Conditions</a>
            <span>·</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Developer credit */}
        <p className="text-center text-xs text-gray-600 mt-4 flex items-center justify-center gap-1">
          Cloned with <Heart size={12} className="text-red-400 fill-red-400" /> by{' '}
          <a
            href="https://github.com/AsjidSiddique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:underline font-semibold"
          >
            Asjad Saddique
          </a>
        </p>
      </div>
    </footer>
  );
}
