import resumeImg from '../assets/resume.jpg';
import resumeFile from '../assets/resume.pdf';

const Resume = () => {
    return (
        <div id='resume' className='py-12 text-white bg-violet-600'>
            <section className='flex flex-col items-center px-4 mx-auto md:px-10 max-w-7xl'>
                <h2 className='mb-10 text-2xl font-semibold md:text-3xl'>📄 Resume</h2>
                <div className='flex flex-col items-center gap-8'>
                  <img src={resumeImg} alt="Dylan Baker's resume" className='w-full transition-all duration-300 rounded-md sm:w-8/12 lg:w-5/12' />
                    <a href={resumeFile} download="dylanBakerResume">
                        <button className='px-4 py-2 transition-all duration-300 bg-black bg-opacity-50 rounded-md hover:bg-opacity-40'>Download Resume</button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Resume;
