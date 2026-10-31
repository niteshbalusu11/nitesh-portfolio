import { Block, Bullets, Ext, Row, Tags } from '../components/kit'
import { Reveal } from '../components/Reveal'
import { alsoContributed, contributions, featured, moreProjects, now } from '../data'

const compactYears = (y: string) => {
  const m = y.match(/(\d{4})(?:\D+(\d{4}|now))?/)
  if (!m) return y
  if (!m[2]) return m[1]
  return m[2] === 'now' ? `${m[1]}–` : `${m[1]}–${m[2].slice(2)}`
}

export function NowZbd() {
  return (
    <Block id="now" label="Now" aside={`ZBD · since ${now.since}`}>
      <Reveal className="pt-6">
        <h3 className="text-[19px] font-medium tracking-tight">
          {now.title} at{' '}
          <Ext href={now.companyUrl} className="text-ink">
            {now.company}
          </Ext>
        </h3>
        <p className="mt-1 text-[15px] text-ink-2">{now.blurb}</p>
        <div className="mt-5 text-[15px] leading-relaxed text-ink-2">
          <Bullets items={now.bullets} />
        </div>
        <div className="mt-5">
          <Tags items={now.tags} />
        </div>
      </Reveal>
    </Block>
  )
}

export function Work() {
  return (
    <Block id="work" label="Selected work" aside="Open source">
      {featured.map((p) => (
        <Row key={p.name} left={compactYears(p.years)} title={p.name} kicker={p.role} summary={p.blurb}>
          {p.highlights && (
            <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <div key={h.area}>
                  <dt className="font-medium text-ink">{h.area}</dt>
                  <dd className="mt-0.5">{h.text}</dd>
                </div>
              ))}
            </dl>
          )}
          <Tags items={[...p.meta, ...p.tags]} />
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Ext href={p.url}>Source</Ext>
            {p.site && <Ext href={p.site}>{new URL(p.site).host}</Ext>}
          </p>
        </Row>
      ))}

      <Reveal className="mt-10">
        <h3 className="label">Also built</h3>
        <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
          {moreProjects.map((p) => (
            <li key={p.name} className="border-b border-rule py-3">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="truncate text-[15px] font-medium transition-colors group-hover:text-accent">{p.name}</span>
                  <span className="shrink-0 font-mono text-[11px] text-ink-3">{p.note}</span>
                </span>
                <span className="mt-0.5 block text-[14px] leading-snug text-ink-2">{p.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Block>
  )
}

/** Merged PRs to repos I don't own: single-series ranked bars, values labelled. */
export function OpenSource() {
  const max = Math.max(...contributions.map((c) => c.prs))
  return (
    <Block id="open-source" label="Open source" aside="Merged PRs, by repo">
      <Reveal>
        <ol className="pt-3">
          {contributions.map((c) => (
            <li key={c.repo}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[minmax(0,11rem)_1fr] items-center gap-4 border-b border-rule py-2.5 sm:grid-cols-[15rem_1fr]"
                title={`${c.prs} merged PRs · ${c.range}${c.note ? ` · ${c.note}` : ''}`}
              >
                <span className="truncate font-mono text-[12px] text-ink-2 transition-colors group-hover:text-ink">
                  <span className="max-sm:hidden">{c.repo.split('/')[0]}/</span>
                  {c.repo.split('/')[1]}
                </span>
                <span className="flex items-center gap-3 pr-8">
                  <span
                    className="h-1.5 shrink-0 rounded-r-[3px] bg-accent-mark transition-[filter] group-hover:brightness-90"
                    style={{ width: `${(c.prs / max) * 100}%`, minWidth: 3 }}
                  />
                  <span className="font-mono text-[12px] text-ink tabular-nums">{c.prs}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-2">
          <span className="text-ink">Also contributed to </span>
          {alsoContributed.map((p, i) => (
            <span key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-rule underline-offset-[5px] transition-colors hover:text-ink hover:decoration-accent"
                title={p.what}
              >
                {p.name}
              </a>
              {i < alsoContributed.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </p>
      </Reveal>
    </Block>
  )
}
