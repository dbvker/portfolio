import './Welcome.css';

import GithubIcon from '../../Assets/github.png';
import LinkedInIcon from '../../Assets/linkedin.png';
import PicOfMe from '../../Assets/pic_of_me.jfif';

const Welcome = () => {

    return (
        <div className='welcome-wrapper'>
            <div className='container'>
              <img src={PicOfMe} className='welcome-avi' alt='me :)' />
              
                <div className='welcome-name-text'>Hey 👋, I'm Dylan!</div>
                <p><strong>💻 Full Stack Web Development</strong></p>
                <p>📍 Find me here!</p>
                <div className='welcome-find-me'>
                    <a href='https://www.linkedin.com/in/dylanmbaker/' target='_blank' rel='noreferrer'>
                        <img src={LinkedInIcon} alt='LinkedIn logo' />
                    </a>
                    <a href='https://github.com/dbvker' target='_blank' rel='noreferrer'>
                        <img src={GithubIcon} alt='GitHub logo' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
