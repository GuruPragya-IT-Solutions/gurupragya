import React, { useState, useEffect } from "react";
import { FaCode, FaMobileAlt, FaSearch, FaPalette } from "react-icons/fa";

function Services() {
  const [hovered, setHovered] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  const services = [
    {
      title: "Web Development",
      description: "Creating stunning and high-performance websites for your business needs.",
      icon: <FaCode className="text-4xl text-blue-600" />,
      image: "https://i.imgur.com/03WAAT8.jpg",
    },
    {
      title: "App Development",
      description: "Building user-friendly mobile applications that engage your customers.",
      icon: <FaMobileAlt className="text-4xl text-blue-600" />,
      image: "https://i.imgur.com/vy2kGdR.png",
    },
    {
      title: "SEO Optimization",
      description: "Improving your online presence and boosting search engine rankings.",
      icon: <FaSearch className="text-4xl text-blue-600" />,
      image: "https://i.imgur.com/i9KIJHt.png",
    },
    {
        title: "Digital marketing",
        description: "Crafting visually appealing and intuitive interfaces for your users.",
        icon: <FaPalette className="text-4xl text-blue-600" />,
        image: "https://i.imgur.com/rzlYMUW.jpeg",
      },
    {
      title: "UI/UX Design",
      description: "Crafting visually appealing and intuitive interfaces for your users.",
      icon: <FaPalette className="text-4xl text-blue-600" />,
      image: "https://i.imgur.com/LdfdEuP.jpeg",
    },
    
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
    <div className="bg-light-blue text-center font-['Pacifico'] relative px-6 py-12">
      {/* Custom Cursor */}
      <div
        className={`fixed z-50 pointer-events-none transition-opacity duration-200 ease-in-out ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: cursorPosition.x - 60,
          top: cursorPosition.y - 60,
          width: "120px",
          height: "120px",
          backgroundImage: `url(${hovered !== null ? services[hovered].image : ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
        Our <span className="text-blue-600">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            onMouseEnter={() => {
              setHovered(index);
              setCursorVisible(true);
            }}
            onMouseLeave={() => {
              setHovered(null);
              setCursorVisible(false);
            }}
          >
            {/* Card Content */}
            <div className="p-8 flex flex-col items-start">
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>
              {/* Title */}
              <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
              {/* Description */}
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>

            {/* Background Image Overlay */}
            <div
              className={`absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out`}
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
