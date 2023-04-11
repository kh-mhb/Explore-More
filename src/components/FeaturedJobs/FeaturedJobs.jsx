import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import FeaturedJobList from "../FeaturedJobList/FeaturedJobList";

const FeaturedJobs = () => {
    let [featuredJobs, setFeaturedJobs] = useState([]);
    const [disabled, setDisabled] = useState(false);
    // console.log(featuredJobs);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setFeaturedJobs(data.slice(0, 4)));
    }, []);
    const handlerToShowAll = () => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setFeaturedJobs(data));
        setDisabled(true);
    };

    return (
        <div>
            <div className="text-center mt-3">
                <h1 className="font-semibold text-3xl mb-5 mt-10 ">Featured Jobs</h1>
                <p className="font-thin text-base mb-3">
                    Explore thousands of job opportunities with all the information you
                    need. Its your future{" "}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 featured-job my-10">
                {featuredJobs.map((featuredJob) => (
                    <FeaturedJobList
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></FeaturedJobList>
                ))}
            </div>
            <div className="text-center">
                <button
                    className={`btn btn-warning my-6 w-40 ${disabled ? "hidden" : ""} `}
                    onClick={handlerToShowAll}
                >
                    Show All
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
