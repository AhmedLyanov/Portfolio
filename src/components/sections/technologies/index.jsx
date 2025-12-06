'use client';

import { technologies } from '@/constants';
import { useTheme } from '@/contexts/ThemeContext';

export default function Technologies() {
  const { theme } = useTheme();

  return (
    <section className="text-center mb-24">
      <span
        className="uppercase font-bold tracking-[0.25em] text-2xl block mb-12"
        style={{ color: 'var(--muted-foreground)' }}
      >
        Experience with
      </span>
      <div className="technologies-container flex gap-16 justify-center flex-wrap">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="technology-item transition-transform duration-300 p-4 rounded-lg flex flex-col items-center"
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)'
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className="w-16 h-16 mb-2 transition-transform"
            />
            
          </div>
        ))}
      </div>
    </section>
  );
}