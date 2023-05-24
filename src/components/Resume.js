import resumeFile from '../assets/resume.jpg';

const Resume = () => {
    return (
        <div id='resume' className='py-12 text-white bg-violet-600'>
            <section className='flex flex-col items-center px-10 mx-auto max-w-7xl'>
                <h2 className='mb-10 text-3xl font-semibold'>📄 Resume</h2>
                <div className='flex flex-col items-center gap-8'>
                  <img src={resumeFile} alt="Dylan Baker's resume" className='w-full transition-all duration-300 rounded-md sm:w-8/12 lg:w-5/12' />
                    <a href={resumeFile} download="Dylan Baker's resume">
                        <button className='px-4 py-2 transition-all duration-300 bg-black bg-opacity-50 rounded-md hover:bg-opacity-40'>Download Resume</button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Resume;
