import { useState } from 'react';
import Reveal from '../ui/Reveal'

type QA = {
  question: string;
  answer: string;
};

const faqs: QA[] = [
  {
    question: 'What is your mission?',
    answer:
      "Our mission is to help businesses harness the power of technology to achieve their goals. We deliver high-quality solutions that drive growth, enhance efficiency, and foster long-term success.",
  },
  {
    question: 'What services do you offer?',
    answer:
      'We provide Custom Software Development, Cloud Computing Solutions, IT Consulting, DevOps, Cybersecurity, Data Analytics & AI, and Application Consulting for platforms like Jira, Shopify, WordPress, and WooCommerce.',
  },
  {
    question: 'Which technologies and platforms do you specialize in?',
    answer:
      'Our team works with Python, JavaScript, Node.js, Laravel, React Native, Flutter, Swift, AWS, Azure, Google Cloud, Kubernetes, Docker, Jenkins, Terraform, and popular data/AI tools like TensorFlow and Pandas.',
  },
  {
    question: 'How do you approach security and compliance?',
    answer:
      'We offer comprehensive security assessments, vulnerability testing, and continuous monitoring using tools like Splunk, Snort, and AWS Security Hub. We design systems with security best practices and help ensure compliance with relevant industry standards.',
  },
  {
    question: 'What does your DevOps practice include?',
    answer:
      'Our DevOps services include CI/CD pipeline setup (Jenkins, GitHub Actions), containerization with Docker, orchestration with Kubernetes, and infrastructure as code using Terraform or CloudFormation to deliver consistent, repeatable environments.',
  },
  {
    question: 'How can data analytics and AI help my business?',
    answer:
      'We help you unlock actionable insights from data using analytics and machine learning (Python, TensorFlow, Power BI). This can improve forecasting, automate decision-making, and reveal process improvements that increase revenue or reduce cost.',
  },
  {
    question: 'Can you help with platform-specific consulting?',
    answer:
      'Yes — we provide application consulting for Jira, Shopify, WordPress, and WooCommerce to optimize workflows, improve e-commerce performance, and tailor platforms to your business needs.',
  },
  {
    question: 'How do you start a new engagement?',
    answer:
      'We usually begin with a discovery session to understand your goals and constraints, followed by a proposal that outlines scope, timeline, and costs. From there we move into iterative delivery with regular checkpoints and transparent communication.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id="faq" className="bg-gray-900 text-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-white sm:text-4xl lg:text-5xl">
          <span className="block">Frequently asked</span>
          <span className="block italic font-light text-gray-300 font-serif">
            questions
          </span>
        </h2>

        <div className="divide-y divide-gray-800">
          {faqs.map((qa, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={i} className="py-6">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between text-left gap-6"
                >
                  <span className="text-lg font-semibold text-white">{qa.question}</span>
                  <span className="flex-shrink-0 text-indigo-400">
                    <svg
                      className={`transform transition-transform duration-200 ${open ? 'rotate-45' : 'rotate-0'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <div
                  aria-hidden={!open}
                  className={`mt-4 text-gray-300 text-base leading-7 overflow-hidden transition-all duration-200 ${
                    open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{qa.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
