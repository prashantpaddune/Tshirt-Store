import React from "react";
import {Link, withRouter} from "react-router-dom";

const Menu = () => {
    return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">A. Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Sign In</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Sign Out</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default withRouter(Menu);