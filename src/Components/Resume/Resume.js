import React from 'react';

import './Resume.css';

import ResumePDF from '../../Assets/Resume.pdf';

const Resume = () => {
    return (
        <div className='resume-wrapper' id='resume'>
            <div className='container'>
                <h1>📝 My Resume</h1>
                <object data={ResumePDF} type='application/pdf' className='resume-obj'></object>
                <a href={ResumePDF} download='Dylan Baker Resume'><button className='download-btn'>Download Resume</button></a>
            </div>
        </div>
    );
};

export default Resume;
