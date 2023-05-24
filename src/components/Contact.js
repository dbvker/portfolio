const Contact = () => {
    return (
        <div id='contact' className='pt-12 pb-20 text-white bg-rose-600'>
            <section className='flex flex-col items-center px-10 mx-auto max-w-7xl'>
                <h2 className='mb-10 text-2xl font-semibold md:text-3xl'>💬 Contact Me</h2>
                <form action='https://formsubmit.co/dylanmbaker@yahoo.com' method='POST' className="w-full transition-all duration-300 md:w-4/6 lg:w-3/6">
                    <div className='w-full mt-6'>
                        <label className='block pr-4 mb-1.5 font-medium text-sm' for='name'>
                            Name
                        </label>
                        <input className='w-full p-2 leading-tight text-gray-700 transition bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-gray-500 hover:border-gray-400' id='name' type='text' name='name' />
                    </div>
                    <div className='w-full mt-6'>
                        <label className='block pr-4 mb-1.5 font-medium text-sm' for='email'>
                            Email Address
                        </label>
                        <input className='w-full p-2 leading-tight text-gray-700 transition bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-gray-500 hover:border-gray-400' id='email' type='email' name='email' />
                    </div>
                    <div className='w-full mt-6'>
                        <label className='block pr-4 mb-1.5 font-medium text-sm' for='message'>
                            Message
                        </label>
                        <textarea className='min-h-[100px] w-full p-2 leading-tight text-gray-700 transition bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-gray-500 hover:border-gray-400' id='message' name='message'></textarea>
                    </div>

                    <button className="w-full py-2 mt-6 font-medium transition-all duration-300 bg-black rounded-md bg-opacity-40 hover:bg-opacity-60">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
