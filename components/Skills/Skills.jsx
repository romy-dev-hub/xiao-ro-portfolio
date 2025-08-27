// components/Skills/Skills.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaCode, FaDatabase, FaGitAlt, FaReact, FaWind } from 'react-icons/fa';

const skills = [
  // Frontend
  { category: 'Frontend', icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
  { category: 'Frontend', icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
  { category: 'Frontend', icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
  { category: 'Frontend', icon: <FaReact />, name: 'React', color: '#61DAFB' },
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
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
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
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-6">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, boxShadow: `0 0 25px ${skill.color}` }}
                    className="flex flex-col items-center bg-gray-800 rounded-lg p-4 transition-shadow w-48 h-auto"
                    style={{
                      boxShadow: `0 4px 15px ${skill.color}55` // subtle glow
                    }}
                  >
                    <div 
                      style={{ color: skill.color }}
                      className="text-5xl mb-2"
                    >
                      {skill.icon}
                    </div>
                    <p className="text-white">{skill.name}</p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;