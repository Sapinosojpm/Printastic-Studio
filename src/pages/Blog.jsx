import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  { title: 'How to Choose the Right Paper', excerpt: 'Tips for selecting the best paper for your print project.', img: 'https://source.unsplash.com/400x300/?paper,print' },
  { title: 'Design Trends 2024', excerpt: 'Stay ahead with the latest design trends in print.', img: 'https://source.unsplash.com/400x300/?design,trends' },
  { title: 'Eco-Friendly Printing', excerpt: 'Learn about sustainable printing practices.', img: 'https://source.unsplash.com/400x300/?eco,print' },
];

const Blog = () => (
  <section id="blog" className="py-24 bg-white px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 tracking-tight">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
          >
            <img src={post.img} alt={post.title} className="w-full h-44 object-cover rounded-xl mb-6" />
            <h3 className="font-bold text-xl text-blue-900 mb-3">{post.title}</h3>
            <p className="text-yellow-700 text-base">{post.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog; 