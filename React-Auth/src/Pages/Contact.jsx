import React from "react";
import '../assets/Contact.css'


function Contact() {
    return(
        <div>
            <header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a href="" className="navbar-brand">
                                {/* <img src="Assets/images/lamp.png" alt=""> */}
                            </a>
                            <a href="" className="navbar-brand-name text-decoration-none">NobleBit-Solutions</a>
                            <button 
                                className="navbar-toggler" 
                                type="button" data-bs-toggle="collapse" 
                                data-bs-target="#main" aria-controls="main" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars"></i>
                            </button>

                            <div className="collapse navbar-collapse" id="main">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link p-2 p-lg-3 active" href="/NobleBit-Solutions/index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link p-2 p-lg-3" href="/NobleBit-Solutions/index.html">AboutUs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link p-2 p-lg-3" href="/NobleBit-Solutions/index.html">Portfolio</a>
                                    </li>
                                    
                                </ul>
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link p-2 p-lg-3" href="/NobleBit-Solutions/index.html">Contact</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav dark-light-mood">
                                <li>
                                    <span className="nav-link theme-toggle">
                                        <i className="fa-solid fa-sun"></i>
                                        <i className="fa-solid fa-moon"></i>
                                    </span>
                                </li>
                            </ul>
                            </div>

                        </div>
                    </nav>      
            </header>

            <div className="contact-form pt-3">
                <div className="container">
                    <h2 className="text-center mb-4 pt-5 pb-2">Get in Touch</h2>
                    <p className="text-center">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
                    <form action="" method="get" className="col-md-6 col-lg-4 m-5 mt-3" id="contact-form" novalidate>
                        <div className="mb-1">
                            <label for="firstname" className="form-label" name = "firstname">First Name</label>
                            <input type="text" className="form-control mb-2" id="firstname" placeholder="Enter your FirstName" required/>
                            <div className="error" id="fname-error"></div>
                        </div>
                        <div className="mb-1">
                            <label for="lastname" className="form-label" name = "lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" placeholder="Enter your LastName" required/>
                            <div className="error" id="lname-error"></div>
                        </div>
                        <div className="mb-1">
                            <label for="email" className="form-label" name = "email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                            <div className="error" id="email-error"></div>
                        </div>
                        <div className="mb-3 w-100">
                            <label for="message" className="form-label" name = "message">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="We'd love to hear from you!" autocomplete="off" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-main rounded-pill" id="submit">Submit</button>
                    </form>
                </div>
            </div>  
        </div>


    );
}

export default Contact;