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
                    <table className="table table-bordered text-center">
                        <thead>
                        <tr>
                            <th scope="col">All Products</th>
                            <th scope="col">Update/Change</th>
                            <th scope="col">Delete/Remove</th>
                        </tr>
                        </thead>
                        <tbody>

                        {products.map((product, index) => {
                            return(
                                <tr>
                                    <td>{product.name}</td>
                                    <td>
                                        <Link className="btn btn-success" to={`/admin/product/update/${product._id}`}>
                                            <span className="">Update</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            deleteMyProduct(product._id)
                                        }} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                    <br/>
                    <Link className="btn btn-primary" to={`/admin/dashboard`}>
                        <span className="">Go back</span>
                    </Link>
                </div>
            </div>
        </Base>
    )
}

export default ManageProducts;