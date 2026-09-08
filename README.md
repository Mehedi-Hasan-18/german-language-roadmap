# Sprachlabor — German Learning Console

An interactive tracker for the A1 → B2 German roadmap: month-by-month action
plan, per-level grammar checklists, key phrases, exam info, common mistakes,
and a filterable library of every free resource — all in one Next.js app.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Zustand (with `persist`, so your progress survives a refresh via `localStorage`)
- lucide-react icons

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

- `/` — dashboard: overall progress dial, level cards, and the 5-phase action plan checklist
- `/level/a1`, `/level/a2`, `/level/b1`, `/level/b2` — grammar checklist, vocab priorities, key phrases, level-specific resources
- `/resources` — the full resource library, filterable by category
- `/exams` — Goethe-Zertifikat / TestDaF / telc / ÖSD comparison + exam strategy
- `/mistakes` — the five most common learner mistakes and their fixes

## Editing the content

Everything — level data, the action plan, mistakes, exams, and the resource
library — lives in `data/roadmap.js`. Edit that file to add resources, adjust
task lists, or add a new level; the UI picks it up automatically.

## Progress storage

Progress (checked grammar topics + action-plan tasks) is stored client-side in
`localStorage` under the key `sprachlabor-progress`. Use the **Reset** button
in the nav bar to clear it. Since it's local to the browser, progress won't
sync across devices unless you wire up a backend later.
