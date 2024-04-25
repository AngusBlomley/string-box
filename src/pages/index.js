//Insert Imports - Navigation, Others.
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // You could add additional effects or subscriptions here
    return () => {
      // Cleanup any subscriptions here
    };
  }, []);

  return (
    <main>
      <header>

        <Link href="/">
          <Image
            src="/path/to/your/logo.png"
            alt="logo"
            width={100}
            height={50}
          />
        </Link>

        <ul id="navlist" className="list">
          { }
        </ul>

        <div id="menucontainer" className={`menu ${menuOpen ? 'active' : ''}`}>
          <div id="togglebutton" className="hamburger" onClick={toggleMenu}>☰</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="html/branding.html">- Branding</a></li>
            <li><a href="html/editorial.html">- Editorial</a></li>
            <li><a href="html/logo.html">- Logo</a></li>
            <li><a href="html/package.html">- Package</a></li>
            <li><a href="html/web.html">- Web</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>
    </main >
  );
}
