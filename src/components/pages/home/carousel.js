import React, { useState } from 'react';
import './carousel.css';
import CarouselImage from '../../../assets/Rectangle35.png';
import CarImg from '../../../assets/carimg.webp';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    CarImg,
    CarouselImage,
    CarImg,
    CarImg,
  ];

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carouselContainer">
      <div className='carouselImageContainer'>
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>

      <div className="buttons">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`carousel-button ${index === currentSlide ? 'active' : ''}`}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

