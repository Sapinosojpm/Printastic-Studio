import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Emily R.',
    text: 'Printing Shop exceeded my expectations! The quality and turnaround time were fantastic.',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Michael B.',
    text: 'Great customer service and top-notch prints. Highly recommend for any business!',
    img: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    name: 'Sara L.',
    text: 'I loved the custom t-shirts for our event. Will definitely order again!',
    img: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    name: 'David K.',
    text: 'Professional quality prints at competitive prices. Fast delivery too!',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jessica M.',
    text: 'Amazing attention to detail and excellent customer support throughout.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Robert T.',
    text: 'The business cards turned out perfect. Impressed with the print quality!',
    img: 'https://randomuser.me/api/portraits/men/28.jpg',
  },
];

const Testimonials = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 tracking-tight">
          What Our Clients Say
        </h2>
        
        <div className="relative">
          <motion.div 
            className="flex gap-8"
            animate={{ 
              x: [0, -testimonials.length * 320] 
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: testimonials.length * 4,
                ease: "linear"
              }
            }}
          >
            {duplicatedTestimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center border-2 border-gray-200 min-w-[300px] cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  transition: { duration: 0.2 }
                }}
              >
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-20 h-20 rounded-full mb-6 object-cover border-2 border-gray-400" 
                />
                <p className="text-gray-700 mb-4 text-base text-center">
                  "{t.text}"
                </p>
                <span className="font-bold text-blue-900">- {t.name}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
        
        </div>
        
        {/* Optional: Pause on hover */}
        <style jsx>{`
          #testimonials:hover .flex {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;