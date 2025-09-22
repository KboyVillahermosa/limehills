import React, { useState, useRef, useEffect } from 'react'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  // Close on outside click or Escape key
  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      const target = e.target as Node
      if (!open) return
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onDocumentClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocumentClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Focus trap: when sidebar opens, focus first focusable element; trap Tab inside.
  useEffect(() => {
    if (!open) {
      // restore focus to toggle
      if (previouslyFocused.current) previouslyFocused.current.focus()
      return
    }

    previouslyFocused.current = document.activeElement as HTMLElement

    const focusable = sidebarRef.current?.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable?.[0]
    const last = focusable?.[focusable.length - 1]
    first?.focus()

    function handleKey(e: KeyboardEvent) {
      if (e.key !== 'Tab') return
      if (!focusable || focusable.length === 0) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 bg-[#2f3192] text-white shadow p-2">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <img src="/src/assets/images/logo.png" alt="Limehills logo" className="h-10 md:h-12 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a href="#home" className="text-sm text-white/90 hover:text-white">Home</a>
          <a href="#about" className="text-sm text-white/90 hover:text-white">About</a>
          <a href="#services" className="text-sm text-white/90 hover:text-white">Services</a>
          <a href="#careers" className="text-sm text-white/90 hover:text-white">Careers</a>
          <a href="#contact" className="text-sm bg-[#3b40d6] hover:bg-[#2b2fc4] text-white rounded-full px-4 py-2">Contact Us</a>
        </nav>

        <div className="md:hidden">
          <button
            ref={toggleRef}
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center p-2 rounded-md "
          >
            {/* blue hamburger / close icon */}
            <span className="text-xl text-white font-bold p-2">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Sidebar + overlay for mobile */}
      <div className={`fixed inset-0 pointer-events-none z-50 md:hidden ${open ? '' : 'opacity-0'}`} aria-hidden={!open}>
        {/* overlay (white, semi-transparent) */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-white transition-opacity duration-300 ${open ? 'opacity-70 pointer-events-auto' : 'opacity-0'}`}
        />

        {/* sliding sidebar - not full width on mobile */}
        <div
          ref={sidebarRef}
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-[#2f3192] transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-semibold text-[#6b7af8]">Limehills</div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md bg-white text-[#3b40d6] hover:bg-white/90"
                aria-label="Close menu"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>

            <nav className="space-y-4">
              <a href="#home" className="block text-white text-lg font-medium py-3">Home</a>
              <a href="#about" className="block text-white text-lg font-medium py-3">About</a>
              <a href="#services" className="block text-white text-lg font-medium py-3">Services</a>
              <a href="#careers" className="block text-white text-lg font-medium py-3">Careers</a>
            </nav>

            <div className="mt-8">
              <a href="#contact" className="inline-block w-full max-w-[220px] bg-[#3b40d6] hover:bg-[#2b2fc4] text-white rounded-lg text-center py-3 text-base font-semibold">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
