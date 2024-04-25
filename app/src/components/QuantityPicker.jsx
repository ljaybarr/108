import "./QuantityPicker.css"
import { useState } from "react";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function decrease() {
        let value = quantity - 1;
        if(value > 0) {
        setQuantity(value);
        props.onChange(value);
        }
    }
    function increase() {
        let value = quantity + 1;
        setQuantity(value);
        props.onChange(value);
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
