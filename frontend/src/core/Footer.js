import React, {Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import "../styles.css"
import {isAuthenticated} from "../auth/helper";

const Footer = () => {
    return(
        <div className="text-white">
            <footer className="page-footer font-small pt-4 text-white bg-success">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3 ml-2">
                            <h5 className="text-uppercase font-weight-bold">Tshirt Store</h5>
                            <p className="text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                            <div className="col-md-2">
                            </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase font-weight-bold">Site Map</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="text-dark" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="text-dark" to="/">Cart</Link>
                                </li>
                                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                <li>
                                    <Link className="text-dark" to="/user/dashboard">Dashboard</Link>
                                </li>
                                ) }
                                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                <li>
                                    <Link className="text-dark" to="/admin/dashboard">A. Dashboard</Link>
                                </li>
                                ) }
                                {!isAuthenticated() && (
                                    <Fragment>
                                        <li>
                                            <Link className="text-dark" to="/signin">Login</Link>
                                        </li>
                                        <li>
                                            <Link className="text-dark" to="/signup">Register</Link>
                                        </li>
                                    </Fragment>
                                )}
                            </ul>
                        </div>
                        </div>
                    </div>
            </footer>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://google.com"> Prashant Paddune</a>
            </div>
        </div>
    )
};

export default withRouter(Footer);