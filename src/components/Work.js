import { projects } from '../data/Projects';

const Work = () => {
    return (
        <div id='work' className='py-12 text-white bg-emerald-600'>
            <section className='flex flex-col items-center px-10 mx-auto max-w-7xl'>
                <h2 className='mb-10 text-3xl font-semibold'>👨🏼‍💻️ Work</h2>
                <div className='flex flex-col w-full gap-6 md:gap-[3%] text-gray-900 md:flex-row md:flex-wrap'>
                    {projects.map((project, key) => {
                        return (
                            <div className='relative overflow-hidden text-white rounded-lg md:w-[48.5%] md:mb-6'>
                                <img src={project.image} alt={`${project.title} screenshot`} />
                                <div className='flex-col justify-between w-full bg-gray-800 lex bottom-10'>
                                    <div className='flex justify-between px-2 py-4'>
                                        <div className='font-semibold'>{project.title}</div>
                                        <div className='flex items-center gap-2 md:gap-4'>
                                            {project.stack.map((item, key) => {
                                                return <img src={item} alt='' className='h-6' />;
                                            })}
                                        </div>
                                    </div>
                                    <div className='flex items-center h-12 border-t border-gray-600'>
                                      <button className='w-1/2 h-full transition-all duration-300 border-r border-gray-600 hover:bg-gray-600'>Github</button>
                                      <button className='w-1/2 h-full transition-all duration-300 hover:bg-gray-600'>Website</button>
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
