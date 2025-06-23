import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Alice Johnson', role: 'CEO', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Bob Smith', role: 'Lead Designer', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Carol Lee', role: 'Print Specialist', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'David Kim', role: 'Customer Support', img: 'https://randomuser.me/api/portraits/men/76.jpg' },
];

const Team = () => (
  <section id="team" className="py-24 bg-white px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 tracking-tight">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
          >
            <img src={member.img} alt={member.name} className="w-28 h-28 rounded-full mb-6 object-cover" />
            <h3 className="font-bold text-xl text-blue-900 mb-2">{member.name}</h3>
            <p className="text-yellow-700 text-base">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team; 