import linkedin from '../assets/hero/linkedin.svg';
import github from '../assets/hero/github.svg';
import portrait from '../assets/hero/portrait.png';

const Hero = () => {
    return (
        <div className='min-h-screen pb-12 text-white bg-indigo-600 '>
            <header className='flex items-center justify-center px-4 py-10 mx-auto font-medium md:px-10 sm:justify-between text-md max-w-7xl'>
                <div className='hidden gap-4 sm:flex'>
                    <a href='https://www.linkedin.com/in/dylanmbaker/' target='_blank' rel='noreferrer'>
                        <img src={linkedin} className='h-8' alt='LinkedIn logo' />
                    </a>
                    <a href='https://github.com/dbvker' target='_blank' rel='noreferrer'>
                        <img src={github} className='h-8' alt='GitHub logo' />
                    </a>
                </div>
                <nav className='flex gap-4'>
                    <a href='#work'>Work</a>
                    <a href='#skills'>Skills</a>
                    <a href='#resume'>Resume</a>
                    <a href='#contact'>Contact</a>
                </nav>
            </header>
            <section className='flex flex-col items-center justify-center px-10 mx-auto max-w-7xl'>
                <img src={portrait} className='mt-20 rounded-full md:mt-40 h-52' alt='portrait of Dylan Baker' />
                <h1 className='mt-6 text-3xl font-bold text-center transition-all duration-300 md:text-5xl'>Hey 👋, I'm Dylan!</h1>
                <h3 className='mt-6 text-center'>💻 Full Stack Web Development</h3>
                <h3 className='mt-4 text-center'>🧑🏽 I'm Dylan, a full-stack web developer based out of Kansas City.</h3>
                <h4 className='mt-10'>📍 Find me here!</h4>
                <div className='flex gap-4 mt-2'>
                    <a href='https://www.linkedin.com/in/dylanmbaker/' target='_blank' rel='noreferrer'>
                        <img src={linkedin} className='h-10' alt='LinkedIn logo' />
                    </a>
                    <a href='https://github.com/dbvker' target='_blank' rel='noreferrer'>
                        <img src={github} className='h-10' alt='GitHub logo' />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Hero;
