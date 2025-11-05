
import Reveal from './ui/Reveal'

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-2 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#3343d6] to-[#2b36a8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 lg:pb-40">
          <div className="mb-8 flex justify-center px-4">
            <div className="group relative rounded-full bg-white/5 px-3 py-1.5 sm:px-4 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-300 ring-1 ring-white/10 transition-all hover:ring-white/20 max-w-full mx-auto">
              <span className="flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2 gap-y-1 text-center">
                <span className="sm:whitespace-nowrap">Empowering businesses to achieve more.</span>
                <a
                  href="#services"
                  className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300 sm:whitespace-nowrap"
                >
                  Explore our services
                  <span aria-hidden="true" className="ml-1 inline">→</span>
                </a>
              </span>
            </div>
          </div>

          <Reveal className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="block">Transforming businesses through</span>
              <span className="block italic font-light text-gray-300 font-serif">
                innovative technology
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl sm:leading-9">
              At Limehills, we help businesses tackle complex challenges with tailored solutions, guiding you from strategy to success in a competitive market.
            </p>
          </Reveal>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#3343d6] to-[#2b36a8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
