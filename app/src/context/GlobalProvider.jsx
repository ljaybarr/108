import { useState } from "react";
import DataContext from "./DataContext";


function GlobalProvider(props) {
    const [user, setUser] = useState({id: 12353, name: "Jay"});
    const [cart, setCart] = useState([]);

    function addProductToCart(product) {
        const copy = [...cart];

        let exist = false;

        for(let i=0; i<copy.length; i++) {
            let prodInCart = copy[i];
            if(product._id === prodInCart._id) {
                prodInCart.quantity += product.quantity;
                exist = true;
            }
        }

        if(!exist) {
            copy.push(product);
        }
        
        
        setCart(copy);
    }

    function removeProductsFromCart() { }

    function clearCart() {
        setCart([]);
    }

    return (
        <DataContext.Provider value={{
            user: user,
            cart: cart,
            addProductToCart: addProductToCart,
            removeProductsFromCart: removeProductsFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;