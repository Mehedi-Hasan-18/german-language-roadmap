'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RotateCcw } from 'lucide-react';
import { useProgress } from '@/store/useProgress';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/level/a1', label: 'A1' },
  { href: '/level/a2', label: 'A2' },
  { href: '/level/b1', label: 'B1' },
  { href: '/level/b2', label: 'B2' },
  { href: '/resources', label: 'Resources' },
  { href: '/exams', label: 'Exams' },
  { href: '/mistakes', label: 'Mistakes' },
];

export default function NavBar() {
  const pathname = usePathname();
  const resetAll = useProgress((s) => s.resetAll);

  const handleReset = () => {
    if (window.confirm('Reset all logged progress? This clears every checked task and grammar topic.')) {
      resetAll();
    }
  };

  return (
    <header className="sticky top-0 z-20 -mx-4 border-b border-line bg-paper/95 px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-extrabold tracking-tightish text-ink">SPRACHLABOR</span>
          <span className="hidden font-mono text-[11px] text-inkSoft sm:inline">DE · A1—B2</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-switch border px-2.5 py-1.5 font-mono text-xs tracking-tight transition-colors ${
                  active
                    ? 'border-accent bg-accent text-panel'
                    : 'border-line bg-panel text-inkSoft hover:border-inkSoft hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={handleReset}
            title="Reset all progress"
            className="ml-1 flex items-center gap-1 rounded-switch border border-line bg-panel px-2.5 py-1.5 font-mono text-xs text-inkSoft transition-colors hover:border-accentDeep hover:text-accentDeep"
          >
            <RotateCcw size={12} />
            <span className="hidden md:inline">Reset</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
