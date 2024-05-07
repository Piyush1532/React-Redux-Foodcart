import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.chloeting.com/recipes/645782f278c9ca41ff7a2d4c/images/raspberry-yogurt-ice-cream-1683456757217-feature.webp" className="d-block w-100" style={{ width: '100%', height: '535px' }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://static.chloeting.com/recipes/645782f278c9ca41ff7a2d4c/images/raspberry-yogurt-ice-cream-1683456757217-feature.webp" className="d-block w-100" style={{ width: '100%', height: '535px' }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://static.chloeting.com/recipes/645782f278c9ca41ff7a2d4c/images/raspberry-yogurt-ice-cream-1683456757217-feature.webp" className="d-block w-100" style={{ width: '100%', height: '535px' }} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home
