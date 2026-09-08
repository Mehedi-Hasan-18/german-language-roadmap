'use client';

import Link from 'next/link';
import { useProgress } from '@/store/useProgress';

export default function LevelCard({ level }) {
  const progress = useProgress((s) => s.levelProgress(level.id));

  return (
    <Link
      href={`/level/${level.id}`}
      className="panel-frame group flex flex-col justify-between p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-3xl font-extrabold text-ink group-hover:text-accent">{level.code}</span>
        <span className="font-mono text-xs text-inkSoft">{level.span}</span>
      </div>
      <p className="mt-1 text-sm text-inkSoft">{level.name} — {level.tagline}</p>

      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-inkSoft">
        <span>{level.hours}</span>
        <span>{level.vocab}</span>
      </div>

      <div className="mt-3 h-1.5 w-full bg-panelDark">
        <div className="h-1.5 bg-complete transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="mt-1 flex justify-between font-mono text-[10px] text-inkSoft">
        <span>Grammar mastered</span>
        <span>{progress}%</span>
      </div>
    </Link>
  );
}
