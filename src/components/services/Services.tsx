import {
  CodeBracketIcon,
  PaintBrushIcon,
  CloudIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'
import Reveal from '../ui/Reveal'

const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Custom software solutions for web and mobile using Python, JavaScript, Laravel, Node.js, React Native, Flutter, and Swift.',
    icon: CodeBracketIcon,
    technologies: ['Python', 'JavaScript', 'Laravel', 'Node.js', 'React Native', 'Flutter', 'Swift'],
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'User-centered design services creating intuitive interfaces and engaging experiences from wireframes to high-fidelity prototypes.',
    icon: PaintBrushIcon,
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud with Kubernetes, automated deployments, and cost optimization.',
    icon: CloudIcon,
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Cloud Migration'],
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Advanced security services with threat identification, vulnerability testing, continuous monitoring, and compliance support.',
    icon: ShieldCheckIcon,
    technologies: ['Splunk', 'Snort', 'AWS Security Hub', 'Vulnerability Testing', 'Compliance'],
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
  },
  {
    id: 5,
    title: 'DevOps Services',
    description: 'Automated CI/CD pipelines, infrastructure as code, and streamlined workflows using Docker, Kubernetes, Jenkins, and Terraform.',
    icon: Cog6ToothIcon,
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD'],
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
  {
    id: 6,
    title: 'Data Analytics & AI',
    description: 'Transform data into insights with Python, TensorFlow, and Power BI. Build machine learning models for predictive analytics and optimization.',
    icon: ChartBarIcon,
    technologies: ['Python', 'TensorFlow', 'Power BI', 'Machine Learning', 'Data Processing'],
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
  {
    id: 7,
    title: 'Application Consulting',
    description: 'Expert consulting for Jira, Shopify, WordPress, and WooCommerce to optimize platforms and streamline business operations.',
    icon: BriefcaseIcon,
    technologies: ['Jira', 'Shopify', 'WordPress', 'WooCommerce', 'Platform Optimization'],
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">Our</span>
              <span className="block italic font-light text-gray-300 font-serif">
                Services
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We deliver end-to-end technology services that help businesses innovate, scale, and operate securely.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Reveal key={service.id}>
                <div className="group relative flex flex-col rounded-lg bg-gray-800/40 border border-gray-700/50 transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/60">
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Icon */}
                    <div className={`inline-flex w-12 h-12 items-center justify-center rounded-lg ${service.iconBg} mb-4 transition-all duration-300 group-hover:scale-105`}>
                      <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold tracking-tight text-white mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-6 text-gray-300 mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Technologies - Cleaner, simpler tags */}
                    <div className="mt-auto pt-4 border-t border-gray-700/30">
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.slice(0, 4).map((tech: string) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium text-gray-400 bg-gray-700/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 4 && (
                          <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium text-gray-500">
                            +{service.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* CTA Section - Cleaner design */}
        <Reveal>
          <div className="mt-20 text-center">
            <div className="mx-auto max-w-4xl rounded-2xl bg-gray-800/40 border border-gray-700/50 p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-white mb-2">Looking for a tailored solution?</h3>
              <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
                Tell us about your project and we'll advise the best approach.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get in touch
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

