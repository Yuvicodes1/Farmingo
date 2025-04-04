import React, { createContext, useEffect, useState } from "react";
import all_products from "../Components/Assets/allproducts";
import axios from "axios";

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

    // Load cart from localStorage or backend when user is logged in
    useEffect(() => {
        const loadCart = async () => {
            const savedCart = localStorage.getItem("cartItems");
            const user = JSON.parse(localStorage.getItem("user"));
            
            if (user && user.email) {
                try {
                    // Try to load cart from backend
                    const response = await axios.get(`http://localhost:4000/getcart?email=${user.email}`);
                    if (response.data && response.data.items) {
                        setCartItems(response.data.items);
                        return;
                    }
                } catch (err) {
                    console.error("Error loading cart from backend:", err);
                }
            }
            
            // Fallback to local storage if no user or backend fails
            if (savedCart) {
                try {
                    setCartItems(JSON.parse(savedCart));
                } catch (err) {
                    console.error("Failed to parse saved cart", err);
                }
            }
        };
        
        loadCart();
    }, []);

    // Save cart to localStorage and backend when cartItems change
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        syncCartWithBackend(cartItems);
    }, [cartItems]);

    // Sync to backend MongoDB
    const syncCartWithBackend = async (updatedCart) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user?.email) return;

        try {
            await axios.post("http://localhost:4000/updatecart", {
                email: user.email,
                items: updatedCart,
            });
        } catch (err) {
            console.error("Error syncing cart to backend:", err);
        }
    };

    const addToCart = (itemID) => {
        setCartItems((prev) => ({
            ...prev,
            [itemID]: prev[itemID] + 1,
        }));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({
            ...prev,
            [itemID]: Math.max(prev[itemID] - 1, 0),
        }));
    };

    const clearCart = () => {
        const newCart = getDefaultCart();
        setCartItems(newCart);
        localStorage.setItem("cartItems", JSON.stringify(newCart));
        
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.email) {
            axios.post("http://localhost:4000/updatecart", {
                email: user.email,
                items: newCart,
            }).catch(err => console.error("Error clearing cart on backend:", err));
        }
    };

    const getCartTotal = () => {
        return all_products.reduce((total, product) => {
            return total + product.new_price * cartItems[product.id];
        }, 0);
    };

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
    };

    const contextValue = {
        all_products,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getTotalCartItems,
        syncCartWithBackend,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;