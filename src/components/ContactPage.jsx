// components/ContactPage.js
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission (e.g., sending data to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-16 bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover flex items-center justify-center direction-column bg-center h-screen flex flex-col justify-center text-center text-white px-6"
        style={{ backgroundImage: 'url("https://i.pinimg.com/736x/e9/88/69/e988692ad9ca0d375580f93a9c9b131f.jpg")' }}
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl max-w-4xl mx-auto mb-6">
          Have any questions or ready to start your project? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-lg font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-semibold text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="text-lg font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="text-lg font-semibold bg-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Company Details Section */}
      <section className="py-16 px-6 bg-white" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
          Our Office
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Visit us at our office to discuss your project in person.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong>F-130, Sector 2, Cinestar, Central Spine, Vidyadhar Nagar, Jaipur, Rajasthan 302039
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> info@gurupragya.tech
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> +91 6375338302
          </p>
        </div>
      </section>

    
    </div>
  );
};

export default ContactPage;
