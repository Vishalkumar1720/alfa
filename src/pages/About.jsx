import React from 'react';
import '../App.css';
import AnimatedCounter from '../common/AnimatedCounter';

const About = () => {
  return (
    <div className="container-fluid bg-black text-white vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 text-center gradient-text">
        Expertise
      </h1>
      <div className="container px-md-5 pt-5">
        <div className='row g-5'>
          <div className='col-lg-6' style={{ height: "500px", overflowY: "scroll" }}>
            <div className="">
              <div className="">
                <AnimatedCounter maxNumber={16} duration={1000} suffix="+" />
                <p className="fw-bold">YEARS OF EXPERIENCE</p>
                <p>
                  With over 16 years in the industry, we bring a wealth of experience
                  and innovation to every project, ensuring solutions that stand the
                  test of time.
                </p>
              </div>
              <div className="">
                <AnimatedCounter maxNumber={1600} duration={1000} suffix="+" />
                <p className="fw-bold">PROJECT DELIVERED</p>
                <p>
                  Our proven track record of delivering 1600+ successful projects
                  speaks to our commitment to excellence and client satisfaction.
                </p>
              </div>
              <div className="">
                <AnimatedCounter maxNumber={650} duration={1000} suffix="+" />
                <p className="fw-bold">CLIENTS SERVED</p>
                <p>
                  From startups to global enterprises, we've proudly partnered with
                  650+ clients in 14+ countries, building lasting relationships and
                  impactful solutions.
                </p>
              </div>
              <div className="">
                <AnimatedCounter maxNumber={16} duration={1000} suffix="+" />
                <p className="fw-bold">YEARS OF EXPERIENCE</p>
                <p>
                  With over 16 years in the industry, we bring a wealth of experience
                  and innovation to every project, ensuring solutions that stand the
                  test of time.
                </p>
              </div>
              <div className="">
                <AnimatedCounter maxNumber={1600} duration={1000} suffix="+" />
                <p className="fw-bold">PROJECT DELIVERED</p>
                <p>
                  Our proven track record of delivering 1600+ successful projects
                  speaks to our commitment to excellence and client satisfaction.
                </p>
              </div>
              <div className="">
                <AnimatedCounter maxNumber={650} duration={1000} suffix="+" />
                <p className="fw-bold">CLIENTS SERVED</p>
                <p>
                  From startups to global enterprises, we've proudly partnered with
                  650+ clients in 14+ countries, building lasting relationships and
                  impactful solutions.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className="">
              <h5>WHY CHOOSE US</h5>
              <h1 className="gradient-text">
                Discover What Sets Us Apart: Your Success, Our Commitment
              </h1>
              <p>
                At Radiant Web Technology, we bring your vision to life with
                innovative and impactful solutions. In our close to 2 decades of
                journey, we’ve earned the trust of startups and global brands by
                delivering exceptional Websites, Web Applications, and Mobile apps.
                We are overwhelmed to have played a substantial role in the success
                of many startups and big brands by providing them with strong and
                robust tech solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
