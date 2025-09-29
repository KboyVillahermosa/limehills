// React import not required with modern JSX transform
import Reveal from '../ui/Reveal'
import img1 from '../../assets/images/bigasan-login.png'
import img2 from '../../assets/images/jam-login.png'
import img3 from '../../assets/images/bmps.png'

type ProjectItem = {
  title: string
  description: string
  image: string
  tags: string[]
  href?: string
}

const projects: ProjectItem[] = [
  {
    title: 'Brand Identity Refresh',
    description: 'A full brand identity system including logo, color palette, and guidelines for a growing tech startup.',
    image: img1,
    tags: ['Branding', 'Design', 'Strategy'],
    href: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'Design and front-end implementation of a high-converting e-commerce experience.',
    image: img2,
    tags: ['E‑commerce', 'Front-end', 'Performance'],
    href: '#',
  },
  {
    title: 'Marketing Landing Page',
    description: 'Fast, accessible landing pages optimized for paid acquisition and conversions.',
    image: img3,
    tags: ['Marketing', 'A/B Testing', 'SEO'],
    href: '#',
  },
]

export default function Project() {
  return (
    <section className="bg-gray-900 py-20 sm:py-28" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected projects</h2>
            <p className="mt-4 text-lg text-gray-400">
              We craft solutions that are beautiful, accessible, and performance-minded. Here are a few highlights.
            </p>
          </div>
        </Reveal>

        <Reveal>
              <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="relative group overflow-hidden rounded-3xl p-1 transform transition duration-400 hover:-translate-y-2">
                {/* decorative gradient blob */}
                <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-tr from-indigo-600/30 to-purple-600/20 rounded-full blur-3xl opacity-60" />

                <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 via-slate-700/60 to-slate-900/80 shadow-2xl overflow-hidden">
                  <a href={p.href} className="block">
                        <div className="w-full aspect-[21/10] md:aspect-[21/9] bg-gray-800 overflow-hidden"> 
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                        <div className="p-8 md:p-12">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{p.title}</h3>
                          <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">{p.description}</p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-indigo-900/25 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-indigo-200 border border-indigo-800/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8">
                        <a className="inline-flex items-center gap-3 text-sm md:text-base font-semibold text-indigo-300 hover:text-indigo-200" href={p.href}>
                          View case study
                          <svg className="h-4 w-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
