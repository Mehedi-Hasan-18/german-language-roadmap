'use client';

import { Check } from 'lucide-react';

export default function Toggle({ checked, onChange, label, sublabel }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className="group flex w-full items-start gap-3 border-b border-line py-3 text-left last:border-b-0"
    >
      <span
        className={`mt-0.5 flex h-5 w-9 shrink-0 items-center rounded-switch border transition-colors ${
          checked ? 'border-complete bg-complete' : 'border-line bg-panelDark'
        }`}
      >
        <span
          className={`h-3.5 w-3.5 rounded-sm bg-panel transition-transform ${
            checked ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </span>
      <span className="flex-1">
        <span
          className={`block text-sm font-medium ${
            checked ? 'text-inkSoft line-through decoration-line' : 'text-ink'
          }`}
        >
          {label}
        </span>
        {sublabel && <span className="mt-0.5 block text-xs leading-relaxed text-inkSoft">{sublabel}</span>}
      </span>
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          checked ? 'border-complete text-complete' : 'border-line text-transparent'
        }`}
      >
        <Check size={12} strokeWidth={3} />
      </span>
    </button>
  );
}
