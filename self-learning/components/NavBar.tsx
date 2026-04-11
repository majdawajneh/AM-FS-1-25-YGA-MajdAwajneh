'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './css/Navbar.module.css';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolled2, setScrolled2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50 && window.scrollY <= 940);
    };
    const handleScroll2 = () =>{
      setScrolled2(window.scrollY > 940 && window.scrollY <= 4800);
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#courses', label: 'Courses' },
    { href: '#paths', label: 'Paths' },
    { href: '#instructors', label: 'Instructors' },
    { href: '#pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent} ${scrolled2 ? styles.scrolled2 : ""}` }>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          NobileBit-Academy
        </Link>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.authButtons}>
          <Link href="/login" className={styles.btnSecondary}>Login</Link>
          <Link href="/signup" className={`${styles.btnPrimary} ${styles.btnSm}`}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
