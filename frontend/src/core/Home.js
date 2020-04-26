import React from "react";
import { API } from "../backend";

export default function Home() {
    console.log("Api is", API);

    return(
        <div>
            <hi className="text-white">Hello</hi>
        </div>
    )
}