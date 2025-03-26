import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from "../Assets/images/Alfasq  logo.png"; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-center align-items-center h-100 w-100">
            <div className="row w-100">
              {/* Left Side - Text Content */}
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-4">
                <h2 className="fw-bold">I am heading title</h2>
                <p className="text-muted">I am a paragraph describing the content.</p>
              </div>

              {/* Right Side - Image */}
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                  src={logo}
                  alt="Image description"
                  className="img-fluid rounded"
                  style={{ maxWidth: "100%", height: "auto",filter: "invert(1) grayscale(1)" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="d-flex justify-content-center align-items-center h-100 w-100">
            <div className="row w-100">
              {/* Left Side - Text Content */}
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-4">
                <h2 className="fw-bold">I am heading title</h2>
                <p className="text-muted">I am a paragraph describing the content.</p>
              </div>

              {/* Right Side - Image */}
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                  src={logo}
                  alt="Image description"
                  className="img-fluid rounded"
                  style={{ maxWidth: "100%", height: "auto",filter: "invert(1) grayscale(1)" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center align-items-center h-100 w-100">
            <div className="row w-100">
              {/* Left Side - Text Content */}
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-4">
                <h2 className="fw-bold">I am heading title</h2>
                <p className="text-muted">I am a paragraph describing the content.</p>
              </div>

              {/* Right Side - Image */}
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                 src={logo}
                 alt="Image description"
                 className="img-fluid rounded"
                 style={{ maxWidth: "100%", height: "auto",filter: "invert(1) grayscale(1)" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
