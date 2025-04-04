import React from "react";
import "./AboutUs.css"; // Import CSS

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>

        <p className="about-text">
          Welcome to <span className="font-semibold text-[var(--rust-orange)]">Farmin-go!</span>, your go-to online marketplace for farm-fresh, organic products. We’re all about connecting farmers directly with consumers—no middlemen, just transparency, quality, and fair prices for everyone involved.
        </p>

        <p className="about-text">
          Whether you're looking for vegetables, dairy, grains, or other farm goodies, shopping on Farmin-go! is simple and hassle-free. Our platform offers a smooth experience with a user-friendly interface that makes online grocery shopping feel like a natural trip to your local farmers’ market.
        </p>

        <p className="about-text">
          Our goal is to build trust and ease into every step. You can create an account, track orders, and enjoy secure checkouts—all with multiple payment options and a clean, responsive design inspired by nature.
        </p>

        <div className="about-features">
          <h3 className="features-heading">🚀 Key Features</h3>
          <ul className="features-list">
            <li>✅ <strong>Easy Browsing</strong>: Shop by category and find exactly what you need.</li>
            <li>✅ <strong>Cart & Checkout</strong>: Add or remove items and complete your order securely.</li>
            <li>✅ <strong>Secure Payments</strong>: Multiple payment options for a smooth transaction.</li>
            <li>✅ <strong>User Accounts</strong>: Sign up, log in, and manage your orders easily.</li>
            <li>✅ <strong>Invoices & Billing</strong>: Get digital invoices for your purchases.</li>
            <li>✅ <strong>Sticky Navigation</strong>: Access key features anytime as you scroll.</li>
            <li>✅ <strong>Earthy & Vintage UI</strong>: A warm, inviting design inspired by nature.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
