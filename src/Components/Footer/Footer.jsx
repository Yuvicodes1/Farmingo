import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer_logo from '../Assets/images/logo1.png'
import insta from '../Assets/images/instagram.png'
import pinterest from '../Assets/images/pinterest.png'  
import github from '../Assets/images/github.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Farmin-go Logo" />
      </div>

      <ul className="footer-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <img src={pinterest} alt="Pinterest" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://github.com/Yuvicodes1/Farmingo" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div> 

      <div className="footer-copyright">
        <hr />
        <p>Copyright © Yathaartha and Kopal 2025 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
