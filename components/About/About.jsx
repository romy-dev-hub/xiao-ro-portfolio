// components/About/About.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-green-500 rounded-lg transform rotate-3 z-0"></div>
              <Image 
                src="/about-me.jpg" 
                alt="About me"
                width={400}
                height={500}
                className="rounded-xl w-full h-96 object-cover border-2 border-gray-700 relative z-10"
              />
            </div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-green-400 mb-6">About Me</h2>
            <p className="text-lg mb-4">
              I'm a second-year Computer Science student at USTHB with a strong focus on web development and game design. I specialize in front-end development using HTML, CSS, JavaScript, and I'm currently advancing my skills in React.
            </p>
            <p className="text-lg mb-4">
              I've developed multiple projects including an interactive Java-based maze game, an Assembly calculator, and a modern, responsive food website. My approach combines clean UI/UX design, performance optimization, and responsive layouts that adapt across devices.
            </p>
            <p className="text-lg mb-6">
              Beyond technical projects, I'm also the creator of Legacy Podcast (coming soon ^^) a platform dedicated to sharing stories that inspire growth and creativity. My goal is to grow into a full-stack developer capable of delivering complete, high-impact web solutions from concept to deployment.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-medium shadow-lg shadow-green-500/20"
            >
              <a href="#" download>Download Resume</a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;