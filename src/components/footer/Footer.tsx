import React from 'react'
import logo from '../../assets/images/logo.png'
import Reveal from '../ui/Reveal'

const Footer: React.FC = () => {
  return (
    <section id='footer'>
    <footer className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
          <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#3343d6] to-[#2b36a8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
      <div className="max-w-7xl mx-auto px-8 py-12">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="flex items-center gap-4">
                <img src={logo} alt="Limehills" className="h-12 w-auto object-contain" />
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h4 className="text-gray-900 dark:text-gray-100 font-semibold mb-4">Links</h4>
                <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Support</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-gray-100 font-semibold mb-4">Legal</h4>
                <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Terms of Use</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-gray-100 font-semibold mb-4">Social</h4>
                <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Facebook</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">LinkedIn</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 dark:text-gray-100 font-semibold mb-4">Company</h4>
                <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">About</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Services</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Careers</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Limehills — All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
    </section>
  )
}

export default Footer
