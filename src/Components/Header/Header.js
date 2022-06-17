import react, { useState } from 'react';

import './Header.css';

import GithubIcon from '../../Assets/github.png';
import LinkedInIcon from '../../Assets/linkedin.png';

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const handleClick = () => {
        window.scrollTo(0, 0);
        setNavOpen(!navOpen);
    };
    return (
        <header>
            <div className='container'>
                <ul className='header-link'>
                    <p>Dylan Baker</p>
                    <li>
                        <a href='https://www.linkedin.com/in/dylanmbaker/' target='_blank' rel='noreferrer'>
                            <img src={LinkedInIcon} alt='LinkedIn logo' />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/dbvker' target='_blank' rel='noreferrer'>
                            <img src={GithubIcon} alt='GitHub logo' />
                        </a>
                    </li>
                </ul>
                <nav>
                    <ul className='header-link header-link-right'>
                        <li>
                            <a href='#work'>Work</a>
                        </li>
                        <li>
                            <a href='#resume'>Resume</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                    <svg className='nav-btn' viewBox='0 0 100 80' width='20' height='20' onClick={handleClick}>
                        <rect width='100' height='10' fill='#ffffff'></rect>
                        <rect y='30' width='100' height='10' fill='#ffffff'></rect>
                        <rect y='60' width='100' height='10' fill='#ffffff'></rect>
                    </svg>
                </nav>
            </div>
            <div className={navOpen ? 'menu-nav' : 'menu-nav-closed'}>
                <div className='menu-nav-container'>
                    <div className='menu-nav-header'>
                        <ul className='header-link'>
                            <p>Dylan Baker</p>
                            <li>
                                <a href='https://www.linkedin.com/in/dylanmbaker/' target='_blank' rel='noreferrer'>
                                    <img src={LinkedInIcon} alt='LinkedIn logo' />
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/dbvker' target='_blank' rel='noreferrer'>
                                    <img src={GithubIcon} alt='GitHub logo' />
                                </a>
                            </li>
                        </ul>
                        <nav>
                            <ul className='header-link'>
                                <svg className='nav-btn' viewBox='0 0 100 80' width='20' height='20' onClick={handleClick}>
                                <rect width='100' height='10' fill='#ffffff'></rect>
                                <rect y='30' width='100' height='10' fill='#ffffff'></rect>
                                <rect y='60' width='100' height='10' fill='#ffffff'></rect>
                            </svg>
                            </ul>
                            
                        </nav>
                    </div>
                    <div className='menu-nav-links'>
                        <ul>
                            <li>
                                <a href='#work' onClick={() => setNavOpen(false)}>Work</a>
                            </li>
                            <li>
                                <a href='#resume' onClick={() => setNavOpen(false)}>Resume</a>
                            </li>
                            <li>
                                <a href='#contact' onClick={() => setNavOpen(false)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
