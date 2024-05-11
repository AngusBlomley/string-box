import Image from "next/image";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Footer from "@/components/globals/footer";
import Header_global from "@/components/globals/headerGlobal";
import { addToCart } from '../store/actions/cartActions';
import { useDispatch } from "react-redux";

export default function Stringing() {

    const [tension, setTension] = useState('50');
    const [pattern, setPattern] = useState('standard');
    const [crossing, setCrossing] = useState('main_top');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const stringID = `string-${tension}-${pattern}-${crossing}`;

    const handleSubmit = (event) => {
        event.preventDefault();
        const stringPreferences = {
            id: stringID,
            name: `Custom String - ${pattern}`,
            price: 25,
            quantity: 1,
            imageUrl: '/images/icons/racquet.svg',
            tension,
            pattern,
            crossing,
            message,
            isCustom: true
        };

        console.log('Dispatching to cart:', stringPreferences);
        dispatch(addToCart(stringPreferences));

        resetForm();
    };

    const resetForm = () => {
        setTension('50');
        setPattern('standard');
        setCrossing('main_top');
        setMessage('');
    };

    return (
        <main>
            <Header_global />
            <div className="flex items-center justify-center mt-20 min-h-screen bg-gray-100">
                <div className="flex bg-white shadow-lg justify-between max-md:justify-center">

                    <div className="flex justify-center">
                        <Image
                            alt="string"
                            src="/images/stock/asset3.webp"
                            width={460}
                            height={400}
                            className="max-md:hidden"
                        />
                        <form onSubmit={handleSubmit} className="w-[500px] space-y-4 p-10 max-sm:w-screen">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">String Preference</h2>
                            <div className="flex row justify-between">
                                <h3 className="text-md text-gray-600 mb-8">Choose your preference</h3>
                                <div className="flex row">
                                    <p className="text-md text-gray-600 mb-8 line-through">£34.50</p>
                                    <p className="ml-4 font-bold text-clay-red">£25.00</p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="tension" className="block text-sm font-medium text-gray-700">Tension:</label>
                                <select id="tension" name="tension" value={tension} onChange={e => setTension(e.target.value)} className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                    <option value="50">50 lbs</option>
                                    <option value="52">52 lbs</option>
                                    <option value="54">54 lbs</option>
                                    <option value="56">56 lbs</option>
                                    <option value="58">58lbs</option>
                                    <option value="60">60lbs</option>
                                    <option value="62">62lbs</option>
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
                                <textarea id="message" name="message" placeholder="Special requests, messages, notes. Custom string pattern." rows="5" value={message} onChange={e => setMessage(e.target.value)} className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"></textarea>
                            </div>
                            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline">Add to cart</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};
