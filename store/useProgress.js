'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { levels, actionPlan } from '@/data/roadmap';

const allGrammarIds = levels.flatMap((lvl) => lvl.grammar.map((g) => g.id));
const allTaskIds = actionPlan.flatMap((phase) => phase.tasks.map((t) => t.id));

export const useProgress = create(
  persist(
    (set, get) => ({
      tasks: {},
      grammar: {},

      toggleTask: (id) =>
        set((state) => ({ tasks: { ...state.tasks, [id]: !state.tasks[id] } })),

      toggleGrammar: (id) =>
        set((state) => ({ grammar: { ...state.grammar, [id]: !state.grammar[id] } })),

      resetAll: () => set({ tasks: {}, grammar: {} }),

      // -- derived selectors --
      phaseProgress: (phaseId) => {
        const phase = actionPlan.find((p) => p.id === phaseId);
        if (!phase) return 0;
        const state = get();
        const done = phase.tasks.filter((t) => state.tasks[t.id]).length;
        return phase.tasks.length ? Math.round((done / phase.tasks.length) * 100) : 0;
      },

      levelProgress: (levelId) => {
        const level = levels.find((l) => l.id === levelId);
        if (!level) return 0;
        const state = get();
        const done = level.grammar.filter((g) => state.grammar[g.id]).length;
        return level.grammar.length ? Math.round((done / level.grammar.length) * 100) : 0;
      },

      overallProgress: () => {
        const state = get();
        const totalItems = allGrammarIds.length + allTaskIds.length;
        const done =
          allGrammarIds.filter((id) => state.grammar[id]).length +
          allTaskIds.filter((id) => state.tasks[id]).length;
        return totalItems ? Math.round((done / totalItems) * 100) : 0;
      },

      completedCount: () => {
        const state = get();
        const done =
          allGrammarIds.filter((id) => state.grammar[id]).length +
          allTaskIds.filter((id) => state.tasks[id]).length;
        return { done, total: allGrammarIds.length + allTaskIds.length };
      },
    }),
    { name: 'sprachlabor-progress' }
  )
);
