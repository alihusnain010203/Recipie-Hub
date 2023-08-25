import React, { useState, useEffect } from "react";
import "./sections-style.css";
const foodEmojis = ["🍩", "🍔", "🍟", "🍛", "🍿", "🥚"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodEmojis.length);
    }, 2000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-1">
      <div className="Content-section">
        <div className="heading-holder">
          <h1 className="heading">Foods Variety</h1>
        </div>
        <div className="slide-holder">
          <div className="carousel">
            {foodEmojis.map((emoji, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                {emoji}
              </div>
            ))}
          </div>
          <div className="Line">
            <p style={{ color: "#B9B4C7" }}>Your Taste Partner 😋</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
