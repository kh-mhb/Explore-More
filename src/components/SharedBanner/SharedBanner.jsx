import React from "react";
import "./SharedBanner.css";

const SharedBanner = ({ children }) => {
    return (
        <div className="shared-banner">
            <h1 className="text-center">{children}</h1>
        </div>
    );
};

export default SharedBanner;
