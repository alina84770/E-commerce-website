import { createContext, useState } from "react";
import all_product from '../components/assets/all_product';
export const CategoryProducts = createContext();


//initailize all products with quantity '0'

const cartFunctionality = () => {
    let cart = {};
    for (let indx = 0; indx < all_product.length + 1; indx++) {
        cart[indx] = 0;
    }
    return cart;
}


export const ContextProvider = ({ children }) => {
    const [cartItems, setcartItems] = useState(cartFunctionality());

    const [islogin, setlogin] = useState(false);


    //increase quantity by '1' of particular id product when add to cart it
    const addToCart = (productId) => {
        setcartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));


    }

    //decrease quantity by '1' of particular id product when remove from cart it
    const removeFromCart = (productId) => {
        setcartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }))
    }



    //get total cart amount
    const getTotalAmount = () => {
        let TotalAmount = 0;
        all_product.map((product) => {
            if (cartItems[product.id] > 0) {
                TotalAmount += product.new_price * cartItems[product.id];
            }
        })
        return TotalAmount;
    }


    //get total cart items
    const getTotalCartItems = () => {
        let totalCartItems = 0;
        all_product.map((product) => {
            if (cartItems[product.id] > 0) {
                totalCartItems = totalCartItems + 1;
            }
        })
        return totalCartItems;
    }


    return (
        <CategoryProducts.Provider value={{ all_product, cartItems, addToCart, removeFromCart, getTotalAmount, getTotalCartItems, islogin, setlogin }}>
            {children}
        </CategoryProducts.Provider>
    )
}

