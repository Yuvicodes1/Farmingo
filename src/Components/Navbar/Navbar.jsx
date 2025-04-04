import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/images/logo1.png';
import cart_icon from '../Assets/images/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Contexts/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="navbar">
            {/* Logo - Clickable to Home */}
            <div className="nav-logo">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src={logo} alt="Farmin-GO Logo" />
                    <p style={{ color: '#4A4A4A', marginLeft: '8px' }}>Farmin-GO</p>
                </Link>
            </div>

            {/* Navigation Menu */}
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: 'none', color: '#4A4A4A' }} to="/">Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("allproducts")}>
                    <Link style={{ textDecoration: 'none', color: '#4A4A4A' }} to="/allproducts">All Products</Link>
                    {menu === "allproducts" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("bests")}>
                    <Link style={{ textDecoration: 'none', color: '#4A4A4A' }} to="/bests">Best Sellers</Link>
                    {menu === "bests" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("deals_today")}>
                    <Link style={{ textDecoration: 'none', color: '#4A4A4A' }} to="/deals_today">Today's Deals</Link>
                    {menu === "deals_today" ? <hr /> : null}
                </li>
            </ul>

            {/* Login & Cart Section */}
            <div className="nav-login-cart">
                <Link to="/Login">
                    <button>Login / Sign-UP</button>
                </Link>
                <Link to="/Cart">
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};
