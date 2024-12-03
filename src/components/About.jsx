import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaUsers, FaRocket, FaChartLine } from 'react-icons/fa'
import Srvc from '../components/Srvc'
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <div className="font-[pacifico]">
      {/* Hero Section */}
      <section
        className="relative bg-cover flex items-center justify-center direction-column bg-center h-screen flex flex-col justify-center text-center text-white px-6"
        style={{ backgroundImage: 'url("https://i.pinimg.com/736x/e9/88/69/e988692ad9ca0d375580f93a9c9b131f.jpg")' }}
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Guru Pragya</h1>
        <p className="text-xl max-w-4xl mx-auto mb-6">Building modern, functional, and user-centric websites that help your business grow and thrive in the digital space.</p>
        <a href="#about" className="text-lg font-semibold bg-blue-500 px-4 py-2 w-[300px] rounded-lg shadow-lg hover:bg-blue-700 transition-all md:px-6 lg:px-8">
  Learn More
</a>

        </section>

      {/* About Us Section */}
   
      <section
  className="py-16 px-6 bg-gray-50"
  id="about"
  data-aos="fade-up"
 
>
  <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">Who We Are</h2>
  <div className="max-w-3xl mx-auto text-lg text-gray-700">
    <p className="mt-4 text-lg sm:text-3xl max-w-4xl mx-auto font-[allura] font-bold ">
      Guru Pragya is a dynamic web development agency specializing in custom
      web development, front-end and back-end solutions, web apps, digital
      marketing, SEO, UI/UX design, and more. Our mission is to empower
      businesses of all sizes by providing them with innovative tools and
      strategies to succeed online. With a team of experienced developers,
      designers, and digital marketers, we build scalable, user-friendly
      websites and applications that enhance user experiences and drive
      measurable results. We focus on transforming your vision into a flawless
      digital experience that connects with your audience and elevates your
      brand.
    </p>
  </div>
</section>


<section className="py-16 px-6 bg-white" data-aos="fade-up">
  <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">Our Approach</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Collaborative */}
    <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <FaUsers className="text-5xl text-blue-500 mb-4 mx-auto" />
      <h3 className="text-3xl font-semibold text-blue-500 mb-4">Collaborative</h3>
      <p className="text-lg text-gray-700">We work closely with our clients to understand their vision, goals, and challenges to deliver tailored web solutions.</p>
    </div>

    {/* Innovative */}
    <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <FaRocket className="text-5xl text-blue-500 mb-4 mx-auto" />
      <h3 className="text-3xl font-semibold text-blue-500 mb-4">Innovative</h3>
      <p className="text-lg text-gray-700">Our team constantly explores the latest web technologies and trends to create innovative and forward-thinking designs and functionality.</p>
    </div>

    {/* Result-Oriented */}
    <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <FaChartLine className="text-5xl text-blue-500 mb-4 mx-auto" />
      <h3 className="text-3xl font-semibold text-blue-500 mb-4">Result-Oriented</h3>
      <p className="text-lg text-gray-700">We focus on delivering high-performance websites that are optimized for user engagement and growth, helping you achieve measurable business results.</p>
    </div>
  </div>
</section>

      {/* Vision Section */}
      <section className="py-16 px-6 bg-gray-100" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">Our Vision</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          At Guru Pragya, we envision a future where businesses can seamlessly integrate technology into their operations, creating lasting digital experiences that foster growth and engagement. We are dedicated to staying ahead of the curve, constantly innovating and refining our processes to deliver outstanding results.
        </p>
      </section>
      <h2 className="text-6xl m-12 font-semibold text-gray-900 text-center mb-8">Our Services</h2>
      <>
      <Srvc/>
      </>

    </div>
  );
};

export default About;
