import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const essentialPrintingServices = [
  { 
    title: 'Document Printing', 
    desc: 'Black or White / Color',
    image: assets.printer
  },
  { 
    title: 'Photocopying  Services', 
    desc: 'Eye-catching flyers and brochures designed to promote your business and capture attention.',
    image: assets.photocopy
  },
  { 
    title: 'Photo Printing Services', 
    desc: 'Sizes: 2x2, 4x6, 5x7, etc.',
    image: assets.photoprinting
  }
  
]

const marketingServices = [
  { 
    title: 'Stickers', 
    desc: 'Vinyl, Transparent, Matte, Die-cut',
    image: assets.stickers
  },
  { 
    title: 'Menu Printing', 
    desc: 'for Cafes/Restaurants',
    image: assets.menu
  },
  { 
    title: 'Flyers / Leaflets', 
    desc: '',
    image: assets.flyers
  }
 
];

const personalizedServices = [
  { 
    title: 'T-shirt Printing', 
    desc: 'Sublimation, Heat Transfer',
    image: assets.tshirt
  },
  { 
    title: 'Mug Printing', 
    desc: 'Sublimation',
    image: assets.mug
  },
  { 
    title: 'Tote Bag Printing', 
    desc: '',
    image: assets.totebag
  },
  {
    title: ' Customized Invitations', 
    desc: 'Weddings, Debuts, Parties',
    image: assets.invitation
  }
 
];


const addons = [
  { 
    title: 'Rush Printing Services', 
    desc: '',
    image: assets.rush
  },
  { 
    title: 'Design Services', 
    desc: 'Logo, Layout, Business Branding',
    image: assets.photoshop
  },
  { 
    title: 'Delivery / Pick-up Options', 
    desc: '',
    image: assets.delivery
  }
 
];

const Services = () => (
  <section id="services" className="py-32 bg-white relative overflow-hidden">
    {/* Background Elements */}
    <motion.div
      className="absolute top-20 right-10 w-32 h-32 border border-gray-200 opacity-20"
      animate={{
        rotate: [0, -10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute bottom-20 left-10 w-24 h-24 border border-gray-200 opacity-15"
      animate={{
        rotate: [0, 10, 0],
        scale: [1, 0.9, 1]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    <div className="max-w-7xl mx-auto px-6">
      {/* Header Section */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-block px-4 py-2 bg-black/5 text-black text-sm font-medium rounded-full border border-black/10 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.div>
        
        <motion.h2
          className="text-6xl lg:text-7xl font-extralight text-black mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Our <span className="font-bold text-black">Services</span>
        </motion.h2>
        
        <motion.div
          className="w-24 h-1 bg-black mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
        
        <motion.p
          className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          From business cards to large format printing, we deliver exceptional quality and creative solutions for all your printing needs.
        </motion.p>
      </motion.div>

      {/* Essential Printing Services */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-black mb-8 text-center">Essential Printing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essentialPrintingServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-black/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image Section */}
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Floating element */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-black mb-3 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
                
                {/* Learn More Link */}
                <motion.div
                  className="mt-4 flex items-center text-black font-medium text-sm group-hover:gap-2 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Marketing Services Grid */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-black mb-8 text-center">Marketing and Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-black/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image Section */}
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Floating element */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-black mb-3 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
                
                {/* Learn More Link */}
                <motion.div
                  className="mt-4 flex items-center text-black font-medium text-sm group-hover:gap-2 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

       {/* Personalized or Specialty Products Grid */}
       <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-black mb-8 text-center">Personalized or Specialty Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalizedServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-black/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image Section */}
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Floating element */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-black mb-3 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
                
                {/* Learn More Link */}
                <motion.div
                  className="mt-4 flex items-center text-black font-medium text-sm group-hover:gap-2 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* addons Grid */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-black mb-8 text-center">Optional Add-Ons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addons.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-black/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image Section */}
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Floating element */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-black mb-3 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
                
                {/* Learn More Link */}
                <motion.div
                  className="mt-4 flex items-center text-black font-medium text-sm group-hover:gap-2 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="#contact"
          className="inline-block px-12 py-4 bg-black text-white font-semibold text-lg rounded-none shadow-2xl border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Get a Quote
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Services;
