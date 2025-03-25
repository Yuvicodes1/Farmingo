import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <form class="form">
            <span class="title">Subscribe to our newsletter.</span>
            <p class="description">Subscribe to the Farmin-Go newsletter to be up to date with product launches and discounts!!</p>
            <p class="description"><strong>Also get a chance to win exclusive discounts !</strong></p>
            <div>
                <input placeholder="Enter your email" type="email" name="email" id="email-address"/>
                <button type="submit">Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default Newsletter