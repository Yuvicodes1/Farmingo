import React from 'react';
import './Hero.css';
import logo from "../Assets/images/logo2.png";
import data_product from '../Assets/images/data';  // Import product data
import Item from '../Items/Item';  // Import the Item component
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7 ,  // Show 5 products at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className='hero'>
            <div className="hero-top">
                <div className="hero-left">
                    <h2>Farmin-GO</h2>
                    <div className='hero-hand-icon'>
                        <p>Delivering</p>
                    </div>
                    <p>Directly from the Farms!</p>
                    <div className="hero-latest-button">
                        <div>About Us</div>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={logo} alt="Fresh Produce" />
                </div>
            </div>
            <div className="bottom">
                <div className="hero-carousel-section">
                    <h2>Popular Items</h2>
                    <Slider {...settings} className="hero-carousel">
                        {data_product.map((item) => (
                            <Item 
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hero;
