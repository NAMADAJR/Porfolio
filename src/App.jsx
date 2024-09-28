import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Preloader from "./assets/Preloader/Preloader";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();  // Get the current location to enable animations between routes

  return (
    <>
      <Preloader />

      <AnimatePresence mode="wait">  {/* Use mode="wait" instead of exitBeforeEnter */}
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

