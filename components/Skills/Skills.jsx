// components/Skills/Skills.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaCode, 
  FaDatabase, FaGitAlt, FaReact, FaWind 
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiThreedotjs } from 'react-icons/si';

const skills = [
  // Frontend
  { category: 'Frontend', icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
  { category: 'Frontend', icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
  { category: 'Frontend', icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
  { category: 'Frontend', icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
  { category: 'Frontend', icon: <FaReact />, name: 'React', color: '#61DAFB' },
  { category: 'Frontend', icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
  { category: 'Frontend', icon: <SiThreedotjs />, name: 'Three.js', color: '#000000' },
  { category: 'Frontend', icon: <FaWind />, name: 'Tailwind CSS', color: '#38B2AC' },

  // Programming Languages
  { category: 'Programming Languages', icon: <FaJava />, name: 'Java', color: '#007396' },
  { category: 'Programming Languages', icon: <FaPython />, name: 'Python', color: '#3776AB' },
  { category: 'Programming Languages', icon: <FaCode />, name: 'C', color: '#A8B9CC' },
  { category: 'Programming Languages', icon: <FaCode />, name: 'Lua', color: '#000080' },
  { category: 'Programming Languages', icon: <FaCode />, name: 'Assembly', color: '#6E4C13' },

  // Backend & Databases
  { category: 'Backend & Databases', icon: <FaDatabase />, name: 'Oracle SQL', color: '#F80000' },

  // Tools
  { category: 'Tools', icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
];

const Skills = () => {
  const categories = ['Frontend', 'Programming Languages', 'Backend & Databases', 'Tools'];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
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
          className="text-3xl font-bold text-center mb-16"
        >
          My <span className="text-green-400">Skills</span>
        </motion.h2>

        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-8 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: `0 0 25px ${skill.color}`,
                      rotate: [0, -5, 0, 5, 0]
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center bg-gray-800 rounded-xl p-5 transition-all w-full h-full skill-card"
                    style={{
                      boxShadow: `0 4px 15px ${skill.color}55`
                    }}
                  >
                    <div 
                      style={{ color: skill.color }}
                      className="text-4xl mb-3 skill-icon"
                    >
                      {skill.icon}
                    </div>
                    <p className="text-white text-center text-sm font-medium">{skill.name}</p>
                    
                    {/* Skill level indicator (optional) */}
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
                      <div 
                        className="h-1 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${Math.floor(Math.random() * 30) + 70}%`, 
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
        
        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-green-400 mb-4">Always Learning</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm continuously expanding my skill set and staying up-to-date with the latest technologies 
            and best practices in web development and game design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;