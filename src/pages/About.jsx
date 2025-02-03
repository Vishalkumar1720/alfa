import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div class="bg-black text-white d-flex flex-column justify-content-center align-items-center" style={{msOverflowY: "auto"}}>
      <div className=" px-md-5 pt-5">
      <h1 className="display-4 text-center gradient-text">
          Expertise
        </h1>
        <div className='row g-5'>
        <div className="col-lg-6" style={{ height: "500px", overflowY: "scroll" }}>
      <div className="text-white">
        <div className="mb-4">
          <h1 className="gradient-text">2+</h1>
          <p className="fw-bold">Years of Experience</p>
          <p>With over two years in the industry, we bring expertise and innovation to every project, ensuring long-lasting and impactful solutions.</p>
        </div>

        <div className="mb-4">
          <h1 className="gradient-text">20+</h1>
          <p className="fw-bold">Projects Delivered</p>
          <p>Our commitment to excellence is reflected in 20+ successfully delivered projects, each tailored to meet our clients' unique needs.</p>
        </div>

        <div className="mb-4">
          <h1 className="gradient-text">15+</h1>
          <p className="fw-bold">Clients Served</p>
          <p>From startups to established businesses, we've partnered with 15+ clients, building trust and delivering real value.</p>
        </div>

       
      </div>
    </div>
          <div className='col-lg-6'>
            <div className="">
              <h5>WHY CHOOSE US</h5>
              <h1 className="gradient-text">
              We turn ideas into reality with smart, reliable, and future-ready solutions.
              </h1>
              <p>
              For nearly 2 years, Alfasquare Software Solution has been a trusted partner for startups and global brands, delivering high-quality websites, web applications, and mobile apps. Our commitment goes beyond just building software—we empower businesses with technology that drives growth and success.

              Let’s create something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
    // <div className="container-fluid bg-black text-white vh-100 d-flex justify-content-center align-items-center">
    //   <h1 className="display-4 text-center gradient-text">
    //     About Alfasquare Software Solution
    //   </h1>
    //   <div className="about-container">

    //   </div>

    // </div>
  );
};

export default About;
