import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 170 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -170 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <h1>Contact Page</h1>
    </motion.div>
  );
};

export default Contact;
