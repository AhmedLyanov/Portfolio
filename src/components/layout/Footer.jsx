'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className="w-full h-auto p-[50px_230px]"
      style={{
        backgroundColor: 'var(--card)',
        color: 'var(--foreground)',
        borderTop: `1px solid ${theme === 'dark' ? 'var(--border)' : 'var(--border)'}`
      }}
    >
      <div className="footer_content">
        <div className="footer_content--title">
          <span
            className="font-bold text-[23.53px]"
            style={{ color: 'var(--primary)' }}
          >
            Contact
          </span>
        </div>
        <div
          className="footer_content--description text-[14.12px] pt-[34px]"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Seasoned Full Stack Software Engineer with over 3 years of hands-on
          experience in designing and implementing robust, scalable, and
          innovative web solutions. Adept at leveraging a comprehensive skill
          set encompassing front-end and back-end technologies
        </div>
        <div className="footer_content--email flex gap-2 pt-[22px] items-center">
          <img src="/Email.svg" alt="Email icon" className="w-5 h-5" />
          <span
            className="text-[14.12px]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            amoshal1997@gmail.com
          </span>
        </div>
        <div className="footer_content--contacts_link flex gap-5 pt-[41px]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 transition-transform hover:scale-110" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src="/x.svg" alt="X" className="w-6 h-6 transition-transform hover:scale-110" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.svg" alt="YouTube" className="w-6 h-6 transition-transform hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
}
