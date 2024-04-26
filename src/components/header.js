/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'

function toggleMenu(menuOpen, setMenuOpen) {
    setMenuOpen(!menuOpen);
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerStyle, setHeaderStyle] = useState({ backgroundColor: 'transparent', color: 'white' });

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

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const headerHeight = header.offsetHeight;
            const scrollPosition = window.scrollY;

            // Adjust the scroll threshold as needed
            const scrollThreshold = 80;

            if (scrollPosition > scrollThreshold) {
                setHeaderStyle({ backgroundColor: 'black', color: 'white' });
            } else {
                setHeaderStyle({ backgroundColor: 'transparent', color: 'white' });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header id="home" className="text-white flex items-center justify-between px-40 py-2 fixed top-0 left-0 right-0 h-20 max-lg:px-5" style={{ ...headerStyle, transition: 'background-color 0.2s, color 0.2s' }}>
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
                <li><a href="#service" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Service</a></li>
                <li><a href="#education" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Store</a></li>
                <li><a href="#education" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Re-String</a></li>
                <li><a href="#contact" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Contact</a></li>
                <li><a href="#contact" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Login</a></li>
                <li><a href="#contact" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Sign Up</a></li>
            </ul>

            <div id="menucontainer" className={`menu p-10 fixed top-0 right-0 h-full bg-white overflow-hidden transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                <ul id="navmenu" className="list-none mt-20 mr-2 text-left text-lg text-black">
                    <li className="mb-2"><a href="#home" className="hover:text-blue-500">Home</a></li>
                    <li className="mb-2"><a href="#about" className="hover:text-blue-500">Service</a></li>
                    <li className="mb-2"><a href="#work" className="hover:text-blue-500">Store</a></li>
                    <li className="mb-2"><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    <li className="mb-2"><a href="#contact" className="hover:text-blue-500">Login</a></li>
                    <li className="mb-2"><a href="#contact" className="hover:text-blue-500">Sign Up</a></li>
                </ul>
            </div>
        </header>
    );
}
