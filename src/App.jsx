import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Scenery from "./components/Scenery";
import Preloader from "./assets/Preloader/Preloader";

function App() {
  const cursorOuterRef = useRef(null); // Big white circle
  const cursorInnerRef = useRef(null); // Small black circle
  const [isTranslucent, setIsTranslucent] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      // Move the small black circle instantly
      cursorInnerRef.current.style.transform = `translate(${x - 7.5}px, ${
        y - 7.5
      }px)`;

      // Move the large white circle with a delay for the "follow" effect
      cursorOuterRef.current.style.transform = `translate(${x - 20}px, ${
        y - 20
      }px)`;

      // Check if the mouse is over a specific area
      const backgroundElement = document.getElementById(
        "some-background-element"
      );
      const isOverElement =
        backgroundElement && backgroundElement.contains(e.target);
      setIsTranslucent(isOverElement);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <Preloader />
      {/* Custom Cursor Elements */}
      <div
        className="custom-cursor-outer"
        ref={cursorOuterRef}
        style={{ opacity: isTranslucent ? 0.5 : 1 }}
      ></div>
      <div className="custom-cursor-inner" ref={cursorInnerRef}></div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scenery" element={<Scenery />} />
      </Routes>
    </>
  );
}

export default App;
