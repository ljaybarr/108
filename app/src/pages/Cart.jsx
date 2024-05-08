import { useContext } from "react";
import "./Cart.css"

import DataContext from "../context/DataContext";

function Cart() {
    const {cart, clearCart} = useContext(DataContext);

    function getNumOfProds() {
        let num = 0
            for(let i=0; i<cart.length; i++) {
            num += cart[i].quantity;
        }

        return num;
    }

    function getTotal() {
        let total = 0
        for(let i=0; i<cart.length; i++) {
            let prod = cart[i];
            total += (prod.price * prod.quantity);
        }

        return total;
    }

    function clearAll() {
        clearCart();
    }

    return (
        <div className="cart page">
            <h1>Your Cart</h1>
            <h4>You have {getNumOfProds()} products in your cart</h4>

            <div className="parent">
                <div className="prods">
                {cart.map(prod => (
                    <div className="cart-prod" key={prod.   _id}>
                        <img src={'/images/' + prod.    image}  alt="" />
                        <div>
                            <h4>{prod.title}</h4>
                            <p>{prod.category}</p>
                        </div>

                        <label>${prod.price}</label>
                        <label>{prod.quantity}</label>
                        <label>{prod.price*prod.quantity}   </ label>
                    </div>
                    )
                )}
                </div>

                <div className="side-menu">
                <h4>Your total is: ${getTotal()}</h4>

                <button className="btn btn-warning">Pay Now</button>

                <button className="btn btn-link" onClick={clearAll}>Clear All</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;