// components/Stats/Stats.jsx
'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGamepad, FaClock, FaCoffee } from "react-icons/fa";

// Custom hook for count-up animation
const useCountUp = (end, duration, startCounting) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, startCounting]);

  return count;
};

const stats = [
  {
    icon: <FaLaptopCode />,
    number: 12,
    suffix: "+",
    label: "Projects Completed",
    description: "Websites & apps built from scratch",
    color: "#4ade80",
  },
  {
    icon: <FaGamepad />,
    number: 5,
    suffix: "+",
    label: "Games Created",
    description: "Fun, interactive, and challenging",
    color: "#38bdf8",
  },
  {
    icon: <FaClock />,
    number: 3,
    suffix: "+",
    label: "Years of Coding",
    description: "Since starting my CS studies",
    color: "#facc15",
  },
  {
    icon: <FaCoffee />,
    number: 1000,
    suffix: "+",
    label: "Cups of Tea",
    description: "Keeping the code flowing",
    color: "#f97316",
  },
];

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          My <span className="text-green-400">Highlights</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => {
            const [startCounting, setStartCounting] = useState(false);
            const count = useCountUp(stat.number, 1500, startCounting);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStartCounting(true)}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
                style={{
                  boxShadow: `0 4px 20px ${stat.color}55`,
                }}
              >
                <div className="text-5xl mb-4" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {count}
                  {stat.suffix}
                </h3>
                <p className="text-green-400 font-semibold mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;