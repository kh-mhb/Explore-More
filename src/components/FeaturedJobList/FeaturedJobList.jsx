import React from 'react';
import './FeaturedJobList.css';

const FeaturedJobList = ({ featuredJob }) => {
    console.log(featuredJob);
    let { companyName, educationalRequirement, email,
        experience, jobDescription, jobResponsibility, jobTittle, location, logo,
        phone, salary
    } = featuredJob;
    return (
        <div>
            <div className='joblist-card'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 job-list-photo">
                        <img src={logo} alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeaturedJobList;