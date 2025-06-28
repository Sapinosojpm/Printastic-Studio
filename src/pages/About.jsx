import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every print is crafted with precision and attention to detail.",
      icon: "✨"
    },
    {
      title: "Innovation",
      description: "Using cutting-edge technology to deliver exceptional results that exceed expectations.",
      icon: "🚀"
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
      icon: "💎"
    }
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-gray-200 opacity-20"
        animate={{
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border border-gray-200 opacity-15"
        animate={{
          rotate: [0, -10, 0],
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
        
          <motion.h2
            className="text-6xl lg:text-7xl font-extralight text-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About{' '}
            <span className="font-bold text-black">Printastic</span>
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
            We're a passionate team of designers and print specialists dedicated to transforming your ideas into stunning, high-quality prints that make a lasting impression.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={assets.laptop} 
                alt="Printastic Studio Workspace" 
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 border border-black/20 rounded-full"
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
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-8 h-8 border border-black/15 rounded-full"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Crafting Excellence in Every Print
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Printastic Studio, we believe that every print tells a story. Whether it's a business card that makes a first impression, a banner that captures attention, or custom merchandise that builds brand loyalty, we're here to bring your vision to life with precision and creativity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines years of industry experience with cutting-edge technology to deliver results that not only meet but exceed your expectations. We're not just printers – we're your creative partners in success.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-black/5 p-8 rounded-2xl border border-black/10">
              <h4 className="text-xl font-bold text-black mb-4">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses and individuals with exceptional printing solutions that elevate their brand, connect with their audience, and drive meaningful results through innovative design and uncompromising quality.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl lg:text-5xl font-extralight text-black mb-16">
            Our Core <span className="font-bold">Values</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-8 bg-white border border-gray-200 rounded-2xl hover:border-black/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
        
              <h4 className="text-xl font-bold text-black mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
