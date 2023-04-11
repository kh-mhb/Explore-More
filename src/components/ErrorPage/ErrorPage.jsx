import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from './notFound.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div>
                <div className='error-img' >
                    <img className='ir-img' src={errorImg} alt="404 Not Found" />
                </div>
                <div style={{ textAlign: 'center' }}>

                    <h1>Page Not Found</h1>
                    <p>The page you are looking for cannot be found.</p>
                    <p>Please check the URL and try again. If you believe this is an error, please contact the website administrator.</p>
                    <Link to="/home" style={{ color: 'blue' }}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage; <h3>Hello i am from error page</h3>