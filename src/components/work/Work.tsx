
const steps = [
  {
    id: 1,
    label: 'Gathering',
    icon: '🌩️',
    description: 'We collect requirements and understand your business needs to ensure a tailored solution.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 2,
    label: 'Analysis',
    icon: '⚙️',
    description: 'We analyze data and processes to design the most effective approach.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 3,
    label: 'Implementation',
    icon: '📈',
    description: 'We build, test, and deploy your solution with best practices and modern technology.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    id: 4,
    label: 'Launch',
    icon: '🚀',
    description: 'We deliver and support your product, ensuring a smooth transition and ongoing success.',
    color: 'bg-indigo-50 text-indigo-600',
  },
];

import Reveal from '../ui/Reveal'

const Work: React.FC = () => {
  return (
    <section id="work" className="w-full bg-gray-900 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#3b40d6] mb-12">How we work</h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full text-3xl font-bold mb-4 ${step.color} transition-all duration-300 group-hover:scale-110`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.label}</h3>
                <p className="text-gray-400 text-base mb-2">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Work;
