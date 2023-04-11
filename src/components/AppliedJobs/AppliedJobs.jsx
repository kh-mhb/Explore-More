import React from 'react';
import './AppliedJobs.css';

const AppliedJobs = () => {
    return (
        <div className='root-div p-10 '>
            <div className="card card-side shadow-lg img-part">
                <img src="https://st2.depositphotos.com/3758943/6040/i/450/depositphotos_60400957-stock-photo-the-man-in-the-office.jpg" alt="Company_Name" />
                <div className="card-body">
                    <h2 className="card-title">Here is Job Tittle</h2>
                    <p className='text-xs font-thin'>Here is company name</p>
                    <div className='btn-grp'>
                        <button className='text-left font-mono'>Remote</button>
                        <button className='text-left font-mono'>Online</button>
                        <button className='text-right font-mono bg-warning hover:bg-yellow-100' style={{ position: 'absolute', top: '40%', right: '40px' }}>View Details</button>
                    </div>
                    <div className='flex gap-2'>
                        <h1>Salary</h1>
                        <h2>Location</h2>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default AppliedJobs;