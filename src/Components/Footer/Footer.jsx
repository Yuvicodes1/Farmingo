import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/images/logo1.png'
import insta from '../Assets/images/instagram.png'
import pinterest from '../Assets/images/pinterest.png'  
import github from '../Assets/images/github.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={github} alt="" />
            </div>
        </div> 
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ Yathaartha and Kopal  2025 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer