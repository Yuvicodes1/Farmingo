import React from 'react'
import './Offers.css'
import exc_img from '../Assets/images/Best Sellers/Spices.jpeg'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <img src={exc_img} alt="" />
      </div>
      <div className="offers-right">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>On range of our</p>
        <p>Spices and Best Sellers products</p>
        <button>Check Now</button>
      </div>
    </div>
  )
}

export default Offers