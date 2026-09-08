'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { resourceLibrary } from '@/data/roadmap';

export default function ResourcesPage() {
  const categories = resourceLibrary.map((g) => g.category);
  const [active, setActive] = useState('All');

  const visibleGroups =
    active === 'All' ? resourceLibrary : resourceLibrary.filter((g) => g.category === active);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">Resource library</h1>
        <p className="mt-1 text-sm text-inkSoft">Every free course, channel, podcast, app and tool from the roadmap, in one place.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-switch border px-3 py-1.5 font-mono text-xs transition-colors ${
              active === cat
                ? 'border-accent bg-accent text-panel'
                : 'border-line bg-panel text-inkSoft hover:border-inkSoft hover:text-ink'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        {visibleGroups.map((group) => (
          <section key={group.category}>
            <h2 className="font-display text-lg font-bold text-ink">{group.category}</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel-frame flex flex-col justify-between p-4 transition-colors hover:border-accent"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-medium text-ink">{item.name}</span>
                      <span className="shrink-0 font-mono text-[10px] text-accentDeep">{item.level}</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-inkSoft">{item.desc}</p>
                  </div>
                  <ExternalLink size={13} className="mt-3 text-inkSoft" />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
