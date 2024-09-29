import React from "react";
import Header from "./Header";
import Typewriter from "./Typewriter";
import { motion } from 'framer-motion';

const Home = () => {
  const words = ["Developer", "Designer"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 170 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -170 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div className="profile">
        <img
          src="https://ik.imagekit.io/po14ul1dat/Nam.jpeg?updatedAt=1727546862103"
          alt="profile"
        />
        <h1>I am Namada Junior</h1>
        <div className="txt-type">
          <span>
            I'm a <Typewriter words={words} />.
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;


