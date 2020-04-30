import React, {useEffect, useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {getProduct, updateProduct, getAllCategories} from "./helper/adminapicall";
import {isAuthenticated} from "../auth/helper";

const UpdateProduct = ({match}) => {

    const {user, token} = isAuthenticated()

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        categories: "",
        category: "",
        loading: "",
        error: "",
        createdProduct: "",
        getaRedirect: "",
        formData: ""
    });

    const {name, description, price, stock, error, category, loading, categories, createdProduct, formData, getaRedirect, photo} = values

    const preload = (productId) => {
        getProduct(productId).then(data => {
            if (data.error) {
                setValues({...values, error: data.error});
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    category: data.category._id,
                    stock: data.stock,
                    formData: new FormData(),
                });
                preloadCategories();
            }
        });
    };

    const preloadCategories = () => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error});
                } else {
                    setValues({
                        categories: data,
                        formData: new FormData()
                    })
                }
            })
    }

    useEffect(() => {
        preload(match.params.productId);
    }, [])

    const onhandleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value
        formData.set(name, value);
        setValues({...values, [name]: value});
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: "", loading: true})
        updateProduct(match.params.productId, user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setValues({
                        ...values,
                        name: "",
                        description: "",
                        price: "",
                        photo: "",
                        stock: "",
                        loading: "",
                        createdProduct: data.name
                    });
                }
            });
    };

    const successMessage = () => {
        return(
            <div className="col-md-6 offset-sm-3 text-left mb-2">
                <div className="alert alert-success" role="alert" style={{display: createdProduct ? "" : "none"}}>
                    <h4>{createdProduct}  Updated successfully</h4>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return(
            <div className="col-md-6 offset-sm-3 text-left mb-2">
                <div className="alert alert-danger" role="alert" style={{display: error ? "" : "none"}}>
                    <h4>{error}  failed</h4>
                </div>
            </div>
        )
    }

    const goBack = () => {
        return(
            <div className="mt-5">
                <Link className="btn btn-sm btn-info mb-3" to="/admin/products" >
                    Go back
                </Link>
            </div>
        )};

    const createProductForm = () => (
        <form >
            <span>Post photo</span>
            <div className="form-group">
                <label className="btn btn-block btn-primary">
                    <input
                        onChange={onhandleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                    />
                </label>
            </div>
            <div className="form-group">
                <input
                    onChange={onhandleChange("name")}
                    name="photo"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
        <textarea
            onChange={onhandleChange("description")}
            name="photo"
            className="form-control"
            placeholder="Description"
            value={description}
        />
            </div>
            <div className="form-group">
                <input
                    onChange={onhandleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
            </div>
            <div className="form-group">
                <select
                    onChange={onhandleChange("category")}
                    className="form-control"
                    placeholder="Category"
                >
                    <option>Select</option>
                    { categories &&
                    categories.map((cate, index) => (
                        <option key={index} value={cate._id}>{cate.name}</option>
                    ))
                    }
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={onhandleChange("stock")}
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    value={stock}
                />
            </div>

            <button type="submit" onClick={onSubmit} className="btn btn-outline-primary">
                Update Product
            </button>
        </form>
    );

    return(
        <Base title="Update Product" description="Product Updating" className="container bg-white p-4">
            <div className="row rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {createProductForm()}
                </div>
            </div>
            {goBack()}
        </Base>
    )
}

export default UpdateProduct;