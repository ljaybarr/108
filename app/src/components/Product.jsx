import { useState } from "react";
import "./Product.css";
import QuantityPicker from './QuantityPicker';

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    function add() {
        
    }

    function handleQuantity(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        const total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="product">

            <img src={"/images/" + props.data.image} alt="" />
            <h5>{props.data.title}</h5>

            <label className="price">${props.data.price.toFixed(2)}</label>
            <label className="total">${getTotal()}</label>

            <div className="controls">
                <QuantityPicker onChange={handleQuantity} />
                <button onClick={add} className="btn btn-sm btn-primary"><i className="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>
    );
}


export default Product;