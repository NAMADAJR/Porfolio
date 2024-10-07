import React, { useState, useEffect } from "react";
import Header from "./Header";
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';  

const About = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 450);
  };

  useEffect(() => {
    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const items = [
    { id: 1, title: "Item 1", subtitle: "Subtitle 1", content: "This is additional content for item 1." },
    { id: 2, title: "Item 2", subtitle: "Subtitle 2", content: "This is additional content for item 2." },
    { id: 3, title: "Item 3", subtitle: "Subtitle 3", content: "This is additional content for item 3." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 170 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -170 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      <div className="about-container">
        {items.map(item => (
          <motion.div 
            key={item.id} 
            layoutId={item.id} 
            onClick={() => setSelectedId(selectedId === item.id ? null : item.id)} // Toggle selection
            className={`about-item ${selectedId === item.id ? 'selected' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5>

            {isMobileView && (
              <motion.div className="about-details">
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.p>{item.content}</motion.p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {!isMobileView && selectedId && (
          <motion.div
            layoutId={selectedId}
            className="about-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h5>{items.find(item => item.id === selectedId).subtitle}</motion.h5>
            <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
            <motion.p>{items.find(item => item.id === selectedId).content}</motion.p>
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
