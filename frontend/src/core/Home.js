import React from "react";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
    console.log("Api is", API);

    return(
        <Base>
            <hi className="text-white">Hello</hi>
        </Base>
    )
}