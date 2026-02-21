// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <div className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="info">
              <img src="/assets/images/lamp.png" alt="lamp" />
              <p className="mb-5"></p>
              <div className="copyright pb-4">
                Created by <span>MAJD.</span>
                <div>&copy; 2026 NobleBit-Solutions</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5 className="text-light">Links</h5>
              <ul className="list-unstyled lh-lg">
                <li><a href="/">Home</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#galler">Portfolio</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Our Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5 className="text-light">About Us</h5>
              <ul className="list-unstyled lh-lg">
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#stuff">About us</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#FAQ-section">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="contact">
              <h5 className="text-light">Contact Us</h5>
              <p className="lh-lg">
                Get In touch with us via email.<br /> We are waiting for your message.
              </p>
              <a href="/contact" className="btn btn-main rounded-pill" id="final-btn">
                workinfo@gmail.com
              </a>
              <ul className="d-flex list-unstyled mt-5 gap-4">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="insta fa-brands fa-instagram" title="Instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="face fa-brands fa-facebook" title="Facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="twitter fa-brands fa-twitter" title="Twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="linkin fa-brands fa-linkedin" title="LinkedIn"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;