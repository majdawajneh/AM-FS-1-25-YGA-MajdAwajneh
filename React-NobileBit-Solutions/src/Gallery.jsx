import gallerypictures from './assets/images/gallerypics.jpg'

function Gallery() {
    return (
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
                                    <img  className="img-fluid" src={gallerypictures} alt=""/>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio" >
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    <img className="img-fluid" src={gallerypictures} alt=""/>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio" >
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    <img className="img-fluid" src={gallerypictures} alt=""/>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio" >
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    <img className="img-fluid" src={gallerypictures} alt=""/>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    <img className="img-fluid" src={gallerypictures} alt=""/>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    <img className="img-fluid" src={gallerypictures} alt=""/>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    <img className="img-fluid" src={gallerypictures} alt=""/>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 galio2">
                            <a href="" className="text-decoration-none">
                                <div className="box mb-3 bg-white" data-gallery="Application">
                                    <img className="img-fluid" src={gallerypictures} alt=""/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 mt-5">
                        <a href="#" className="btn btn-main rounded-pill">More Works</a>
                    </div>
                </div>
            </div>
        
    );
}
export default Gallery;