import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Base = ({
    title="My Title",
    description="My description",
    className="p-4",
    children
}) => {
    return(
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="text-center mt-5">
                    <h2 className="display-4 font-weight-bold">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
            </div>
            <div className={className}>{children}</div>
            <Footer />
        </div>
    )
}

export default Base;