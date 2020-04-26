import React from "react";
import { API } from "../backend";
import Base from "./Base";

const Home = () => {
    console.log("Api is", API);

    return(
        <Base title="Tshirt Store" description="Welcome to Tshirt Store">
            <h1 className="text-white">Welcome</h1>
        </Base>
    )
}

export default Home;