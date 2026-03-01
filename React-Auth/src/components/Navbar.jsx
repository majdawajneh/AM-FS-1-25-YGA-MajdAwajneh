import React from 'react';  

function Navbar() {


    return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top pt-3 pb-3">
                    <div className="container">
                    <a href="/" className="navbar-brand-name text-decoration-none">
                        NobleBit-Solutions
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button"
                        data-bs-toggle="collapse" 
                        data-bs-target="#main" 
                        aria-controls="main" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="main">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3 active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#aboutus">AboutUs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#blog">Our Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#clients">Our Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#faq">FAQ</a>
                        </li> 
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="/React-Auth/src/Pages/Contact.jsx">Contact</a>
                        </li> 
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>
    );
}

export default Navbar;