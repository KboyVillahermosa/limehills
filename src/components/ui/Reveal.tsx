import React, { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  once?: boolean
  rootMargin?: string
  threshold?: number | number[]
}

export default function Reveal({
  children,
  className = '',
  once = true,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once && el) obs.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { root: null, rootMargin, threshold },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [once, rootMargin, threshold])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  )
}
