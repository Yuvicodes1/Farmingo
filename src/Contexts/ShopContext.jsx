import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/allproducts";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_products.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => ({
            ...prev,
            [itemID]: prev[itemID] + 1
        }));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({
            ...prev,
            [itemID]: Math.max(prev[itemID] - 1, 0)
        }));
    };

    const clearCart = () => {
        setCartItems(getDefaultCart());
    };

    const getCartTotal = () => {
        return all_products.reduce((total, product) => {
            return total + product.new_price * cartItems[product.id];
        }, 0);
    };

    const getTotalCartItems = () => {
        let totalitems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalitems += cartItems[item];
            }
        }
        return totalitems;
    };

    const contextValue = { 
        all_products, 
        cartItems, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        getCartTotal, 
        getTotalCartItems 
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
