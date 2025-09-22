import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b40d6] mb-4">Limehills</h2>

          <p className="text-lg text-gray-600 mb-4">
            Limehills is a software consulting firm specializing in software development, configuration, and support services. We excel in delivering tailored solutions across a range of areas, including Software Development, DevOps Engineering, and Software Consulting.
          </p>

          <p className="text-lg text-gray-600 mb-4">
            Our vision is to provide innovative and effective solutions that empower our clients to optimize their daily operations and achieve greater productivity. We are committed to understanding each client’s unique needs and delivering results that drive business success.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/src/assets/images/SVG-about-image.15f13586-v3.svg"
            alt="Limehills illustrative"
            className="w-full max-w-[520px] md:max-w-[680px] h-auto object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export default About
