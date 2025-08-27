// components/Projects/Projects.jsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Shadow Escape",
    description: "A spooky Java maze game with vibrant paths. Navigate and escape!",
    tech: "Java, Swing",
    link: "https://github.com/romy-dev-hub/shadow-escape-game",
    image: "/shadow-escape.png",
    featured: true
  },
  {
    title: "Pixelspark",
    description: "A clean food website with a focus on UI/UX.",
    tech: "HTML, CSS, JavaScript",
    link: "https://github.com/romy-dev-hub/food-website",
    image: "/pixelspark.png",
    featured: true
  },
  {
    title: "Calculator",
    description: "A simple calculator supporting decimal, binary, and hexadecimal operations.",
    tech: "Assembly",
    link: "https://github.com/romy-dev-hub/assembly-calculator",
    image: "/calculator.png"
  },
  {
    title: "Catch My Apples",
    description: "A fun game where players catch falling apples with a basket.",
    tech: "Python",
    link: "https://github.com/romy-dev-hub/catch-my-apples-game",
    image: "/catch-my-apples.png"
  },
  {
    title: "2048",
    description: "A low-level C implementation of the classic 2048 puzzle game.",
    tech: "C",
    link: "https://github.com/romy-dev-hub/2048-",
    image: "/2048.jpg"
  },
  {
    title: "Library Management System",
    description: "A Swing app with Oracle SQL for managing books, students, and loans.",
    tech: "Swing, Oracle SQL",
    link: "https://github.com/romy-dev-hub/lib-project-",
    image: "/library.png"
  },
  // Add your newer projects from GitHub here
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tech.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          My <span className="text-green-400">Projects</span>
        </motion.h2>
        
        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {['All', 'Web', 'Game', 'Java', 'Python', 'C', 'Assembly'].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech.toLowerCase())}
              className={`px-4 py-2 rounded-full transition ${
                filter === tech.toLowerCase() 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 8px 30px rgba(34, 197, 94, 0.4)" 
              }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all relative group"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  Featured
                </div>
              )}
              
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-4"><strong>Tech:</strong> {project.tech}</p>
                
                <div className="flex gap-3">
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-medium"
                  >
                    View Project
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;