import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50 py-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-30"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-300 opacity-25"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        
        {/* Text Content */}
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-yellow-500 leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Empower Your Business with{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 relative inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Modern Solutions
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-800 font-medium leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We build scalable web applications that help you grow{' '}
            <motion.span 
              className="text-yellow-600 font-bold"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(251, 191, 36, 0)",
                  "0 0 10px rgba(251, 191, 36, 0.5)",
                  "0 0 0px rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              faster, smarter, and better.
            </motion.span>
          </motion.p>
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-block px-10 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold text-lg rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(30, 58, 138, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="relative z-10 group-hover:text-blue-900 transition-colors duration-300"
                animate={{ 
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀 Get Started Now
              </motion.span>
              
              <motion.div
                className="absolute inset-0 border-2 border-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100"
                animate={{ 
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={assets.banner}
              alt="Digital Print Banner"
              className="rounded-3xl shadow-2xl w-full"
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Glowing border effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400 rounded-3xl opacity-30 blur-sm"
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Floating particles */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-400 rounded-full"
              animate={{ 
                x: [0, 20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>

      </div>
      
      {/* Animated waves at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100 to-transparent"
        animate={{ 
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;