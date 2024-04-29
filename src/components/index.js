/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import ContactForm from "./contact";
import Footer from "./footer";
import Header from "./headerIndex";
import store from "@/store/store";
import Service from "./service";
import StringTypes from "./stringTypes";

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

                <section className="h-screen flex flex-col align-center justify-center">
                    <div className="leading-snug font-hiraKakuW8 font-bold text-white text-5xl w-full mx-auto max-lg:text-4xl">
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

            <Service id="service" />

            <section className="relative px-56 py-10 mt-20 w-full max-xl:p-5 max-2xl:p-20 max-lg:p-10 max-lg:mt-0 2xl:mb-20 pb-0">
                <Image
                    alt="strings-breaking"
                    src="/images/stock/asset2.webp"
                    height={700}
                    width={700}
                    className="absolute right-56 mt-96 w-5/12 max-2xl:right-40 max-lg:hidden"
                />
                <div className="flex flex-row">
                    <Image
                        alt="strings-breaking"
                        src="/images/stock/asset1.webp"
                        height={700}
                        width={700}
                        className="w-6/12 h-full max-lg:hidden"
                    />
                    <div className="ml-24 bg-clay-red w-14 h-96 max-lg:ml-0"></div>
                    <h2 className="leading-normal -ml-5 font-hiraKaku font-bold text-midnight-blue text-7xl mb-10">HOW<br></br>WE<br></br>STRING</h2>
                </div>
                <div className="flex flex-row">
                    <Image
                        alt="strings-breaking"
                        src="/images/stock/asset3.webp"
                        height={700}
                        width={700}
                        className="mt-20 w-6/12 h-full max-lg:hidden"
                    />
                    <p className="w-1/3 mt-96 ml-20 max-2xl:ml-10 max-2xl:mt-80 max-lg:mt-0 max-lg:ml-0 max-lg:w-full"><br></br><br></br>We are a professional racquet stringing company that supplies high-quality strings from top brands. At StringBox, we understand that every player has their own preferences when it comes to strings, which is why we offer a wide selection of professional strings to choose from. Whether you're looking for a specific brand or a certain type of string, we have what you need.
                        <br></br><br></br>
                        In addition to our selection of professional strings, we also offer a unique service where you can send us your own strings or request a specific type of string that we don't carry in stock. This allows you to get exactly what you want, tailored to your specific needs.</p>
                </div>
            </section>

            <StringTypes id="string-types" />
            <ContactForm id="contact" />
            <Footer />
        </main>
    );
}
