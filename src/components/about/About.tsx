import { 
  CloudArrowUpIcon, 
  LockClosedIcon, 
  ServerIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Reveal from '../ui/Reveal'

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: SparklesIcon },
  { value: '10+', label: 'Years Experience', icon: BuildingOfficeIcon },
  { value: '100%', label: 'Client Satisfaction', icon: UserGroupIcon },
]

const features = [
  {
    name: 'Seamless Deployment',
    description:
      'Automate and optimize your deployment pipelines with Limehills, ensuring smoother releases and faster time-to-market.',
    icon: CloudArrowUpIcon,
    color: 'indigo',
  },
  {
    name: 'Enterprise Security',
    description:
      'Protect your applications and infrastructure with advanced security measures, from SSL management to compliance support.',
    icon: LockClosedIcon,
    color: 'purple',
  },
  {
    name: 'Reliable Data Management',
    description:
      'Keep your business running without interruption through secure, consistent, and automated database backup solutions.',
    icon: ServerIcon,
    color: 'pink',
  },
]

export default function About() {
  return (
    <section id='about' className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold text-indigo-400 mb-4">About Us</h2>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">Building tomorrow's</span>
              <span className="block italic font-light text-gray-300 font-serif">
                technology solutions
              </span>
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl mx-auto">
              Limehills is a software consulting firm specializing in software development, configuration, and support services. We excel in delivering tailored solutions that help businesses innovate and scale.
            </p>
          </div>
        </Reveal>

        {/* Stats Section */}
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-20">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="relative rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 p-8 text-center transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/60"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <IconComponent className="w-8 h-8 mx-auto text-indigo-400 mb-4" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* Main Content Section */}
        <Reveal>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            {/* Left Column - Content */}
            <div className="lg:pr-8">
              <div className="lg:max-w-lg">
                <h4 className="text-base font-semibold text-indigo-400 mb-4">Our Expertise</h4>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  We deliver end-to-end technology services that help businesses innovate, scale, and operate securely. Our team combines deep technical expertise with strategic thinking to solve complex challenges.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  From custom software development to cloud infrastructure and cybersecurity, we provide comprehensive solutions tailored to your business needs.
                </p>
                
                {/* Feature List */}
                <dl className="mt-10 space-y-6">
                  {features.map((feature) => {
                    const IconComponent = feature.icon
                    const colorClasses = {
                      indigo: 'bg-indigo-500/10 text-indigo-400',
                      purple: 'bg-purple-500/10 text-purple-400',
                      pink: 'bg-pink-500/10 text-pink-400',
                    }
                    return (
                      <div key={feature.name} className="relative pl-12">
                        <dt className="text-base font-semibold text-white mb-2">
                          <div className={`absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                            <IconComponent className="h-5 w-5" aria-hidden="true" />
                          </div>
                          {feature.name}
                        </dt>
                        <dd className="text-base leading-7 text-gray-300">
                          {feature.description}
                        </dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 shadow-2xl ring-1 ring-white/10 overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(129, 140, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(129, 140, 248, 0.1) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 mb-6">
                      <SparklesIcon className="w-10 h-10 text-indigo-400" />
                    </div>
                    <h5 className="text-xl font-semibold text-white mb-2">Innovation Driven</h5>
                    <p className="text-gray-300 text-sm max-w-xs">
                      Transforming businesses through cutting-edge technology and strategic solutions
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl" />
                <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
