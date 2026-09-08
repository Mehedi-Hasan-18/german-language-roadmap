import { mistakes } from '@/data/roadmap';

export default function MistakesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">Common mistakes</h1>
        <p className="mt-1 text-sm text-inkSoft">The errors that trip up most German learners, and the fix for each.</p>
      </div>

      <div className="flex flex-col gap-4">
        {mistakes.map((m, i) => (
          <div key={m.id} className="panel-frame p-5">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="font-display text-lg font-bold text-ink">{m.title}</h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-inkSoft">{m.body}</p>
            <div className="mt-3 border-l-2 border-complete pl-3">
              <span className="font-mono text-[11px] uppercase tracking-wide text-complete">Fix</span>
              <p className="mt-0.5 text-sm text-ink">{m.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
