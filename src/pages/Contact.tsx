import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { supabase } from '../lib/supabase'
import Reveal from '../components/ui/Reveal'

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  country: string
  phoneNumber: string
  message: string
  agreeToPolicies: boolean
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'US',
    phoneNumber: '',
    message: '',
    agreeToPolicies: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.agreeToPolicies) {
      setSubmitStatus({
        type: 'error',
        message: 'Please agree to our privacy policy to continue.',
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim()
      const phone = formData.country ? `${formData.country} ${formData.phoneNumber}` : formData.phoneNumber

      const { error } = await supabase.from('contacts').insert([
        {
          name: fullName,
          email: formData.email,
          company: formData.company || null,
          subject: 'Sales Inquiry',
          message: formData.message || `Phone: ${phone}`,
          phone_number: phone,
          country: formData.country,
        },
      ])

      if (error) {
        throw error
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We\'ll get back to you soon.',
      })
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        country: 'US',
        phoneNumber: '',
        message: '',
        agreeToPolicies: false,
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      const errorMessage = error instanceof Error ? error.message : (error as { details?: string })?.details || 'Something went wrong. Please try again or contact us directly.'
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <div className="relative isolate px-2 lg:px-8 py-24 sm:py-32 lg:py-40">
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
        <Reveal className="mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Let's work</span>
              <span className="block italic font-light text-gray-300 font-serif">
                together
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl sm:leading-9">
              Get in touch with our team to discuss how we can help transform your business.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm/6 font-semibold text-white">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        aria-label="Country"
                        value={formData.country}
                        onChange={handleChange}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                      >
                        <option value="US">US</option>
                        <option value="CA">CA</option>
                        <option value="EU">EU</option>
                        <option value="PH">PH</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                      />
                    </div>
                    <input
                      id="phone-number"
                      name="phoneNumber"
                      type="tel"
                      placeholder="123-456-7890"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
                    <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                    <input
                      id="agree-to-policies"
                      name="agreeToPolicies"
                      type="checkbox"
                      checked={formData.agreeToPolicies}
                      onChange={handleChange}
                      aria-label="Agree to policies"
                      className="absolute inset-0 appearance-none focus:outline-hidden"
                    />
                  </div>
                </div>
                <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-400">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold whitespace-nowrap text-indigo-400">
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
        
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mt-6 rounded-lg p-4 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Sending...' : "Let's talk"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  )
}
