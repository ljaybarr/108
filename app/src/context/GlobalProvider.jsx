import { useState } from "react";
import DataContext from "./DataContext";


function GlobalProvider(props) {
    const [user, setUser] = useState({id: 12353, name: "Jay"});
    const [cart, setCart] = useState([]);

    function addProductToCart(product) {
        const copy = [...cart];
        copy.push(product);
        setCart(copy);
    }

    function removeProductsFromCart() { }

    function clearCart() { }

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