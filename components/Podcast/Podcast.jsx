// components/Podcast/Podcast.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Podcast = () => {
  return (
    <section id="podcast" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Legacy <span className="text-green-400">Podcast</span>
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Coming soon! A podcast where I share stories that inspire and echo with meaning. 
            Join me on a journey of growth, creativity, and the legacy we build every day.
          </p>
          
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg shadow-lg shadow-green-500/30"
            >
              Notify Me When It's Live
            </motion.button>
          </div>
          
          <motion.div 
            className="mt-12 mx-auto max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-end gap-1 h-16">
                  {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-green-400 rounded"
                    animate={{
                      height: ["20%", "100%", "30%"],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>

              </div>
              <h3 className="text-xl font-semibold mb-2">Trailer Coming Soon</h3>
              <p className="text-gray-400">
                Stay tuned for the trailer release. Subscribe to get notified!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Podcast;