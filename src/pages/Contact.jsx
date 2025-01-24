import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="container-fluid bg-black text-white vh-100 d-flex justify-content-center align-items-center">
      <div className="container px-md-5">
        <div className='row g-5'>
          <div className='col-lg-7'>
            <div className='bg-dark p-5 rounded-5'>
              <div class="content-block about-content h-100 js-tilt" >
                <p>In today’s online world, a powerful and user-friendly website is essential for business success. Whether it’s corporate, startup or e-Commerce, you need a website which engage users, help in conversions and drive business growth</p>
                <h3 className="gradient-text">
                  What We Offer
                </h3>
                <div class="wwo">
                  <ul>
                    <li>  <strong>  Custom UI and UX</strong>
                      – For the website designs we provide custom design according to your TG and need of your business.
                    </li>
                    <li> <strong>Website Designing</strong>
                      – We offer creative and responsive designs that ensure a unique and engaging user experience.
                    </li>
                    <li><strong> Website Development</strong>
                      – We deliver custom-built websites with cutting-edge technology to meet your business objectives.
                    </li>
                    <li> <strong>Portal Development</strong>
                      – We provide dynamic and scalable portals tailored to enhance communication and functionality for users.
                    </li>
                    <li> <strong>E-Commerce Website</strong>
                      – We offer comprehensive e-commerce solutions with secure payment gateways and intuitive navigation for seamless shopping.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='bg-dark p-5 rounded-5'>
              <div>
                <h3 className="text-center gradient-text">
                  Make an Enquiry
                </h3>
                <span className="mb-3 d-block text-center">Submit your details and someone from our team will contact you shortly. </span>
              </div>
              <div className=''>
                <form className="row g-3">
                  <div className="form-group">
                    <input type="text" className="form-control custom-input" id="name" placeholder='Name*' />
                  </div>
                  <div className="form-group">
                    <input type="phone" className="form-control custom-input" id="phone" placeholder='Phome No.*' />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control custom-input" id="email" placeholder='Email*' />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control custom-input" id="company" placeholder='Company*' />
                  </div >
                  <div className='d-flex justify-content-center mt-4'>
                    <button type="submit" className="btn racb-btn  rounded-pill">SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

