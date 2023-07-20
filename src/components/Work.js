import { projects } from '../data/Projects';
import github from '../assets/projects/github.svg';
import website from '../assets/projects/website.svg';

const Work = () => {
    return (
        <div id='work' className='py-12 text-white bg-emerald-600'>
            <section className='flex flex-col items-center px-4 mx-auto md:px-10 max-w-7xl'>
                <h2 className='mb-10 text-2xl font-semibold md:text-3xl'>👨🏽‍💻 Work</h2>
                <div className='flex flex-col w-full gap-6 md:gap-[3%] text-gray-900 md:flex-row md:flex-wrap'>
                    {projects.map((project, key) => {
                        return (
                            <div className='relative overflow-hidden text-white rounded-lg md:w-[48.5%] md:mb-6' style={{ backgroundColor: project.theme, color: project.color}}>
                                <img src={project.image} alt={`${project.title} screenshot`} />
                                <div className='flex flex-col justify-between w-full bg-black border-t bg-opacity-30 bottom-10'>
                                    <div className='flex items-center justify-between px-2 md:px-4'>
                                        <div className='pl-2 font-semibold'>{project.title}</div>
                                        <div className='flex gap-4 py-2'>
                                            <a href={project.githubRepo} target='_blank' rel='noreferrer' className='transition-all duration-300 rounded-md hover:bg-white hover:bg-opacity-30'>
                                                <div className='p-2 '>
                                                    <img src={github} alt='github logo' className='w-8 h-8' />
                                                </div>
                                            </a>
                                            <a href={project.siteLink} target='_blank' rel='noreferrer' className='transition-all duration-300 rounded-md hover:bg-white hover:bg-opacity-30'>
                                                <div className='p-2 '>
                                                    <img src={website} alt='website logo' className='w-8 h-8' />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='flex justify-between px-4 py-4 text-gray-900 bg-gray-200 md:px-6'>
                                        <div className='font-semibold'>Built with:</div>
                                        <div className='flex items-center gap-2 md:gap-4'>
                                            {project.stack.map((item, key) => {
                                                return <img src={item} alt='' className='w-6' />;
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Work;
