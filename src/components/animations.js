import { useEffect } from "react";
import Link from "next/link";

export default function useFadeLeft() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-left');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        const element = document.querySelector('.observe-fade-in');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);
};

export const updateHeaderOnScroll = (setHeaderStyle, setLogoSize) => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 80;

    if (scrollPosition > scrollThreshold) {
        setHeaderStyle({ backgroundColor: 'black', color: 'white' });
        setLogoSize({ width: 120, height: 100, marginTop: 0 });
    } else {
        setHeaderStyle({ backgroundColor: 'transparent', color: 'white' });
        setLogoSize({ width: 180, height: 150, marginTop: 36 });
    }
};

export const handleHeaderScroll = (setHeaderStyle, setLogoSize) => {
    return () => updateHeaderOnScroll(setHeaderStyle, setLogoSize);
};

export const toggleMenu = (menuOpen, setMenuOpen) => {
    setMenuOpen(!menuOpen);
};

export const handleMenuClicks = (toggleMenu) => {
    const menuItems = document.querySelectorAll('#menucontainer a');
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => toggleMenu());
    });

    return () => {
        menuItems.forEach(menuItem => {
            menuItem.removeEventListener('click', () => toggleMenu());
        });
    };
};