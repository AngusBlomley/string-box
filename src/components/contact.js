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
        // Simulate a successful response after a delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ status: 200, message: 'Email sent successfully!' });
                // Uncomment to simulate an error
                // reject({ status: 500, message: 'Failed to send email' });
            }, 1000);
        });
    };

    return (
        <section id="contact" className="section max-lg:mt-10 mx-auto">
            <div className='px-36 max-lg:p-5'>
                <div className="flex justify-center items-end mb-10 relative">
                    <div className="h-36 w-10 -mr-8 bg-clay-red -z-10 max-lg:h-36"></div>
                    <Image
                        alt="contact"
                        src="/images/svg/contact.svg"
                        width={1200}
                        height={500}
                        className=' absolute w-7/12'
                    />
                    <h2 className="mt-20 text-5xl font-hiraKakuW8 font-bold text-midnight-blue text-center z-10 relative max-lg:pr-10 max-lg:text-4xl max-lg:ml-6">
                        CONTACT
                    </h2>
                    <Image
                        alt="tennis"
                        src="/images/stock/balance.webp"
                        width={500}
                        height={500}
                        className='mx-0 mt-36 ml-48 max-lg:hidden'
                    />
                </div>
                <form className="mx-auto flex flex-row justify-center w-8/12 bg-white p-6 rounded-lg max-lg:p-0 max-lg:flex-col" onSubmit={handleSubmit}>
                    <div className='full px-5 max-lg:w-full'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2">Name</label>
                            <input type="text" name="name" placeholder="Your name..."
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2">E-Mail</label>
                            <input type="text" name="email" placeholder="Your email..."
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={formData.email} onChange={handleChange} />
                        </div>
                        <button type="submit" className="block mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-lg:hidden">
                            Send
                        </button>
                    </div>
                    <div className='w-full px-5 max-lg:mt-10'>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-lg font-bold mb-2">Message</label>
                            <textarea name="message" placeholder="Your message..."
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{ height: '200px' }}
                                value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="hidden mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-lg:block">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
