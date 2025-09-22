import React from 'react'
import logo from '../../assets/images/footer-logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Limehills" className="h-12 w-auto object-contain" />
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[#3b40d6] font-semibold mb-4">Links</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-800">Support</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#3b40d6] font-semibold mb-4">Legal</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">Terms of Use</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#3b40d6] font-semibold mb-4">Social</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-800">Facebook</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">LinkedIn</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#3b40d6] font-semibold mb-4">Company</h4>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-800">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Limehills — All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
