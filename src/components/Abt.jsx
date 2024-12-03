import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { GrGrow } from "react-icons/gr";
import { FaTrophy } from "react-icons/fa6";


function Abt() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out', // easing function
    });
  }, []);

  return (
    <div className="bg-gray-50 font-[pacifico]">
      {/* About Header */}
      <header
        className="bg-cover m-14 bg-center text-black text-center py-16 px-4"
        style={{ backgroundImage: 'url("https://i.pinimg.com/736x/2d/8f/a8/2d8fa8503781b8df1d55a0f9f1db7b16.jpg")' }}
        data-aos="fade-up" // AOS animation for fade effect
      >
        <h1 className="text-5xl font-bold">About Our Agency</h1>
        <p className="text-lg mt-4 max-w-4xl mx-auto">
          We are a forward-thinking agency focused on delivering innovative web and app solutions. With a strong emphasis on creativity and strategy, we collaborate closely with you to bring your vision to life and ensure lasting digital success.
        </p>
      </header>

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row justify-between items-center py-16 px-6 bg-white" data-aos="fade-up">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Turning Ideas into Reality</h2>
          <p className="text-lg text-gray-600">
            We understand that every great project begins with a simple idea. Our team is committed to turning those ideas into functional, innovative solutions that solve real problems. From the initial concept to the final product, we work closely with you to ensure every detail aligns with your vision, exceeding expectations and delivering results that make a lasting impact. Whether it’s a website, app, or digital marketing strategy, we bring your ideas to life with precision, creativity, and a focus on what truly matters to your business.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0" data-aos="zoom-in">
          <img
            className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105" // Hover effect
            src="https://i.imgur.com/IAIOxz1.jpeg"
            alt="Creative team brainstorming"
          />
        </div>
      </section>

      {/* Section 2: Founder Quote */}
      <section className="text-center py-16 px-6 bg-blue-100" data-aos="fade-up">
        <blockquote className="text-2xl text-gray-700 italic font-bold mb-4">“Great things never come from comfort zones. Let us help you take your digital presence to the next level.”</blockquote>
        {/* <p className="text-lg text-gray-600">Founder of Our Agency</p> */}
      </section>

      {/* Section 3 */}
      <section className="flex flex-col md:flex-row justify-between items-center py-16 px-4 md:px-10 lg:px-16" data-aos="fade-up">
  <div className="w-full md:w-5/12">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
      Empowering Business Growth
    </h2>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      At the heart of everything we do lies a passion for growth and transformation. 
      Our mission is simple yet profound: to help businesses, big or small, unlock 
      their full potential. By working hand-in-hand with entrepreneurs and teams, 
      we provide the tools, strategies, and support they need to scale efficiently 
      and achieve their dreams. Whether you're just starting out or already 
      established, we’re here to help you break barriers, navigate challenges, and 
      reach heights you once thought impossible. Let’s build something extraordinary together.
    </p>
  </div>
  <div className="w-full md:w-5/12 mt-8 md:mt-0" data-aos="zoom-in">
    <img
      className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105"
      src="https://i.imgur.com/IEmkNgq.jpeg"
      alt="Team discussing strategy"
    />
  </div>
</section>


      {/* Section 4: Services */}
      <section className="text-center py-16 px-6 bg-gray-50" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">We Accelerate Your Growth</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <div className="bg-blue-500 text-white p-10 rounded-full mb-4 flex justify-center items-center">
            <AiOutlineTeam className="text-6xl" />
          </div>

            <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
            <p className="text-gray-600">Our diverse team of professionals brings a range of expertise, working seamlessly to deliver solutions that truly stand out in the market.</p>
          </div>
          {/* Service 2 */}
          <div className="flex flex-col items-center text-center" data-aos="fade-up">
            <div className="bg-blue-500 text-white p-12 rounded-full mb-4">
            <GrGrow className="text-6xl" />

            </div>
            <h3 className="text-xl font-semibold text-gray-800">Tailored Strategy</h3>
            <p className="text-gray-600">We develop strategies that align with your unique business goals, ensuring every step is purposeful and drives measurable results.</p>
          </div>
          {/* Service 3 */}
          <div className="flex flex-col items-center text-center" data-aos="fade-up">
            <div className="bg-blue-500 text-white p-10 rounded-full mb-4">
            <FaTrophy className="text-6xl"  />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Guaranteed Results</h3>
            <p className="text-gray-600">Our commitment to excellence means we deliver results that help your business grow and thrive, no matter the challenge or scope.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Abt;
