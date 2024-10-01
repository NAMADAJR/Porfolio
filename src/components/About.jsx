import React, { useState } from "react";
import Header from "./Header";
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';  

const About = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Sample items for testing
  const items = [
    { id: 1, title: "Item 1", subtitle: "Subtitle 1" },
    { id: 2, title: "Item 2", subtitle: "Subtitle 2" },
    { id: 3, title: "Item 3", subtitle: "Subtitle 3" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 170 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -170 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <h1>About Page</h1>

      <div className="about-container">
        {items.map(item => (
          <motion.div 
            key={item.id} 
            layoutId={item.id} 
            onClick={() => setSelectedId(item.id)}
            className={`about-item ${selectedId === item.id ? 'selected' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className="about-details">
            <motion.h5>{items.find(item => item.id === selectedId).subtitle}</motion.h5>
            <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
            <motion.button 
              onClick={() => setSelectedId(null)}
              className="about-button"
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default About;
