import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '$49',
    features: ['100 prints', 'Standard paper', '3-day delivery'],
  },
  {
    name: 'Standard',
    price: '$99',
    features: ['500 prints', 'Premium paper', '2-day delivery', 'Design support'],
  },
  {
    name: 'Premium',
    price: '$199',
    features: ['2000 prints', 'Ultra paper', 'Next-day delivery', 'Priority support', 'Custom design'],
  },
];

const Pricing = () => (
  <section id="pricing" className="py-24 bg-white px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 tracking-tight">Our Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
          >
            <h3 className="text-2xl font-bold text-yellow-700 mb-3">{plan.name}</h3>
            <div className="text-4xl font-extrabold text-blue-900 mb-6">{plan.price}</div>
            <ul className="mb-8 text-blue-900 text-base">
              {plan.features.map((f, i) => (
                <li key={i} className="mb-1">• {f}</li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="px-8 py-3 bg-blue-900 text-yellow-50 rounded-xl font-bold hover:bg-yellow-400 hover:text-blue-900 transition text-lg shadow-md"
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing; 