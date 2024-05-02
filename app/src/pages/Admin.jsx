import "./Admin.css"
import Product from './../components/Product';
import { useState } from "react";

function Admin() {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        image: "",
        category: ""
        })

    const [allProducts, setAllProducts] = useState([]);
    const [coupon, setCoupon] = useState({
        code: '',
        discount: ''
    });
    const [allCoupons, setAllCoupons] = useState([]);

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.value;

        const copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    }

    function handleCoupon(e) {
        let text = e.target.value;
        let name = e.target.name;

        let copy = { ...coupon };
        copy[name] = text;
        setCoupon(copy);
    }

    function saveProduct() {
        console.log(product);

        const copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    function saveCoupon() {
        console.log('coupon', coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return <div className="admin">
        <h1>Welcome, Admin</h1>

        <div className="parent">
            <div className="form">
            <h3>Product</h3>
        <div>
            <label className="form-label">Product</label>
            <input onChange={handleProduct} name="title" type="text" className="form-control" />
        </div>
        <div>
            <label className="form-label">Price</label>
            <input onChange={handleProduct} name="price" type="text" className="form-control" />
        </div>
        <div>
            <label className="form-label">Category</label>
            <input onChange={handleProduct} name="catagory" type="text" className="form-control" />
        </div>
            <button onClick={saveProduct}>Add</button>
        <ul className="list">
            {allProducts.map((prod,index) => <li key={index}>{prod.title} - ${prod.price}</li>)}
        </ul>
        </div>
        


        <div className="form">
            <h3>Create Coupons</h3>

        <div>
            <label className="form-label">Code</label>
            <input onChange={handleCoupon} name="code" type="text" className="form-control" />
        </div>
        <div>
        <label className="form-label">Discount</label>
            <input onChange={handleCoupon} name="discount" type="number" className="form-control" />
        </div>
        <div>
            <button onClick={saveCoupon} className="btn btn-outline-primary">Save Coupon</button>
        </div>
        <ul className="list">
            {allCoupons.map(cp => <li key={cp.code}>{cp.code} - {cp.discount}</li>)}
        </ul>
        </div>
    </div>
    </div>
}

export default Admin;