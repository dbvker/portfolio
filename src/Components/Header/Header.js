import './Header.css';

import GithubIcon from '../../Assets/github.png';
import LinkedInIcon from '../../Assets/linkedin.png';

function Header() {
    return (
        <header>
            <div className='container'>
                <ul className='header-link'>
                    <p>Dylan Baker</p>
                    <li><a href='https://www.linkedin.com/in/dylanmbaker/' target='_blank' rel="noreferrer"><img src={LinkedInIcon} alt='LinkedIn logo' /></a></li>
                    <li><a href='https://github.com/dbvker' target='_blank' rel="noreferrer"><img src={GithubIcon} alt='GitHub logo' /></a></li>
                </ul>
                <nav>
                    <ul className='header-link'>
                        <li><a href='#work'>Work</a></li>
                        <li><a href='#resume'>Resume</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
