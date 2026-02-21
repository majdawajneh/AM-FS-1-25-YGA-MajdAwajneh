// src/components/Home/Techs.jsx
import React from 'react';

function Techs() {
  const technologies = [
    { name: 'HTML', image: 'html-logo.png' },
    { name: 'CSS', image: 'Css-logo.png' },
    { name: 'JavaScript', image: 'js-logo.png' },
    { name: 'ReactJs', image: 'React-logo.png' },
    { name: 'NextJs', image: 'Nextjs-logo.png' },
    { name: 'MongoDB', image: 'mongo-db.png' }
  ];

  return (
    <div className="techs">
      <div className="container pt-4 pb-4">
        <div className="row text-center">
          {technologies.map((tech, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-2">
              <img 
                className="img-fluid" 
                src={`/assets/images/${tech.image}`} 
                alt={tech.name} 
                title={tech.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Techs;