import { useRef, type PointerEvent } from 'react'
import type { Side } from '../data'

const RIM_PATH = 'M100,100 m-73,0 a73,73 0 1,1 146,0 a73,73 0 1,1 -146,0'

function Face({ side }: { side: Side }) {
  const heads = side === 'btc'
  const rim = heads
    ? 'NITESH BALUSU  ·  BITCOIN & LIGHTNING  ·  ATLANTA  ·  '
    : 'NITESH BALUSU  ·  SERVICENOW ARCHITECT  ·  ATLANTA  ·  '
  const id = `rim-${side}`
  return (
    <div className={`coin-face ${heads ? 'heads' : 'tails'}`}>
      <svg viewBox="0 0 200 200" className="coin-engrave absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <path id={id} d={RIM_PATH} />
        </defs>
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
        <circle cx="100" cy="100" r="90.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="0.1 4.15" />
        <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.8" />
        {/* One copy of the inscription, spaced to fill the full circumference (2π·73) */}
        <text fill="currentColor" fontFamily="Geist Mono Variable, ui-monospace, monospace" fontSize="8.6" fontWeight="500" style={{ whiteSpace: 'pre' }}>
          <textPath href={`#${id}`} startOffset="0" textLength={458} lengthAdjust="spacing">
            {rim}
          </textPath>
        </text>
        {heads ? (
          <text x="100" y="117" textAnchor="middle" fill="currentColor" fontFamily="Geist Variable, ui-sans-serif" fontSize="58" fontWeight="600">
            ₿
          </text>
        ) : (
          <text x="100" y="114" textAnchor="middle" fill="currentColor" fontFamily="Geist Variable, ui-sans-serif" fontSize="40" fontWeight="600" letterSpacing="-1">
            NB
          </text>
        )}
        <text x="100" y="140" textAnchor="middle" fill="currentColor" fontFamily="Geist Mono Variable, ui-monospace" fontSize="8" letterSpacing="3">
          {heads ? '2021' : '2017'}
        </text>
      </svg>
    </div>
  )
}

/**
 * A bimetallic coin: Bitcoin on heads, ServiceNow on tails. Tilts toward the
 * pointer and flips (with a small hop) when clicked.
 */
export function Coin({ turns, flipped, onFlip }: { turns: number; flipped: boolean; onFlip: () => void }) {
  const stageRef = useRef<HTMLButtonElement>(null)
  const side: Side = turns % 2 === 1 ? 'snow' : 'btc'
  // Alternate between two identical keyframes so every flip restarts the hop.
  const hop = flipped ? (turns % 2 === 1 ? 'a' : 'b') : null

  const onMove = (e: PointerEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    e.currentTarget.style.setProperty('--ry', `${x * 22}deg`)
    e.currentTarget.style.setProperty('--rx', `${-y * 22}deg`)
    e.currentTarget.style.setProperty('--sheen', `${x * 60}`)
  }
  const onLeave = () => {
    const el = stageRef.current
    if (!el) return
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--sheen', '0')
  }

  const edges = Array.from({ length: 13 }, (_, i) => i - 6)

  return (
    <button
      ref={stageRef}
      type="button"
      onClick={onFlip}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-label={side === 'btc' ? 'Flip the coin to the ServiceNow side' : 'Flip the coin to the Bitcoin side'}
      className="coin-stage group relative block w-[clamp(168px,42vw,216px)] cursor-pointer select-none [-webkit-tap-highlight-color:transparent]"
    >
      <div style={hop ? { animation: `hop-${hop} 1100ms cubic-bezier(0.3, 0.7, 0.3, 1)` } : undefined}>
        <div className="coin-tilt">
          <div className="coin" style={{ transform: `rotateY(${turns * 180}deg)` }}>
            {edges.map((z) => (
              <div
                key={z}
                className="coin-layer"
                style={{ transform: `translateZ(${z}px)`, background: z >= 0 ? '#93661d' : '#77808a' }}
              />
            ))}
            <Face side="btc" />
            <Face side="snow" />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="coin-shadow mx-auto mt-7 h-5 w-3/4"
        style={hop ? { animation: `shadow-${hop} 1100ms cubic-bezier(0.3, 0.7, 0.3, 1)` } : undefined}
      />
    </button>
  )
}
