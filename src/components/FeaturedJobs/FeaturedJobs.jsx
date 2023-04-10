import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import FeaturedJobList from '../FeaturedJobList/FeaturedJobList';

const FeaturedJobs = () => {

    let [featuredJobs, setFeaturedJobs] = useState([]);
    // console.log(featuredJobs);
    useEffect(() => {

        fetch('data3.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));

    }, [])


    return (
        <div>
            <div className='text-center mt-3'>
                <h1 className='font-semibold text-3xl mb-1' mt-5>Featured Jobs</h1>
                <p className='font-thin text-base mb-3'>Explore thousands of job opportunities with all the information you need. Its your future </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>

                {
                    featuredJobs.map(featuredJob => <FeaturedJobList
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    >


                    </FeaturedJobList>)
                }

            </div>


        </div>
    );
};

export default FeaturedJobs;