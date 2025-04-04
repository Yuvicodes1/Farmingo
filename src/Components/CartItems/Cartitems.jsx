import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Contexts/ShopContext';
import remove_icon from '../Assets/images/cart_cross_icon.png';

const Cartitems = () => {
    const { all_products = [], cartItems, removeFromCart, clearCart, getCartTotal } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_products?.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format">
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>&#x20B9;{e.new_price}</p>
                                <button className='quantity'>{cartItems[e.id]}</button>
                                <p>&#x20B9;{e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} alt="" onClick={() => removeFromCart(e.id)}/>
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div className="cartitems-total-items">
                        <p>Subtotal</p>
                        <p>&#x20B9;{getCartTotal()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-items">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-items">
                        <h3>Total</h3>
                        <h3>&#x20B9;{getCartTotal()}</h3>
                    </div>
                    <button className='checkout'>PROCEED TO CHECKOUT</button>
                    <button className='clear-cart' onClick={clearCart}>CLEAR CART</button>
                </div>
            </div>
            
            <div className="cartitems-promocode">
                <p>If you have a promocode, enter it here!</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promo-Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Cartitems;
