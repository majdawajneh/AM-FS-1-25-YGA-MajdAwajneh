// src/components/Home/OurClients.jsx
import React from 'react';

function OurClients() {
  const clients = [
    { name: 'Majd Al-Awajneh', role: 'CEO', image: '1.jpg' },
    { name: 'Majd Al-Awajneh', role: 'Client', image: '2.webp' },
    { name: 'Majd Al-Awajneh', role: 'Client', image: '3.avif' },
    { name: 'Majd Al-Awajneh', role: 'Client', image: '4.png' }
  ];

  return (
    <div className="OurClients text-center pt-5 pb-5" id="ourclientsid">
      <div className="container pt-5 pb-5">
        <h2 className="pt-5 pb-3">Our Clients</h2>
        <p className="text-black-50 fs-6 pb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestiae 
          quibusdam aliquid voluptatem ipsum autem dignissimos asperiores illum nesciunt ipsa. Re
        </p>
        
        <div className="row text-center pt-5 pb-5">
          {clients.map((client, index) => (
            <div key={index} className="col-md-6 col-lg-3 pb-5">
              <div className="box bg-white">
                <img className="img-fluid" src={`/assets/images/${client.image}`} alt={client.name} />
                <h4 className="p-2 text-light" title={`CEO ${client.name}`}>
                  {client.name}
                </h4>
                <blockquote className="text-black-50 p-3">
                  FrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-DeveloperFrontEnd-Developer
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurClients;