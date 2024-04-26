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
        <section id="contact" className="mt-40 bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <form className="bg-white p-6 rounded-lg shadow-md max-lg:shadow-none" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in touch.<br />Raise your game.</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" name="name" placeholder="Your name..."
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">E-Mail</label>
                        <input type="text" name="email" placeholder="Your email..."
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea name="message" placeholder="Your message..."
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{ height: '200px' }}
                            value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Send
                    </button>
                </form>
            </div>

        </section>
    );
}

export default ContactForm;
