import React from 'react';
import './FeaturedJobList.css';

const FeaturedJobList = ({ featuredJob }) => {
    console.log(featuredJob);
    let { companyName, educationalRequirement, email,
        experience, jobDescription, jobResponsibility, jobTitle, location, logo,
        phone, salary
    } = featuredJob;
    return (
        <div>
            <div className='joblist-card'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className=" pt-20 job-list-photo">
                        <img src={logo} alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{jobTitle}</h2>
                        <p>{companyName}</p>
                        <div className='grid grid-cols-2 gap-4'>
                            <button className=' btn btn-outline btn-info'>Remote</button>
                            <button className=' btn btn-outline btn-info'>Full Time</button>
                        </div>
                        <div className='flex  justify-center mt-2 items-center gap-10'>
                            <p className='text-xs font-mono'>{location}</p>
                            <p className='text-xs font-mono'>Salary:{salary}</p>
                        </div>

                        <div className="card-actions">
                            <button className="btn btn-ghost mt-1">View Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeaturedJobList;