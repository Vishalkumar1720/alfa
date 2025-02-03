import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

      <section id="home" className="section" style={{ padding: "100px 0" }}>
        <Home />
      </section>
      <section id="about" className="section container" style={{ padding: "100px 0" }}>
        <About />
      </section>
      <section id="services" className="section" style={{ padding: "100px 0" }}>
        <Services />
      </section>
      <section id="contact" className="section" style={{ padding: "100px 0" }}>
        <Contact />
      </section>
      <section id="footer" className="section" style={{ padding: "100px 0" }}>
      <Footer />
      </section>
      

    </div>
  );
};

export default App;