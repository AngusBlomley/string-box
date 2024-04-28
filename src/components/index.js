/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import ContactForm from "./contact";
import Footer from "./footer";
import Header from "./headerIndex";
import store from "@/store/store";

export default function Index() {

    return (
        <main>
            <div className="px-40 max-lg:px-5">
                <video
                    src="videos/video.mp4"
                    className="w-full h-full object-cover absolute top-0 left-0 -z-10 filter brightness-50"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/30 to-transparent -z-10"></div>

                <Header />

                <section>
                    <div className=" leading-snug mt-60 font-hiraKakuW8 font-bold text-white text-4xl w-full mx-auto max-lg:text-5xl">
                        <h1>You Box It.</h1>
                        <h2>We String It.</h2>
                    </div>

                    <div className=" font-karla text-white mt-10 w-full mx-auto">
                        <p>Re-Stringing your racquet can improve performance and prolong its life.
                            <br></br>With 40 years of professional hand stringing experience.</p>
                    </div>

                    <div className="font-karla flex flex-wrap mt-10">
                        <Link href="store" className="lg:hidden text-white border-2 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Store</Link>
                        <Link href="/stringing" className="lg:hidden text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Re-String</Link>
                        <Link href="#contact" className="lg:hidden text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Contact</Link>

                        <Link href="/store" className="hidden lg:block text-white border-2 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Visit The Store</Link>
                        <Link href="/stringing" className="hidden lg:block text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Re-String</Link>
                        <Link href="#contact" className="hidden lg:block text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Contact Us</Link>
                    </div>

                </section>

            </div>

            <section id="service" className="relative py-24 px-0 mt-60 w-full overflow-hidden">
                <div className="absolute left-1/2 transform -translate-x-60 translate-y-24 bg-clay-red w-10 h-56 max-lg:-translate-x-36 max-lg:h-36 max-lg:translate-y-28"></div>
                <h2 className="absolute left-1/2 transform -translate-x-56 translate-y-56 font-hiraKaku font-bold z-10 text-midnight-blue text-center text-7xl mb-10 max-lg:-translate-x-36 max-lg:text-6xl max-lg:translate-y-44">SERVICE</h2>
                <div className="font-karla flex flex-col lg:flex-row justify-center gap-4 mt-80 w-10/12 max-lg:w-full">
                    <div className="flex mt-20 max-lg:flex-col">
                        <div className="flex-grow">
                            <div className="border-b-2 border-black pl-96 max-lg:px-10 max-lg:m-0"><h3 className="font-hiraKakuW8 font-bold text-2xl h-8 w-36 pb-10">Step 1</h3></div>
                            <div className="ml-96 max-lg:px-10 max-lg:m-0"><p className="leading-8 my-2 h-20 font-KozGoPr6NRegular">You place an order on our website or send us your racquets by mail.</p></div>
                            <Image
                                alt=""
                                src="/images/stock/racquets.webp"
                                height={0}
                                width={1500}
                                className="mt-20 max-lg:hidden"
                            />
                            <Image
                                alt=""
                                src="/images/stock/stringing.png"
                                height={0}
                                width={800}
                                className="mt-10 max-lg:hidden"
                            />
                        </div>
                        <div className="flex-grow  min-w-[240px] max-sm:pb-10">
                            <div className="border-b-2 border-black ml-16 w-80 max-lg:px-10 max-lg:m-0 max-lg:w-full"><h3 className="font-hiraKakuW8 font-bold text-2xl h-8 w-36 pb-10">Step 2</h3></div>
                            <p className="font-KozGoPr6NRegular leading-8 my-2 h-20 w-80 ml-16 max-lg:px-10 max-lg:m-0 max-lg:w-full">We receive your order or racquets and begin the stringing process.</p>

                        </div>
                    </div>
                    <div className="flex mt-60 -ml-64 max-lg:flex-col max-lg:p-0 max-lg:m-0 max-lg:w-full max-lg:mt-0">
                        <div className="flex-grow mt-14 min-w-[500px] max-lg:min-w-[240px] max-lg:mt-0 max-sm:pb-10">
                            <div className="border-b-2 border-black ml-16 w-80 max-lg:px-10 max-lg:m-0 max-lg:w-full"><h3 className="font-hiraKakuW8 font-bold text-2xl h-8 w-36 pb-10">Step 3</h3></div>
                            <p className="font-KozGoPr6NRegular leading-8 my-2 h-20 w-80 ml-16 max-lg:px-10 max-lg:m-0 max-lg:w-full ">Once strung, we securely package your racquets and ship them via a trusted courier.</p>
                            <Image
                                alt=""
                                src="/images/stock/gripping.webp"
                                height={0}
                                width={345}
                                className="mt-72 ml-16 max-lg:hidden"
                            />
                        </div>

                        <div className="flex-none max-sm:pb-10">
                            <div className="border-b-2 mt-14 border-black max-lg:px-10 max-lg:mt-0"><h3 className="font-hiraKakuW8 font-bold text-2xl h-8 w-36 pb-10">Step 4</h3></div>
                            <div className=""><p className="font-KozGoPr6NRegular leading-8 my-2 h-20 w-80 max-lg:px-10 max-lg:m-0 max-lg:w-full max-lg:mt-0 max-xl:w-24">You will receive a tracking number by email so you can follow the progress of your shipment.</p></div>
                            <Image
                                alt=""
                                src="/images/stock/grips.webp"
                                height={0}
                                width={625}
                                className="mt-72 max-lg:hidden"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute w-full h-1/4 bg-tennis-ball-yellow bottom-16 -z-10 max-lg:px-10 max-lg:bottom-24 max-sm:h-96"></div>
            </section>

            <section className="px-28 py-10 mt-20 w-full max-lg:px-0">
                <div className="flex flex-row">
                    <Image
                        alt="strings-breaking"
                        src="/images/stock/asset1.webp"
                        height={0}
                        width={900}
                    />
                    <div className="ml-24 bg-clay-red w-14 h-96 max-lg:-translate-x-36 max-lg:h-36 max-lg:translate-y-28"></div>
                    <h2 className=" leading-normal -ml-5 font-hiraKaku font-bold z-10 text-midnight-blue text-7xl mb-10 max-lg:-translate-x-36 max-lg:text-6xl max-lg:translate-y-44">HOW<br></br>WE<br></br>STRING</h2>
                    <Image
                        alt="strings-breaking"
                        src="/images/stock/asset2.webp"
                        height={0}
                        width={900}
                        className="absolute right-36 mt-96"
                    />
                </div>
                <div className="flex flex-row">
                    <Image
                        alt="strings-breaking"
                        src="/images/stock/asset3.webp"
                        height={0}
                        width={800}
                        className="mt-20"
                    />
                    <p className="w-1/4 mt-96 ml-40"><br></br><br></br>We are a professional racquet stringing company that supplies high-quality strings from top brands. At StringBox, we understand that every player has their own preferences when it comes to strings, which is why we offer a wide selection of professional strings to choose from. Whether you're looking for a specific brand or a certain type of string, we have what you need.
                        <br></br><br></br>
                        In addition to our selection of professional strings, we also offer a unique service where you can send us your own strings or request a specific type of string that we don't carry in stock. This allows you to get exactly what you want, tailored to your specific needs.</p>
                </div>
            </section>

            <ContactForm id="contact" />
            <Footer />
        </main>
    );
}
