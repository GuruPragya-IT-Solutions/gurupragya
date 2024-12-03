// components/DigitalMarketing.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChartLine, FaComments, FaEnvelope, FaShoppingCart, FaLightbulb, FaBullseye } from 'react-icons/fa';

const DigitalMarketing = () => {
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
        <h1 className="text-5xl font-bold mb-4">Digital Marketing Excellence</h1>
        <p className="text-xl max-w-4xl mx-auto mb-6">
          At Guru Pragya, we provide comprehensive digital marketing strategies to help your business grow and thrive in the digital age.
        </p>
        <a
          href="#services"
          className="text-lg font-semibold bg-blue-500 px-4 py-2 w-[300px] rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Explore Our Services
        </a>
      </section>

      {/* Digital Marketing Services */}
      <section
        className="py-16 px-6 bg-gray-50"
        id="services"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          Our Digital Marketing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaChartLine />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              SEO Strategies
            </h3>
            <p className="text-lg text-gray-700">
              Improve your search rankings and drive organic traffic with our expert SEO services.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaComments />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              Social Media Marketing
            </h3>
            <p className="text-lg text-gray-700">
              Engage your audience and build a strong brand presence across all major social platforms.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaEnvelope />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              Email Campaigns
            </h3>
            <p className="text-lg text-gray-700">
              Create impactful email campaigns that resonate with your audience and drive conversions.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaShoppingCart />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              E-commerce Marketing
            </h3>
            <p className="text-lg text-gray-700">
              Boost your online store's performance with targeted campaigns and product visibility strategies.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaLightbulb />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              Content Marketing
            </h3>
            <p className="text-lg text-gray-700">
              Deliver valuable, engaging content that connects with your audience and builds brand trust.
            </p>
          </div>

          <div
            className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">
              Pay-Per-Click Advertising
            </h3>
            <p className="text-lg text-gray-700">
              Maximize your ROI with high-performing PPC campaigns tailored to your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white" id="why-choose-us" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          Why Choose Us for Digital Marketing?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaChartLine />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Collaborative Approach</h3>
            <p className="text-lg text-gray-700">
              Partner with us to create data-driven marketing strategies that align with your business goals.
            </p>
          </div>

          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Proven Expertise</h3>
            <p className="text-lg text-gray-700">
              Leverage our experience in delivering impactful marketing solutions across industries.
            </p>
          </div>

          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4 mx-auto text-blue-500 flex items-center justify-center">
              <FaChartLine />
            </div>
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Data-Driven Insights</h3>
            <p className="text-lg text-gray-700">
              Gain actionable insights through advanced analytics and performance tracking.
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
          Elevate your brand with comprehensive digital marketing services from Guru Pragya.
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

export default DigitalMarketing;
