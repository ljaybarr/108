import "./QuantityPicker.css"
import { useState } from "react";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function decrease() {
        let value = quantity - 1;
        setQuantity(value);
    }
    function increase() {
        let value = quantity + 1;
        setQuantity(value);
    }

    return ( 
        <div className="qt-picker">
            <button onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
