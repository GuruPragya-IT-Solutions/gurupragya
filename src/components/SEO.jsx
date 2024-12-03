// components/SEOOptimization.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch, FaChartLine, FaUserCheck, FaGlobe, FaRocket, FaBullhorn } from 'react-icons/fa';

const SEO = () => {
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
        <h1 className="text-5xl font-bold mb-4">Boost Your Online Presence with SEO</h1>
        <p className="text-xl max-w-4xl mx-auto mb-6">
          At Guru Pragya, we offer result-driven SEO services to enhance your website's visibility, improve rankings, and drive organic traffic.
        </p>
        <a
          href="#services"
          className="text-lg font-semibold bg-blue-500 px-4 py-2 w-[300px] rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Explore Our SEO Services
        </a>
      </section>

      {/* Our SEO Services */}
      <section className="py-16 px-6 bg-gray-50" id="services" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">Our SEO Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up">
            <FaSearch className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Keyword Research</h3>
            <p className="text-lg text-gray-700">
              Identify high-traffic, low-competition keywords to target your audience effectively.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <FaChartLine className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">On-Page Optimization</h3>
            <p className="text-lg text-gray-700">
              Optimize your content, metadata, and website structure to enhance search engine rankings.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <FaGlobe className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Technical SEO</h3>
            <p className="text-lg text-gray-700">
              Improve your website's technical aspects, including speed, mobile-friendliness, and indexability.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="600">
            <FaUserCheck className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">User Experience</h3>
            <p className="text-lg text-gray-700">
              Enhance user experience to improve engagement and reduce bounce rates.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="800">
            <FaBullhorn className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Link Building</h3>
            <p className="text-lg text-gray-700">
              Build high-quality backlinks to improve domain authority and rankings.
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="1000">
            <FaRocket className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Content Strategy</h3>
            <p className="text-lg text-gray-700">
              Create and optimize content that resonates with your target audience and boosts SEO performance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white" id="why-choose-us" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">Why Choose Us for SEO Optimization?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaChartLine className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Data-Driven Approach</h3>
            <p className="text-lg text-gray-700">
              We use analytics and research to ensure every strategy is backed by data for maximum impact.
            </p>
          </div>

          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaSearch className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Proven Expertise</h3>
            <p className="text-lg text-gray-700">
              Our team has a track record of achieving top rankings for clients across various industries.
            </p>
          </div>

          <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaRocket className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-3xl font-semibold text-blue-500 mb-4">Sustainable Growth</h3>
            <p className="text-lg text-gray-700">
              We focus on long-term strategies that deliver consistent and sustainable traffic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="py-16 px-6 bg-gray-50" id="ready-to-start" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">Ready to Get Started?</h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Partner with Guru Pragya to take your online presence to the next level.
        </p>
        <div className="text-center">
          <a href="#contact" className="text-lg font-semibold bg-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default SEO;
