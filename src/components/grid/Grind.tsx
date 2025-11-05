import Reveal from '../ui/Reveal'

export default function Grid() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Reveal>
          <h2 className="text-center text-base/7 font-semibold text-indigo-400">Build better</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            <span className="block">Everything you need</span>
            <span className="block italic font-light text-gray-300 font-serif">
              to scale your business
            </span>
          </p>
        </Reveal>
        <Reveal>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Software Development</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    From custom web applications to enterprise solutions, we build scalable software that drives your business forward with modern technologies and best practices.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                    <img
                      alt="Software development and coding"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">DevOps & Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Optimize your infrastructure with automated deployments, CI/CD pipelines, and performance monitoring to ensure your applications run at peak efficiency.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt="DevOps and performance optimization"
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Enterprise Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Protect your applications and data with advanced security measures, compliance support, and robust infrastructure protection.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt="Enterprise security and protection"
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Consulting & APIs</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Strategic guidance and powerful API development to help you make informed decisions, integrate systems seamlessly, and accelerate your digital transformation.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                    <div className="flex bg-gray-900 outline outline-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          DeploymentConfig.ts
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">ApiService.ts</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">
                      <div className="text-xs text-gray-500 font-mono">
                        <div className="text-gray-300">// API Integration Example</div>
                        <div className="mt-2">
                          <span className="text-purple-400">const</span>{' '}
                          <span className="text-blue-400">client</span> = {' '}
                          <span className="text-yellow-400">new</span>{' '}
                          <span className="text-green-400">LimehillsClient</span>();
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
            </div>
          </Reveal>
      </div>
    </div>
  )
}
  