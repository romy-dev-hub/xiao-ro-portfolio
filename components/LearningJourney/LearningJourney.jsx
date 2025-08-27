// components/LearningJourney/LearningJourney.jsx
'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaLayerGroup, FaGamepad, FaBrain, FaRocket } from "react-icons/fa";

const journey = [
  {
    icon: <FaReact />,
    title: "Mastering React",
    description: "Currently deepening my knowledge in React to build modern, dynamic web apps.",
    period: "Now"
  },
  {
    icon: <FaLayerGroup />,
    title: "Learning Next.js",
    description: "Exploring Next.js for server-side rendering, better SEO, and advanced React capabilities.",
    period: "Next"
  },
  {
    icon: <FaGamepad />,
    title: "Unity & Blender Game Development",
    description: "Creating a 3D game using Unity for logic and Blender for 3D modeling.",
    period: "Then"
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning Fundamentals",
    description: "Studying ML basics with Python, scikit-learn, and core math concepts.",
    period: "After"
  },
  {
    icon: <FaRocket />,
    title: "AI-Powered Projects",
    description: "Building real-world AI apps, integrating computer vision and natural language processing.",
    period: "Goal"
  }
];

const LearningJourney = () => {
  return (
    <section id="learning-journey" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          My <span className="text-green-400">Learning Journey</span>
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 w-1 bg-green-500/50 h-full"></div>

          {journey.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 flex items-start"
            >
              {/* Dot with icon */}
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800 border-4 border-green-400 rounded-full text-green-400 text-2xl shadow-lg">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="ml-8 bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-green-500/30 transition w-full">
                <span className="text-green-400 text-sm font-bold">{step.period}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;