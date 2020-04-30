import React, {Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";
import "../styles.css"

const currentTab = (history, path) => {
    if (history.location.pathname === path){
        return { "font-weight": "bold" };
    } else {
        return { "font-weight": "normal" };
    }
}

const Menu = ({ history }) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler navbar-toggler-right border-0 p-0" type="button"
                        data-toggle="collapse" data-target="#navbar20">
                    <p className="navbar-brand text-white mb-0">
                        <img src="https://img.icons8.com/cotton/50/000000/t-shirt.png" />
                        Tshirt Store </p>
                </button>
                <div className="collapse navbar-collapse" id="navbar20">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" style={currentTab(history, "/")} className="nav-link text-white">Home</Link>
                        </li>
                        {isAuthenticated() && isAuthenticated().user.role === 0 && (
                            <li className="nav-item">
                                <Link style={currentTab(history, "/user/dashboard")} className="nav-link text-white" to="/user/dashboard">Dashboard</Link>
                            </li>
                        ) }
                        {isAuthenticated() && isAuthenticated().user.role === 1 && (
                            <li className="nav-item">
                                <Link style={currentTab(history, "/admin/dashboard")} className="nav-link text-white" to="/admin/dashboard">Admin Dashboard</Link>
                            </li>
                        )}
                    </ul>
                    <p className="d-none d-md-block lead mb-0 text-white">
                        <img src="https://img.icons8.com/cotton/50/000000/t-shirt.png" /> <b>Tshirt Store</b>
                    </p>
                    <ul className="navbar-nav ml-auto">
                        {!isAuthenticated() && (
                            <Fragment>
                                <li className="nav-item">
                                    <Link style={currentTab(history, "/signup")} className="nav-link text-white" to="/signup">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={currentTab(history, "/signin")} className="nav-link text-white" to="/signin">Login</Link>
                                </li>
                            </Fragment>
                        )}
                        {isAuthenticated() && (
                            <li className="nav-item">
                                <span className="nav-link text-danger font-weight-bold" onClick={() => {
                                    signout(() => {
                                    history.push("/");
                                    });
                                }}>Logout
                                </span>
                            </li>
                        )}
                        <li className="nav-item mx-1">
                            <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">
                                <img src="https://img.icons8.com/small/32/000000/shopping-cart.png"/>
                            </Link>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default withRouter(Menu);
