/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../app/globals.css'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions/userActions';
import { handleHeaderScroll, toggleMenu, handleMenuClicks, updateHeaderOnScroll } from './animations';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerStyle, setHeaderStyle] = useState({ backgroundColor: 'transparent', color: 'white' });
    const [logoSize, setLogoSize] = useState({ width: 180, height: 150, marginTop: 36 });
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
    };

    useEffect(() => {
        const scrollHandler = handleHeaderScroll(setHeaderStyle, setLogoSize);
        window.addEventListener('scroll', scrollHandler);
        updateHeaderOnScroll(setHeaderStyle, setLogoSize);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    useEffect(() => {
        const cleanupMenuClicks = handleMenuClicks(() => toggleMenu(menuOpen, setMenuOpen));
        return cleanupMenuClicks;
    }, [menuOpen]);



    return (
        <header id="home" className="text-white flex items-center justify-between px-36 py-2 fixed top-0 left-0 right-0 h-20 max-lg:px-5 z-50" style={{ ...headerStyle, transition: 'background-color 0.2s, color 0.2s' }}>
            <Link href="/" passHref>
                <Image
                    src="/images/logo/logo-white.svg"
                    alt="logo"
                    width={logoSize.width}
                    height={logoSize.height}
                    style={{ marginTop: logoSize.marginTop }}
                    className="max-lg:ml-0 duration-200"
                />
            </Link>

            <div id="togglebutton" className="hamburger z-10 text-2xl absolute top-5 right-4 cursor-pointer block lg:hidden" onClick={() => toggleMenu(menuOpen, setMenuOpen)}>
                {menuOpen ? '✖' : '☰'}
            </div>

            <ul id="navlist" className="list-none lg:flex hidden">
                <li><Link href="/" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Home</Link></li>
                <li><Link href="#service" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Service</Link></li>
                <li><Link href="/store" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Store</Link></li>
                <li><Link href="/stringing" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Re-String</Link></li>
                <li><Link href="#contact" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Contact</Link></li>
                <li className="hover:bg-blue-500 duration-200 rounded-sm border-r-2 mx-4 py-3"></li>
                {user ? (
                    <>
                        <li>
                            <Link href="#" onClick={handleLogout} className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Logout</Link>
                        </li>
                        <li><Link href="/profile" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Profile</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link href="/login" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Login</Link></li>
                        <li><Link href="/register" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm">Sign Up</Link></li>
                    </>
                )}
                <li><Link href="/checkout" className="flex row px-3 py-1 top-6 fixed hover:bg-blue-500 duration-200 rounded-sm">
                    {/*Insert Cart Item Amount Value Here*/}
                    <img
                        alt="Checkout Image"
                        src="/images/icons/cart.png"
                        height={24}
                        width={24}
                    /><span>Basket</span>
                </Link>
                </li>
            </ul>

            <div id="menucontainer" className={`menu p-10 fixed top-0 right-0 h-full bg-white overflow-hidden transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                <ul id="navmenu" className="list-none mt-20 mr-2 text-left text-lg text-black">
                    <li className="mb-2"><Link href="/" className="hover:text-blue-500">Home</Link></li>
                    <li className="mb-2"><Link href="#service" className="hover:text-blue-500">Service</Link></li>
                    <li className="mb-2"><Link href="/store" className="hover:text-blue-500">Store</Link></li>
                    <li className="mb-2"><Link href="#contact" className="hover:text-blue-500">Contact</Link></li>
                    {user ? (
                        <>
                            <li className="mb-2">
                                <a href="#" onClick={handleLogout} className="hover:text-blue-500">Logout</a>
                            </li>
                            <li className="mb-2">
                                <span className="hover:text-blue-500"><Link href="/profile" className="hover:bg-blue-500 duration-200 px-3 py-2 rounded-sm"></Link>Profile</span>
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
