import React, { useState, useEffect } from 'react';
import '../app/globals.css'

export default function ProfileIndex() {

    return (
        <main>
            <div className="flex items-center justify-center h-screen bg-off-white font-hiraKakuW8">
                <div className="flex row h-full w-10/12 pt-44 justify-between max-xl:flex-col max-xl:p-0 max-xl:pb-10 max-md:w-screen">
                    <h1 className="text-5xl text-stone-800">Profile Settings</h1>

                    <div className="flex justify-center pt-20">
                        <form className="p-8 w-10/12">
                            <label htmlFor="name" className="inline-block text-gray-700 text-sm font-bold mb-2">
                                Name:
                            </label>
                            <input
                                placeholder="Name"
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                                Mobile:
                            </label>
                            <input
                                placeholder="Mobile"
                                type="tel"
                                id="mobile"
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                                Email:
                            </label>
                            <input
                                placeholder="Email"
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <label htmlFor="country-region" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                                Country/Region:
                            </label>
                            <select
                                id="country-region"
                                className="block w-full px-3 py-2 border rounded leading-tight text-gray-700"
                            >
                                <option value="">Select a country</option>
                                <option value="usa">United States</option>
                                <option value="canada">Canada</option>
                                <option value="uk">United Kingdom</option>
                                <option value="australia">Australia</option>
                                {/* Populate this list with all countries */}
                            </select>

                            <label htmlFor="postcode" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                                Post Code:
                            </label>
                            <input
                                placeholder="Post Code"
                                type="text"
                                id="postcode"
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <label htmlFor="address1" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                                Address 1:
                            </label>
                            <input
                                placeholder="Address 1"
                                type="text"
                                id="address1"
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <label htmlFor="address2" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                                Address 2:
                            </label>
                            <input
                                placeholder="Address 2"
                                type="text"
                                id="address2"
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <label htmlFor="town-city" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                                Town / City:
                            </label>
                            <input
                                placeholder="Town / City"
                                type="text"
                                id="town-city"
                                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded mb-4"
                            />

                            <button
                                type="submit"
                                className="mt-5 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Sign In
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    );
};