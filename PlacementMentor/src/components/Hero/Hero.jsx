import { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode); // Toggle dark mode class on body
  };

  return (
    <div className="hero-main">
      <div className="part2">
        <div className="hero-main-txt">
          <span style={{ "--i": 14 }}>P</span>
          <span style={{ "--i": 15 }}>l</span>
          <span style={{ "--i": 16 }}>a</span>
          <span style={{ "--i": 17 }}>c</span>
          <span style={{ "--i": 18 }}>e</span>
          <span style={{ "--i": 19 }}>m</span>
          <span style={{ "--i": 20 }}>e</span>
          <span style={{ "--i": 21 }}>n</span>
          <span style={{ "--i": 22 }}>t</span>
          <span> &nbsp;&nbsp;  </span>
          <span style={{ "--i": 7 }}>M</span>
          <span style={{ "--i": 8 }}>e</span>
          <span style={{ "--i": 9 }}>n</span>
          <span style={{ "--i": 10 }}>t</span>
          <span style={{ "--i": 11 }}>o</span>
          <span style={{ "--i": 12 }}>r</span>
        </div>
        <span className="hero-byline">Empowering Professional Growth</span>

        <div className="txt1">Shape Your Career Path</div>
        <div className="txt2"> with Expert Guidance</div>
        <div className="txt1">from a Dedicated Mentor</div>
        <div className="hero-but">
          <button className="readmore">
            <span>Read More</span>
          </button>
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Hero;

