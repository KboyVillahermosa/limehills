'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import LogoNavbar from '../assets/images/logo.png'
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    try {
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      return stored ? stored === 'dark' : prefersDark
    } catch {
      return false
    }
  })

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Apply dark mode class to html element
  useEffect(() => {
    const root = document.documentElement
    // Remove 'dark' class first to prevent conflicts
    root.classList.remove('dark', 'light')
    
    // Apply the correct class
    if (isDark) {
      root.classList.add('dark')
      root.setAttribute('data-theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
    }
    
    // Sync with localStorage
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {
      // localStorage may be unavailable in some contexts
    }
    
    // Debug log
    if (process.env.NODE_ENV === 'development') {
      console.log('[Dark Mode]', {
        isDark,
        hasDarkClass: root.classList.contains('dark'),
        htmlElement: root,
        allClasses: root.className
      })
    }
  }, [isDark])

  const toggleTheme = () => {
    console.log('Toggle clicked, current isDark:', isDark)
    setIsDark((v) => !v)
  }

  return (
    <div className="fixed w-full z-50">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className={`flex items-center justify-between p-6 lg:px-8 transition-colors duration-200 ${
            scrolled
              ? 'bg-white/80 dark:bg-gray-900/95 shadow-sm backdrop-blur-sm'
              : 'bg-transparent'
          }`}
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src={LogoNavbar}
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-md p-2 text-gray-900 hover:bg-gray-900/5 dark:text-white dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon className="size-5" aria-hidden="true" /> : <MoonIcon className="size-5" aria-hidden="true" />}
            </button>
            <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
              Contact Us
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={LogoNavbar}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-900/10 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-900/5 dark:text-white dark:hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <button
                    type="button"
                    onClick={() => { toggleTheme(); setMobileMenuOpen(false) }}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-900/5 dark:text-white dark:hover:bg-white/5 w-full text-left"
                    aria-label="Toggle dark mode"
                  >
                    {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
                  </button>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-900/5 dark:text-white dark:hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
     </div>
 
  )
}
