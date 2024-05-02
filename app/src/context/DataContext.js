import { createContext } from "react";

const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductsFromCart: () => {},
    clearCart: () => {}
});

export default DataContext;