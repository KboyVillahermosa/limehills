import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Reveal from '../ui/Reveal'

const features = [
  {
    name: 'Seamless Deployment',
    description:
      'Automate and optimize your deployment pipelines with Limehills, ensuring smoother releases and faster time-to-market.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Enterprise Security',
    description:
      'Protect your applications and infrastructure with advanced security measures, from SSL management to compliance support.',
    icon: LockClosedIcon,
  },
  {
    name: 'Reliable Data Management',
    description:
      'Keep your business running without interruption through secure, consistent, and automated database backup solutions.',
    icon: ServerIcon,
  },
]

export default function About() {
  return (
    <section id='about'>
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">Deploy faster</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
               Limehills is a software consulting firm specializing in software development, configuration, and support services. We excel in delivering tailored solutions across a range of areas, including Software Development, DevOps Engineering, and Software Consulting.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Reveal>
            <img
              alt="Product screenshot"
              src="/src/assets/images/company.jpg"
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </Reveal>
        </Reveal>
      </div>
    </div>
    </section>
  )
}
