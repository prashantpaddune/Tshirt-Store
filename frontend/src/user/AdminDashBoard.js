import React from "react";
import Base from "../core/Base";
import {isAuthenticated} from "../auth/helper";
import {Link} from "react-router-dom";

const AdminDashBoard = () => {

    const {user: {name, email, role}} = isAuthenticated();

    const adminLeftSide = () => {
        return(
            <div className="row bootstrap snippets text-center">
                <div className="col-md-3">
                    <div className="panel widget">
                        <div className="widget-body text-center">
                            <img alt="Profile Picture" className="widget-img img-circle img-border-light"
                                 src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                             <div>
                                <h4 className="mar-no m-2">{name}</h4>
                                <h5 className="mar-no m-2">{email}</h5>
                                <p className="mar-no m-2 badge badge-danger">Admin</p>
                             </div>
                        </div>
                        </div>
                    </div>
                </div>
                )
    }


    const adminRightSide = () => {
        return(
            <div className="row mb-3 text-center">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white">
                        <div className="card-body bg-success">
                            <div className="rotate">
                                <i className="fa fa-plus fa-4x"/>
                            </div>
                            <Link to="/admin/create/category" style={{color: "white"}}>Create Category</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x"/>
                            </div>
                            <Link to="/admin/categories" style={{color: "white"}}>Manage Category</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-plus fa-4x"/>
                            </div>
                            <Link to="/admin/create/product" style={{color: "white"}}>Create Product</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-share fa-4x"/>
                            </div>
                            <Link to="/admin/products" style={{color: "white"}}>Manage Products</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-dark">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-shopping-bag fa-4x"/>
                            </div>
                            <Link to="/admin/orders" style={{color: "white"}}> Manage Orders</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    return(
        <Base title="Welcome to Admin Dashboard"
              description="Manage all your products !"
              className="container-fluid p-4">

            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                    {adminLeftSide()}
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                    {adminRightSide()}
                </div>
            </div>
        </Base>
    )
}

export default AdminDashBoard;