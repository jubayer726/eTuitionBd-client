import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-6">
            Contact Us
          </h2>

          <p className="text-gray-700 text-lg leading-7 mb-6">
            Have questions or need support? We're here to help students, tutors,
            and parents connect smoothly on eTuitionBd.
          </p>

          <div className="space-y-5 text-gray-800 text-lg">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📍</span>
              <p>
                Mohakhali Dhaka-1200.<br />
                Dhaka Bangladesh
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <p>(+88) 01234567890</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <p>support@etuitionbd.com</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-[#0f172a] mb-6">
            Send us a Message
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
            
        </div>
    );
};

export default Contact;