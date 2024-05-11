/* eslint-disable react/no-unescaped-entities */
import '../app/globals.css'
import React, { useState, useEffect } from 'react';
import ContactForm from "../components/index/contact";
import Footer from "../components/globals/footer";
import Header from "../components/index/headerIndex";
import Service from "../components/index/service";
import StringTypes from "../components/index/stringTypes";
import About from "../components/index/about";

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
          <div className="leading-snug font-hiraKakuW8 font-bold text-white text-4xl w-full mx-auto max-lg:text-4xl">
            <h1>You Box It.</h1>
            <h2>We String It.</h2>
          </div>

          <div className=" font-karla text-white mt-10 w-full mx-auto">
            <p>Re-Stringing your racquet can improve performance and prolong its life.
              <br></br>With 40 years of professional hand stringing experience.</p>
          </div>
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
