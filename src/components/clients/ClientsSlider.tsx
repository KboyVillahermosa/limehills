import { useEffect, useRef, useState } from 'react'
import logoMain from '../../assets/images/logo.png'
import logoFooter from '../../assets/images/jam.png'
import logoAlin from '../../assets/images/alin.png'
import logoBigasan from '../../assets/images/image.png'
import logoReact from '../../assets/images/eagles.png'

const logos = [logoMain, logoFooter, logoAlin, logoBigasan, logoReact]
const REPEAT_FACTOR = 4

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

    // Wait until all repeated images in the track load
    const totalExpected = logos.length * REPEAT_FACTOR
    if (imgsLoaded < totalExpected) return

    // measure after layout stabilizes
    requestAnimationFrame(() => {
      const totalWidth = track.scrollWidth
      const singleWidth = Math.round(totalWidth / REPEAT_FACTOR)

      // pace: slower px/sec for longer tracks
      const pxPerSec = 80
      const durationSec = Math.max(12, Math.round(singleWidth / pxPerSec))

      container.style.setProperty('--scroll-distance', `-${singleWidth}px`)
      container.style.setProperty('--scroll-duration', `${durationSec}s`)
    })
  }, [imgsLoaded])

  function onImgLoad() {
    setImgsLoaded((c) => c + 1)
  }

  return (
    <div className=" bg-gray-900 p-16">
      <div className="mx-auto max-w-7xl px-12">
        <div className="flex items-center justify-center gap-6">
          <span className="hidden sm:block flex-1 h-px bg-white/10" />
          <p className="mx-6 text-center text-sm font-semibold text-gray-300">Loved by 10+ big and small brands around the worlds</p>
          <span className="hidden sm:block flex-1 h-px bg-white/10" />
        </div>
      </div>
<div
  ref={containerRef}
  className="relative mt-8 overflow-hidden w-full max-w-[1000rem] mx-auto"
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
          className={`clients-track ${isPaused ? 'paused' : ''} px-8 py-6 sm:px-20 sm:py-8`}
          role="list"
        >
          {Array.from({ length: REPEAT_FACTOR }).flatMap((_, g) =>
            logos.map((src, i) => (
              <div
                key={g * logos.length + i}
                role="listitem"
                className="flex min-w-[140px] sm:min-w-[220px] items-center justify-center p-6"
              >
                <img src={src} alt={`Client logo ${i + 1}`} className="max-h-20 sm:max-h-28 object-contain" onLoad={onImgLoad} />
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  )
}

