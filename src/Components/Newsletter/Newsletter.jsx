import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent form refresh

    setShowPopup(true); // Show popup

    // Hide popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <form className="form" onSubmit={handleSubscribe}>
        <span className="title">Subscribe to our newsletter.</span>
        <p className="description">Subscribe to the Farmin-Go newsletter to be up to date with product launches and discounts!!</p>
        <p className="description"><strong>Also get a chance to win exclusive discounts!</strong></p>
        <div>
          <input placeholder="Enter your email" type="email" name="email" id="email-address" required />
          <button type="submit">Subscribe</button>
        </div>
      </form>

      {showPopup && (
        <div className="popup">
          Subscription Successful
        </div>
      )}
    </div>
  );
};

export default Newsletter;
