import stattingvideo from './assets/videos/First-Div-Back.mp4'

function Landing() {
    return (
    
    <div className="landing d-flex justify-content-center align-items-center">
        <video autoplay loop muted plays-inline className="landing-back-video">
            <source src={stattingvideo}/>
        </video>
        <div className="text-center text-light">
            <h1>Build Your Web Application & Website</h1>
            <p className="fs-6 text-white-50 mb-4 mt-4">Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.</p>
            <a href="#" className="btn btn-main rounded-pill" id="landbtn">Get Started</a>
            <p id="output"></p>
        </div>
    </div>
    
    );
}

export default Landing;