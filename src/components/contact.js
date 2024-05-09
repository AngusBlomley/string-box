import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Placeholder for backend API call
        mockApiCall(formData)
            .then(response => {
                alert('Your message has been sent!');
                console.log(response); // Log the mock response
            })
            .catch(error => {
                alert('Something went wrong, please try again.');
                console.error(error);
            });
    };

    // Mock API call function
    const mockApiCall = (data) => {
        console.log("Sending data to the backend:", data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ status: 200, message: 'Email sent successfully!' });
                reject({ status: 500, message: 'Failed to send email' });
            }, 1000);
        });
    };

    return (
        <section id="contact" className="section flex justify-center mb-20 max-md:mt-10 max-md:block">
            <div className='w-8/12'>
                <div className="flex justify-between items-end mb-10 relative max-md:justify-start max-md:ml-10">
                    <div className="h-36 w-14 -mr-8 bg-clay-red -z-10 max-md:h-36 max-md:-mr-12"></div>
                    <Image
                        alt="contact"
                        src="/images/svg/contact.svg"
                        width={1200}
                        height={500}
                        className=' absolute w-7/12'
                    />
                    <h2 className="mt-20 text-5xl font-hiraKakuW8 font-bold text-midnight-blue text-center z-10 relative max-md:pr-10 max-md:text-5xl max-md:ml-6 max-md:-translate-y-3">
                        CONTACT
                    </h2>
                    <Image
                        alt="tennis"
                        src="/images/stock/balance.webp"
                        width={400}
                        height={400}
                        className='ml-10 mt-36 max-md:hidden'
                    />
                </div>
                <form className="flex flex-row justify-center mt-20 w-full max-md:flex-col" onSubmit={handleSubmit}>
                    <div className='px-5 w-full'>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" name="name" placeholder="Your name..."
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">E-Mail</label>
                            <input type="text" name="email" placeholder="Your email..."
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={formData.email} onChange={handleChange} />
                        </div>
                        <button type="submit" className="block mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-md:hidden">
                            Send
                        </button>
                    </div>
                    <div className='w-full px-5 max-md:mt-10'>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea name="message" placeholder="Your message..."
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{ height: '200px' }}
                                value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="hidden mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-md:block">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
