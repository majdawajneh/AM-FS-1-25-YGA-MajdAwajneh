import  lampimage from './assets/images/lamp.png'
import stuffimage from './assets/images/stuff.jpg'

function Stuff() {
    return (
        <div className="stuff pt-5 pb-5" id="stuff">
        <div className="container pt-5 pb-5">
            <div className="main-title text-center mt-4 mb-5 position-relative" id="stuff-title">
                <img src={lampimage} alt="Lamp" />
                <h1>Some Stuff About Us</h1>
                <p className="text-black-50 fw-bold text-uppercase">The Great Team</p>
            </div> 
            <p className="description text-center mb-5 text-black-50 m-auto">
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
                    <img className="img-fluid" src={stuffimage} alt="Stuff"/>
                </div>
            </div>       
        </div>
    </div>
    );
}
export default Stuff