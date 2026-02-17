
function Pricing() {
    return (
    <div className="Pricing pt-5 pb-5 " id="pricing">
        <div className="container text-center pt-5 pb-5">
            <div className="main-title mt-5 mb-5 pt-5" id="main-title">
                <h1 className="">Find a Plan to Power Your Apps</h1>
                <p className="text-black-50">The perfect starting place for your web app or personal project.</p>
            </div>
            <div className="row pt-5 pb-5 d-flex gap-4 justify-content-center">
                <div className="box col-md-6 col-lg-3 mb-3">
                    <div className="inside-the-box">
                        <h4 className="mb-2 mt-3 p-3">Economy Plan</h4>
                        <p className="font-size-6">Perfect for individuals & small businesses</p>
                        <ul className="text-black-50">
                            <li>1–3 responsive pages</li>
                            <li>Modern, clean design</li>
                            <li>Fast loading speed</li>
                            <li>Contact form or WhatsApp integration</li>
                            <li>Basic SEO optimization</li>
                            <li>Delivery within 5–10 days</li>
                        </ul>
                        <p>✔️ Ideal for portfolios, personal websites, and simple services</p>
                    </div>
                </div>
                <div className="box col-md-6 col-lg-3 mb-3">
                    <div className="inside-the-box">
                        <h4 className="mb-2 mt-3 p-3">Pro Plan</h4>
                        <p className="font-size-6">Most popular choice 🔥</p>
                        <ul className="text-black-50">
                            <li>Up to 7 custom-designed pages</li>
                            <li>Professional UI/UX design</li>
                            <li>Performance & speed optimization</li>
                            <li>Advanced SEO setup</li>
                            <li>Social media integration</li>
                            <li>Easy-to-manage admin panel</li>
                            <li>1 month technical support</li>
                        </ul>
                        <p>✔️ Best for growing businesses</p>
                    </div>
                </div>
                <div className="box col-md-6 col-lg-3 mb-3">
                    <div className="inside-the-box">
                        <h4 className="mb-2 mt-3 p-3">Enterprise Plan</h4>
                        <p className="font-size-6">Complete custom solution</p>
                        <ul className="text-black-50">
                            <li>Unlimited pages</li>
                            <li>Fully custom design & development</li>
                            <li>E-commerce, booking system, or dashboard</li>
                            <li>High-level security & performance</li>
                            <li>Full SEO optimization</li>
                            <li>Ongoing technical support</li>
                            <li>Scalable for future growth</li>
                        </ul>
                        <p>✔️ Designed for large-scale projects</p>
                    </div>
                </div>
                <div className=" col-md-6 col-lg-3 mb-3">
                    <div className="inside-the-box">
                        <a href="" className="btn btn-main rounded-pill fs-6">Ask About Your Plan!</a>  
                    </div>
                </div>   
                
            </div>
        </div>
    </div>
    );
}
export default Pricing