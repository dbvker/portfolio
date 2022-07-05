import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

import './Welcome.css';

import GithubIcon from '../../Assets/github.png';
import LinkedInIcon from '../../Assets/linkedin.png';
import PicOfMe from '../../Assets/pic_of_me.jfif';

const Welcome = () => {
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 3500)
  };

    return (
        <div className='welcome-wrapper'>
            <div className='container'>
              {isExploding && <center><ConfettiExplosion className='confetti' /></center>}
              <img src={PicOfMe} className='welcome-avi' alt='me :)' onClick={handleClick} />
              
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
