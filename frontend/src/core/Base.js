import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Base = ({
    title="My Title",
    description="My description",
    className="bg-dark text-white p-4",
    children
}) => {
    return(
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="bg-dark text-white text-center mt-5">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
            </div>
            <div className={className}>{children}</div>
            <Footer />
        </div>
    )
}

export default Base;