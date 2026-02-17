import teampics from './assets/images/lamp.png'

function Team() {
    return (
        <div className="team text-center pt-5 pb-5">
        <div className="container pt-5 pb-5">
            <h2 className="pt-3 pb-3 ">Meet The Team</h2>
            <p className="text-white-50 fs-6 pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestiae 
                quibusdam aliquid voluptatem ipsum autem dignissimos asperiores illum nesciunt ipsa. Re
            </p>
            <div className="row text-center">
                <div className="col-md-6 col-lg-3 pb-5">
                    <div className="box bg-white">
                        <img className="img-fluid" src={teampics} alt=""/>
                        <h4 className="p-2 text-light" title="CEO MAJD Al-Awajneh">Majd Al-Awajneh</h4>
                        <blockquote className="text-black-50 p-3">FrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-Developer</blockquote>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 pb-5">
                    <div className="box bg-white">
                        <img className="img-fluid" src={teampics} alt=""/>
                        <h4 className="p-2 text-light">Majd Al-Awajneh</h4 >
                        <blockquote className="text-black-50 p-3">FrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-Developer</blockquote>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 pb-5">
                    <div className="box bg-white">
                        <img className="img-fluid" src={teampics} alt=""/>
                        <h4 className="p-2 text-light">Majd Al-Awajneh</h4>
                        <blockquote className="text-black-50 p-3">FrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-Developer</blockquote>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 pb-5">
                    <div className="box bg-white">
                        <img className="img-fluid" src={teampics} alt=""/>
                        <h4 className="p-2 text-light">Majd Al-Awajneh</h4>
                        <blockquote className="text-black-50 p-3">FrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-Developer</blockquote>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Team