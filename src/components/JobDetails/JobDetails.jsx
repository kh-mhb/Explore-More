import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SharedBanner from "../SharedBanner/SharedBanner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faSignsPost, faPhoneFlip, faMailReply, faLocation } from '@fortawesome/free-solid-svg-icons'

const handleTostoreAppliedJob = (jobDetails) => {
    let job = getJobs();
    job = [...job, jobDetails];
    console.log("clicked");
    localStorage.setItem("applied-jobs", JSON.stringify(job));
};

const getJobs = () => {
    let jobs = [];
    const storedJobs = localStorage.getItem("applied-jobs");
    if (storedJobs) {
        jobs = JSON.parse(storedJobs);
    }
    return jobs;
};
const JobDetails = () => {
    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    const [jobDetails, setJobDetails] = useState();

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                const job = data.find((job) => job.id == id);
                setJobDetails(job);
            });
    }, []);

    console.log(jobDetails);
    // let { logo } = jobDetails;
    return (
        <div>
            <SharedBanner>
                <span className="font-bold text-3xl mb-10">Job Details</span>
            </SharedBanner>

            <div className=" grid grid-cols-2 gap-4 p-20 bg-sky-50  ">
                <div className="p-8 ">
                    <h1 className="p-2 font-mono">
                        <span className="font-semibold">Job Description:</span>:
                        {jobDetails?.jobDescription}{" "}
                    </h1>
                    <h1 className="p-2 font-mono">
                        {" "}
                        <span className="font-semibold">Job responsibility:</span>{" "}
                        {jobDetails?.jobResponsibility}{" "}
                    </h1>
                    <h1 className="p-2 font-mono">
                        {" "}
                        <span className="font-semibold">Educational Requirement:</span>{" "}
                        {jobDetails?.educationalRequirement}{" "}
                    </h1>
                    <h1 className="p-2 font-mono">
                        <span className="font-semibold">Experiance:</span>{" "}
                        {jobDetails?.experience}{" "}
                    </h1>
                </div>
                <div className="p-8 mt-1 bg-sky-100">
                    <div className="font-bold p-2 mb-3 border-b-2 border-slate-950">
                        Job Details
                    </div>

                    <h1 className="font-mono">
                        <span className="font-semibold ">
                            {" "}
                            <FontAwesomeIcon className="me-1" icon={faDollarSign} />
                            Salary:
                        </span>{" "}
                        {jobDetails?.salary}{" "}
                    </h1>
                    <h1 className="font-mono">
                        <span className="font-semibold ">
                            <FontAwesomeIcon className="me-1" icon={faSignsPost} />
                            Job Tittle:
                        </span>{" "}
                        {jobDetails?.jobTitle}
                    </h1>
                    <div>
                        <h1 className="font-bold px-2 border-b-2 border-slate-950 py-2 mb-4">
                            Contact Information
                        </h1>
                    </div>
                    <hr />
                    <h1 className="font-mono">
                        <span className="font-semibold">
                            <FontAwesomeIcon className="me-1" icon={faPhoneFlip} />
                            Phone:
                        </span>{" "}
                        {jobDetails?.phone}
                    </h1>
                    <h1 className="font-mono">
                        <span className="font-semibold">
                            {" "}
                            <FontAwesomeIcon className="me-1" icon={faMailReply} />
                            Email:
                        </span>
                        {jobDetails?.email}{" "}
                    </h1>
                    <h1 className="font-mono">
                        <span className="font-semibold">
                            {" "}
                            <FontAwesomeIcon className="me-1" icon={faLocation} />
                            Address:
                        </span>{" "}
                        {jobDetails?.location}{" "}
                    </h1>
                    <button
                        className="btn bg-blue-600 hover:bg-blue-800 w-full mt-10"
                        onClick={() => handleTostoreAppliedJob(jobDetails)}
                    >
                        {" "}
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
