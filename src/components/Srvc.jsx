import React, { useState, useEffect } from "react";

function Services() {
  const [hovered, setHovered] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  const services = [
    { title: "Web Development", image: "https://i.imgur.com/03WAAT8.jpg" },
    { title: "App Development", image: "https://i.imgur.com/vy2kGdR.png" },
    { title: "SEO Optimization", image: "https://i.imgur.com/i9KIJHt.png" },
    { title: "Digital marketing", image: "https://i.imgur.com/rzlYMUW.jpeg" },
    { title: "UI/UX Design", image: "https://i.imgur.com/LdfdEuP.jpeg" },
  ];

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-light-blue text-left font-['Pacifico'] relative">
      {/* Custom Cursor */}
      <div
        className={`fixed z-50 pointer-events-none transition-opacity duration-200 ease-in-out ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: cursorPosition.x - 60, // Center the larger cursor
          top: cursorPosition.y - 60,
          width: "220px", 
          height: "220px",
          backgroundImage: `url(${hovered !== null ? services[hovered].image : ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {services.map((service, index) => (
        <div
          key={index}
          className={`relative h-[25vh] flex items-center justify-start pl-10 group overflow-hidden ${
            hovered === index ? "bg-gray-300" : "bg-transparent"
          } transition-colors duration-300 ease-in-out`}
          onMouseEnter={() => {
            setHovered(index);
            setCursorVisible(true);
          }}
          onMouseLeave={() => {
            setHovered(null);
            setCursorVisible(false);
          }}
        >
          {/* Heading */}
          <h1
            className={`z-10 text-5xl sm:text-6xl md:text-7xl font-bold ${
              index % 2 === 0 ? "font-ostrich" : "font-allura"
            } text-gray-900`}
          >
            {service.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Services;
