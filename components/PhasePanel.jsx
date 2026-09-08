'use client';

import Toggle from '@/components/Toggle';
import { useProgress } from '@/store/useProgress';

export default function PhasePanel({ phase }) {
  const tasksState = useProgress((s) => s.tasks);
  const toggleTask = useProgress((s) => s.toggleTask);
  const progress = useProgress((s) => s.phaseProgress(phase.id));

  return (
    <div className="panel-frame flex flex-col p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <span className="font-display text-xl font-bold text-ink">{phase.label}</span>
          <span className="ml-2 font-mono text-[11px] text-inkSoft">{phase.sub}</span>
        </div>
        <span className="font-mono text-sm text-accent">{progress}%</span>
      </div>

      <div className="mb-4 h-1.5 w-full bg-panelDark">
        <div className="h-1.5 bg-accent transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div>
        {phase.tasks.map((task) => (
          <Toggle
            key={task.id}
            checked={!!tasksState[task.id]}
            onChange={() => toggleTask(task.id)}
            label={task.text}
          />
        ))}
      </div>
    </div>
  );
}
