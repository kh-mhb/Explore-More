import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
    let { picture, tittle, space } = job;
    return (

        <div className="max-w-sm bg-cyan-50 rounded-3xl p-4 ms-5 me-5 ">
            <div className="flex items-center justify-start  h-30">
                <img className="h-9  rounded-full" src={picture} alt="Logo" />
            </div>
            <div className="p-2">
                <h5 className="font-medium text-sm mb-2 text-start">{tittle}</h5>
                <p className="text-gray-700 text-xs text-start">
                    {space}
                </p>
            </div>
        </div>


    );
};

export default JobCard;