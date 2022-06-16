import React from 'react';

import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-wrapper' id='contact'>
            <div className='container'>
                <h1>Contact Me</h1>
                <form action="https://formsubmit.co/ba82d3e0ccaeb76adc567d4a5020bb08" method="POST">
                    <input type='text' placeholder='Name' name='name' />
                    <input type='email' placeholder='Email Address' name='email' />
                    <textarea placeholder='Message' name='message' />
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
