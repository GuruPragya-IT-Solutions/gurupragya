// components/UIUXDesigning.js
import React, { useEffect } from 'react';
import { FaLaptop, FaPencilAlt, FaPalette, FaUsers, FaDesktop, FaCog } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UIUXDesigning = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="py-16 bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover flex items-center justify-center direction-column bg-center h-screen flex flex-col justify-center text-center text-white px-6"
        style={{ backgroundImage: 'url("https://i.pinimg.com/736x/e9/88/69/e988692ad9ca0d375580f93a9c9b131f.jpg")' }}
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-4">UI/UX Designing Excellence</h1>
        <p className="text-xl max-w-4xl mx-auto mb-6">
          At Guru Pragya, we specialize in creating intuitive, user-friendly designs that provide outstanding user experiences for your customers.
        </p>
        <a
          href="#services"
          className="text-lg font-semibold bg-blue-500 px-4 py-2 w-[300px] rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Explore Our Services
        </a>
      </section>

      {/* UI/UX Designing Services */}
      <section
        className="py-16 px-6 bg-gray-50"
        id="services"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          Our UI/UX Design Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaLaptop />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              Web & Mobile UI Design
            </h3>
            <p className="text-lg text-gray-700">
              Create stunning web and mobile interfaces that are visually appealing and user-centric.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaPencilAlt />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              Prototyping & Wireframing
            </h3>
            <p className="text-lg text-gray-700">
              Build wireframes and prototypes to visualize and test user flows before development.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaPalette />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              Visual Design
            </h3>
            <p className="text-lg text-gray-700">
              Enhance your product’s aesthetic appeal with modern design principles and trends.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaUsers />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              User Research & Testing
            </h3>
            <p className="text-lg text-gray-700">
              Understand user behavior through research and usability testing to create intuitive interfaces.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaDesktop />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              Responsive Design
            </h3>
            <p className="text-lg text-gray-700">
              Ensure your design adapts seamlessly across devices with responsive and mobile-first design principles.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaCog />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              UX Optimization
            </h3>
            <p className="text-lg text-gray-700">
              Optimize user flows and interaction design for a smoother and more engaging experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white" id="why-choose-us" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          Why Choose Us for UI/UX Designing?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaPencilAlt />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">User-Centered Approach</h3>
            <p className="text-lg text-gray-700">
              We focus on understanding your users to create designs that are intuitive and meet their needs.
            </p>
          </div>

          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaLaptop />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Modern Design Trends</h3>
            <p className="text-lg text-gray-700">
              Stay ahead of the curve with the latest design trends and cutting-edge user experience techniques.
            </p>
          </div>

          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaUsers />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">End-to-End Service</h3>
            <p className="text-lg text-gray-700">
              From research to final design, we provide end-to-end solutions to ensure your product's success.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="py-16 px-6 bg-gray-50" id="ready-to-start" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Whether you're rebranding or launching a new product, Guru Pragya is here to deliver excellent UI/UX designs.
        </p>
        <div className="text-center">
          <a
            href="#contact"
            className="text-lg font-semibold bg-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesigning;
