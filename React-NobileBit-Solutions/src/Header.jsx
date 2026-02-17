
    function Header() {
    return (
    <header>
        <nav className="navbar navbar-expand-lg fixed-top pt-3 pb-3">
            <div className="container">
                
                <a href="index.html" className="navbar-brand-name text-decoration-none">NobleBit-Solutions</a>
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
                    <a className="nav-link p-2 p-lg-3 active" id="home" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" id="aboutus" href="#">AboutUs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" id="serv" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" id="blog" href="#">Our Blog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" id="galle" href="#">Gallery</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" id="pric" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" href="#" id="ourclients">Our Clients</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" href="#" id="FAQ">FAQ</a>
                    </li> 
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" href="Contact.html">Contact</a>
                    </li> 
                </ul>
                
                    </div>
                </div>
            </nav>
        </header>
        );
    }
export default Header;