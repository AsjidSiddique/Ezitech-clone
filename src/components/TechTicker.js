import React from 'react';

const techs = [
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'Express', color: '#404040' },
  { name: 'WordPress', color: '#21759B' },
  { name: 'Adobe XD', color: '#FF61F6' },
  { name: 'Blender', color: '#F5792A' },
  { name: 'Adobe Animate', color: '#FF0000' },
  { name: 'Flutter', color: '#54C5F8' },
  { name: 'GameMaker', color: '#9ACD32' },
  { name: 'Python', color: '#3776AB' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'Figma', color: '#A259FF' },
  { name: 'MongoDB', color: '#4DB33D' },
];

const techIcons = {
  'Laravel': (
    <svg viewBox="0 0 50 52" className="w-6 h-6" fill="#FF2D20">
      <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302-.032.018v10.509a.8.8 0 0 1-.402.694L20.56 51.662a.849.849 0 0 1-.065.030.758.758 0 0 1-.557 0 .705.705 0 0 1-.065-.030L.301 40.962a.8.8 0 0 1-.402-.694V18.364a.87.87 0 0 1 .028-.219.758.758 0 0 1 .056-.168.974.974 0 0 1 .038-.064.872.872 0 0 1 .072-.092l.01-.009a.822.822 0 0 1 .064-.056.844.844 0 0 1 .06-.042L9.94 11.564v-.001l.056-.034a.708.708 0 0 1 .72 0l9.754 5.625.026.016.026-.016 9.73-5.61a.708.708 0 0 1 .72 0l9.754 5.625.052.03V5.63a.8.8 0 0 1 .402-.694L40.372.258a.705.705 0 0 1 .72 0l9.204 5.302a.8.8 0 0 1 .402.694v5.216l-.072.094z"/>
    </svg>
  ),
};

export default function TechTicker() {
  const doubled = [...techs, ...techs];

  return (
    <div className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-inner">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 mx-8 text-gray-600 hover:text-primary-600 transition-colors duration-300 cursor-default select-none"
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              <span className="font-bold text-lg whitespace-nowrap" style={{ color: tech.color }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
