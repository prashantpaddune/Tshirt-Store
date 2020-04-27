import React, {useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {signup} from "../auth/helper";

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const {name, email, error, password, success} = values

    const onhandleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error: false})
        signup({name, email, password})
            .then(data => {
                if (data.error) {
                    setValues({...values,error: data.error, success: false})
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    });
                }
            })
            .catch(console.log("Error in Sign Up"))
    }

    const successMessage = () => {
        return(
            <div className="col-md-6 offset-sm-3 text-left mb-2">
                <div className="alert alert-success" role="alert" style={{display: success ? "" : "none"}}>
                    New Account Created ! <Link to="/signin">Login Here</Link>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return(
            <div className="alert alert-danger" role="alert" style={{display: error ? "" : "none"}}>
                {error}
            </div>
        )
    }

    const signUpForm = () => {
        return(
            <form>
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left mb-5">
                        <div className="form-group">
                            <label>Name</label>
                            <input onChange={onhandleChange("name")} type="name" className="form-control" placeholder="Enter Name" value={name} />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input onChange={onhandleChange("email")} type="email" className="form-control" placeholder="Enter email" value={email}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={onhandleChange("password")} type="password" className="form-control" placeholder="Password" value={password} />
                        </div>
                        <button onClick={onSubmit} type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </form>
        )
    }

    return(
        <Base title="Sign Up" description="Sign Up Here!">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
        </Base>
    )
}

export default Signup;