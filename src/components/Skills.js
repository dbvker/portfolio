import { skillList } from '../data/Skills';

const Skills = () => {
    return (
        <div id='skills' className='py-12 text-gray-900 bg-gray-200'>
            <section className='flex flex-col items-center w-full px-4 mx-auto overflow-hidden md:px-10 md:max-w-7xl'>
                <h2 className='mb-10 text-2xl font-semibold md:text-3xl'>💻 Skills</h2>
                <div className='flex flex-wrap justify-center w-screen gap-6 md:max-w-full'>
                    {skillList.map((skill, key) => {
                        return (
                            <div key={key} className='flex flex-col items-center justify-center w-32'>
                                <div className='flex items-center justify-center w-14 h-14 md:w-20 md:h-20'>
                                    <img src={skill.icon} alt={skill.name} className='w-full h-full' />
                                </div>
                                <div className='mt-4 font-bold'>{skill.name}</div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Skills;
