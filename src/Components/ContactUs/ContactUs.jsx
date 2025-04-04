import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>

        <form>
          <div>
            <label htmlFor="email">Your Details <span>*</span></label>
            <input id="email" type="email" placeholder="Email" required />
          </div>

          <div>
            <label htmlFor="type">Type <span>*</span></label>
            <select id="type" required>
              <option value="">---</option>
              <option value="order-issue">Order Issue</option>
              <option value="general-inquiry">General Inquiry</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div>
            <label htmlFor="order">Order No</label>
            <input id="order" type="text" placeholder="Order Number (if applicable)" />
          </div>

          <div>
            <label htmlFor="message">Description <span>*</span></label>
            <textarea id="message" placeholder="Write your message here..." required />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
