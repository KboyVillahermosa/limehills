import Reveal from './ui/Reveal'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      {/* Background decorative elements */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3343d6] to-[#2b36a8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40 lg:px-8 lg:pt-48">
        {/* Top badge/announcement */}
        <div className="mx-auto mb-10 flex max-w-5xl justify-center">
          <Reveal>
            <div className="group relative rounded-full bg-white/5 px-4 py-1.5 text-sm leading-6 text-gray-300 ring-1 ring-white/10 transition-all hover:ring-white/20 dark:bg-white/10 dark:text-gray-400">
              <span className="inline-flex items-center gap-x-2">
                Empowering businesses to achieve more.{' '}
                <a
                  href="#services"
                  className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Explore our services
                  <span aria-hidden="true" className="ml-1 inline">→</span>
                </a>
              </span>
            </div>
          </Reveal>
        </div>

        {/* Main content - maximized width for better space utilization */}
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Your Partner in</span>
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Productivity
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl sm:leading-9">
              Limehills is a trusted partner providing software development, DevOps, and consulting to help businesses operate smarter.
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Reveal>
              <a
                href="#contact"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/50 transition-all hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:scale-[0.98]"
              >
                Get started
              </a>
            </Reveal>
            <Reveal>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm ring-1 ring-white/20 transition-all hover:bg-white/20 hover:ring-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Learn more
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3343d6] to-[#2b36a8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
