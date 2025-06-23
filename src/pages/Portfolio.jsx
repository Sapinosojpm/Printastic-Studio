import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Brand Identity', img: 'https://source.unsplash.com/400x300/?branding,design' },
  { title: 'Event Posters', img: 'https://source.unsplash.com/400x300/?poster,print' },
  { title: 'Custom T-Shirts', img: 'https://source.unsplash.com/400x300/?tshirt,print' },
  { title: 'Business Cards', img: 'https://source.unsplash.com/400x300/?businesscard,print' },
  { title: 'Brochures', img: 'https://source.unsplash.com/400x300/?brochure,print' },
  { title: 'Photo Prints', img: 'https://source.unsplash.com/400x300/?photo,print' },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-white px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 tracking-tight">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
          >
            <img src={project.img} alt={project.title} className="w-full h-52 object-cover rounded-xl mb-6" />
            <h3 className="font-bold text-xl text-blue-900 mb-3">{project.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio; 