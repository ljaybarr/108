import { useState } from "react";
import "./ShoppingList.css"

function ShoppingList() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    function add() {
        console.log(text);

        let copy = [...list];
        copy.push(text);
        setList(copy);
    }

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
    <div className="shopping page">
        <h1>Your Shopping List</h1>

        <div className="form">
            <input onChange={handleChange} placeholder="Type a product to add to your list" type="text" />
            <button onClick={add} className="btn btn-sm btn-primary">Add</button>
        </div>

        <div className="list">
            <label className="info">{list.length} Items in your shopping list</label>
            {list.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </div>
    </div>
    );
}

export default ShoppingList;