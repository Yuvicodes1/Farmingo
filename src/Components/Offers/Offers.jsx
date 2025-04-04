import React from 'react';
import './Offers.css';
import exc_img from '../Assets/images/Best Sellers/Spices.jpeg';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <img src={exc_img} alt="Exclusive Offer" />
      </div>
      <div className="offers-right">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>On range of our</p>
        <p>Spices and Best Sellers products</p>
        <Link to="/deals_today">
          <button>Check Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Offers;
