import React, {useEffect, useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../auth/helper";
import {deleteCategory, getAllCategories} from "./helper/adminapicall";

const ManageCategories = () => {

    const [category, setCategory] = useState([])

    const {user, token} = isAuthenticated();

    const preload = () => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setCategory(data);
                }
            });
    };

    useEffect(() => {
        preload();
    }, []);

    const deleteMyCategory = categoryId => {
        deleteCategory(categoryId, user._id, token)
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    preload();
                }
            })

    }

    return(
        <Base title="Manage Categories" description="Manage Categories here !" className="container bg-white p-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center my-3">Total Categories</h2>

                    {category.map((category, index) => {
                        return(
                            <div key={index} className="row text-center mb-2 ">
                                <div className="col-4">
                                    <h3 className="text-left">{category.name}</h3>
                                </div>
                                <div className="col-4">
                                    <Link
                                        className="btn btn-success"
                                        to={`/admin/category/update/${category._id}`}
                                    >
                                        <span className="">Update</span>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <button onClick={() => {
                                        deleteMyCategory(category._id)
                                    }} className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <Link className="btn btn-info" to={`/admin/dashboard`}>
                        <span className="">Go back</span>
                    </Link>
                </div>
            </div>
        </Base>
    )
}

export default ManageCategories;