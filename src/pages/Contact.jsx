import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '1fa9e51e-6243-4b89-a9ab-11a4d0f09dba', // Your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white px-4 md:px-0">
      <div className="max-w-5xl mx-auto rounded-3xl shadow-xl bg-white/90 p-8 md:p-16 flex flex-col md:flex-row items-start gap-12">
        {/* Left: Contact Info & Socials */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-6">
          <motion.h2
            className="text-6xl lg:text-7xl font-extralight text-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Contact <span className="font-bold text-black">Us</span>
          </motion.h2>
          <div className="w-20 h-2 bg-black rounded-full mb-6 mx-auto md:mx-0"></div>
          <p className="text-lg text-gray-900 mb-2">Have a question or want to start a project? Reach out to us!</p>
          <div className="text-gray-900 mb-4 space-y-2">
            <div>Email: <a href="mailto:printasticstudio26@gmail.com" className="text-gray-500 hover:underline">printasticstudio26@gmail.com</a></div>
            <div>Phone: <a href="tel:" className="text-gray-500 hover:underline">+639634508531</a></div>
            {/* <div>Address: 123 Print Ave, City, Country</div> */}
          </div>
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <a href="https://www.facebook.com/profile.php?id=61577627095160" className="text-gray-900 hover:text-gray-500 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-900 hover:text-gray-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-900 hover:text-gray-500 text-2xl"><FaTwitter /></a>
          </div>
        </div>
        
        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-2xl shadow-md p-8">
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Sorry, there was an error sending your message. Please try again.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                disabled={isSubmitting}
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                disabled={isSubmitting}
              />
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                disabled={isSubmitting}
              />
              
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                disabled={isSubmitting}
              ></textarea>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-black text-white hover:bg-white hover:text-black border border-black'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
