/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import useFadeLeft from "./animations";

export default function Service() {

    useFadeLeft();

    return (
        <section id="service" className="py-0 mx-auto w-8/12 px-0 max-lg:m-5">
            <div className="lg:hidden">
                <h2 className="observe-fade-in mt-10 text-6xl font-hiraKaku font-bold text-midnight-blue z-10">
                    SERVICE
                </h2>
            </div>
            <div className="leading-normal mt-20 grid grid-cols-3 gap-10 max-lg:grid-cols-1">
                <div className="h-40">
                    <div className="flex justify-end border-b-2 border-black pb-4 max-lg:justify-center max-lg:w-80 max-lg:mx-auto"><h3 className=" w-72 font-hiraKakuW8 font-bold text-lg">Step 1</h3></div>
                    <div className="flex justify-end max-lg:justify-center"><p className="font-KozGoPr6NRegular pt-4 w-72">You place an order on our website or send us your racquets by mail.</p></div>
                </div>

                <div className=" mx-auto max-lg:w-80">
                    <h3 className="font-hiraKakuW8 font-bold text-lg border-b-2 border-black pb-4">Step 2</h3>
                    <p className="font-KozGoPr6NRegular pt-4">We receive your order or racquets and begin the stringing process.</p>
                </div>

                <div className="max-xl:hidden">
                    <div className="absolute h-10 w-64 ml-36 mt-20 bg-clay-red -z-10"></div>
                    <h2 className="observe-fade-in mt-10 ml-8 text-6xl font-hiraKaku font-bold text-midnight-blue z-10">
                        SERVICE
                    </h2>
                </div>

                <div className="col-span-1 row-span-2">
                    <Image
                        alt="Stringing racquet"
                        width={400} height={400}
                        src="/images/stock/stringing.webp"
                        className="w-full shadow-2xl max-lg:hidden"
                    />
                    <Image
                        alt="Racquets"
                        width={400}
                        height={400}
                        src="/images/stock/racquets.webp"
                        className="w-full shadow-2xl mt-10 max-lg:hidden"
                    />
                </div>

                <div className=" mx-auto mb-20 max-lg:w-80">
                    <h3 className="font-hiraKakuW8 font-bold text-lg border-b-2 border-black pb-4">Step 3</h3>
                    <p className="font-KozGoPr6NRegular pt-4">Once strung, we securely package your racquets and ship them via a trusted courier.</p>
                </div>

                <div className="max-lg:w-80 max-lg:mx-auto">
                    <h3 className="font-hiraKakuW8 font-bold text-lg border-b-2 border-black pb-4">Step 4</h3>
                    <p className="font-KozGoPr6NRegular pt-4 w-72">You will receive a tracking number by email so you can follow the progress of your shipment.</p>
                </div>

                <div>
                    <Image
                        alt="Gripped racquets"
                        width={400}
                        height={400}
                        src="/images/stock/gripping.webp"
                        className="w-full h-full shadow-2xl max-lg:hidden"
                    />
                </div>

                <div className="mx-auto">
                    <Image
                        alt="Gripped racquets"
                        width={500}
                        height={500}
                        src="/images/stock/grips.webp"
                        className="w-full h-full shadow-2xl max-lg:hidden"
                    />
                </div>
            </div>
        </section>
    )
};