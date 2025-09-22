import React from 'react'

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-[#3b40d6] mb-4">Careers</h1>
        <p className="text-lg text-gray-700 mb-6">We're always looking for great people — but we currently have no job openings. Stay tuned for future opportunities.</p>

        <div className="mt-8">
          <p className="text-gray-600 mb-4">If you'd like to hear about opportunities, get in touch or subscribe to updates.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="inline-block bg-[#3b40d6] text-white px-6 py-3 rounded-lg font-semibold">Contact Us</a>
            <a href="#subscribe" className="inline-block border border-gray-300 px-6 py-3 rounded-lg text-gray-700">Subscribe</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersPage
