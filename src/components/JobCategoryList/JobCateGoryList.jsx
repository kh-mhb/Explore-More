import React, { useEffect, useState } from 'react';
import './JobCategoryList.css';
import JobCard from '../JobCard/JobCard';

const JobCateGoryList = () => {
    let [jobs, setJobs] = useState([]);
    // console.log(jobs);
    useEffect(() => {

        fetch('data2.json')
            .then(res => res.json())
            .then(data => setJobs(data));

        1
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h3 className='font-semibold mt-3 text-2xl'>Job Category List</h3>
                <p className='font-thin text-xs mt-1 mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid gap-6 justify-center items-center md:grid-cols-4 job-category '>
                {
                    jobs.map(job => <JobCard
                        key={job.index}
                        job={job}
                    >

                    </JobCard>)
                }
            </div>
        </div>
    );
};

export default JobCateGoryList;