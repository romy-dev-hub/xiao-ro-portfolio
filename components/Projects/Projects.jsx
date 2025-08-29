// components/Projects/Projects.jsx
'use client';
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: "Shadow Escape",
    description: "A spooky Java maze game with vibrant paths. Navigate and escape!",
    tech: ["Java", "Swing"],
    link: "https://github.com/romy-dev-hub/shadow-escape-game",
    image: "/shadow-escape.png",
    featured: true,
    category: "game"
  },
  {
    title: "Pixelspark",
    description: "A clean food website with a focus on UI/UX and modern design principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/romy-dev-hub/food-website",
    image: "/pixelspark.png",
    featured: true,
    category: "web",
    demo: "#"
  },
  {
    title: "Assembly Calculator",
    description: "A simple calculator supporting decimal, binary, and hexadecimal operations.",
    tech: ["Assembly"],
    link: "https://github.com/romy-dev-hub/assembly-calculator",
    image: "/calculator.png",
    category: "tool"
  },
  {
    title: "Catch My Apples",
    description: "A fun game where players catch falling apples with a basket.",
    tech: ["Python", "Pygame"],
    link: "https://github.com/romy-dev-hub/catch-my-apples-game",
    image: "/catch-my-apples.png",
    category: "game"
  },
  {
    title: "2048 Game",
    description: "A low-level C implementation of the classic 2048 puzzle game.",
    tech: ["C"],
    link: "https://github.com/romy-dev-hub/2048-",
    image: "/2048.jpg",
    category: "game"
  },
  {
    title: "Library Management System",
    description: "A Swing app with Oracle SQL for managing books, students, and loans.",
    tech: ["Java", "Swing", "Oracle SQL"],
    link: "https://github.com/romy-dev-hub/lib-project-",
    image: "/library.png",
    category: "web"
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event) {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPos = mouseX - width / 2;
    const yPos = mouseY - height / 2;
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseEnd() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative h-80 w-full rounded-2xl overflow-hidden cursor-pointer"
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseEnd}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <div className="mb-2">
          {project.featured && (
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500 rounded-full mb-2">
              Featured
            </span>
          )}
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-800 rounded-full ml-2">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-gray-800/80 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex gap-3"
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium"
              >
                <FaGithub className="text-lg" />
                Code
              </motion.a>
              
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 px-4 py-2 bg-green-500 rounded-lg text-sm font-medium"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-400/10 to-purple-500/10 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'web', 'game', 'tool'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-4"
        >
          My <span className="text-green-400">Creative Portfolio</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          A collection of projects that showcase my skills in web development, game design, and problem-solving.
        </motion.p>
        
        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter 
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/romy-dev-hub"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors"
          >
            <FaGithub className="text-xl" />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;