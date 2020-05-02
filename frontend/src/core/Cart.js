import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setProducts(loadCart());
    }, [reload]);

    const loadAllProducts = (products) => {
        return (
            <div>
                {products.map((product, index) => (
                    <Card
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addtoCart={false}
                        setReload={setReload}
                        reload={reload}
                    />
                ))}
            </div>
        );
    };

    return (
        <Base title="Cart Page" description="Ready to checkout">
            <div className="row">
                <div className="col-6">{products.length > 0 ? (loadAllProducts(products)) : (<h2> No Products Found</h2>)}</div>
                    <div className="col-6 text-center"><StripeCheckout
                    products={products}
                    setReload={setReload}
                /></div>
            </div>
        </Base>
    );
};

export default Cart;