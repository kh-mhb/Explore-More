import React from 'react';
import './AppliedJobs.css';
import SharedBanner from '../SharedBanner/SharedBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDollar, faLocation } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobs = localStorage.getItem("applied-jobs");
        if (storedJobs) {
            let jobs = JSON.parse(storedJobs);
            setAppliedJobs(jobs);
        }
    }, []);
    console.log(appliedJobs);
    return (
        <div>
            <SharedBanner>
                <h1 className="text-3xl font-bold py-4">Applied Jobs</h1>
            </SharedBanner>
            {appliedJobs.map((job, idx) => (
                <SingleAppliedJob key={idx} job={job}></SingleAppliedJob>

            ))}
        </div>
    );
};

export default AppliedJobs;