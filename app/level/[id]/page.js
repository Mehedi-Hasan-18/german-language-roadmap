'use client';

import Link from 'next/link';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import ProgressDial from '@/components/ProgressDial';
import Toggle from '@/components/Toggle';
import { useProgress } from '@/store/useProgress';
import { levels } from '@/data/roadmap';

export default function LevelPage({ params }) {
  const level = levels.find((l) => l.id === params.id);
  const grammarState = useProgress((s) => s.grammar);
  const toggleGrammar = useProgress((s) => s.toggleGrammar);
  const progress = useProgress((s) => (level ? s.levelProgress(level.id) : 0));

  if (!level) {
    return (
      <div className="panel-frame p-8 text-center">
        <p className="text-sm text-inkSoft">No level matches &ldquo;{params.id}&rdquo;.</p>
        <Link href="/" className="mt-3 inline-block font-mono text-xs text-accent underline">
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <Link href="/" className="flex w-fit items-center gap-1.5 font-mono text-xs text-inkSoft hover:text-ink">
        <ArrowLeft size={12} /> Dashboard
      </Link>

      {/* Header */}
      <section className="panel-frame flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
        <ProgressDial percent={progress} size={128} stroke={11} label="Grammar" />
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h1 className="font-display text-4xl font-extrabold text-ink">{level.code}</h1>
            <span className="text-lg text-inkSoft">{level.name}</span>
          </div>
          <p className="mt-1 text-sm text-inkSoft">{level.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-inkSoft">
            <span className="border border-line px-2 py-1">{level.span}</span>
            <span className="border border-line px-2 py-1">{level.hours}</span>
            <span className="border border-line px-2 py-1">{level.vocab}</span>
          </div>
        </div>
      </section>

      {/* Can do */}
      <section>
        <h2 className="font-display text-lg font-bold text-ink">By the end of {level.code}, you can</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {level.canDo.map((item) => (
            <li key={item} className="border-l-2 border-complete pl-3 text-sm text-inkSoft">{item}</li>
          ))}
        </ul>
      </section>

      {/* Grammar */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-lg font-bold text-ink">Grammar topics</h2>
          <span className="font-mono text-[11px] text-inkSoft">{progress}% mastered</span>
        </div>
        <div className="panel-frame mt-3 p-5">
          {level.grammar.map((g) => (
            <Toggle
              key={g.id}
              checked={!!grammarState[g.id]}
              onChange={() => toggleGrammar(g.id)}
              label={g.title}
              sublabel={g.detail}
            />
          ))}
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Vocab priorities */}
        <section>
          <h2 className="font-display text-lg font-bold text-ink">Vocabulary priorities</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {level.vocabPriorities.map((v) => (
              <span key={v} className="border border-line bg-panel px-2.5 py-1 text-xs text-inkSoft">{v}</span>
            ))}
          </div>
        </section>

        {/* Key phrases */}
        <section>
          <h2 className="font-display text-lg font-bold text-ink">Phrases to know cold</h2>
          <div className="panel-frame mt-3 divide-y divide-line">
            {level.keyPhrases.map((p) => (
              <div key={p.de} className="flex items-center justify-between px-4 py-2.5">
                <span className="text-sm text-ink">{p.de}</span>
                <span className="font-mono text-xs text-inkSoft">{p.en}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Resources */}
      <section>
        <h2 className="font-display text-lg font-bold text-ink">Resources for this level</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {level.resources.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel-frame flex flex-col justify-between p-4 transition-colors hover:border-accent"
            >
              <div>
                <span className="text-sm font-medium text-ink">{r.name}</span>
                <p className="mt-1 text-xs text-inkSoft">{r.org} · {r.type}</p>
              </div>
              <ExternalLink size={13} className="mt-3 text-inkSoft" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
