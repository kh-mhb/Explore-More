import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='root-div'>
            <div className="daiso-accordion ">
                <div className="daiso-accordion-header">Accordion Header 1</div>
                <div className="daiso-accordion-content">
                    <p>Accordion Content 1</p>
                </div>

                <div className="daiso-accordion-header">Accordion Header 2</div>
                <div className="daiso-accordion-content">
                    <p>Accordion Content 2</p>
                </div>

                <div className="daiso-accordion-header">Accordion Header 3</div>
                <div className="daiso-accordion-content">
                    <p>Accordion Content 3</p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;