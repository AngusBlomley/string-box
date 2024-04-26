import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'

function toggleMenu(menuOpen, setMenuOpen) {
    setMenuOpen(!menuOpen);
}

export default function Index() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.querySelectorAll('#menucontainer a').forEach(menuItem => {
            menuItem.addEventListener('click', () => {
                toggleMenu(menuOpen, setMenuOpen);
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(scrollLink => {
            scrollLink.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(scrollLink.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, [menuOpen]);

    return (
        <main className="px-40 max-lg:px-5">
            <video
                src="videos/video.mp4"
                className="w-full h-full object-cover absolute top-0 left-0 -z-10 filter brightness-50"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/30 to-transparent -z-10"></div>

            <header className=" text-white flex items-center justify-between px-40 py-2 fixed top-0 left-0 right-0 h-20 max-lg:px-5">
                <Link href="">
                    <Image
                        src="/images/logo/white-logo.svg"
                        alt="logo"
                        width={100}
                        height={50}
                        className="max-lg:ml-0 h-15"
                    />
                </Link>

                <div id="togglebutton" className="hamburger z-10 text-2xl absolute top-5 right-4 cursor-pointer block lg:hidden" onClick={() => toggleMenu(menuOpen, setMenuOpen)}>
                    {menuOpen ? '✖' : '☰'}
                </div>

                <ul id="navlist" className="list-none lg:flex hidden">
                    <li><a href="#home" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Home</a></li>
                    <li><a href="#about" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">About Me</a></li>
                    <li><a href="#education" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Education</a></li>
                    <li><a href="#work" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Work</a></li>
                    <li><a href="#contact" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Contact</a></li>
                    <li><a href="#contact" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Login</a></li>
                    <li><a href="#contact" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Sign Up</a></li>
                </ul>

                <div id="menucontainer" className={`menu p-10 fixed top-0 right-0 h-full bg-white overflow-hidden transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                    <ul id="navmenu" className="list-none mt-20 mr-2 text-left text-lg text-black">
                        <li className="mb-2"><a href="#home" className="hover:text-blue-500">Home</a></li>
                        <li className="mb-2"><a href="#about" className="hover:text-blue-500">About Me</a></li>
                        <li className="mb-2"><a href="#work" className="hover:text-blue-500">Work</a></li>
                        <li className="mb-2"><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>

            </header>
            <article className="w-1/3">
                <div className="mt-60 text-white text-8xl w-full mx-auto max-lg:text-5xl">
                    <h1 className="">You Box It.</h1>
                    <h2 className="">We String It.</h2>
                </div>

                <div className="text-white mt-10 w-full mx-auto">
                    <p>Re-stringing your racquet can improve performance and prolong its life.
                        <br></br>Prevent injury, ensure your racquet is safe.</p>
                </div>

            </article>
        </main>
    );
}
