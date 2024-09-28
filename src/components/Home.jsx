import React from "react";
import Header from "./Header";
import Typewriter from "./Typewriter";

const Home = () => {
  const words = ["Developer", "Designer"];

  return (
    <div>
      <Header />
      <div className="profile">
        <img src="https://ik.imagekit.io/po14ul1dat/Nam.jpeg?updatedAt=1727546862103" alt="profile" />
        <h1>I am Namada Junior</h1>
        <div className="txt-type">
          <span>I'm a <Typewriter words={words} />.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

