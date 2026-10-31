import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'

/** A page section: a quiet mono label over a hairline, then content. */
export function Block({ id, label, aside, children }: { id?: string; label: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="mt-24 sm:mt-28">
      <Reveal className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
        <h2 className="label">{label}</h2>
        {aside && <span className="label">{aside}</span>}
      </Reveal>
      {children}
    </section>
  )
}

export function Ext({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/ext inline-flex items-center gap-0.5 underline decoration-rule decoration-1 underline-offset-[5px] transition-colors hover:text-ink hover:decoration-accent ${className}`}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-3.5 shrink-0 opacity-60 transition group-hover/ext:translate-x-px group-hover/ext:-translate-y-px group-hover/ext:opacity-100"
      />
    </a>
  )
}

export function Tags({ items }: { items: string[] }) {
  return <p className="font-mono text-[11px] tracking-wide text-ink-3">{items.join('  ·  ')}</p>
}

/**
 * One line of the ledger. With `children`, the row expands (native <details>)
 * to show more; without, it's a plain row.
 */
export function Row({
  left,
  title,
  kicker,
  summary,
  children,
}: {
  left?: ReactNode
  title: ReactNode
  kicker?: ReactNode
  summary?: ReactNode
  children?: ReactNode
}) {
  const head = (
    <>
      <span className="hidden pt-[3px] font-mono text-[12px] text-ink-3 tabular-nums sm:block">{left}</span>
      <span className="min-w-0">
        {left && <span className="mb-1 block font-mono text-[11px] text-ink-3 sm:hidden">{left}</span>}
        <span className="font-medium text-ink">{title}</span>
        {kicker && <span className="text-ink-3"> · {kicker}</span>}
        {summary && <span className="mt-1 block text-[15px] leading-relaxed text-pretty text-ink-2">{summary}</span>}
      </span>
    </>
  )
  const grid = 'grid grid-cols-[1fr_auto] gap-x-4 sm:grid-cols-[6rem_1fr_auto] sm:gap-x-6'

  if (!children) {
    return (
      <Reveal className="border-b border-rule">
        <div className={`${grid} py-5`}>
          {head}
          <span />
        </div>
      </Reveal>
    )
  }
  return (
    <Reveal className="border-b border-rule">
      <details className="group">
        <summary className={`${grid} -mx-3 cursor-pointer rounded-lg px-3 py-5 transition-colors hover:bg-paper-2/70`}>
          {head}
          <span
            aria-hidden="true"
            className="mt-px grid size-6 place-items-center rounded-full border border-rule font-mono text-[13px] text-ink-3 transition group-open:rotate-45 group-hover:border-ink-3 group-hover:text-ink"
          >
            +
          </span>
        </summary>
        <div className="grid pb-7 sm:grid-cols-[6rem_1fr] sm:gap-x-6">
          <span className="max-sm:hidden" />
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-2">{children}</div>
        </div>
      </details>
    </Reveal>
  )
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <span aria-hidden="true" className="mt-[11px] h-0.5 w-2.5 shrink-0 rounded-full bg-accent-mark" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}
