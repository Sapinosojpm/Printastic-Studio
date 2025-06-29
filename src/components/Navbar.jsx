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
    // { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    // { name: "Portfolio", id: "portfolio" },
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
      className="bg-black shadow-lg sticky top-0 z-50 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          className="text-2xl font-light text-white tracking-tight cursor-pointer"
          whileHover={{ scale: 1.02 }}
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
              className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-md ${
                activeSection === item.id 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => handleNavClick(item.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -1 }}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Active indicator line */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                  layoutId="activeIndicator"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsOpen(true)} 
            className="text-white p-2 hover:bg-white hover:text-black transition-colors rounded-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bars3Icon className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/80 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-black z-50 shadow-2xl md:hidden border-l border-gray-800"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Sidebar Header and Links */}
              <div className="relative">
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <motion.div 
                    className="text-xl font-light text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Menu
                  </motion.div>
                  <motion.button 
                    onClick={() => setIsOpen(false)} 
                    className="text-white p-2 hover:bg-white hover:text-black transition-colors rounded-md"
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Sidebar Links */}
                <div className="p-6 space-y-2 overflow-y-auto">
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={`#${item.id}`}
                      className={`group relative flex items-center px-4 py-3 font-medium text-lg transition-all duration-300 rounded-md ${
                        activeSection === item.id 
                          ? 'bg-white text-black' 
                          : 'text-white hover:bg-white hover:text-black'
                      }`}
                      onClick={() => handleNavClick(item.id)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 8 }}
                    >
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-black"
                          layoutId="mobileActiveIndicator"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                      <motion.span 
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-black"
                        animate={{ x: activeSection === item.id ? 0 : -10 }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;