import "./Product.css";
import QuantityPicker from './QuantityPicker';

function Product(props) {
    return (
        <div className="product">

            <img src={"/images/" + props.data.image} alt="" />
            <h5>{props.title}</h5>

            <label>${props.data.price}</label>

            <div className="controls">
                <QuantityPicker />
                <button className="btn btn-sm btn-primary"><i className="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>
    );
}


export default Product;