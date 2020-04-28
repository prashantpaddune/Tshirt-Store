import React, {useState} from "react";
import Base from "../core/Base";
import {isAuthenticated} from "../auth/helper";
import {Link} from "react-router-dom";
import {createCategory} from "./helper/adminapicall";

const AddCategory = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated()

    const goBack = () => {
        return(
        <div className="mt-5">
            <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard" >
                Go back
            </Link>
        </div>
        )};

    const successMessage = () => {
        if (success) {
            return <h4 className="text-success"> Category created successfully</h4>
        }
    }

    const errorMessage = () => {
        if (error) {
            return <h4 className="text-success"> Failed</h4>
        }
    }

    const onHandleChange = event => {
        setError("");
        setName(event.target.value)
    };

    const onSubmit = (event) => {
      event.preventDefault();
      setError("");
      setSuccess(false);

      createCategory(user._id, token, {name})
          .then(data => {
              if (data.error) {
                  setError(true)
              } else {
                  setError("")
                  setSuccess(true)
                  setName("")
              }
          })
    }

    const myCategoryForm = () => {
        return(
        <form>
            <div className="form-group">
                <p className="lead">Enter the Category</p>
                <input
                    type="text"
                    className="form-control my-3"
                    onChange={onHandleChange}
                    value={name}
                    autoFocus
                    required
                    placeholder="Ex. Summer"/>
                <button onClick={onSubmit} className="btn btn-outline-info"> Create Category</button>
            </div>
        </form>
        )};

    return(
        <Base title="Create Category" description="Add a new Category !" className="container bg-white p-4">
            <div className="row bg-white">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    )
}

export default AddCategory;