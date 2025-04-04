import React, { useContext, useState } from "react";
import { ShopContext } from "../../Contexts/ShopContext";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, all_products, getCartTotal, clearCart } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    // You can add logic to process order or redirect to a payment gateway
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {all_products.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div key={product.id} className="checkout-item">
                <span>{product.name} (x{cartItems[product.id]})</span>
                <span>&#8377;{product.new_price * cartItems[product.id]}</span>
              </div>
            );
          }
          return null;
        })}
        <div className="checkout-total">
          <strong>Total:</strong>
          <strong>&#8377;{getCartTotal()}</strong>
        </div>
      </div>

      <div className="checkout-payment">
        <h3>Select Payment Method</h3>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit/Debit Card
        </label>
        <label>
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>
        <label>
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <button className="place-order-btn" onClick={handleOrder}>
          Place Order
        </button>

        {orderPlaced && <p className="order-success">✅ Order placed successfully!</p>}
      </div>
    </div>
  );
};

export default Checkout;
