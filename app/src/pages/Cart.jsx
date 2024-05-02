import { useContext } from "react";
import "./Cart.css"

import DataContext from "../context/DataContext";

function Cart() {

    const cart = useContext(DataContext).cart;

    return (
        <div className="cart">
            <h1>Your Cart</h1>

            {cart.map(prod => (
                <div className="cart-prod" key={prod._id}>
                    <img src={'/images/' + prod.image}  alt="" />
                    <div>
                        <h4>{prod.title}</h4>
                        <p>{prod.category}</p>
                    </div>

                    <label>${prod.price}</label>
                    <label>{prod.quantity}</label>
                    <label>{prod.price*prod.quantity}</ label>
                </div>
                )
            )}
        </div>
    );
}

export default Cart;