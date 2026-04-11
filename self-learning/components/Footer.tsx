'use client';

import Link from 'next/link';
import styles from './css/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#courses', label: 'Courses' },
    { href: '#paths', label: 'Learning Paths' },
    { href: '#instructors', label: 'Instructors' },
    { href: '/pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
    { href: '/support', label: 'Support' },
    { href: '/contact', label: 'Contact' },
  ];

  const platformLinks = [
    { href: '/terms', label: 'Terms' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/cookies', label: 'Cookies' },
    { href: '/accessibility', label: 'Accessibility' },
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' },
    { href: 'https://linkedin.com', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://youtube.com', icon: 'fab fa-youtube', label: 'YouTube' },
    { href: 'https://discord.com', icon: 'fab fa-discord', label: 'Discord' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.orbContainer}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brand}>
              <span className={styles.logoIcon}>⚡</span>
              <span className={styles.brandName}>CodeAcademy Pro</span>
            </Link>
            <p className={styles.brandDesc}>
              Master programming with world-class instructors, hands-on projects, 
              and career-ready certificates. Join 100K+ developers.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} className={styles.socialLink} target="_blank" rel="noopener">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Platform</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linksList}>
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.linksList}>
              {platformLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h3>Stay Updated</h3>
            <p>Get coding tips, new courses, and exclusive offers.</p>
          </div>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
            <button type="submit" className={styles.btnPrimary}>Subscribe</button>
          </form>
        </div>

        {/* Bottom */}
        <div className={styles.bottomBar}>
          <p>&copy; {currentYear} CodeAcademy Pro. All rights reserved.</p>
          <p>Powered by Next.js & React</p>
        </div>
      </div>
    </footer>
  );
}
