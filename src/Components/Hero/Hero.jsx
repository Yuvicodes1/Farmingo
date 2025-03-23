import React from 'react';
import './Hero.css';
import benefits from "../Assets/images/logo2.png";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Farmin-GO</h2>
            <div className='hero-hand-icon'>
                <p>Delivering</p>
            </div>
            <p>Directly from the Farms !</p>
            <div className="hero-latest-button">
                <div>Explore Shop</div>
                <p><strong>&#x21e8;</strong></p>
            </div>
        </div>
        <div className="hero-right">
            <img src={benefits} alt="Fresh Produce" />
        </div>
    </div>
  );
}

export default Hero;
