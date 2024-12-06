import { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Abt from './components/Abt';
import Footer from './components/Footer';
import Srvc from './components/Srvc';
import About from './components/About';
import WebDevelopment from './components/WebDevelopment';
import AppDevelopment from './components/AppDevelopment';
import SEO from './components/SEO'
import DigitalMarketing from './components/DigitalMarketing'
import UIUXDesigning from './components/UIUXDesigning';
import ContactPage from './components/ContactPage';
import OurTeam from './components/OurTeam';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Nav />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Abt />
            <Srvc />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Srvc />} />
        <Route path="/services/web-development" element={<WebDevelopment />} /> 
        <Route path="/services/app-development" element={<AppDevelopment />} /> 
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} /> 
        <Route path="/services/seo" element={<SEO />} /> 
        <Route path="/services/ui-ux-design" element={<UIUXDesigning />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/team" element={<OurTeam />} /> 
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
