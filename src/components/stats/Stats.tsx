
import CountUp from 'react-countup';
import { useEffect, useRef, useState } from 'react';
import Reveal from '../ui/Reveal'


const stats = [
  { id: 1, label: 'Total Projects Completed', value: 10 },
  { id: 2, label: 'Years of Experience', value: 15 },
  { id: 3, label: 'Team Members', value: 10 },
];



export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 py-34" ref={ref}>
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <dd className="text-7xl font-bold text-gray-900 dark:text-white mb-2">
                  {visible ? (
                    <span className="inline-block align-middle">+
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={1.5}
                        useEasing={true}
                        redraw={true}
                      />
                    </span>
                  ) : (
                    <>+{stat.value}</>
                  )}
                </dd>
                <dt className="text-lg text-gray-600 dark:text-gray-300 font-medium mt-2">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  );
}
