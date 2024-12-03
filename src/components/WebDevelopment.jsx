// components/WebDevelopment.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaShoppingCart, FaDesktop, FaRegHandshake, FaCode, FaPen, FaMobileAlt, FaSearchDollar, FaLock, FaSyncAlt } from 'react-icons/fa';

const WebDevelopment = () => {
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
        <h1 className="text-5xl font-bold mb-4">Transform Your Ideas Into Reality with Expert Web Development</h1>
        <p className="text-xl max-w-4xl mx-auto mb-6">
          At Guru Pragya, we specialize in crafting tailored websites that bring your business to life, using the latest technologies for a seamless user experience.
        </p>
        <a href="#services" className="text-lg font-semibold bg-blue-500 px-4 py-2 w-[300px] rounded-lg shadow-lg hover:bg-blue-700 transition-all md:px-6 lg:px-8">
          Discover Our Services
        </a>
      </section>

      {/* Web Development Services */}
      <section className="py-16 px-6 bg-gray-50" id="services" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">Our Web Development Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* E-Commerce Section */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up">
            <FaShoppingCart className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">E-Commerce Websites</h3>
            <p className="text-lg text-gray-700">
              We create secure, scalable, and user-friendly e-commerce platforms with seamless shopping experiences and payment integrations.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <FaSearchDollar className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Product Management</h3>
            <p className="text-lg text-gray-700">
              Manage your products with ease. From inventory tracking to pricing rules, we build systems that automate and simplify product management.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <FaLock className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Secure Payment Integration</h3>
            <p className="text-lg text-gray-700">
              Implement secure and reliable payment systems like Stripe, PayPal, and other payment gateways to ensure safe transactions for your customers.
            </p>
          </div>

          {/* Static Websites Section */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="600">
            <FaDesktop className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Static Websites</h3>
            <p className="text-lg text-gray-700">
              Simple, fast, and cost-effective static websites ideal for blogs, portfolios, and small business websites.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="800">
            <FaMobileAlt className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Responsive Design</h3>
            <p className="text-lg text-gray-700">
              All our static websites are fully responsive, ensuring your site looks great and functions perfectly on mobile, tablet, and desktop devices.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="1000">
            <FaSyncAlt className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Fast Load Times</h3>
            <p className="text-lg text-gray-700">
              We optimize static websites for fast load times, improving user experience and boosting SEO rankings.
            </p>
          </div>

          {/* Dynamic Websites Section */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="1200">
            <FaRegHandshake className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Dynamic Websites</h3>
            <p className="text-lg text-gray-700">
              For websites that require user interaction, real-time updates, and integrations, we build powerful dynamic websites.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="1400">
            <FaCode className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">User Authentication</h3>
            <p className="text-lg text-gray-700">
              We implement secure login and user authentication systems to protect sensitive user data and ensure privacy.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="1600">
            <FaDesktop className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Content Management Systems (CMS)</h3>
            <p className="text-lg text-gray-700">
              We develop powerful CMS platforms that allow you to manage your website content easily without any technical knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Web Development */}
      <section className="py-16 px-6 bg-white" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">Why Choose Us for Web Development?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up">
            <FaPen className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Tailored Solutions</h3>
            <p className="text-lg text-gray-700">
              We create customized websites and web applications that cater specifically to your business needs and goals.
            </p>
          </div>
          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <FaCode className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Cutting-Edge Technologies</h3>
            <p className="text-lg text-gray-700">
              We use the latest technologies and best practices to ensure your website or app is scalable, secure, and future-proof.
            </p>
          </div>
          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <FaRegHandshake className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Collaborative Approach</h3>
            <p className="text-lg text-gray-700">
              We work closely with you throughout the development process to ensure your vision is brought to life exactly how you imagine it.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">Ready to Get Started?</h2>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Whether you need a simple website or a complex web application, Guru Pragya is here to help. Let's turn your ideas into reality with exceptional web development services.
          </p>
          <a href="#contact" className="text-lg font-semibold bg-blue-500 px-4 py-2 w-[300px] rounded-lg shadow-lg hover:bg-blue-700 transition-all">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
