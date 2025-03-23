import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/images/logo1.png';
import cart_icon from '../Assets/images/cart.png';

export const Navbar = () => {

    const [menu,setMenu]=useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Farmin-GO Logo" />
        <p>Farmin-GO</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bests")}}>Best Seller's{menu==="bests"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("today's deals")}}>Today's Deal{menu==="today's deals"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
