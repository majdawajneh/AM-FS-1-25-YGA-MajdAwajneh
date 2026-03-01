import React from 'react';
import Navbar from '../components/Navbar.jsx';
function Home() {

    return (
        <div>
            <Navbar />
            <div className="landing d-flex justify-content-center align-items-center">
                <video autoPlay loop muted playsInline className="landing-back-video">
                    <source src="/React-Auth/public/assets/videos/First-Div-Back.mp4" type="video/mp4" />
                </video>
                <div className="text-center text-light">
                    <h1>Build Your Web Application & Website</h1>
                    <p className="fs-6 text-white-50 mb-4 mt-4">
                    Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
                    </p>
                    <a href="#" className="btn btn-main rounded-pill" id="landbtn">Get Started</a>
                </div>
            </div>
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
            <div className="gallery text-center pt-5 pb-5" id="galler">
                <div className="container">
                    <div className="main-title mt-5 mb-5 pt-5 position-relative">
                        <h1>We Make This</h1>
                        <p className="text-white-50 text-uppercase">prepared to be amazed</p>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
                        <li className="active" >All</li>
                        <li>Design</li>
                        <li>Code</li>
                        <li>Photo</li>
                        <li>App</li>
                    </ul>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3 galio" >
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Portfolio">
                                    {/* <img  className="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio" >
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    {/* <img className="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio" >
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    {/* <img className="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 galio" >
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    {/* <img className="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    {/* <img className="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    {/* <img className="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    {/* <img className="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    {/* <img className="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    {/* <img class="img-fluid" src="Assets/images/gallerypics.jpg" alt=""> */}
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 mt-5">
                        <a href="#" className="btn btn-main rounded-pill">More Works</a>
                    </div>
                </div>
            </div>
            <div className="stuff pt-5 pb-5" id="stuff">
                <div className="container pt-5 pb-5">
                    <div className="main-title text-center mt-4 mb-5 position-relative" id="stuff-title">
                        {/* <img className="mb-4" src="Assets/images/lamp.png" alt=""> */}
                        <h1>Some Stuff About Us</h1>
                        <p className="text-black-50 fw-bold text-uppercase">The Great Team</p>
                    </div> 
                    <p class="description text-center mb-5 text-black-50 m-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error blanditLorem ipsum dolor sit 
                        amet consectetur adipisicing 
                    </p>
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-center mb-4 text-md-start">
                            <p className="text-black-50 mb-3 fs-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis perferendis
                            </p>
                            <p className="text-black-50 mb-3 fs-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus error quo necessitatibus quibusdam similique. Sunt, recusandae necessitatibus reprehenderit aperiam magni repellendus iure? Omnis deserunt voluptatum ullam veniam vitae harum.
                            </p>
                            <a href="#" className="btn btn-main rounded-pill">Order Me One!</a>
                        </div>
                        <div className="col-lg-8">
                            {/* <img className="img-fluid" src="Assets/images/stuff.jpg" alt=""> */}
                        </div>
                    </div>       
                </div>
            </div>

        </div>
    );
}

export default Home;