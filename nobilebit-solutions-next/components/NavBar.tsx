"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./css/NavBar.module.css";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#ourclientsid", label: "Clients" },
    { href: "#FAQ-section", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logoWrapper}>
            <img src="/Assets/images/lamp.png" alt="NobleBit-Solutions" />
          </div>
          <span className={styles.brandName}>NobileBit<span className={styles.brandAccent}>-Solutions</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <Link href="/contact" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.mobileLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={styles.mobileCta}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

