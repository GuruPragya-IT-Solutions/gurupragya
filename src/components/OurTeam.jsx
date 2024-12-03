// components/OurTeam.js
import React, { useEffect } from 'react';
import { FaUserAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="py-16 bg-white">
      {/* Team Section */}
      <section
        className="relative bg-cover flex items-center justify-center direction-column bg-center h-screen flex flex-col justify-center text-center text-white px-6"
        style={{ backgroundImage: 'url("https://i.pinimg.com/736x/e7/3e/ba/e73eba2d9946e788e608ffd8e633cdee.jpg")' }}
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Team Member"
                className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500"
              />
              <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                <FaLinkedin className="text-blue-500 text-xl" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">John Doe</h3>
            <p className="text-gray-600 mb-4">Lead Designer</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:johndoe@example.com" className="text-blue-500">
                <FaEnvelope />
              </a>
              <a href="#" className="text-blue-500">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Team Member"
                className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500"
              />
              <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                <FaLinkedin className="text-blue-500 text-xl" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-4">Frontend Developer</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:janesmith@example.com" className="text-blue-500">
                <FaEnvelope />
              </a>
              <a href="#" className="text-blue-500">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Team Member"
                className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500"
              />
              <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                <FaLinkedin className="text-blue-500 text-xl" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Michael Lee</h3>
            <p className="text-gray-600 mb-4">Backend Developer</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:michaellee@example.com" className="text-blue-500">
                <FaEnvelope />
              </a>
              <a href="#" className="text-blue-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
