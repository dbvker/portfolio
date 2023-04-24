import React from 'react';

import './Skills.css';
import html from '../../Assets/skillsSVG/html.svg';
import css from '../../Assets/skillsSVG/css.svg';

import javascript from '../../Assets/skillsSVG/javascript.svg';
import react from '../../Assets/skillsSVG/react.svg';
import redux from '../../Assets/skillsSVG/redux.svg';
import nodejs from '../../Assets/skillsSVG/nodejs.svg';
import express from '../../Assets/skillsSVG/express.svg';
import postgresql from '../../Assets/skillsSVG/postgresql.svg';
import mongodb from '../../Assets/skillsSVG/mongodb.svg';
import python from '../../Assets/skillsSVG/python.svg';
import fastapi from '../../Assets/skillsSVG/fastapi.svg';

const skillsList = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'React', icon: react },
    { name: 'Redux', icon: redux },
    { name: 'Node.js', icon: nodejs },
    { name: 'Express', icon: express },
    { name: 'PostgreSQL', icon: postgresql },
    { name: 'MongoDB', icon: mongodb },
    { name: 'Python', icon: python },
    { name: 'FastAPI', icon: fastapi },
];

const Skills = () => {
    return (
        <div className='skills-wrapper' id='skills'>
            <div className='container'>
                <h1>💻 Skills</h1>
                <image src='https://github.com/devicons/devicon/blob/master/icons/fastapi/fastapi-original.svg' />
                <div className='skill-items-wrapper'>

                {skillsList.map((skill) => {
                    return (
                        <div key={skill.name} className='skill-item'>
                            <img src={skill.icon} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
