import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

import "../styles.css";

const Card = ({
                  product,
                  addtoCart = true,
                  removeFromCart = false,
                  setReload = f => f,
                  //   function(f){return f}
                  reload = undefined
              }) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const cartTitle = product ? product.name : "A photo from pexels";
    const cartDescrption = product ? product.description : "Default description";
    const cartPrice = product ? product.price : "DEFAULT";

    const addToCart = () => {
        addItemToCart(product, () => setRedirect(true));
    };

    const getARedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCart = addtoCart => {
        return (
            addtoCart && (
                <button
                    onClick={addToCart}
                    className="btn btn-danger fa fa-shopping-cart"
                >
                    Add to Cart
                </button>
            )
        );
    };

    const showRemoveFromCart = removeFromCart => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        removeItemFromCart(product._id);
                        setReload(!reload);
                    }}
                    className="btn btn-success mt-2 mb-2"
                >
                    Remove from cart
                </button>
            )
        );
    };
    return (
            <div className="card">
                <ImageHelper product={product} />
                {getARedirect(redirect)}
                    <div className="card-img-overlay d-flex justify-content-end">
                        <a href="#" className="card-link text-danger like">
                            <i className="fas fa-heart"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{cartTitle}</h2>
                        <p className="card-text">{cartDescrption}</p>
                        <div className="buy d-flex justify-content-between align-items-center">
                            <div className="price text-success"><h5 className="mt-4">${cartPrice}</h5></div>
                            <div className="row">
                                <div className="col-12"> {showAddToCart(addtoCart)}</div>
                                <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
                            </div>
                        </div>
                    </div>
            </div>
    );
};

export default Card;