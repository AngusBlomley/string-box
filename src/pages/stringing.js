import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Footer from "@/components/footer";
import Header_global from "@/components/header_global";

export default function Stringing() {

    const [tension, setTension] = useState('50');
    const [pattern, setPattern] = useState('standard');
    const [crossing, setCrossing] = useState('main_top');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the form values
        console.log({ tension, pattern, crossing, message });
        // Add further logic to add items to cart
    };

    return (
        <main>
            <Header_global />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="flex bg-white shadow-lg h-10/12 w-5/12 justify-between max-xl:flex-col max-xl:p-0 max-xl:pb-10 max-md:w-screen">

                    <div className="flex justify-center">
                        <Image
                            alt="string"
                            src="/images/stock/chino-rocha-q9dswAd5Pc0-unsplash.jpg"
                            width={400}
                            height={400}
                        />
                        <form onSubmit={handleSubmit} className="space-y-4 ml-10">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">String Preference</h2>
                            <h3 className="text-md text-gray-600 mb-8">Choose your preference</h3>
                            <div>
                                <label htmlFor="tension" className="block text-sm font-medium text-gray-700">Tension:</label>
                                <select id="tension" name="tension" value={tension} onChange={e => setTension(e.target.value)} className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                    <option value="50">50 lbs</option>
                                    <option value="52">52 lbs</option>
                                    <option value="54">54 lbs</option>
                                    <option value="56">56 lbs</option>
                                    <option value="58">58 lbs</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="pattern" className="block text-sm font-medium text-gray-700">String pattern:</label>
                                <select id="pattern" name="pattern" value={pattern} onChange={e => setPattern(e.target.value)} className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                    <option value="standard">Standard</option>
                                    <option value="fan">Fan</option>
                                    <option value="custom">Custom</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="crossing" className="block text-sm font-medium text-gray-700">String crossing:</label>
                                <select id="crossing" name="crossing" value={crossing} onChange={e => setCrossing(e.target.value)} className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                    <option value="main_top">Main strings crossed at the top</option>
                                    <option value="main_bottom">Main strings crossed at the bottom</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                                <textarea id="message" name="message" placeholder="Special requests, messages, notes." rows="5" value={message} onChange={e => setMessage(e.target.value)} className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"></textarea>
                            </div>
                            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">Add to cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};
