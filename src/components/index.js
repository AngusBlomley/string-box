/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import ContactForm from "./contact";
import Footer from "./footer";
import Header from "./header";
import store from "@/store";

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
                    <div className="mt-60 text-white text-8xl w-full mx-auto max-lg:text-5xl ">
                        <h1 className="">You Box It.</h1>
                        <h2 className="">We String It.</h2>
                    </div>

                    <div className="text-white mt-10 w-full mx-auto">
                        <p>Re-stringing your racquet can improve performance and prolong its life.
                            <br></br>Prevent injury, ensure your racquet is safe.</p>
                    </div>

                    <div className="flex flex-wrap mt-10">
                        <a href="" className="lg:hidden text-white border-2 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Store</a>
                        <a href="#contact" className="lg:hidden text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Re-String</a>
                        <a href="#contact" className="lg:hidden text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Contact</a>

                        <a href="" className="hidden lg:block text-white border-2 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Visit The Store</a>
                        <a href="#contact" className="hidden lg:block text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Re-String</a>
                        <a href="#contact" className="hidden lg:block text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Contact Us</a>
                    </div>

                </section>

            </div>

            <section id="service" className="bg-white py-24 px-0 mt-60 w-full max-lg:p-0">
                <h2 className="text-center text-3xl font-bold mb-10 max-lg:p-0">Fast Turn Around.</h2>
                <div className="flex flex-col lg:flex-row justify-center gap-4 mt-20 mx-auto w-4/5 max-lg:w-full">
                    {/**/}
                    <div className="flex-grow bg-white rounded-lg shadow-md p-6 min-w-[240px]">
                        <h3 className="text-lg font-semibold h-8">Step 1.</h3>
                        <p className="my-2 h-20">You place an order on our website or send us your racquets by mail.</p>
                        <Image
                            src="/images/service-images/deliver.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="mx-auto mt-5"
                        />
                    </div>

                    {/**/}
                    <div className="flex-grow bg-white rounded-lg shadow-md p-6 min-w-[240px]">
                        <h3 className="text-lg font-semibold h-8">Step 2.</h3>
                        <p className="my-2 h-20">We receive your order or racquets and begin the stringing process.</p>
                        <Image
                            src="/images/service-images/world.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="mx-auto mt-5"
                        />
                    </div>

                    {/**/}
                    <div className="flex-grow bg-white rounded-lg shadow-md p-6 min-w-[240px]">
                        <h3 className="text-lg font-semibold h-8">Step 3.</h3>
                        <p className="my-2 h-20">Once strung, we securely package your racquets and ship them via a trusted courier.</p>
                        <Image
                            src="/images/service-images/racquet.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="mx-auto mt-5"
                        />
                    </div>

                    {/**/}
                    <div className="flex-grow bg-white rounded-lg shadow-md p-6 min-w-[240px]">
                        <h3 className="text-lg font-semibold h-8">Step 4.</h3>
                        <p className="my-2 h-20">You will receive a tracking number by email so you can follow the progress of your shipment.</p>
                        <Image
                            src="/images/service-images/box.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="mx-auto mt-5"
                        />
                    </div>
                </div>
            </section>

            <div className="px-0 py-10 mt-20 w-full max-lg:px-0">
                <h2 className="text-center text-3xl font-bold mb-10">Choose Your String.</h2>
                <div className="flex flex-col lg:flex-row justify-center gap-4 mt-20 mx-auto w-4/5 max-lg:w-full ">
                    {/* Step 1 */}
                    <div className="flex flex-col bg-white border-2 rounded-lg shadow-md p-6 w-full lg:w-1/4 max-lg:border-0">
                        <h3 className="text-lg font-semibold text-center">Polyester</h3>
                        <p className="flex-1">A longer 'dwell-time' (time ball is on the strings) creates maximum 'flatening' of the ball for more control. Energy return is less - allowing players to use stiffer, more powerful racquets for today's game.
                            <br></br><br></br>
                            Less energy return to the ball, a 'firmer-feel' giving extreme potential. Best for fast swing-speeds.</p>
                        <div className="mt-4">
                            <Image
                                src="/images/string-types/polyester.png"
                                alt="logo"
                                width={200}
                                height={200}
                                className="mx-auto mt-20"
                            />
                        </div>
                    </div>

                    {/**/}
                    <div className="flex flex-col bg-white border-2 rounded-lg shadow-md p-6 w-full lg:w-1/4 max-lg:border-0">
                        <h3 className="text-lg font-semibold h-8 text-center">Natural Gut</h3>
                        <p className="flex-1">Maximum ball-pocket depth helps retain more of the ball's incoming energy due to the ball retaining more of it's origional shape.
                            <br></br><br></br>
                            Most efficient return of energy received.
                            <br></br><br></br>
                            Gut adds power, comfort, and max shock/vibration reduction.</p>
                        <div className="mt-4">
                            <Image
                                src="/images/string-types/natural-gut.png"
                                alt="logo"
                                width={200}
                                height={200}
                                className="mx-auto mt-20"
                            />
                        </div>
                    </div>

                    {/**/}
                    <div className="flex flex-col bg-white border-2 rounded-lg shadow-md p-6 w-full lg:w-1/4 max-lg:border-0">
                        <h3 className="text-lg font-semibold h-8 text-center">Multi Fiber</h3>
                        <p className="flex-1">Designed to perform like natural gut at a more affordable price.
                            <br></br><br></br>
                            Is not negatively effected by moisture.</p>
                        <div className="mt-4">
                            <Image
                                src="/images/string-types/multi-fiber.png"
                                alt="logo"
                                width={200}
                                height={200}
                                className="mx-auto mt-20"
                            />
                        </div>
                    </div>

                    {/**/}
                    <div className="flex flex-col bg-white border-2 rounded-lg shadow-md p-6 w-full lg:w-1/4 max-lg:border-0">
                        <h3 className="text-lg font-semibold h-8 text-center">Solid Core</h3>
                        <p className="flex-1">Commonly referred to as synthetic gut, the core with outer-wraps returns less energy to the ball.
                            <br></br><br></br>
                            A nice crisp feel for a player who seeks basics in performance and value. Numerous variations can be found.</p>
                        <div className="mt-4">
                            <Image
                                src="/images/string-types/solid-core.png"
                                alt="logo"
                                width={200}
                                height={200}
                                className="mx-auto mt-20"
                            />
                        </div>
                    </div>
                </div >
            </div >

            <section className="flex row-auto justify-center mt-40 mx-auto w-1/2 max-lg:w-full m-0">
                <div className="w-1/3 max-lg:w-full mx-10">
                    <h2 className="text-3xl">How We String.</h2>
                    <br></br><br></br>
                    <p className="w-full">We are a professional racquet stringing company that supplies high-quality strings from top brands. At StringBox, we understand that every player has their own preferences when it comes to strings, which is why we offer a wide selection of professional strings to choose from. Whether you're looking for a specific brand or a certain type of string, we have what you need.
                        <br></br><br></br>
                        In addition to our selection of professional strings, we also offer a unique service where you can send us your own strings or request a specific type of string that we don't carry in stock. This allows you to get exactly what you want, tailored to your specific needs.</p>
                </div>
                <div>
                    <Image
                        src="/images/stock/chino-rocha-dEyXftPAMO4-unsplash.jpg"
                        alt="strings breaking"
                        width={330}
                        height={0}
                        className="mx-auto ml-10 max-lg:hidden"
                    />
                </div>
            </section>

            <ContactForm id="contact" />
            <Footer />
        </main >
    );
}
