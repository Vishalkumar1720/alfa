import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import ClientSection from './pages/ClientSection.jsx';


const App = () => {
  return (
    <div>
      <Header />

      <section id="home" className="section container-fluid" style={{ padding: "100px 0 0", maxWidth: "100%" }} >
        <Home />


      </section>
      <section id="client_slider" className="section container-fluid" style={{ padding: "0px", maxWidth: "100%" }} >
        <ClientSection />
      </section>
      <section id="about" className="section container-fluid" >
        {/* <HeroSection /> */}
        <About />

      </section>
      <section id="services" className="section container-fluid">
        <Services />
      </section>
      <section id="contact" className="section container-fluid" >
        <Contact />
      </section>
      <section id="footer" className="section container-fluid" >
        <Footer />
      </section>


    </div>
  );
};

export default App;