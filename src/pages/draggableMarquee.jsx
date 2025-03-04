import "@/css/draggableMarquee.css";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const MarqueeHandle = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState(50);

  const toggleMarquee = () => {
    setIsRunning((prev) => !prev); // สลับสถานะการวิ่งของ Marquee
  };

  const increaseSpeed = () => {
    setSpeed((prev) => Math.max(prev - 10, 10)); // เพิ่มความเร็ว
  };

  const decreaseSpeed = () => {
    setSpeed((prev) => prev + 10); // ลดความเร็ว
  };

  return (
    <div>
      <Marquee speed={isRunning ? speed : 0} gradient={false}>
        <div className="marquee-content">
          <div className="marquee-item">🔥 Fire</div>
          <div className="marquee-item">🚀 Rocket</div>
          <div className="marquee-item">💡 Idea</div>
          <div className="marquee-item">🎯 Target</div>
        </div>
      </Marquee>
      
      {/* Controls */}
      <div className="controls">
        <button onClick={toggleMarquee}>
          {isRunning ? "Pause" : "Play"}
        </button>
        <button onClick={increaseSpeed}>Increase Speed</button>
        <button onClick={decreaseSpeed}>Decrease Speed</button>
      </div>
    </div>
  );
};

export default MarqueeHandle;
