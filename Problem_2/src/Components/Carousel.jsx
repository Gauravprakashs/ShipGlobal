import React, { useState, useEffect } from 'react';
import '../Components/Carousel.css';

const Carousel = ({ images, fallbackImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    setFadeClass('fade-out');
    const timer = setTimeout(() => {
      setFadeClass('fade-in');
    }, 500); 

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>
        &lt;
      </button>
      <div className="carousel-images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onError={(e) => e.target.src = fallbackImage}
            alt={`carousel slide ${index}`}
            className={index === currentIndex ? fadeClass : 'fade-out'}
          />
        ))}
      </div>
      <button className="carousel-button next" onClick={goToNext}>
        &gt;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
