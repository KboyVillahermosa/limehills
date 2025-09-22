import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <header className="bg-gradient-to-r from-[#f8fafc] to-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3b40d6] leading-tight mb-4">Your Journey with Limehills</h1>
          <p className="text-lg text-gray-600 max-w-3xl">Founded in 2016, we help organizations transform their ideas into scalable, secure, and maintainable software. Our team blends engineering discipline with design thinking to deliver measurable outcomes.</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Two-column intro */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Founded in 2016</h2>
            <p className="text-gray-600 mb-4">Founded in 2016, Limehills Technologies began with a vision to bridge the gap between businesses and cutting-edge technology. Over the years, we’ve grown into a trusted partner for numerous organizations, helping them navigate the complexities of the digital world and achieve their strategic goals.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Mission</h3>
            <p className="text-gray-600">Our mission is to help businesses harness the power of technology to achieve their goals. We are committed to delivering high-quality solutions that drive growth, enhance efficiency, and foster long-term success for our clients.</p>
          </div>

          <aside className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Quick Facts</h4>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Founded:</strong> 2016</li>
              <li><strong>Location:</strong> Remote &amp; Hybrid</li>
              <li><strong>Specialties:</strong> Software, Cloud, DevOps</li>
            </ul>
          </aside>
        </section>

        {/* Services grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">What We Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h4 className="font-semibold text-gray-800 mb-2">Custom Software Development</h4>
              <p className="text-gray-600 text-sm">Designing and building software solutions that align with your business objectives, ensuring optimal performance and scalability.</p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h4 className="font-semibold text-gray-800 mb-2">Cloud Computing Solutions</h4>
              <p className="text-gray-600 text-sm">Providing scalable and secure cloud services to optimize your IT infrastructure, enhance flexibility, and reduce costs.</p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h4 className="font-semibold text-gray-800 mb-2">IT Consulting</h4>
              <p className="text-gray-600 text-sm">Offering strategic guidance to help you make informed technology decisions that support your business goals and drive innovation.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white border rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Continuously seeking new and better ways to solve challenges and deliver value to our clients.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">Striving for the highest standards in everything we do, from project execution to customer service.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Integrity</h4>
              <p className="text-gray-600 text-sm">Conducting our business with honesty, transparency, and respect, building trust with our clients and partners.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Customer Focus</h4>
              <p className="text-gray-600 text-sm">Prioritizing our clients’ needs and ensuring their satisfaction through personalized service and support.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3b40d6] text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Ready to build something great?</h3>
            <p className="text-sm text-white/90">Partner with us to design and deliver software that drives impact.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#contact" className="inline-block bg-white text-[#3b40d6] font-semibold px-5 py-3 rounded-lg">Contact Us</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage
