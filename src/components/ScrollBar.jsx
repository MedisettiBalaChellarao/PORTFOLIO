import React, { useEffect, useState } from 'react';

const ScrollBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollHeight(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-3 top-0 h-full w-1.5 rounded-full bg-gray-900 shadow-lg z-150">
      <div
        className="rounded-full transition-all duration-10"
        style={{
          height: `${scrollHeight}%`,
          background: 'linear-gradient(to bottom, #10b981, #059669)',
          boxShadow: '0 0 100px #10b981',
          width: '60%',
        }}
      ></div>
    </div>
  );
};

export default ScrollBar;
