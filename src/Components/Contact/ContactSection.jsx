import React from "react";
import { contactContent } from "../../Utils/Constant";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Info */}
        <div>
          <h3 className="text-blue-600 text-lg font-semibold mb-2 uppercase tracking-wide">
            {contactContent.subtitle}
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800 mb-6">
            {contactContent.title}
          </h1>
          <p className="text-gray-600 text-lg mb-8">{contactContent.description}</p>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700 text-lg">
              📍 <span className="font-semibold">{contactContent.address}</span>
            </p>
            <p className="text-gray-700 text-lg">
              📞 <span className="font-semibold">{contactContent.phone}</span>
            </p>
            <p className="text-gray-700 text-lg">
              📧 <span className="font-semibold">{contactContent.email}</span>
            </p>
          </div>
        </div>
        <form className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactSection;