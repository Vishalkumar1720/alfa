import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="services" className="section">
        <Services />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
    // <BrowserRouter>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/services" element={<Services />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>

    //   </div>
    // </BrowserRouter>
  );
};

export default App;
