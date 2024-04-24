import "./QuantityPicker.css"
import { useState } from "react";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function decrease() {
        let value = quantity - 1;
        if(value > 0) {
        setQuantity(value);
        }
    }
    function increase() {
        let value = quantity + 1;
        setQuantity(value);
    }

    return ( 
        <div className="qt-picker">
            <button disabled={quantity == 1} className="btn btn-sm btn-outline-success" onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-success" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
