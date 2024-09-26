import React, { useState, useEffect } from "react";
import Header from "./Header";

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(200); // Typing speed
  const words = ["Developer", "Designer"];
  
  useEffect(() => {
    const currentWord = words[index % words.length];
    const typingSpeed = 150;
    const erasingSpeed = 100;
    
    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, erasingSpeed);
      } else {
        setIsDeleting(false);
        setIndex(index + 1);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }
  }, [charIndex, isDeleting, index]);

  return (
    <div>
      <Header />
      <div className="profile">
        <img src="src/assets/images/profilepic.png" alt="profile" />
        <h1>I am Namada Junior</h1>
        <div className="txt-type">
          <span>I'm a {text}.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
