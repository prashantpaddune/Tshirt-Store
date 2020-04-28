import React from "react";
import Base from "../core/Base";
import {isAuthenticated} from "../auth/helper";
import {Link} from "react-router-dom";

const AdminDashBoard = () => {

    const {user: {name, email, role}} = isAuthenticated();

    const adminLeftSide = () => {
        return(
            <div className="card">
                <h4 className="card-header bg-dark text-white text-center">
                    Admin Navigation
                </h4>

                <ul className="list-group">
                    <li className="list-group-item text-center">
                        <Link to="/admin/dashboard" className="text-success"> About </Link>
                    </li>
                    <li className="list-group-item text-center">
                        <Link to="/admin/create/category" className="text-success"> Create Category</Link>
                    </li>
                    <li className="list-group-item text-center">
                        <Link to="/admin/categories" className="text-success"> Manage Categories</Link>
                    </li>
                    <li className="list-group-item text-center">
                        <Link to="/admin/create/product" className="text-success"> Create Product</Link>
                    </li>
                    <li className="list-group-item text-center">
                        <Link to="/admin/products" className="text-success"> Manage Products</Link>
                    </li>
                    <li className="list-group-item text-center">
                        <Link to="/admin/orders" className="text-success"> Manage Orders</Link>
                    </li>
                </ul>
            </div>
        )
    }


    const adminRightSide = () => {
        return(
            <div className="card mb-4">
                <h1 className="card-header">Admin Information</h1>
                <url className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">
                            Name: </span> {name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">
                            email: </span> {email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-danger">
                            Your are Admin </span>
                    </li>
                </url>
            </div>
        )
    }

    return(
        <Base title="Welcome to Admin Dashboard"
              description="Manage all your products !"
              className="container bg-success p-4">

            <div className="row">
                <div className="col-3">
                    {adminLeftSide()}
                </div>
                <div className="col-9">
                    {adminRightSide()}
                </div>
            </div>
        </Base>
    )
}

export default AdminDashBoard;