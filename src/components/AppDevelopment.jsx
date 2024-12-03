import React, { useEffect } from 'react';
import { FaMobileAlt, FaPaintBrush, FaSyncAlt, FaCog, FaLock, FaChartBar } from 'react-icons/fa'; // Service icons
import { FaHandshake, FaLaptopCode, FaRocket } from 'react-icons/fa'; // Why Choose Us icons
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppDevelopment = () => {
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
        <h1 className="text-5xl font-bold mb-4">Innovative App Development Solutions</h1>
        <p className="text-xl max-w-4xl mx-auto mb-6">
          At Guru Pragya, we design and develop feature-rich mobile and web apps that drive engagement and deliver results for your business.
        </p>
        <a
          href="#services"
          className="text-lg font-semibold bg-blue-500 px-4 py-2 w-[300px] rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Explore Our Services
        </a>
      </section>

      {/* App Development Services */}
      <section className="py-16 px-6 bg-gray-50" id="services" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          Our App Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Custom App Development */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaMobileAlt className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Custom App Development</h3>
            <p className="text-lg text-gray-700">
              Build apps tailored to your business needs with seamless functionality and user-centric designs.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaPaintBrush className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">UI/UX Design</h3>
            <p className="text-lg text-gray-700">
              Create visually stunning and intuitive user interfaces for an unparalleled user experience.
            </p>
          </div>

          {/* Cross-Platform Development */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaSyncAlt className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Cross-Platform Apps</h3>
            <p className="text-lg text-gray-700">
              Build apps that work seamlessly across iOS, Android, and other platforms, maximizing reach and engagement.
            </p>
          </div>

          {/* Backend Development */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaCog className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Backend Development</h3>
            <p className="text-lg text-gray-700">
              Power your app with secure and scalable backend systems for seamless functionality.
            </p>
          </div>

          {/* Secure Authentication */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaLock className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Secure Authentication</h3>
            <p className="text-lg text-gray-700">
              Ensure user privacy and security with robust authentication systems like OAuth and two-factor authentication.
            </p>
          </div>

          {/* Analytics Integration */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaChartBar className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Analytics & Insights</h3>
            <p className="text-lg text-gray-700">
              Gain actionable insights with built-in analytics to track performance and user behavior.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white" id="why-choose-us" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          Why Choose Us for App Development?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaHandshake className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Collaborative Approach</h3>
            <p className="text-lg text-gray-700">
              We work closely with you to turn your vision into reality while staying on time and within budget.
            </p>
          </div>

          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaLaptopCode className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Latest Technology</h3>
            <p className="text-lg text-gray-700">
              We use cutting-edge tools and frameworks like React Native and Flutter to ensure innovative solutions.
            </p>
          </div>

          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaRocket className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Rapid Delivery</h3>
            <p className="text-lg text-gray-700">
              Our agile processes ensure fast and efficient development cycles without compromising quality.
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
          Whether you’re launching a new app or need to enhance an existing one, Guru Pragya is here to help.
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

export default AppDevelopment;
