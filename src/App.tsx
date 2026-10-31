import { useEffect, useRef, useState } from 'react'
import type { Side } from './data'
import { Hero } from './sections/Hero'
import { NowZbd, OpenSource, Work } from './sections/Bitcoin'
import { Engagements, Platform } from './sections/ServiceNow'
import { Contact, Experience, OtherSide, Recognition } from './sections/Shared'
import { TopBar } from './sections/TopBar'

const initialTurns = () => (new URLSearchParams(window.location.search).get('side') === 'servicenow' ? 1 : 0)

const titles: Record<Side, string> = {
  btc: 'Nitesh Balusu · Bitcoin & Lightning Engineer',
  snow: 'Nitesh Balusu · ServiceNow Platform Architect',
}

export default function App() {
  // Odd number of turns = tails (ServiceNow). Counting turns lets every flip spin the same way.
  const [turns, setTurns] = useState(initialTurns)
  const [flipped, setFlipped] = useState(false)
  const [heroOut, setHeroOut] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const side: Side = turns % 2 === 1 ? 'snow' : 'btc'

  const flip = () => {
    setTurns((t) => t + 1)
    setFlipped(true)
  }
  const choose = (s: Side) => {
    if (s !== side) flip()
  }
  const flipFromBottom = () => {
    flip()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const url = new URL(window.location.href)
    if (side === 'snow') url.searchParams.set('side', 'servicenow')
    else url.searchParams.delete('side')
    window.history.replaceState(null, '', url)
    document.title = titles[side]
  }, [side])

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setHeroOut(!e.isIntersecting), { rootMargin: '-56px 0px 0px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div data-side={side} className="min-h-screen">
      <a
        href="#main"
        className="fixed top-2 left-2 z-50 -translate-y-16 rounded-md bg-ink px-3 py-2 text-sm text-paper focus:translate-y-0"
      >
        Skip to content
      </a>
      <TopBar side={side} onSide={choose} showSwitch={heroOut} />

      <main id="main" className="mx-auto max-w-[44rem] px-5 pb-20 sm:px-6">
        <div ref={heroRef}>
          <Hero side={side} turns={turns} flipped={flipped} onFlip={flip} onSide={choose} />
        </div>

        <div key={side} className="side-in">
          {side === 'btc' ? (
            <>
              <NowZbd />
              <Work />
              <Recognition />
              <OpenSource />
              <Experience side={side} />
            </>
          ) : (
            <>
              <Engagements />
              <Platform />
              <Experience side={side} />
              <Recognition />
            </>
          )}
          <OtherSide side={side} onFlip={flipFromBottom} />
          <Contact />
        </div>

        <footer className="mt-20 flex flex-wrap justify-between gap-2 font-mono text-[11px] text-ink-3">
          <span>© {new Date().getFullYear()} Nitesh Balusu</span>
          <span>Atlanta, Georgia</span>
        </footer>
      </main>
    </div>
  )
}
