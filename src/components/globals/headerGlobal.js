/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import '../../app/globals.css'
import { useSelector, useDispatch } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';

export default function Header_global() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useSelector((state) => state.user.user);

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push('/');
    };

    useEffect(() => {
        function toggleMenu() {
            setMenuOpen(!menuOpen);
        }

        const menuItems = document.querySelectorAll('#menucontainer a');
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', toggleMenu);
        });

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

        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        scrollLinks.forEach(scrollLink => {
            scrollLink.addEventListener('click', handleScroll);
        });

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

            <div id="togglebutton" className="hamburger z-10 text-2xl absolute top-5 right-4 cursor-pointer block lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✖' : '☰'}
            </div>

            <ul id="navlist" className="list-none lg:flex hidden">
                <li><Link href="/" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Home</Link></li>
                <li><Link href="/#service" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Service</Link></li>
                <li><Link href="/store" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Store</Link></li>
                <li><Link href="/stringing" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Re-String</Link></li>
                <li><Link href="/#contact" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Contact</Link></li>
                <li className="border-r-2 border-black mx-4 py-3"></li>
                {session ? (
                    <>
                        <li>
                            <button onClick={handleLogout} className="hover:bg-blue-500 duration-200 px-2 py-0 rounded-sm">Logout</button>
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
                    <Link href="/checkoutPage" className="flex row px-2 py-1 top-6 fixed hover:bg-blue-500 duration-200 rounded-sm">
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
                    <li><Link href="/checkoutPage" className="flex row hover:text-blue-500">
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
