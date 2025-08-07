import React from "react";
import SplitText from "./SplitText";
import LetterGlitch from "./LetterGlitch";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const SplitTextPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch />
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <SplitText
          text="Hello, GSAP!"
          className="text-4xl font-bold text-white text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
};

export default SplitTextPage;
