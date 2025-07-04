import { url } from 'inspector'
import React from 'react'

export default function page() {
  return (
    <>
      <main className="bg-[#f5f7f9] text-[#1e2a3c] min-h-screen px-6 py-12 mt-[60px]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#cc1f2b] mb-6">Contact Us</h1>
          <p className="text-center text-lg mb-12">Feel free to contact with us for any kind of query.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#27aae1]">GET IN TOUCH WITH US</h2>
              <p className="mb-6">
                Thank you for your interest in <span className="font-semibold">RE Eduversity</span>. We consider communication with the customer.
              </p>
              <div className="space-y-4 text-[15px]">
                <div>
                  <h3 className="font-semibold text-[#1e2a3c]">📍 Our Location</h3>
                  <p>A-152/A St. No. 8, Meet Nagar, Delhi 110094</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e2a3c]">📞 Phone Number</h3>
                  <p>+91 83684 58738</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e2a3c]">✉️ Email Address</h3>
                  <p>info@reeduversity.com</p>
                </div>
              </div>
            </div>
            <form className="bg-white shadow-md rounded-lg p-6 space-y-5">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27aae1]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27aae1]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27aae1]"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27aae1]"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#cc1f2b] text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
