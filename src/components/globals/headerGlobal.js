import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import '../../app/globals.css';

export default function Header_global() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useSelector((state) => state.user.user);
    const cartCount = useSelector((state) => state.cart.totalCount);

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

    useEffect(() => {
        const currentPath = router.pathname;
        const links = document.querySelectorAll('header a');

        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }, [router.pathname]);

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
                <li><Link href="/" className="header-link duration-200 px-2 py-2 rounded-sm">Home</Link></li>
                <li><Link href="/#service" className="header-link duration-200 px-2 py-2 rounded-sm">Service</Link></li>
                <li><Link href="/store" className="header-link duration-200 px-2 py-2 rounded-sm">Store</Link></li>
                <li><Link href="/stringing" className="header-link duration-200 px-2 py-2 rounded-sm">Re-String</Link></li>
                <li><Link href="/#contact" className="header-link duration-200 px-2 py-2 rounded-sm">Contact</Link></li>
                <li className="border-r-2 border-black mx-4 py-3 opacity-50"></li>
                {session ? (
                    <>
                        <li>
                            <button onClick={handleLogout} className="header-link duration-200 px-2 py-0 rounded-sm">Logout</button>
                        </li>
                        <li><Link href="/userProfile/profile" className="header-link duration-200 px-2 py-2 rounded-sm">Profile</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link href="/login" className="header-link duration-200 px-2 py-2 rounded-sm">Login</Link></li>
                        <li><Link href="/register" className="header-link duration-200 px-2 py-2 rounded-sm">Sign Up</Link></li>
                    </>
                )}
                <li>
                    <Link href="/checkoutPage" className="flex row header-link px-2 py-1 top-6 fixed duration-200 rounded-sm">
                        <Image
                            alt="Checkout Image"
                            src="/images/icons/blackCart.png"
                            height={24}
                            width={24}
                        />
                        <span id="cart-count">Basket ({cartCount})</span>
                    </Link>
                </li>
            </ul>

            <div id="menucontainer" className={`menu p-10 fixed top-0 right-0 h-full bg-white overflow-hidden transition-transform duration-300 ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                <ul id="navmenu" className="list-none mt-20 mr-2 text-left text-lg text-black">
                    <li className="mb-2"><Link href="/" className="header-link hover:text-blue-500">Home</Link></li>
                    <li className="mb-2"><Link href="/#service" className="header-link hover:text-blue-500">Service</Link></li>
                    <li className="mb-2"><Link href="/store" className="header-link hover:text-blue-500">Store</Link></li>
                    <li className="mb-2"><Link href="/#contact" className="header-link hover:text-blue-500">Contact</Link></li>
                    {session ? (
                        <>
                            <li className="mb-2">
                                <a href="#" onClick={handleLogout} className="header-link hover:text-blue-500">Logout</a>
                            </li>
                            <Link href="/userProfile/profile" className="header-link hover:text-blue-500">
                                Profile
                            </Link>
                        </>
                    ) : (
                        <>
                            <li className="mb-2"><Link href="/login" className="header-link hover:text-blue-500">Login</Link></li>
                            <li className="mb-2"><Link href="/register" className="header-link hover:text-blue-500">Sign Up</Link></li>
                        </>
                    )}
                    <li><Link href="/checkoutPage" className="flex row header-link hover:text-blue-500">
                        <span id="cart-count"> Cart ({cartCount})</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
