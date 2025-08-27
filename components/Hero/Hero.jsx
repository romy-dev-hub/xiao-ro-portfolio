// components/Hero/Hero.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeJSBackground from '../ThreeJSBackground';

const Hero = () => {
  const [greeting, setGreeting] = useState('');
  const fullGreeting = "Greetings, I'm Romy aka";
  const name = "Xiao Ro";
  const subtitle = "A Front-End Web Developer & Games Creator";

  useEffect(() => {
    let i = 0;
    const typeGreeting = () => {
      if (i < fullGreeting.length) {
        setGreeting(fullGreeting.substring(0, i + 1));
        i++;
        setTimeout(typeGreeting, 100);
      }
    };
    
    setTimeout(typeGreeting, 500);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ThreeJSBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-black/70 z-0"></div>
      
      <div className="text-center z-10 px-4 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {greeting}
          <span className="text-green-400"> {name}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="subtitle text-xl md:text-2xl italic mt-4"
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12"
        >
          <a 
            href="#projects" 
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-green-500/20"
          >
            View My Work
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="text-white text-4xl">
          ↓
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;