import React, {useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";

const Signup = () => {

    const signUpForm = () => {
        return(
            <form>
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left mb-5">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="name" className="form-control" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
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
        <Base title="Sign Up" description="Sign Up Here!">
            {signUpForm()}
        </Base>
    )
}

export default Signup;