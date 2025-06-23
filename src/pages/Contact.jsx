import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="py-24 bg-white px-4 md:px-0">
    <div className="max-w-5xl mx-auto rounded-3xl shadow-xl bg-white/90 p-8 md:p-16 flex flex-col md:flex-row items-start gap-12">
      {/* Left: Contact Info & Socials */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">Contact Us</h2>
        <div className="w-20 h-2 bg-yellow-400 rounded-full mb-6 mx-auto md:mx-0"></div>
        <p className="text-lg text-blue-900 mb-2">Have a question or want to start a project? Reach out to us!</p>
        <div className="text-blue-900 mb-4 space-y-2">
          <div>Email: <a href="mailto:info@printingshop.com" className="text-yellow-700 hover:underline">info@printingshop.com</a></div>
          <div>Phone: <a href="tel:+1234567890" className="text-yellow-700 hover:underline">+1 234 567 890</a></div>
          <div>Address: 123 Print Ave, City, Country</div>
        </div>
        <div className="flex gap-4 justify-center md:justify-start mt-2">
          <a href="#" className="text-blue-900 hover:text-yellow-500 text-2xl"><FaFacebookF /></a>
          <a href="#" className="text-blue-900 hover:text-yellow-500 text-2xl"><FaInstagram /></a>
          <a href="#" className="text-blue-900 hover:text-yellow-500 text-2xl"><FaTwitter /></a>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <form className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="Your Name" className="border border-yellow-300 rounded-lg px-4 py-2" />
            <input type="email" placeholder="Your Email" className="border border-yellow-300 rounded-lg px-4 py-2" />
            <input type="text" placeholder="Subject" className="border border-yellow-300 rounded-lg px-4 py-2" />
            <textarea placeholder="Message" className="border border-yellow-300 rounded-lg px-4 py-2" rows="4"></textarea>
            <button type="submit" className="bg-blue-900 text-yellow-50 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-blue-900 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
