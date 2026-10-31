import { Block, Bullets, Row, Tags } from '../components/kit'
import { Reveal } from '../components/Reveal'
import { certifications, engagements, platform } from '../data'

const short: Record<string, string> = {
  'Social Security Administration': 'SSA',
  'Otis Elevator': 'Otis',
  Equifax: 'Equifax',
  Sabre: 'Sabre',
  'Northside Hospital': 'Northside',
}

export function Engagements() {
  return (
    <Block id="servicenow" label="ServiceNow work" aside="CodeForce 360 · 2017–2026">
      {engagements.map((e) => (
        <Row
          key={e.title}
          left={short[e.client] ?? e.client}
          title={e.title}
          kicker={e.via ? `${e.client}, ${e.via}` : e.client}
          summary={e.summary}
        >
          {e.details && <Bullets items={e.details} />}
          <Tags items={e.tags} />
        </Row>
      ))}
    </Block>
  )
}

export function Platform() {
  return (
    <Block id="platform" label="Platform" aside="Modules and integrations">
      <Reveal>
        <dl className="pt-2">
          {platform.map((p) => (
            <div key={p.area} className="grid gap-1 border-b border-rule py-3.5 sm:grid-cols-[15rem_1fr] sm:gap-6">
              <dt className="text-[15px] font-medium">{p.area}</dt>
              <dd className="text-[15px] text-ink-2">{p.detail}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[15px] text-ink-2">
          <span className="label">Certified</span>
          {certifications.join(' · ')}
        </p>
      </Reveal>
    </Block>
  )
}
