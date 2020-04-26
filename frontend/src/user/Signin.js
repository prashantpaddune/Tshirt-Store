import React, {useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";

const Signin = () => {

    const signInForm = () => {
        return(
            <form>
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left mb-5">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                            <small className="form-text text-success">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </form>
        )
    }

    return(
        <Base title="Sign In" description="Sign In Here!">
            {signInForm()}
        </Base>
    )
}

export default Signin;