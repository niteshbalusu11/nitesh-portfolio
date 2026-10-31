import { useEffect, useState } from 'react'
import { SideSwitch } from '../components/SideSwitch'
import type { Side } from '../data'

const timeFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' })

function useAtlantaTime() {
  const [now, setNow] = useState(() => timeFmt.format(new Date()))
  useEffect(() => {
    const t = setInterval(() => setNow(timeFmt.format(new Date())), 20_000)
    return () => clearInterval(t)
  }, [])
  return now
}

/** Current Bitcoin block height from mempool.space; hidden if unavailable. */
function useBlockHeight() {
  const [height, setHeight] = useState<number | null>(null)
  useEffect(() => {
    let alive = true
    const load = () =>
      fetch('https://mempool.space/api/blocks/tip/height')
        .then((r) => (r.ok ? r.text() : Promise.reject()))
        .then((t) => alive && Number.isFinite(Number(t)) && setHeight(Number(t)))
        .catch(() => {})
    load()
    const t = setInterval(load, 120_000)
    return () => {
      alive = false
      clearInterval(t)
    }
  }, [])
  return height
}

export function TopBar({ side, onSide, showSwitch }: { side: Side; onSide: (s: Side) => void; showSwitch: boolean }) {
  const time = useAtlantaTime()
  const height = useBlockHeight()
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        showSwitch ? 'border-b border-rule bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[52rem] items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#top" className="label !text-ink">
          Nitesh Balusu
        </a>
        <div
          className={`absolute left-1/2 -translate-x-1/2 transition duration-300 max-sm:hidden ${
            showSwitch ? 'opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
          }`}
        >
          <SideSwitch side={side} onChange={onSide} compact />
        </div>
        <p className="label flex items-center gap-3">
          <span>ATL {time}</span>
          {height && (
            <a
              href={`https://mempool.space/block/${height}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden transition-colors hover:text-ink sm:inline"
              title="Current Bitcoin block height"
            >
              Block {height.toLocaleString('en-US')}
            </a>
          )}
        </p>
      </div>
    </header>
  )
}
