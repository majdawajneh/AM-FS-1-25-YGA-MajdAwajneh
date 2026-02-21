// src/components/Home/Team.jsx
import React from 'react';

function Team() {
  const teamMembers = [
    { name: 'Majd Al-Awajneh', role: 'CEO', image: '1.jpg' },
    { name: 'Majd Al-Awajneh', role: 'FrontEnd-Developer', image: '2.webp' },
    { name: 'Majd Al-Awajneh', role: 'FrontEnd-Developer', image: '3.avif' },
    { name: 'Majd Al-Awajneh', role: 'FrontEnd-Developer', image: '4.png' }
  ];

  return (
    <div className="team text-center pt-5 pb-5">
      <div className="container pt-5 pb-5">
        <h2 className="pt-3 pb-3">Meet The Team</h2>
        <p className="text-white-50 fs-6 pb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error molestiae 
          quibusdam aliquid voluptatem ipsum autem dignissimos asperiores illum nesciunt ipsa. Re
        </p>
        
        <div className="row text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3 pb-5">
              <div className="box bg-white">
                <img className="img-fluid" src={`/assets/images/${member.image}`} alt={member.name} />
                <h4 className="p-2 text-light" title={`CEO ${member.name}`}>
                  {member.name}
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

export default Team;