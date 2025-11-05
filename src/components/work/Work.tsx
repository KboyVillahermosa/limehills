import { CloudArrowUpIcon, CalendarDaysIcon, ChartBarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import Reveal from '../ui/Reveal'

const steps = [
  {
    id: 1,
    label: 'Gathering',
    description: 'We collect requirements and understand your business needs to ensure a tailored solution.',
    icon: CloudArrowUpIcon,
    iconBg: 'bg-pink-600',
    textColor: 'text-pink-400',
    position: { x: '12%', y: '82%' },
  },
  {
    id: 2,
    label: 'Analysis',
    description: 'We analyze data and processes to design the most effective approach.',
    icon: CalendarDaysIcon,
    iconBg: 'bg-blue-600',
    textColor: 'text-blue-400',
    position: { x: '42%', y: '28%' },
  },
  {
    id: 3,
    label: 'Implementation',
    description: 'We build, test, and deploy your solution with best practices and modern technology.',
    icon: ChartBarIcon,
    iconBg: 'bg-orange-600',
    textColor: 'text-orange-400',
    position: { x: '72%', y: '78%' },
  },
  {
    id: 4,
    label: 'Launch',
    description: 'We deliver and support your product, ensuring a smooth transition and ongoing success.',
    icon: RocketLaunchIcon,
    iconBg: 'bg-purple-600',
    textColor: 'text-purple-400',
    position: { x: '92%', y: '15%' },
  },
]

const Work: React.FC = () => {
  return (
    <section id="work" className="relative w-full bg-gray-900 py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        <Reveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">How we</span>
              <span className="block italic font-light text-gray-300 font-serif">
                work
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-300 max-w-2xl mx-auto">
              Our proven process ensures your project is delivered with precision, quality, and excellence.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative w-full max-w-[95%] sm:max-w-[90%] lg:max-w-full mx-auto h-[400px] sm:h-[450px] md:h-[480px] lg:h-[500px]">
            {/* SVG Container for the wavy path */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 500"
              preserveAspectRatio="xMidYMid meet"
              style={{ overflow: 'visible' }}
            >
              {/* Professional smooth wavy path connecting all stages */}
              {/* Path coordinates: Gathering(120,380) -> Analysis(400,200) -> Implementation(680,380) -> Launch(900,120) */}
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Subtle glow effect for the path - behind main path */}
              <path
                d="M 120 380 
                   C 180 380, 240 370, 300 350
                   C 340 330, 370 280, 400 200
                   C 430 120, 480 100, 540 160
                   C 580 200, 620 320, 650 360
                   C 665 375, 670 378, 680 380
                   C 730 380, 800 250, 860 160
                   C 880 140, 890 130, 900 120"
                fill="none"
                stroke="#818cf8"
                strokeWidth="10"
                strokeOpacity="0.15"
                strokeDasharray="14 8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dash-path"
                style={{
                  animation: 'dashMove 6s linear infinite',
                  animationDelay: '0.3s',
                }}
              />
              
              {/* Main animated dashed wavy path - connects exactly to Gathering(120,380) and Launch(900,120) */}
              <path
                d="M 120 380 
                   C 180 380, 240 370, 300 350
                   C 340 330, 370 280, 400 200
                   C 430 120, 480 100, 540 160
                   C 580 200, 620 320, 650 360
                   C 665 375, 670 378, 680 380
                   C 730 380, 800 250, 860 160
                   C 880 140, 890 130, 900 120"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="3.5"
                strokeDasharray="14 8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dash-path"
                style={{
                  animation: 'dashMove 6s linear infinite',
                  filter: 'drop-shadow(0 0 4px rgba(129, 140, 248, 0.6))',
                }}
              />
            </svg>

            {/* Steps positioned along the path */}
            {steps.map((step, index) => {
              const IconComponent = step.icon
              // Adjusted positions for compact layout with better spacing
              const adjustedPositions: Record<number, { x: string; y: string }> = {
                1: { x: '12%', y: '76%' },
                2: { x: '40%', y: '40%' },
                3: { x: '68%', y: '76%' },
                4: { x: '90%', y: '24%' },
              }
              const position = adjustedPositions[step.id]
              
              return (
              <div
                key={step.id}
                  className="absolute group animate-fade-in-up"
                  style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both',
                  }}
                >
                  {/* Step Card */}
                  <div className="relative flex flex-col items-center">
                    {/* Icon Circle with enhanced glow and pulse */}
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 rounded-full ${step.iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                        step.id === 1 ? 'shadow-[0_0_20px_rgba(219,39,119,0.5)]' :
                        step.id === 2 ? 'shadow-[0_0_20px_rgba(37,99,235,0.5)]' :
                        step.id === 3 ? 'shadow-[0_0_20px_rgba(234,88,12,0.5)]' :
                        'shadow-[0_0_20px_rgba(147,51,234,0.5)]'
                      }`}
                    >
                      {/* Pulse ring effect */}
                      <div
                        className={`absolute inset-0 rounded-full ${step.iconBg} opacity-0 group-hover:opacity-30 group-hover:animate-ping`}
                        style={{
                          animationDuration: '2s',
                        }}
                      />
                      
                      {/* Icon with smooth transition */}
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Label - always below icon with fade animation */}
                    <div className={`mt-3 ${step.textColor} transition-all duration-300 group-hover:scale-105`}>
                      <span className="text-sm font-semibold whitespace-nowrap">{step.label}</span>
                    </div>

                    {/* Description tooltip on hover with slide animation */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 p-3 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-10 border border-gray-700/50">
                      <p className="text-xs text-gray-300 text-center leading-relaxed">{step.description}</p>
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800/95 border-l border-t border-gray-700/50 rotate-45" />
                    </div>
                </div>
              </div>
              )
            })}
          </div>
        </Reveal>

        {/* Enhanced CSS animations */}
        <style>{`
          @keyframes dashMove {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 44;
            }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translate(-50%, calc(-50% + 20px));
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
          
          @media (prefers-reduced-motion: reduce) {
            .dash-path,
            .animate-fade-in-up {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default Work
