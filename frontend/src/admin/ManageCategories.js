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
                    <table className="table table-bordered text-center">
                        <thead>
                        <tr>
                            <th scope="col">Category Name</th>
                            <th scope="col">Update/Change</th>
                            <th scope="col">Delete/Remove</th>
                        </tr>
                        </thead>
                        <tbody>

                        {category.map((category, index) => {
                            return(
                                <tr>
                                    <td>{category.name}</td>
                                    <td>
                                        <Link className="btn btn-success" to={`/admin/category/update/${category._id}`}>
                                        <span className="">Update</span></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            deleteMyCategory(category._id)
                                        }} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                )})}
                        </tbody>
                    </table>
                    <br/>
                    <Link className="btn btn-primary" to={`/admin/dashboard`}>
                        <span className="">Go back</span>
                    </Link>
                </div>
            </div>
        </Base>
    )
}

export default ManageCategories;