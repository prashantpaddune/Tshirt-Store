import React, {useState} from "react";
import Base from "../core/Base";
import {Link, Redirect} from "react-router-dom";

import {signin, authenticate, isAuthenticated} from "../auth/helper";

const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    })

    const {email, password, error, loading, didRedirect} = values;

    const {user} = isAuthenticated();

    const onhandleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true})
        signin({email, password})
            .then(data => {
                if(data.error) {
                    setValues({...values, error: data.error, loading: false})
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            email: "",
                            password: "",
                            didRedirect: true})
                    })
                }
            })
            .catch(console.log("Signin failed"));
    }

    const performRedirect = () => {
        if (didRedirect) {
            if (user && user.role ===1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }
    }

    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading....</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return(
            <div className="alert alert-danger" role="alert" style={{display: error ? "" : "none"}}>
                {error}
            </div>
        )
    }

    const signInForm = () => {
        return(
            <form>
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left mb-5">
                        <div className="form-group">
                            <label>Email address</label>
                            <input onChange={onhandleChange("email")} value={email} type="email" className="form-control" placeholder="Enter email" />
                            <small className="form-text text-success">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={onhandleChange("password")} value={password} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button onClick={onSubmit} type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </form>
        )
    }

    return(
        <Base title="Login" description="Login Here!">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
        </Base>
    )
}

export default Signin;