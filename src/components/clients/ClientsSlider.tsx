import { useEffect, useRef, useState } from 'react'
import logoMain from '/src/assets/images/logo.png'
import logoFooter from '/src/assets/images/logo.png'
import logoAlin from '/src/assets/images/logo.png'
import logoBigasan from '/src/assets/images/logo.png'
import logoReact from '/src/assets/images/logo.png'

const logos = [logoMain, logoFooter, logoAlin, logoBigasan, logoReact]

export default function ClientsSlider() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [imgsLoaded, setImgsLoaded] = useState(0)

  // measure width of the single sequence (not duplicated) and set CSS vars
  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    // Wait until images load (imgsLoaded equals logos.length)
    if (imgsLoaded < logos.length) return

    // measure the width of the first sequence (half of the full track)
    // we render logos duplicated, so divide by 2
    const totalWidth = track.scrollWidth
    const singleWidth = Math.round(totalWidth / 2)

    // pace: pixels per second -> choose 100px/sec with minimum duration
    const pxPerSec = 100
    const durationSec = Math.max(8, Math.round(singleWidth / pxPerSec))

    container.style.setProperty('--scroll-distance', `-${singleWidth}px`)
    container.style.setProperty('--scroll-duration', `${durationSec}s`)
  }, [imgsLoaded])

  function onImgLoad() {
    setImgsLoaded((c) => c + 1)
  }

  return (
    <div className="mt-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-6">
          <span className="hidden sm:block flex-1 h-px bg-white/10" />
          <p className="mx-6 text-center text-sm font-semibold text-gray-300">Loved by 10+ big and small brands around the worlds</p>
          <span className="hidden sm:block flex-1 h-px bg-white/10" />
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative mt-8 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        aria-label="Client logos carousel"
      >
        <style>
          {`
            .clients-track {
              display: flex;
              gap: 1.5rem; /* Increased gap for more spacing */
              align-items: center;
              will-change: transform;
              animation: scroll var(--scroll-duration, 12s) linear infinite;
            }
            .clients-track.paused { animation-play-state: paused; }
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(var(--scroll-distance, -600px)); }
            }
          `}
        </style>

        {/* track duplicated for seamless loop */}
        <div
          ref={trackRef}
          className={`clients-track ${isPaused ? 'paused' : ''} px-6 py-4 sm:px-12 sm:py-6`}
          role="list"
        >
          {[...logos, ...logos].map((src, idx) => (
            <div
              key={idx}
              role="listitem"
              className="flex min-w-[120px] sm:min-w-[180px] items-center justify-center p-3"
            >
              <img src={src} alt={`Client logo ${idx % logos.length + 1}`} className="max-h-20 sm:max-h-28 object-contain" onLoad={onImgLoad} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

