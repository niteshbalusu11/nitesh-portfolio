import { Coin } from '../components/Coin'
import { SideSwitch } from '../components/SideSwitch'
import { links, sides, type Side } from '../data'

const heroLinks = [
  { href: links.github, label: 'GitHub' },
  { href: links.linkedin, label: 'LinkedIn' },
  { href: links.x, label: 'X' },
  { href: links.resume, label: 'Resume' },
]

export function Hero({
  side,
  turns,
  flipped,
  onFlip,
  onSide,
}: {
  side: Side
  turns: number
  flipped: boolean
  onFlip: () => void
  onSide: (s: Side) => void
}) {
  const s = sides[side]
  return (
    <section id="top" className="flex flex-col items-center pt-28 text-center sm:pt-32">
      <Coin turns={turns} flipped={flipped} onFlip={onFlip} />

      <h1 className="mt-8 text-[30px] font-semibold tracking-[-0.025em] sm:text-[34px]">Nitesh Balusu</h1>
      <div className="mt-5">
        <SideSwitch side={side} onChange={onSide} />
      </div>

      <div key={side} className="side-in">
        <p className="mx-auto mt-7 max-w-[34rem] text-[17px] leading-relaxed text-pretty text-ink-2">{s.intro}</p>
        <p className="mt-5 flex flex-wrap justify-center gap-x-2 gap-y-1 font-mono text-[12px] text-ink-3">
          {s.facts.map((f, i) => (
            <span key={f} className="whitespace-nowrap">
              {i > 0 && <span className="mr-2 text-rule">/</span>}
              {f}
            </span>
          ))}
        </p>
      </div>

      <nav aria-label="Profiles" className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-2">
        {heroLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="label !text-ink-2 underline decoration-rule underline-offset-[6px] transition-colors hover:!text-ink hover:decoration-accent"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </section>
  )
}
