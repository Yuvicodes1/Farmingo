import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import logo from "../Assets/images/logo2.png";
import data_product from '../Assets/images/data';
import Item from '../Items/Item';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,  
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
                    <div className='hero-hand-icon'>
                        <p>Delivering</p>
                    </div>
                    <p>Directly from the Farms!</p>
                    <Link to="/about" className="hero-latest-button">
                        <div>About Us</div>
                    </Link>
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
                            <Link 
                                to={`/product/${item.id}`} 
                                state={{ product: item }} 
                                key={item.id}
                                className="item-link"
                            >
                                <Item 
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hero;
