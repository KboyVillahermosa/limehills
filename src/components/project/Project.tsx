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
    <section className="bg-gray-900 py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">Selected</span>
              <span className="block italic font-light text-gray-300 font-serif">
                Projects
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We craft solutions that are beautiful, accessible, and performance-minded. Here are a few highlights.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 lg:gap-12">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="group relative flex flex-col overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-indigo-500/10">
                <a href={p.href} className="block">
                  {/* Image container with clean border */}
                  <div className="relative w-full aspect-[16/9] bg-gray-900 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-gray-300">
                      {p.description}
                    </p>

                    {/* Tags - cleaner, simpler design */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
