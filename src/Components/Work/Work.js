import React from 'react';

import TaskAppImg from '../../Assets/task-app-image.png';
import MenuAppImg from '../../Assets/menu-app-image.png';

import GithubIcon from '../../Assets/github.png';
import WebIcon from '../../Assets/web.png';

import './Work.css';

let workData = [
    {
        title: 'Task App',
        image: TaskAppImg,
        stack: ['React', 'Node.JS', 'PostgreSQL', 'Express',],
        githubRepo: 'https://github.com/simple-todo-app',
        siteLink: 'https://todo-app-dylan.netlify.app/'
    },
    {
        title: 'Restaurant Menu',
        image: MenuAppImg,
        stack: ['React', 'JavaScript'],
        githubRepo: 'https://github.com/dbvker/Restaurant-Menu',
        siteLink: 'https://restaurant-menu-db.netlify.app/'
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
                                    <strong>Built Using: </strong>{item.stack.join(', ')}<br />
                                </div>
                                <div className='work-item-links'>
                                    <div className='work-item-links-title'>Links</div>
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
