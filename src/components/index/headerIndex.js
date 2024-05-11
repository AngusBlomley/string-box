import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import '../../app/globals.css';
import { useSelector } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { handleHeaderScroll, toggleMenu, handleMenuClicks, updateHeaderOnScroll } from '../animations';

export default function Header() {
    const { data: session, status } = useSession();
    const user = useSelector((state) => state.user.user);
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerStyle, setHeaderStyle] = useState({ backgroundColor: 'transparent', color: 'white' });
    console.log('Session status:', status);
    const [logoSize, setLogoSize] = useState({ width: 180, height: 150, marginTop: 36 });

    useEffect(() => {
        const scrollHandler = handleHeaderScroll(setHeaderStyle, setLogoSize);
        window.addEventListener('scroll', scrollHandler);
        updateHeaderOnScroll(setHeaderStyle, setLogoSize);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [])

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push('/');
    };

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
                    className="max-lg:ml-0 duration-200"
                    priority
                />
            </Link>

            <div id="togglebutton" className="hamburger z-10 text-2xl absolute top-5 right-4 cursor-pointer block lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✖' : '☰'}
            </div>

            <ul id="navlist" className="list-none lg:flex hidden">
                <li><Link href="/" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Home</Link></li>
                <li><Link href="#service" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Service</Link></li>
                <li><Link href="/store" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Store</Link></li>
                <li><Link href="/stringing" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Re-String</Link></li>
                <li><Link href="#contact" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm">Contact</Link></li>
                <li className="hover:bg-blue-500 duration-200 rounded-sm border-r-2 mx-4 py-3"></li>
                {status === "loading" ? (
                    <li>Loading...</li>
                ) : session ? (
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
                <li><Link href="/checkoutPage" className="flex row px-2 py-1 top-6 fixed hover:bg-blue-500 duration-200 rounded-sm">
                    {/*Insert Cart Item Amount Value Here*/}
                    <Image
                        alt="Checkout Image"
                        src="/images/icons/cart.png"
                        height={24}
                        width={24}
                        style={{ width: 'auto', height: '24px' }}
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
                                <span className="hover:text-blue-500"><Link href="/profile" className="hover:bg-blue-500 duration-200 px-2 py-2 rounded-sm"></Link>Profile</span>
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
                        <Image
                            alt="Checkout Image"
                            src="/images/icons/blackCart.png"
                            height={24}
                            width={24}
                            style={{ width: 'auto', height: '24px' }}
                        /><span>Basket</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
