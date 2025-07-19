import React from 'react';

const Footer = () => (
  <footer className="bg-white text-gray-900 py-10 mt-16 shadow-inner">
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 gap-4">
      <div className="font-extrabold text-lg tracking-tight mb-2">Printastic &copy; {new Date().getFullYear()}</div>
     
    </div>
  </footer>
);

export default Footer; 