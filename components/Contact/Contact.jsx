// components/Contact/Contact.jsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
      formData
    )
    .then(() => {
      toast.success('Message sent! Thank you for reaching out', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error('Oops! Something went wrong.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Get In <span className="text-green-400">Touch</span>
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-lg">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none transition"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-lg">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none transition"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-lg">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none transition"
                placeholder="What would you like to say?"
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 bg-green-500 text-white rounded-lg font-bold text-lg mt-4 transition ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-600'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;