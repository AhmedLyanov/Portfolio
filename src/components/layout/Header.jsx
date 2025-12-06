'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Header() {
  const { theme } = useTheme();

  return (
    <header
      className="p-[20px_172.5px_20px_172.5px] fixed w-full backdrop-blur-xl z-10 flex"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(15, 17, 23, 0.85)' : 'rgba(255, 255, 255, 0.85)',
        borderBottom: `1px solid ${theme === 'dark' ? 'var(--border)' : 'var(--border)'}`
      }}
    >
      <div className="w-full flex justify-between align-middle items-center">
        <div className="">
          <h1
            className="text-2xl font-bold"
            style={{ color: 'var(--primary)' }}
          >
            DevAhmed
          </h1>
        </div>

        <nav className="flex gap-20 justify-center items-center">
          <Link
            href="/"
            style={{ color: 'var(--primary)' }}
            className="hover:text-accent-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            style={{ color: 'var(--primary)' }}
            className="hover:text-accent-foreground transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/about"
            style={{ color: 'var(--primary)' }}
            className="hover:text-accent-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            style={{ color: 'var(--primary)' }}
            className="hover:text-accent-foreground transition-colors"
          >
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
