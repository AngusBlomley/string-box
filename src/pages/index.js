/* eslint-disable react/no-unescaped-entities */
import '../app/globals.css'
import React, { useState, useEffect } from 'react';
import ContactForm from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/headerIndex";
import Service from "../components/service";
import StringTypes from "../components/stringTypes";
import useFadeLeft from "../components/animations";
import About from "../components/about";

export default function Index() {

  useFadeLeft();

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
          <div className="leading-snug font-hiraKakuW8 font-bold text-white text-4xl w-full mx-auto max-lg:text-4xl">
            <h1>You Box It.</h1>
            <h2>We String It.</h2>
          </div>

          <div className=" font-karla text-white mt-10 w-full mx-auto">
            <p>Re-Stringing your racquet can improve performance and prolong its life.
              <br></br>With 40 years of professional hand stringing experience.</p>
          </div>

          {/*<div className="font-karla flex flex-wrap mt-10">
                        <Link href="store" className="lg:hidden text-white border-2 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Store</Link>
                        <Link href="/stringing" className="lg:hidden text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Re-String</Link>
                        <Link href="#contact" className="lg:hidden text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Contact</Link>

                        <Link href="/store" className="hidden lg:block text-white border-2 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Visit The Store</Link>
                        <Link href="/stringing" className="hidden lg:block text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Re-String</Link>
                        <Link href="#contact" className="hidden lg:block text-white border-2 ml-5 hover:bg-blue-500 hover:border-blue-500 duration-200 px-4 py-2 rounded-sm">Contact Us</Link>
                    </div>*/}
        </section>
      </div>

      <Service id="service" />
      <About />
      <StringTypes id="string-types" />
      <ContactForm id="contact" />
      <Footer />
    </main>
  );
}
