import React from 'react';
import './FrontDiv.css'
import banner from './banner.png';
import JobCateGoryList from '../JobCategoryList/JobCateGoryList';

const FrontDiv = () => {
    return (
        <div>
            <div className=' grid md:grid-cols-2 mt-3	gap-4 border-4 bg-slate-100 border-solid items-center justify-center' >
                <div className='ms-32 mt-2 py-5 px-3' >
                    <div className='text-start '>
                        <h3 className='mb-2 font-semibold text-2xl p-1'>One Step  Closer To Your  <br /> <span className='text-sky-600'>Dream Job</span> </h3>
                        <p className='mb-3 p-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish. </p>
                        <button className='btn mt-1.5'>Get Started</button>
                    </div>
                </div>
                <div >
                    <img src={banner} className='w-4/6 ms-2' alt="" />

                </div>
            </div>
            <div>
                <JobCateGoryList></JobCateGoryList>
            </div>
        </div>

    );
};

export default FrontDiv;