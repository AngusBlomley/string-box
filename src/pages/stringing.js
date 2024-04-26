import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import Footer from "@/components/footer";
import Header_global from "@/components/header_global";

export default function Stringing() {
    return (
        <main>
            <Header_global />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="flex bg-white h-10/12 w-1/2 justify-between max-xl:flex-col max-xl:p-0 max-xl:pb-10 max-md:w-screen">

                    <div className="flex justify-center">
                        <Image
                            alt="string"
                            src="/images/stock/chino-rocha-q9dswAd5Pc0-unsplash.jpg"
                            width={400}
                            height={400}
                        />
                        <form className="p-8 w-10/12 max-xl:p-0">
                            <h1 className="text-5xl">String Order</h1>
                            <br></br>
                            <label>Choose your string.</label>
                            <select
                                placeholder=""
                                type=""
                                id=""
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <select
                                placeholder=""
                                type=""
                                id=""
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <select
                                placeholder=""
                                id=""
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <select
                                placeholder=" "
                                id=""
                                className="mt-5 w-full px-3 py-2 leading-tight text-gray-700 border rounded"
                            />

                            <button
                                type="submit"
                                className="mt-5 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Add To Cart
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};
