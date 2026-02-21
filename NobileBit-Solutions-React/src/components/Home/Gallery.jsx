// src/components/Home/Gallery.jsx
import React, { useState } from 'react';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Design', 'Code', 'Photo', 'App'];
  
  // مصفوفة الصور (يمكنك تكرارها حسب احتياجك)
  const galleryItems = Array(8).fill({
    image: '/assets/images/gallerypics.jpg',
    category: 'Application'
  });

  return (
    <div className="gallery text-center pt-5 pb-5" id="galler">
      <div className="container">
        <div className="main-title mt-5 mb-5 pt-5 position-relative">
          <h1>We Make This</h1>
          <p className="text-white-50 text-uppercase">prepared to be amazed</p>
        </div>
        
        <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
          {filters.map(filter => (
            <li 
              key={filter}
              className={activeFilter === filter ? 'active' : ''}
              onClick={() => setActiveFilter(filter)}
              style={{ cursor: 'pointer' }}
            >
              {filter}
            </li>
          ))}
        </ul>
        
        <div className="row">
          {galleryItems.map((item, index) => (
            <div key={index} className={`col-sm-6 col-md-4 col-lg-3 ${index < 4 ? 'galio' : 'galio2'}`}>
              <a href="/" className="text-decoration-none" onClick={(e) => e.preventDefault()}>
                <div className="box mb-3 bg-white" data-gallery={item.category}>
                  <img className="img-fluid" src={item.image} alt={`gallery-${index + 1}`} />
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="d-flex justify-content-center mb-5 mt-5">
          <a href="/" className="btn btn-main rounded-pill" onClick={(e) => e.preventDefault()}>
            More Works
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;