import React from 'react';

import ToDoAppImg from '../../Assets/task-app-image.png';

import GithubIcon from '../../Assets/github.png';
import WebIcon from '../../Assets/web.png';

import './Work.css';

let workData = [
    {
        title: 'Todo App',
        image: ToDoAppImg,
        frontEndTech: ['React'],
        backEndTech: ['Node.JS', 'PostgreSQL', 'Express',],
        githubRepo: 'https://github.com/simple-todo-app',
        siteLink: 'https://todo-app-dylan.netlify.app/'
    },
]

const Work = () => {
    return (
        <div className='work-wrapper' id='work'>
            <div className='container'>
                <h1>🛠️ My Work</h1>
                <div className='work-items-wrapper'>
                    {workData.map((item, index) => {
                        return (
                            <div className='work-item-container' key={index}>
                                <div className='work-item-title'>{item.title}</div>
                                <a href={item.siteLink} target='_blank' rel="noreferrer">
                                    <img src={item.image} alt={item.title} />
                                </a>
                                <div className='work-item-stack'>
                                    <div className='work-item-stack-title'>Tech Stack</div>
                                    <strong>Front End: </strong>{item.frontEndTech.join(', ')}<br />
                                    <strong>Back End: </strong>{item.backEndTech.join(', ')}
                                </div>
                                <div className='work-item-links'>
                                    <div className='work-item-stack-title'>Links</div>
                                    <a href={item.githubRepo} target='_blank' rel="noreferrer">
                                        <img src={GithubIcon} alt='GitHub logo' />
                                    </a>
                                    <a href={item.siteLink} target='_blank' rel="noreferrer">
                                        <img src={WebIcon} alt='globe icon' />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    );
};

export default Work;
