import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

function Main() {
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    "Web Development",
    "SEO Services",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
  ];

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Animation Variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 overflow-hidden pt-[12vh]">
      {/* Title */}
      <motion.h1
        className="absolute z-[30] text-4xl sm:text-5xl md:text-[8vh] font-['pacifico'] text-black font-bold tracking-tight drop-shadow-lg top-[25%] left-[5%] md:top-[35%] md:left-[10%]"
        variants={fadeInVariant}
        custom={0}
        initial="hidden"
        animate="visible"
      >
        GURUPRAGYA
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="absolute z-[30] text-2xl sm:text-3xl md:text-[5vh] italic text-gray-700 font-medium tracking-widest top-[35%] left-[5%] md:top-[45%] md:left-[10%]"
        variants={fadeInVariant}
        custom={1}
        initial="hidden"
        animate="visible"
      >
        IT SOLUTIONS
      </motion.h2>

      {/* Paragraph Below Headings */}
      <motion.p
        className="absolute z-[30] text-lg sm:text-xl text-gray-700 top-[45%] left-[5%] md:top-[55%] md:left-[10%] max-w-[300px] sm:max-w-[400px]"
        variants={fadeInVariant}
        custom={3}
        initial="hidden"
        animate="visible"
      >
        At Gurupragya IT Solutions, we’re dedicated to helping businesses grow with expert web development, SEO, and design services. Whether you need a new website, want to improve your search rankings, or refresh your design, we’re here to bring your ideas to life and enhance your online presence.
      </motion.p>

      {/* Arrow Icon */}
      <div className="relative min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="absolute z-[30] bottom-[100px] left-[10%] sm:left-[20%] bg-black text-white text-[4vh] sm:text-[5vh] p-4 rounded-full cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <MdArrowOutward />
        </motion.div>

        {/* Revealing Service Names on Hover */}
        <motion.div
          className="absolute z-[30] bottom-[60px] left-[10%] sm:left-[20%] opacity-0 transition-all duration-300"
          whileHover={{ opacity: 1 }}
          whileTap={{ opacity: 0 }}
        >
          <div className="bg-black text-white p-4 rounded-lg">
            {services.map((service, index) => (
              <p key={index} className="text-[2.5vh] sm:text-[3vh] font-medium py-2">
                {service}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image on the Right Side */}
      <motion.div
        className="absolute z-[20] top-[50%] right-[3%] sm:right-[10vh] transform -translate-y-1/2 hidden md:block"
        variants={fadeInVariant}
        custom={4}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://i.imgur.com/2npjJV5.jpeg"
          alt="Illustration"
          className="w-[300px] sm:w-[400px] md:w-[600px] rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
}

export default Main;
