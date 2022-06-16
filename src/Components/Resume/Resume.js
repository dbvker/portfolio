import React from 'react';

import './Resume.css';

import ResumePDF from '../../Assets/Resume.pdf';

const Resume = () => {
    return (
        <div className='resume-wrapper' id='resume'>
            <div className='container'>
                <h1>My Resume</h1>
                <object data={ResumePDF} className='resume-obj' width='800' height='800'></object>
            </div>
        </div>
    );
};

export default Resume;
