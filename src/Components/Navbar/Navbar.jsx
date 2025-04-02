import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/images/logo1.png';
import cart_icon from '../Assets/images/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Contexts/ShopContext';

export const Navbar = () => {

    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Farmin-GO Logo" />
        <p>Farmin-GO</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'#4A4A4A'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("allproducts")}}><Link style={{textDecoration:'none', color:'#4A4A4A'}} to='/allproducts'>All Products</Link>{menu==="allproducts"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bests")}}><Link style={{textDecoration:'none', color:'#4A4A4A'}} to='/bests'>Best Sellers</Link>{menu==="bests"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("deals_today")}}><Link style={{textDecoration:'none', color:'#4A4A4A'}} to='/deals_today'>Today's Deals</Link>{menu==="deals_today"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to={'Login'}><button>Login / Sign-UP</button></Link>
        <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
