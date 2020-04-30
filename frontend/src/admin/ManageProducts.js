import React, {useEffect, useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../auth/helper";
import {deleteProduct, getAllProducts} from "./helper/adminapicall";

const ManageProducts = () => {

    const [products, setProducts] = useState([])

    const {user, token} = isAuthenticated();

    const preload = () => {
        getAllProducts()
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setProducts(data);
                }
            });
    };

    useEffect(() => {
        preload();
    }, []);

    const deleteMyProduct = productId => {
        deleteProduct(productId, user._id, token)
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    preload();
                }
            })

    }

    return(
        <Base title="Manage Products" description="Manage products here" className="container bg-white p-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center my-3">Total products</h2>

                    {products.map((product, index) => {
                        return(
                            <div key={index} className="row text-center mb-2 ">
                                <div className="col-4">
                                    <h3 className="text-left">{product.name}</h3>
                                </div>
                                <div className="col-4">
                                    <Link
                                        className="btn btn-success"
                                        to={`/admin/product/update/${product._id}`}
                                    >
                                        <span className="">Update</span>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <button onClick={() => {
                                        deleteMyProduct(product._id)
                                    }} className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <Link className="btn btn-primary" to={`/admin/dashboard`}>
                        <span className="">Go back</span>
                    </Link>
                </div>
            </div>
        </Base>
    )
}

export default ManageProducts;