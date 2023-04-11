import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='root-div '>

            <h3 className='text-center font-serif text-2xl font-medium  mb-5 contrast-200  '>Lets Learn More About React</h3>

            <div className="daiso-accordion ">
                <div className="daiso-accordion-header">What is useRef and write about it uses ?</div>
                <div className="daiso-accordion-content">
                    <p>useRef is a built-in hook in React that provides a way to create a mutable reference to a DOM element or any other value. It returns an object that contains a current property which can be assigned any value. The current property can be accessed and modified throughout the lifecycle of a component.</p>
                </div>

                <div className="daiso-accordion-header">What is useMemo and write about it uses ?</div>
                <div className="daiso-accordion-content">
                    <p>useMemo is a React Hook that is used for optimizing the performance of a component. It is used to memoize the result of a function so that the function is only re-executed if any of its inputs have changed. Memoization is the process of caching the result of a function based on its input parameters, so that if the function is called again with the same parameters, the cached result is returned instead of executing the function again.</p>
                </div>

                <div className="daiso-accordion-header">When ContextApi is used in React Js ?</div>
                <div className="daiso-accordion-content">
                    <p>The Context API in React JS is typically used when you have data that needs to be shared across multiple components in a React application, but that data is not necessarily part of the parent-child relationship.</p>
                </div>
                <div className="daiso-accordion-header">what is custom hook in react ?</div>
                <div className="daiso-accordion-content">
                    <p>In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to share logic between different components. Custom hooks provide a way to abstract complex logic and reuse it in multiple components, allowing you to keep your code organized and easy to maintain.</p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;