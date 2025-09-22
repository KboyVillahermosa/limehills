import React, { useEffect, useRef, useState } from 'react'

const Work: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const steps = [
    { id: 1, label: 'Gathering', icon: '🌩️', x: 120, y: 140, xMobile: 120, yMobile: 160, color: 'pink' },
    { id: 2, label: 'Analysis', icon: '⚙️', x: 430, y: 70, xMobile: 420, yMobile: 80, color: 'blue' },
    { id: 3, label: 'Implementation', icon: '📈', x: 820, y: 130, xMobile: 760, yMobile: 160, color: 'amber' },
    { id: 4, label: '', icon: '🚀', x: 1100, y: 40, xMobile: 1040, yMobile: 70, color: 'indigo' },
  ]

  const colorMap: Record<string, { bg: string; iconText: string; labelText: string }> = {
    pink: { bg: 'bg-pink-100', iconText: 'text-pink-600', labelText: 'text-pink-600' },
    blue: { bg: 'bg-blue-100', iconText: 'text-blue-600', labelText: 'text-blue-500' },
    amber: { bg: 'bg-amber-100', iconText: 'text-amber-600', labelText: 'text-amber-500' },
    indigo: { bg: 'bg-indigo-50', iconText: 'text-indigo-600', labelText: 'text-indigo-600' },
  }

  // responsive coordinate selection
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false))

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section ref={ref} id="work" className="w-full bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#3b40d6] mb-12">How we work</h2>

        <div className={`relative work-root ${visible ? 'is-visible' : ''}`}>
          {/* Decorative dashed path (SVG) */}
          <svg className="w-full h-48 md:h-64" viewBox="0 0 1200 240" preserveAspectRatio="none" aria-hidden>
            <path d="M0,140 C200,40 400,40 600,140 C800,240 1000,140 1200,40" fill="none" stroke="#5b57d8" strokeWidth="4" strokeDasharray="8 8" className="dash-path" />
          </svg>

          {/* Steps positioned exactly on the SVG using viewBox coordinates */}
          {steps.map((s) => {
            const cls = colorMap[s.color] || colorMap.indigo
            const useX = isMobile && s.xMobile !== undefined ? s.xMobile : s.x
            const useY = isMobile && s.yMobile !== undefined ? s.yMobile : s.y
            const left = `${(useX / 1200) * 100}%`
            const top = `${(useY / 240) * 100}%`
            return (
              <div key={s.id} className="step" data-order={s.id} style={{ left, top }}>
                <div className="step-inner">
                  <div className={`step-icon ${cls.bg} ${cls.iconText}`} aria-hidden>
                    {s.icon}
                  </div>
                  {s.label && <div className={`step-label mt-4 font-semibold ${cls.labelText}`}>{s.label}</div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Work
