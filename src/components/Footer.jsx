import React from 'react';

const Footer = () => (
  <footer className="bg-white text-gray-900 py-10 mt-16 shadow-inner">
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 gap-4">
      <div className="font-extrabold text-lg tracking-tight mb-2">Printastic &copy; {new Date().getFullYear()}</div>
      <nav className="flex flex-wrap gap-6 justify-center">
        <a href="#home" className="hover:underline hover:text-gray-500 transition">Home</a>
        <a href="#about" className="hover:underline hover:text-gray-500 transition">About</a>
        <a href="#services" className="hover:underline hover:text-gray-500 transition">Services</a>
        <a href="#testimonials" className="hover:underline hover:text-gray-500 transition">Testimonials</a>
        <a href="#faq" className="hover:underline hover:text-gray-500 transition">FAQ</a>
        <a href="#contact" className="hover:underline hover:text-gray-500 transition">Contact</a>
        <a href="#portfolio" className="hover:underline hover:text-gray-500 transition">Portfolio</a>
      </nav>
    </div>
  </footer>
);

export default Footer; 