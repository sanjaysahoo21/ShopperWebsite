import React, { createContext, useState } from 'react';
import all_product from "../assets/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => {const newCart = {...prev, [itemId]: prev[itemId] + 1}
            console.log(newCart);
            return newCart;
        });
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {const newCart = {...prev, [itemId]: prev[itemId] + 1}
            console.log(newCart);
            return newCart;
        });
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = all_product.find((product) => product.id === parseInt(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
    }

    const contextValue = {getTotalCartAmount,all_product, cartItem, removeFromCart, addToCart};


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;