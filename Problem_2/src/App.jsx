import React from 'react';
import Carousel from '../src/Components/Carousel';
import './App.css';
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'
import img3 from '../public/img3.png'
import fallback from '../public/fallback.png'

const App = () => {
  const images = [
    img1,
    img2,
    img3,
  ];

  const fallbackImage = fallback;
  
  return (
    <div className="App">
      <h1 className="headerStyle">
        ShipGlobal
        <h4 className="headerSubtitle">Delivering Beyond Borders</h4>
      </h1>
      <Carousel images={images} fallbackImage={fallbackImage} />
    </div>
  );
};

export default App;
