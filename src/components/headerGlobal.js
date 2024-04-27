/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'

function toggleMenu(menuOpen, setMenuOpen) {
    setMenuOpen(!menuOpen);
}

export default function Header_global() {
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
        <header id="home" className="text-black bg-off-white flex items-center justify-between px-40 py-2 fixed top-0 left-0 right-0 h-20 max-lg:px-5">
            <Link href="/" passHref>
                <Image
                    src="/images/logo/black-logo.svg"
                    alt="logo"
                    width={100}
                    height={50}
                    className="max-lg:ml-0 h-15"
                />
            </Link>

            <div id="togglebutton" className="hamburger z-10 text-2xl absolute top-5 right-4 cursor-pointer block lg:hidden" onClick={() => toggleMenu(menuOpen, setMenuOpen)}>
                {menuOpen ? '✖' : '☰'}
            </div>

            <ul id="navlist" className="text-black list-none lg:flex hidden">
                <li><Link href="/" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Home</Link></li>
                <li><Link href="/#service" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Service</Link></li>
                <li><Link href="/store" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Store</Link></li>
                <li><Link href="/stringing" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Re-String</Link></li>
                <li><Link href="/#contact" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Contact</Link></li>
                <li><Link href="/login" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Login</Link></li>
                <li><Link href="/register" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm">Sign Up</Link></li>
                <li><Link href="/checkout" className="flex row px-4 py-1 top-6 fixed hover:bg-blue-500 duration-200 rounded-sm">
                    {/*Insert Cart Item Amount Value Here*/}
                    <img
                        alt="Checkout Image"
                        src="/images/icons/blackCart.png"
                        height={24}
                        width={24}
                    /><span>Basket</span>
                </Link>
                </li>
            </ul>

            <div id="menucontainer" className={`menu p-10 fixed top-0 right-0 h-full bg-white overflow-hidden transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                <ul id="navmenu" className="list-none mt-20 mr-2 text-left text-lg text-black">
                    <li className="mb-2"><Link href="/" className="hover:text-blue-500">Home</Link></li>
                    <li className="mb-2"><Link href="/#service" className="hover:text-blue-500">Service</Link></li>
                    <li className="mb-2"><Link href="/store" className="hover:text-blue-500">Store</Link></li>
                    <li className="mb-2"><Link href="/#contact" className="hover:text-blue-500">Contact</Link></li>
                    <li className="mb-2"><Link href="/login" className="hover:text-blue-500">Login</Link></li>
                    <li className="mb-2"><Link href="/register" className="hover:text-blue-500">Sign Up</Link></li>
                    <li><Link href="/checkout" className="flex row hover:text-blue-500">
                        {/*Insert Cart Item Amount Value Here*/}
                        <img
                            alt="Checkout Image"
                            src="/images/icons/blackCart.png"
                            height={24}
                            width={24}
                        /><span>Basket</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
