import { exams, examStrategy } from '@/data/roadmap';

export default function ExamsPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">Certification exams</h1>
        <p className="mt-1 text-sm text-inkSoft">For academic or professional certification, plan backwards from the required level.</p>
      </div>

      <section className="panel-frame overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-panelDark/40 font-mono text-[11px] uppercase tracking-wide text-inkSoft">
              <th className="px-4 py-3 font-medium">Exam</th>
              <th className="px-4 py-3 font-medium">Levels</th>
              <th className="px-4 py-3 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.name} className="border-b border-line last:border-b-0">
                <td className="px-4 py-3 font-medium text-ink">{exam.name}</td>
                <td className="px-4 py-3 font-mono text-xs text-accentDeep">{exam.levels}</td>
                <td className="px-4 py-3 text-inkSoft">{exam.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-ink">Exam strategy</h2>
        <ol className="mt-3 flex flex-col gap-3">
          {examStrategy.map((step, i) => (
            <li key={step.title} className="panel-frame flex gap-4 p-4">
              <span className="font-mono text-lg text-accent">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <span className="text-sm font-medium text-ink">{step.title}</span>
                <p className="mt-1 text-sm text-inkSoft">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-inkSoft">
          Budget an extra 2–3 months of intensive practice after reaching your target level naturally.
        </p>
      </section>
    </div>
  );
}
