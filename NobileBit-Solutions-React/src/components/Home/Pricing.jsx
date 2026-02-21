// src/components/Home/Pricing.jsx
import React from 'react';

function Pricing() {
  const plans = [
    {
      name: 'Economy Plan',
      description: 'Perfect for individuals & small businesses',
      features: [
        '1–3 responsive pages',
        'Modern, clean design',
        'Fast loading speed',
        'Contact form or WhatsApp integration',
        'Basic SEO optimization',
        'Delivery within 5–10 days'
      ],
      ideal: 'Ideal for portfolios, personal websites, and simple services'
    },
    {
      name: 'Pro Plan',
      description: 'Most popular choice 🔥',
      features: [
        'Up to 7 custom-designed pages',
        'Professional UI/UX design',
        'Performance & speed optimization',
        'Advanced SEO setup',
        'Social media integration',
        'Easy-to-manage admin panel',
        '1 month technical support'
      ],
      ideal: 'Best for growing businesses'
    },
    {
      name: 'Enterprise Plan',
      description: 'Complete custom solution',
      features: [
        'Unlimited pages',
        'Fully custom design & development',
        'E-commerce, booking system, or dashboard',
        'High-level security & performance',
        'Full SEO optimization',
        'Ongoing technical support',
        'Scalable for future growth'
      ],
      ideal: 'Designed for large-scale projects'
    }
  ];

  return (
    <div className="Pricing pt-5 pb-5" id="pricing">
      <div className="container text-center pt-5 pb-5">
        <div className="main-title mt-5 mb-5 pt-5" id="main-title">
          <h1>Find a Plan to Power Your Apps</h1>
          <p className="text-black-50">The perfect starting place for your web app or personal project.</p>
        </div>
        
        <div className="row pt-5 pb-5 d-flex gap-4 justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="box col-md-6 col-lg-3 mb-3">
              <div className="inside-the-box">
                <h4 className="mb-2 mt-3 p-3">{plan.name}</h4>
                <p className="font-size-6">{plan.description}</p>
                <ul className="text-black-50">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p>✔️ {plan.ideal}</p>
              </div>
            </div>
          ))}
          
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="inside-the-box">
              <a href="/" className="btn btn-main rounded-pill fs-6" onClick={(e) => e.preventDefault()}>
                Ask About Your Plan!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;