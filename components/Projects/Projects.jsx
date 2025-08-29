// components/Projects/Projects.jsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode, FaFilter } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Shadow Escape",
    description: "A spooky Java maze game with vibrant paths. Navigate and escape!",
    tech: ["Java", "Swing"],
    link: "https://github.com/romy-dev-hub/shadow-escape-game",
    image: "/shadow-escape.png",
    featured: true,
    category: "game",
    accentColor: "#E34F26"
  },
  {
    id: 2,
    title: "Pixelspark",
    description: "A clean food website with a focus on UI/UX and modern design principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/romy-dev-hub/food-website",
    image: "/pixelspark.png",
    featured: true,
    category: "web",
    demo: "#",
    accentColor: "#1572B6"
  },
  {
    id: 3,
    title: "Assembly Calculator",
    description: "A simple calculator supporting decimal, binary, and hexadecimal operations.",
    tech: ["Assembly"],
    link: "https://github.com/romy-dev-hub/assembly-calculator",
    image: "/calculator.png",
    category: "tool",
    accentColor: "#6E4C13"
  },
  {
    id: 4,
    title: "Catch My Apples",
    description: "A fun game where players catch falling apples with a basket.",
    tech: ["Python", "Pygame"],
    link: "https://github.com/romy-dev-hub/catch-my-apples-game",
    image: "/catch-my-apples.png",
    category: "game",
    accentColor: "#3776AB"
  },
  {
    id: 5,
    title: "2048 Game",
    description: "A low-level C implementation of the classic 2048 puzzle game.",
    tech: ["C"],
    link: "https://github.com/romy-dev-hub/2048-",
    image: "/2048.jpg",
    category: "game",
    accentColor: "#A8B9CC"
  },
  {
    id: 6,
    title: "Library Management System",
    description: "A Swing app with Oracle SQL for managing books, students, and loans.",
    tech: ["Java", "Swing", "Oracle SQL"],
    link: "https://github.com/romy-dev-hub/lib-project-",
    image: "/library.png",
    category: "web",
    accentColor: "#F80000"
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

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
      className="relative h-96 w-full rounded-2xl overflow-hidden cursor-pointer project-card"
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        handleMouseEnd();
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0,
        transition: { delay: index * 0.1, duration: 0.5 }
      } : {}}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        
        {/* Animated accent gradient */}
        <motion.div 
          className="absolute inset-0 opacity-0"
          animate={{ 
            opacity: isHovered ? 0.3 : 0,
            background: `linear-gradient(45deg, transparent 0%, ${project.accentColor}33 50%, transparent 100%)`
          }}
          transition={{ duration: 0.5 }}
        />
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
        
        <motion.h3 
          className="text-xl font-bold mb-2"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-sm text-gray-300 mb-4"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <motion.span 
              key={i} 
              className="px-2 py-1 text-xs bg-gray-800/80 rounded-md"
              whileHover={{ scale: 1.05, backgroundColor: project.accentColor }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
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
                whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${project.accentColor}` }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium"
                style={{ border: `1px solid ${project.accentColor}` }}
              >
                <FaGithub className="text-lg" />
                Code
              </motion.a>
              
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: project.accentColor }}
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filters = ['all', 'web', 'game', 'tool'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          My <span className="text-green-400">Creative Portfolio</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
        >
          A collection of projects that showcase my skills in web development, game design, and problem-solving.
        </motion.p>
        
        {/* Filter buttons */}
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-6 py-2 bg-gray-800 rounded-full mb-4 md:hidden"
          >
            <FaFilter />
            Filter Projects
          </button>
          
          <div className={`flex flex-wrap justify-center gap-4 ${isFilterOpen ? 'flex' : 'hidden'} md:flex`}>
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setIsFilterOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter 
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter</p>
          </motion.div>
        )}

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
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors border border-green-500/30"
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