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
    <div className="bg-gradient-to-b from-gray-950 via-gray-950 to-gray-950 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header text with dividers */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span className="hidden sm:block flex-1 h-px bg-white/10" />
          <p className="px-4 sm:mx-6 text-center text-xs sm:text-sm font-semibold text-gray-300 dark:text-gray-300">
            Loved by 10+ big and small brands around the world
          </p>
          <span className="hidden sm:block flex-1 h-px bg-white/10" />
        </div>

        {/* Logo slider container */}
        <div
          ref={containerRef}
          className="relative mt-8 sm:mt-12 overflow-hidden w-full"
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
                gap: 1rem;
                align-items: center;
                will-change: transform;
                animation: scroll var(--scroll-duration, 12s) linear infinite;
              }
              @media (min-width: 640px) {
                .clients-track {
                  gap: 1.5rem;
                }
              }
              @media (min-width: 1024px) {
                .clients-track {
                  gap: 2rem;
                }
              }
              .clients-track.paused { 
                animation-play-state: paused; 
              }
              @keyframes scroll {
                from { transform: translateX(0); }
                to { transform: translateX(var(--scroll-distance, -600px)); }
              }
            `}
          </style>

          {/* Track duplicated for seamless loop */}
          <div
            ref={trackRef}
            className={`clients-track ${isPaused ? 'paused' : ''} px-4 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-8`}
            role="list"
          >
            {Array.from({ length: REPEAT_FACTOR }).flatMap((_, g) =>
              logos.map((src, i) => (
                <div
                  key={g * logos.length + i}
                  role="listitem"
                  className="flex min-w-[80px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px] items-center justify-center p-3 sm:p-4 md:p-6"
                >
                  <img 
                    src={src} 
                    alt={`Client logo ${i + 1}`} 
                    className="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                    onLoad={onImgLoad}
                    loading="lazy"
                  />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

