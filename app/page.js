'use client';

import ProgressDial from '@/components/ProgressDial';
import LevelCard from '@/components/LevelCard';
import PhasePanel from '@/components/PhasePanel';
import { useProgress } from '@/store/useProgress';
import { overview, levels, actionPlan } from '@/data/roadmap';

export default function Dashboard() {
  const overallProgress = useProgress((s) => s.overallProgress());
  const counts = useProgress((s) => s.completedCount());

  return (
    <div className="flex flex-col gap-14">
      {/* Hero */}
      <section className="panel-frame flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center">
        <ProgressDial percent={overallProgress} size={144} stroke={12} label="Overall" />
        <div className="flex-1">
          <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Your console for A1 → B2 German.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-inkSoft">
            The FSI estimates <span className="font-mono text-ink">{overview.fsiHours}+ hours</span> to reach
            professional proficiency in German. {overview.timeline} You&apos;ve logged{' '}
            <span className="font-mono text-ink">{counts.done}</span> of{' '}
            <span className="font-mono text-ink">{counts.total}</span> tracked items across grammar and the action
            plan below.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-wide text-accentDeep">What makes it harder</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-inkSoft">
                {overview.harder.map((item) => (
                  <li key={item} className="border-l-2 border-line pl-3">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-wide text-complete">What makes it easier</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-inkSoft">
                {overview.easier.map((item) => (
                  <li key={item} className="border-l-2 border-line pl-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why are you learning */}
      <section>
        <h2 className="font-display text-xl font-bold text-ink">Why are you learning German?</h2>
        <p className="mt-1 text-sm text-inkSoft">Your goal decides what to prioritize each week.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {overview.goals.map((goal) => (
            <div key={goal.label} className="panel-frame p-4">
              <span className="font-mono text-[11px] uppercase tracking-wide text-accent">{goal.label}</span>
              <p className="mt-1.5 text-sm text-inkSoft">{goal.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Levels */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-xl font-bold text-ink">Levels</h2>
          <span className="font-mono text-[11px] text-inkSoft">Grammar checklist inside each</span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((level) => (
            <LevelCard key={level.id} level={level} />
          ))}
        </div>
      </section>

      {/* Action plan */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-xl font-bold text-ink">Action plan</h2>
          <span className="font-mono text-[11px] text-inkSoft">Toggle each task as you complete it</span>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {actionPlan.map((phase) => (
            <PhasePanel key={phase.id} phase={phase} />
          ))}
        </div>
      </section>
    </div>
  );
}
