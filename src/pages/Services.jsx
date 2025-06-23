import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Business Cards', desc: 'High-quality, custom business cards for your brand.', icon: '🖨️' },
  { title: 'Flyers & Brochures', desc: 'Eye-catching flyers and brochures to promote your business.', icon: '📄' },
  { title: 'T-Shirt Printing', desc: 'Custom t-shirt printing for events, teams, and more.', icon: '👕' },
  { title: 'Large Format', desc: 'Banners, posters, and signage for maximum impact.', icon: '🖼️' },
  { title: 'Photo Printing', desc: 'Vivid, lasting photo prints in all sizes.', icon: '📷' },
  { title: 'Custom Design', desc: 'Professional design services for all your print needs.', icon: '🎨' },
];

const Services = () => (
  <section id="services" className="py-24 bg-white px-4 md:px-0">
    <div className="max-w-7xl mx-auto rounded-3xl bg-white/90 p-8 md:p-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight text-center">Our Services</h2>
      <div className="w-20 h-2 bg-yellow-400 rounded-full mb-12 mx-auto"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
          >
            <div className="text-5xl mb-6 text-yellow-700">{service.icon}</div>
            <h3 className="font-bold text-xl text-blue-900 mb-3">{service.title}</h3>
            <p className="text-yellow-700 text-base text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
