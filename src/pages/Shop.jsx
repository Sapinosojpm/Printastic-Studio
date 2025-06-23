import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { title: 'Business Card Pack', price: '$19', img: 'https://source.unsplash.com/400x300/?businesscard,print' },
  { title: 'Custom T-Shirt', price: '$25', img: 'https://source.unsplash.com/400x300/?tshirt,print' },
  { title: 'Poster Print', price: '$15', img: 'https://source.unsplash.com/400x300/?poster,print' },
  { title: 'Photo Print', price: '$10', img: 'https://source.unsplash.com/400x300/?photo,print' },
];

const Shop = () => (
  <section id="shop" className="py-24 bg-white px-4 md:px-0">
    <div className="max-w-7xl mx-auto rounded-3xl  bg-white/90 p-8 md:p-16 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">Shop</h2>
      <div className="w-20 h-2 bg-yellow-400 rounded-full mb-12 mx-auto"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
          >
            <img src={product.img} alt={product.title} className="w-full h-40 object-cover rounded-xl mb-6" />
            <h3 className="font-bold text-xl text-blue-900 mb-2">{product.title}</h3>
            <div className="text-yellow-700 font-extrabold text-lg mb-2">{product.price}</div>
            <p className="text-gray-600 text-sm italic mb-2">Premium quality, fast delivery!</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Shop; 