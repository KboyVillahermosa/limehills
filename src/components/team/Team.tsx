const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'src/assets/images/4.png',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'src/assets/images/6.png',
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl:
      'src/assets/images/5.png',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
        'src/assets/images/1.png',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'src/assets/images/2.png',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'src/assets/images/7.png',
  },
]

import Reveal from '../ui/Reveal'

export default function Example() {
  return (
    <section className="bg-gray-900 py-20 sm:py-28" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
            <p className="mt-4 text-lg text-gray-400">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ul
            role="list"
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="group relative rounded-2xl bg-gradient-to-b from-slate-800/80 via-slate-700/60 to-slate-900/80 p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="overflow-hidden rounded-xl bg-gray-900 transition-shadow duration-300 group-hover:shadow-2xl border border-slate-800">
                    <div className="w-full overflow-hidden rounded-t-xl bg-gray-900 aspect-[4/5] flex items-center justify-center">
                      <img 
                        src={person.imageUrl} 
                        alt={person.name} 
                        className="h-full w-full object-cover object-center rounded-t-xl" 
                        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                      <p className="mt-1 text-sm text-indigo-300">{person.role}</p>

                      <div className="mt-4 flex items-center gap-4">
                        <a href="#" aria-label={`Twitter profile of ${person.name}`} className="text-gray-400 hover:text-indigo-300">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                            <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.502-4.19 11.845-11.845 11.845-2.353 0-4.54-.69-6.377-1.877.327.038.654.051.998.051 1.948 0 3.746-.654 5.18-1.76-1.82-.038-3.356-1.24-3.887-2.9.255.038.51.064.78.064.377 0 .754-.051 1.105-.141-1.9-.39-3.33-2.06-3.33-4.076v-.051c.564.314 1.218.504 1.91.529-1.132-.758-1.876-2.046-1.876-3.51 0-.773.204-1.49.56-2.113 2.06 2.525 5.14 4.187 8.61 4.362-.064-.306-.102-.62-.102-.945 0-2.287 1.85-4.137 4.137-4.137 1.19 0 2.263.504 3.02 1.308.945-.19 1.833-.53 2.633-.998-.31.97-.97 1.786-1.833 2.3.84-.089 1.647-.324 2.395-.654-.558.833-1.27 1.563-2.083 2.14z" />
                          </svg>
                        </a>
                        <a href="#" aria-label={`LinkedIn profile of ${person.name}`} className="text-gray-400 hover:text-indigo-300">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.16h.05c.54-1.02 1.86-2.16 3.83-2.16C21.4 8 24 10.2 24 14.52V24h-4v-8.28c0-1.98-.04-4.53-2.76-4.53-2.76 0-3.18 2.16-3.18 4.39V24h-4V8z" />
                          </svg>
                        </a>
                        <a href="#" aria-label={`GitHub profile of ${person.name}`} className="text-gray-400 hover:text-indigo-300">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.123-.305-.535-1.53.115-3.185 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.655.243 2.88.12 3.185.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.096.81 2.21 0 1.596-.015 2.88-.015 3.27 0 .32.21.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
