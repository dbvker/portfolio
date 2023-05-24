import { skillList } from '../data/Skills';

const Skills = () => {
    return (
        <div id='skills' className='py-12 text-gray-900 bg-gray-200'>
            <section className='flex flex-col items-center px-10 mx-auto max-w-7xl'>
                <h2 className='mb-10 text-3xl font-semibold'>💻 Skills</h2>
                <div className='flex flex-wrap justify-center gap-10'>
                    {skillList.map((skill, key) => {
                        return (
                            <div key={key} className='flex flex-col items-center justify-center w-36'>
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
