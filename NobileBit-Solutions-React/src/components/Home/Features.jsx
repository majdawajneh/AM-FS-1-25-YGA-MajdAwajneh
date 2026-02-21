// src/components/Home/Features.jsx
import React from 'react';

function Features() {
  return (
    <div className="features pt-5 pb-5" id="services">
      <div className="container text-center pt-5 pb-5">
        <div className="main-title mt-5 mb-5 position-relative">
          <img className="mb-4" src="/assets/images/lamp.png" alt="lamp" />
          <h1 id="services-h1">We Are Good at</h1>
          <p className="text-black-50 fw-bold text-uppercase">Some of these stuff under</p>
        </div>
        
        <div className="row pt-5">
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="inside-the-box">
              <div className="icon-holder position-relative">
                <i className="fa-solid fa-1 position-absolute bottom-0 number"></i>
                <i className="fa-solid fa-laptop-code fa-6x position-absolute bottom-0 icon"></i>
              </div>
              <h2 className="mt-5 mb-4 mt-3 text-uppercase">great designs</h2>
              <p className="text-black-50 lh-lg">WE DESIGNS A PERFECT WEBSITES</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="inside-the-box">
              <div className="icon-holder position-relative">
                <i className="fa-solid fa-2 position-absolute bottom-0 number"></i>
                <i className="fa-solid fa-code fa-6x position-absolute bottom-0 icon"></i>
              </div>
              <h2 className="mt-5 mb-4 mt-3 text-uppercase">web Development</h2>
              <p className="text-black-50 lh-lg">WE DESIGNS A PERFECT WEBSITES</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <div className="inside-the-box">
              <div className="icon-holder position-relative">
                <i className="fa-solid fa-3 position-absolute bottom-0 number"></i>
                <i className="fa-solid fa-arrow-up-right-dots fa-6x position-absolute bottom-0 icon"></i>
              </div>
              <h2 className="mt-5 mb-4 mt-3 text-uppercase">SEO optimization</h2>
              <p className="text-black-50 lh-lg">WE DESIGNS A PERFECT WEBSITES</p>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
    </div>
  );
}

export default Features;