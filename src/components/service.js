/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
export default function Service() {

    return (
        <section id="service" className="py-0 w-full">
            <div className="flex justify-center items-center mb-10 relative">
                <div className="h-40 w-10 bg-clay-red mr-72 absolute z-0"></div>
                <h2 className="mt-20 text-7xl font-hiraKaku font-bold text-midnight-blue text-center z-10 relative">
                    SERVICE
                </h2>
            </div>



            <div className="leading-loose mt-40 grid grid-cols-3 gap-y-10 max-lg:grid-cols-1">
                <div className="h-40">
                    <div className="flex justify-end border-b-2 border-black max-lg:justify-center max-lg:w-80 max-lg:mx-auto"><h3 className=" w-72 font-hiraKakuW8 font-bold text-2xl">Step 1</h3></div>
                    <div className="flex justify-end max-lg:justify-center"><p className="font-KozGoPr6NRegular w-72">You place an order on our website or send us your racquets by mail.</p></div>
                </div>

                <div className="w-8/12 mx-auto max-lg:w-80">
                    <h3 className="font-hiraKakuW8 font-bold text-2xl border-b-2 border-black">Step 2</h3>
                    <p className="font-KozGoPr6NRegular">We receive your order or racquets and begin the stringing process.</p>
                </div>

                <div></div>

                <div className="col-span-1 row-span-2">

                    <Image
                        alt="Racquets"
                        width={400}
                        height={400}
                        src="/images/stock/racquets.webp"
                        className="w-full max-lg:hidden"
                    />

                    <Image
                        alt="Stringing racquet"
                        width={400} height={400}
                        src="/images/stock/stringing.png"
                        className="w-full mt-10 max-lg:hidden"
                    />
                </div>

                <div className="w-8/12 mx-auto mb-20 max-lg:w-80">
                    <h3 className="font-hiraKakuW8 font-bold text-2xl border-b-2 border-black">Step 3</h3>
                    <p className="font-KozGoPr6NRegular">Once strung, we securely package your racquets and ship them via a trusted courier.</p>
                </div>

                <div className="max-lg:w-80 max-lg:mx-auto">
                    <h3 className="font-hiraKakuW8 font-bold text-2xl border-b-2 border-black">Step 4</h3>
                    <p className="font-KozGoPr6NRegular">You will receive a tracking number by email so you can follow the progress of your shipment.</p>
                </div>
                <div className="w-8/12 mx-auto">
                    <Image
                        alt="Gripped racquets"
                        width={400}
                        height={400}
                        src="/images/stock/gripping.webp"
                        className="w-full max-lg:hidden"
                    />
                </div>

                <div className="">
                    <Image
                        alt="Gripped racquets"
                        width={400}
                        height={400}
                        src="/images/stock/grips.webp"
                        className="w-full h-full max-lg:hidden"
                    />
                </div>
            </div>
            <div style={{ height: '500px', marginTop: '-450px' }} className="w-full bg-tennis-ball-yellow -z-10"></div>
        </section>
    )
};