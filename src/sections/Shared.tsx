import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Block, Ext, Row } from '../components/kit'
import { Reveal } from '../components/Reveal'
import { awards, links, pgpFingerprint, roles, sides, talks, type Side } from '../data'

const yearRange = (start: string, end?: string) => {
  const a = start.slice(0, 4)
  if (!end) return `${a}–`
  return `${a}–${end.slice(2, 4)}`
}

export function Recognition() {
  return (
    <Block id="recognition" label="Recognition" aside="Hackathons and talks">
      {awards.map((a) => (
        <Row key={a.project} left={a.place} title={a.project} kicker={`${a.event}, ${a.host}`} summary={a.blurb}>
          <p>
            {a.date} · {a.location} · Team captain {a.captain} · Prize {a.prize}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            {a.links.map((l) => (
              <Ext key={l.label} href={l.href}>
                {l.label}
              </Ext>
            ))}
          </p>
        </Row>
      ))}
      {talks.map((t) => (
        <Row key={t.title} left="Talk" title={t.title} kicker={t.event} summary={t.blurb}>
          <p>
            {t.date} · {t.location}
          </p>
          <p>
            <Ext href={t.href}>Talk details</Ext>
          </p>
        </Row>
      ))}
    </Block>
  )
}

export function Experience({ side }: { side: Side }) {
  // Lead with the roles for the side being viewed.
  const ordered = [...roles].sort((a, b) => {
    const pri = (lane: string) => (side === 'snow' ? (lane === 'ent' ? 0 : 1) : lane === 'ent' ? 1 : 0)
    return pri(a.lane) - pri(b.lane) || b.start.localeCompare(a.start)
  })
  return (
    <Block id="experience" label="Experience" aside="Atlanta, GA">
      {ordered.map((r) => (
        <Row
          key={r.company}
          left={yearRange(r.start, r.end)}
          title={r.title}
          kicker={
            r.companyUrl ? (
              <a href={r.companyUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-rule underline-offset-[5px] hover:text-ink">
                {r.company}
              </a>
            ) : (
              r.company
            )
          }
          summary={r.summary}
        />
      ))}
    </Block>
  )
}

/** A nudge to look at the other specialty. */
export function OtherSide({ side, onFlip }: { side: Side; onFlip: () => void }) {
  const other: Side = side === 'btc' ? 'snow' : 'btc'
  const text =
    other === 'snow'
      ? 'Nearly ten years as a ServiceNow platform architect, for the Social Security Administration, Otis, Equifax and Sabre.'
      : "Bitcoin and Lightning engineer at ZBD, creator of Noah, and a core contributor to rbitcoin and Balance of Satoshis."
  return (
    <Reveal className="mt-24 sm:mt-28">
      <div className="flex flex-col gap-5 rounded-2xl border border-rule bg-card p-6 sm:flex-row sm:items-center sm:gap-6">
        <span
          aria-hidden="true"
          className={`grid size-12 shrink-0 place-items-center rounded-full text-[17px] font-semibold shadow-[inset_0_0_0_1.5px_rgb(0_0_0/0.15),0_1px_2px_rgb(0_0_0/0.1)] ${
            other === 'btc'
              ? 'bg-[radial-gradient(circle_at_32%_26%,#fff3cc,#d8a343_55%,#7c5214)] text-[#60400c]/80'
              : 'bg-[radial-gradient(circle_at_32%_26%,#fff,#cfd4da_55%,#6c757e)] text-[#3a424c]/80'
          }`}
        >
          {other === 'btc' ? '₿' : 'NB'}
        </span>
        <div className="flex-1">
          <p className="label">The other side</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{text}</p>
        </div>
        <button
          type="button"
          onClick={onFlip}
          className="shrink-0 rounded-full border border-ink px-4 py-2 text-[13px] font-medium transition-colors hover:bg-ink hover:text-paper"
        >
          Flip to {sides[other].name}
        </button>
      </div>
    </Reveal>
  )
}

const contactRows = [
  { label: 'GitHub', handle: 'niteshbalusu11', href: links.github },
  { label: 'LinkedIn', handle: 'in/niteshbalusu', href: links.linkedin },
  { label: 'X', handle: '@nitesh_btc', href: links.x },
  { label: 'Resume', handle: 'PDF', href: links.resume },
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pgpFingerprint)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable; the fingerprint is still selectable */
    }
  }
  return (
    <Block id="contact" label="Contact">
      <Reveal>
        <ul>
          {contactRows.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-x-4 border-b border-rule py-4 sm:grid-cols-[6rem_1fr_auto] sm:gap-x-6"
              >
                <span className="font-mono text-[12px] text-ink-3">{c.label}</span>
                <span className="text-[15px] font-medium transition-colors group-hover:text-accent">{c.handle}</span>
                <span aria-hidden="true" className="text-ink-3 transition group-hover:translate-x-0.5 group-hover:text-ink">
                  ↗
                </span>
              </a>
            </li>
          ))}
          <li className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-x-4 border-b border-rule py-4 sm:grid-cols-[6rem_1fr_auto] sm:gap-x-6">
            <span className="font-mono text-[12px] text-ink-3">PGP</span>
            <span className="font-mono text-[12px] break-all text-ink-2 select-all sm:text-[13px]">{pgpFingerprint}</span>
            <button
              type="button"
              onClick={copy}
              aria-label="Copy PGP fingerprint"
              className="grid size-7 place-items-center rounded-full border border-rule text-ink-3 transition hover:border-ink-3 hover:text-ink"
            >
              {copied ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
            </button>
          </li>
        </ul>
      </Reveal>
    </Block>
  )
}
