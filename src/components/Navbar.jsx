import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  const navigation = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "Pricing", id: "pricing" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Blog", id: "blog" },
    { name: "Shop", id: "shop" },
    { name: "Contact", id: "contact" },
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigation[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Printastic
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navigation.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.id}`}
              className={`relative px-4 py-2 font-medium text-sm rounded-lg transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-yellow-600 bg-yellow-50' 
                  : 'text-blue-900 hover:text-yellow-600 hover:bg-blue-50'
              }`}
              onClick={() => handleNavClick(item.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Active indicator line */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                  layoutId="activeIndicator"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Hover effect background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsOpen(true)} 
            className="text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bars3Icon className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-yellow-50">
              <motion.div 
                className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Menu
              </motion.div>
              <motion.button 
                onClick={() => setIsOpen(false)} 
                className="text-blue-900 p-2 rounded-lg hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <XMarkIcon className="w-6 h-6" />
              </motion.button>
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="p-6 space-y-2 overflow-y-auto">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  className={`group relative flex items-center px-4 py-3 font-medium text-lg rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-yellow-600 bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-sm' 
                      : 'text-blue-900 hover:text-yellow-600 hover:bg-blue-50'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-r-full"
                      layoutId="mobileActiveIndicator"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover arrow */}
                  <motion.span 
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: activeSection === item.id ? 0 : -10 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>
            
            {/* Gradient decoration */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-100 via-yellow-50 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;