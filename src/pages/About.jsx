import React from 'react';
import { assets } from '../assets/assets';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1740724302842.json';

const About = () => (
  <section id="about" className="py-28 bg-white px-4 md:px-0">
    <div className="max-w-7xl mx-auto rounded-3xl bg-white p-8 md:p-20 flex flex-col md:flex-row items-center md:items-start gap-16">
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: '100%', maxWidth: 440, height: 'auto' }}
          alt="About Animation"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight leading-tight">About Us</h2>
        <div className="w-24 h-1.5 bg-yellow-400 rounded-full mb-10 mx-auto md:mx-0"></div>
        <p className="text-xl text-blue-900 mb-6 leading-relaxed font-medium">
          Printing Shop is a modern print company dedicated to delivering high-quality printing solutions for businesses and individuals. With years of experience and a passion for design, we help you bring your ideas to life.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="font-semibold text-yellow-700">Our Mission:</span> To empower our clients with creative, reliable, and affordable printing services, using the latest technology and a customer-first approach.
        </p>
      </div>
    </div>
  </section>
);

export default About;
