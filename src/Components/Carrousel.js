import React from 'react';
import '../index.css';

function Carrousel() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src="https://i.pinimg.com/564x/72/f7/21/72f721aca38e6e09638963a7dbc96629.jpg" className="d-block w-100" alt="Diego" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://i.pinimg.com/564x/73/a4/73/73a473aea32a9cc19b8080b2882357cc.jpg" className="d-block w-100" alt="Basket" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="https://i.pinimg.com/564x/0a/3f/23/0a3f238c05a815331a650710870f6d5c.jpg" className="d-block w-100" alt="Baseball" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carrousel;

