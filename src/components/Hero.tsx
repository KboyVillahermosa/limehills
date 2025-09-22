import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#3b40d6] leading-tight tracking-tight mb-6">
          Applications should not be a
          <span className="block text-5xl md:text-7xl">rocket science</span>
        </h1>

        <p className="mx-auto text-gray-500 max-w-3xl text-lg mb-8">
          Limehills provides software development, DevOps engineering, and consulting to help teams build resilient, maintainable solutions tailored to their business needs.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a href="#contact" className="inline-flex items-center gap-3 bg-[#3b40d6] hover:bg-[#2b2fc4] rounded-full px-6 py-3 text-sm font-semibold"><span className="text-white">Contact Us</span></a>
          <a href="/services" className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 text-sm font-semibold text-gray-800">Our Services</a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="flex -space-x-3">
            <img src="/src/assets/images/alin.png" alt="client logo 1" className="w-10 h-10 rounded-full object-cover border-2 border-white bg-gray-100" />
            <img src="/src/assets/images/alin.png" alt="client logo 2" className="w-10 h-10 rounded-full object-cover border-2 border-white bg-gray-100" />
            <img src="/src/assets/images/alin.png" alt="client logo 3" className="w-10 h-10 rounded-full object-cover border-2 border-white bg-gray-100" />
          </div>
          <div className="text-sm text-gray-500">Trusted by 500+ clients</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
