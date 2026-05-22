import React, { useEffect, useRef } from 'react';

const NotFound = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const pos = `${x}px ${y}px`;

      if (overlayRef.current) {
        const gradient = `radial-gradient(circle 120px at ${pos}, transparent 0%, white 150px)`;
        overlayRef.current.style.maskImage = gradient;
        overlayRef.current.style.webkitMaskImage = gradient;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-6xl font-bold mb-4 text-center">Page Not Found</h1>
        <p className="text-xl text-center px-4">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
