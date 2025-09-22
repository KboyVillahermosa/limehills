import React from 'react'
import { FiCode, FiCloud, FiShield, FiServer, FiBarChart2, FiTool } from 'react-icons/fi'

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="h-12 w-12 flex items-center justify-center rounded-md text-[#3b40d6] mr-4">{children}</div>
)

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Software Development',
      body:
        'We specialize in creating custom software solutions using technologies like Python, JavaScript, Laravel, and Node.js. Our expertise extends to mobile development (React Native, Flutter, Swift) to deliver scalable, secure applications.',
      icon: <FiCode className="h-6 w-6" />,
    },
    {
      title: 'Cloud Solutions',
      body:
        'Our cloud solutions leverage AWS, Azure, and Google Cloud for scalable infrastructure. We handle migrations, Kubernetes, automation, and cost optimization to ensure high availability.',
      icon: <FiCloud className="h-6 w-6" />,
    },
    {
      title: 'Cybersecurity',
      body:
        'Protect your business with security services using tools like Splunk and AWS Security Hub. We provide assessments, vulnerability testing, and continuous monitoring to keep systems secure.',
      icon: <FiShield className="h-6 w-6" />,
    },
    {
      title: 'DevOps Services',
      body:
        'We streamline development using Docker, Kubernetes, and Jenkins. We implement IaC with Terraform and CloudFormation for repeatable, reliable environments.',
      icon: <FiServer className="h-6 w-6" />,
    },
    {
      title: 'Data Analytics & AI',
      body:
        'Unlock insights with analytics and AI using Python, TensorFlow, and Power BI. We build models and pipelines to turn data into action.',
      icon: <FiBarChart2 className="h-6 w-6" />,
    },
    {
      title: 'Application Consulting',
      body:
        'Expert consulting for platforms like Jira, Shopify, WordPress, and WooCommerce to streamline your operations and maximize platform value.',
      icon: <FiTool className="h-6 w-6" />,
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3b40d6] mb-3">Our Services</h1>
          <p className="text-gray-600 max-w-3xl">We deliver end-to-end technology services that help businesses innovate, scale, and operate securely.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="bg-white border rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition">
              <div className="flex items-start">
                <Icon>{s.icon}</Icon>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.body}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <div className="bg-gradient-to-r from-[#eef2ff] to-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Looking for a tailored solution?</h3>
              <p className="text-gray-600">Tell us about your project and we’ll advise the best approach.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#contact" className="inline-block bg-[#3b40d6] text-white px-6 py-3 rounded-lg font-semibold shadow">Get in touch</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServicesPage
