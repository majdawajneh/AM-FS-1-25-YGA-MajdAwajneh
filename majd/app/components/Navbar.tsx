"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(function() {
    const handleScroll = function() {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return function() { window.removeEventListener("scroll", handleScroll); };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  function getNavClass() {
    return scrolled ? styles.navbar + " " + styles.scrolled : styles.navbar;
  }

  function getLinksClass() {
    return mobileOpen ? styles.navLinks + " " + styles.open : styles.navLinks;
  }

  function getHamburgerClass() {
    return mobileOpen ? styles.hamburger + " " + styles.open : styles.hamburger;
  }

  return (
    <nav className={getNavClass()}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="#home" className={styles.logo}>
          <span className={styles.logoDot}>.</span>
          Majd
        </Link>

        {/* Navigation Links */}
        <div className={getLinksClass()}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* CTA Button */}
          <Link
            href="#contact"
            className={styles.ctaBtn}
            onClick={() => setMobileOpen(false)}
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={getHamburgerClass()} />
        </button>
      </div>
    </nav>
  );
}

