import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faDollar,
    faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleAppliedJob = ({ job }) => {
    const { jobTitle, companyName, jobDescription, salary, location, logo, id } =
        job;
    return (
        <div className="root-div p-10 ">
            <div className="card card-side shadow-lg img-part">
                <img src={logo} alt="Company_Name" />
                <div className="card-body">
                    <h2 className="card-title ms-1">{jobTitle}</h2>
                    <p className="text-xs font-thin ms-1">{companyName}</p>
                    <div className="btn-grp">
                        <button className="text-left font-mono text-xs">Remote</button>
                        <button className="text-left font-mono text-xs">Online</button>
                        <Link
                            to={`/job_details/${id}`}
                            className="text-right font-mono bg-warning hover:bg-yellow-100"
                            style={{ position: "absolute", top: "40%", right: "40px" }}
                        >
                            View Details
                        </Link>
                    </div>
                    <div className="flex gap-2 ms-1">
                        <h1 className="font-mono text-xs">
                            {" "}
                            <FontAwesomeIcon icon={faDollar} className="me-1" />
                            {salary}
                        </h1>
                        <h2 className="font-mono text-xs">
                            {" "}
                            <FontAwesomeIcon icon={faLocation} className="me-1" />
                            {location}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAppliedJob;
