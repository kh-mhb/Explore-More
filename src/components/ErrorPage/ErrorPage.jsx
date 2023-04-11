import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from './notFound.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>

                <img className='error-image' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="404 Not Found" style={{ width: '40%' }} />


            </div>
        </div>
    );
};

export default ErrorPage; <h3>Hello i am from error page</h3>