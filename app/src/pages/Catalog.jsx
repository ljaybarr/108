import { useEffect, useState } from 'react';
import Product from "../components/Product";
import DataService from "../services/DataService";
import "./Catalog.css";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    function loadCatalog(){
        const prods = DataService.getProducts();
        setProducts(prods);
        setVisibleProducts(prods);
    }

    function loadCategories(){
        const cats = DataService.getCategories();
        setCategories(cats);
    }

    useEffect(function(){
        loadCatalog();
        loadCategories();
    }, []);

    function filter(cat) {
        let filterProds = products.filter(prod => prod.category == cat );
        setVisibleProducts(filterProds);
    }

    function clearFilter() {
        setVisibleProducts(products);
    }

    function searchByText(e){
        let text = e.target.value;
        let filterProds  = products.filter(prod => prod.title.toLowerCase().includes(text.toLowerCase()));
        setVisibleProducts(filterProds);
    }
    
    return (
        <div className="catalog page">
            <h2>Check out our amazing catalog!</h2>

            <div className="filters">
                <button onClick={clearFilter} className='btn'>All</button>
                {categories.map(cat => <button onClick={ () => filter(cat) } className='btn' key={cat}>{cat}</button>)}

                <div className="search">
                <input onChange={searchByText} type='search'placeholder='Search...'  className='form-control'></input>
                </div>
            </div>

            <div className="products">
                {visibleProducts.map( (prod) => (
                    <Product key={prod._id} data={prod} />
                ))}
            </div>
        </div>
    );
}

export default Catalog;