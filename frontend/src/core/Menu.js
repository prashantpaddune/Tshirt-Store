import React, {Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";

const currentTab = (history, path) => {
    if (history.location.pathname === path){
        return { color: "#2ecc72" };
    } else {
        return { color: "#FFFFFF" };
    }
}

const Menu = ({ history }) => {
    return(
    <nav className="navbar navbar-expand navbar-dark bg-secondary">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link style={currentTab(history, "/")} className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">Cart</Link>
                </li>
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">Dashboard</Link>
                    </li>
                ) }
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">A. Dashboard</Link>
                </li>
                )}
                {!isAuthenticated() && (
                <Fragment>
                <li className="nav-item">
                    <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">Register</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">Login</Link>
                </li>
                </Fragment>
                )}
                {isAuthenticated() && (
                    <li className="nav-item">
                        <span className="nav-link text-warning font-weight-bold" onClick={() => {
                            signout(() => {
                                history.push("/");
                            });
                        }}>Logout
                        </span>
                    </li>
                )}
            </ul>
        </div>
    </nav>
    )
}

export default withRouter(Menu);
