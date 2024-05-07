/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions/userActions';

function toggleMenu(menuOpen, setMenuOpen) {
    setMenuOpen(!menuOpen);
}

export default function Header_global() {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
    };

    useEffect(() => {
        // Function to toggle menu state
        function toggleMenu() {
            setMenuOpen(!menuOpen);
        }

        // Attach click event listeners for menu toggle
        const menuItems = document.querySelectorAll('#menucontainer a');
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', toggleMenu);
        });

        // Function to handle smooth scrolling
        function handleScroll(e) {
            e.preventDefault();
            const href = e.currentTarget.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        }

        // Attach click event listeners for smooth scrolling
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        scrollLinks.forEach(scrollLink => {
            scrollLink.addEventListener('click', handleScroll);
        });

        // Cleanup function to remove event listeners
        return () => {
            menuItems.forEach(menuItem => {
                menuItem.removeEventListener('click', toggleMenu);
            });
            scrollLinks.forEach(scrollLink => {
                scrollLink.removeEventListener('click', handleScroll);
            });
        };
    }, [menuOpen, setMenuOpen]);

    return (
        <header id="home" className="text-black bg-off-white flex items-center justify-between px-40 py-2 fixed top-0 left-0 right-0 h-20 max-lg:px-5">
            <Link href="/" passHref>
                <Image
                    src="/images/logo/black-logo.svg"
                    alt="logo"
                    width={100}
                    height={50}
                    className="max-lg:ml-0"
                />
            </Link>

            <div id="togglebutton" className="hamburger z-10 text-2xl absolute top-5 right-4 cursor-pointer block lg:hidden" onClick={() => toggleMenu(menuOpen, setMenuOpen)}>
                {menuOpen ? '✖' : '☰'}
            </div>

            <ul id="navlist" className="list-none lg:flex hidden">
                <li><Link href="/" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Home</Link></li>
                <li><Link href="/#service" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Service</Link></li>
                <li><Link href="/store" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Store</Link></li>
                <li><Link href="/stringing" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Re-String</Link></li>
                <li><Link href="/#contact" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Contact</Link></li>
                <li className="border-r-2 border-black mx-4 py-3"></li>
                {user ? (
                    <>
                        <li>
                            <Link href="#" onClick={handleLogout} className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Logout</Link>
                        </li>
                        <li><Link href="/profile" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Profile</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link href="/login" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Login</Link></li>
                        <li><Link href="/register" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Sign Up</Link></li>
                    </>
                )}
                <li>
                    <Link href="/checkout" className="flex row px-2 py-1 top-6 fixed hover:bg-blue-500 duration-200 rounded-sm">
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
                    {user ? (
                        <>
                            <li className="mb-2">
                                <a href="#" onClick={handleLogout} className="hover:text-blue-500">Logout</a>
                            </li>
                            <li className="mb-2">
                                <span className="hover:text-blue-500"><Link href="/profile" className="hover:bg-blue-500 duration-200 px-4 py-2 rounded-sm"></Link>Profile</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="mb-2"><Link href="/login" className="hover:text-blue-500">Login</Link></li>
                            <li className="mb-2"><Link href="/register" className="hover:text-blue-500">Sign Up</Link></li>
                        </>
                    )}
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
