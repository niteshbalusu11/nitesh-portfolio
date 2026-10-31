import type { Side } from '../data'

const OPTIONS: { side: Side; label: string; short: string }[] = [
  { side: 'btc', label: 'Bitcoin engineer', short: 'Bitcoin' },
  { side: 'snow', label: 'ServiceNow architect', short: 'ServiceNow' },
]

/** Segmented control for the two sides; mirrors the coin. */
export function SideSwitch({ side, onChange, compact = false }: { side: Side; onChange: (s: Side) => void; compact?: boolean }) {
  return (
    <div role="radiogroup" aria-label="Show work for" className="relative inline-flex rounded-full border border-rule bg-card p-1">
      <span
        aria-hidden="true"
        className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.2,0.75,0.25,1.04)]"
        style={{ transform: side === 'snow' ? 'translateX(100%)' : 'translateX(0)' }}
      />
      {OPTIONS.map((o) => (
        <button
          key={o.side}
          type="button"
          role="radio"
          aria-checked={side === o.side}
          onClick={() => onChange(o.side)}
          className={`relative z-10 flex-1 rounded-full text-center whitespace-nowrap transition-colors duration-300 ${
            compact ? 'px-3 py-1 text-[12px]' : 'px-4 py-1.5 text-[13px] sm:px-5'
          } ${side === o.side ? 'text-paper' : 'text-ink-2 hover:text-ink'}`}
          style={{ minWidth: compact ? '6.5rem' : '10.5rem' }}
        >
          {compact ? o.short : o.label}
        </button>
      ))}
    </div>
  )
}
