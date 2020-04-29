import React, {useEffect, useState} from "react";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import {getAllProducts} from "./helper/coreapicalls";


const Home = () => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const loadAllProduct = () => {
        getAllProducts()
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setProducts(data);
                }
            });
    };

    useEffect(() => {
        loadAllProduct();
    }, [])

    return(
        <Base title="Tshirt Store" description="Welcome to Tshirt Store">
            <div className="row">
                {products.map((product, index) => {
                    return(
                        <div key={index} className="col-4 mb-4">
                            <Card product={product}/>
                        </div>
                    )
                })}
            </div>
        </Base>
    )
}

export default Home;