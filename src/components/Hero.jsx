import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => (
  <section id="hero" img={assets.mugBanner} className="bg-black py-24 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-20 relative z-10">
      {/* Text Content */}
      <motion.div
        className="text-center lg:text-left max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20">
            Premium Print Services
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl lg:text-8xl font-extralight text-white leading-tight mb-8 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
         Your Vision,{' '}
          <motion.span
            className="font-bold text-white relative inline-block"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            In Every Print.
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }} />
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed mb-12 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Transform your ideas into stunning prints on shirts, mugs, and more.{' '}
          <span className="text-white font-medium">
            Crafted with precision, delivered with excellence.
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="#contact"
            className="group relative inline-block px-12 py-4 bg-white text-black font-semibold text-lg rounded-none shadow-2xl overflow-hidden border-2 border-white"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }} />
            <motion.span
              className="relative z-10 group-hover:text-white transition-colors duration-300"
            >
              Get Started Now
            </motion.span>
          </motion.a>

          {/* <motion.a
            href="#portfolio"
            className="group relative inline-block px-12 py-4 bg-transparent text-white font-semibold text-lg rounded-none border-2 border-white/30 hover:border-white transition-all duration-300"
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View Portfolio
          </motion.a> */}
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>100% Satisfaction</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 relative"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={assets.mug}
            alt="Digital Print Banner"
            className="rounded-2xl shadow-2xl w-full"
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }} />

          {/* Enhanced border effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl opacity-0 hover:opacity-100"
            transition={{ duration: 0.3 }} />

          {/* Floating elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 border border-white/30 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} />

          <motion.div
            className="absolute -bottom-8 -left-8 w-8 h-8 border border-white/20 rounded-full"
            animate={{
              rotate: [0, -360],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }} />
        </motion.div>
      </motion.div>
    </div>

    {/* Enhanced background elements */}
    <motion.div
      className="absolute top-32 left-16 w-40 h-40 border border-white/10 opacity-30"
      animate={{
        rotate: [0, 10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

    <motion.div
      className="absolute bottom-32 right-16 w-32 h-32 border border-white/10 opacity-20"
      animate={{
        rotate: [0, -10, 0],
        scale: [1, 0.9, 1]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 opacity-20"
      animate={{
        rotate: [0, 5, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
  </section>
);

export default Hero;