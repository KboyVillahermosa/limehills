import img1 from '../../assets/images/4.png'
import img2 from '../../assets/images/6.png'
import img3 from '../../assets/images/5.png'
import img4 from '../../assets/images/1.png'
import img5 from '../../assets/images/2.png'
import img6 from '../../assets/images/7.png'

const people = [
  {
    name: 'Nikko Jay Gagno',
    role: 'Co-Founder / CEO',
    imageUrl: img2,
  },
  {
    name: 'Alexander Tudtud',
    role: 'Co-Founder / CTO',
    imageUrl: img1,
  },
  {
    name: 'Isaac Manubag',
    role: 'Business Relations',
    imageUrl: img3,
  },
  {
    name: 'Roy Vincent',
    role: 'Front-end Developer',
    imageUrl: img4,
  },
  {
    name: 'Aljen Mondarte',
    role: 'Designer',
    imageUrl: img5,
  },
  {
    name: 'Francisco Villahermosa',
    role: 'Director of Product',
    imageUrl: img6,
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
