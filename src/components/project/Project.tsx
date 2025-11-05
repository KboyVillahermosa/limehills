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
    title: 'BigasanHub',
    description: 'A comprehensive inventory management system designed to streamline operations and optimize stock control for businesses.',
    image: img1,
    tags: ['Inventory Management', 'Web Application', 'Database'],
    href: '#',
  },
  {
    title: 'Ukay-Ukay Inventory',
    description: 'An efficient inventory management solution tailored for retail operations, enabling real-time tracking and seamless stock management.',
    image: img2,
    tags: ['Inventory System', 'Retail', 'Real-time Tracking'],
    href: '#',
  },
  {
    title: 'Corporate Law Firm Website',
    description: 'A professional company website for a top law firm in Cebu, featuring modern design and seamless user experience.',
    image: img3,
    tags: ['Web Design', 'Corporate', 'Legal'],
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
