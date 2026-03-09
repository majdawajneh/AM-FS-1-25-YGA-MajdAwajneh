"use client";

import Link from "next/link";
import styles from "./css/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#FAQ-section", label: "FAQ" },
  ];

  const companyLinks = [
    { href: "#about", label: "About Us" },
    { href: "#team", label: "Our Team" },
    { href: "#ourclientsid", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
    { href: "#techs", label: "Technologies" },
  ];

  const servicesLinks = [
    { href: "#", label: "Web Development" },
    { href: "#", label: "Mobile Apps" },
    { href: "#", label: "UI/UX Design" },
    { href: "#", label: "SEO Optimization" },
    { href: "#", label: "E-commerce" },
  ];

  const socialLinks = [
    { href: "#", icon: "fa-instagram", label: "Instagram" },
    { href: "#", icon: "fa-facebook", label: "Facebook" },
    { href: "#", icon: "fa-twitter", label: "Twitter" },
    { href: "#", icon: "fa-linkedin", label: "LinkedIn" },
    { href: "#", icon: "fa-github", label: "GitHub" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>

      <div className={`container ${styles.container}`}>
        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brand}>
              <div className={styles.logoWrapper}>
                <img src="/Assets/images/lamp.png" alt="NobleBit-Solutions" />
              </div>
              <span className={styles.brandName}>
                NobleBit<span className={styles.brandAccent}>-Solutions</span>
              </span>
            </Link>
            <p className={styles.brandDescription}>
              We build stunning, high-performance websites and web applications 
              that help businesses thrive in the digital landscape.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    <i className="fa-solid fa-chevron-right"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linksList}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    <i className="fa-solid fa-chevron-right"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linksList}>
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    <i className="fa-solid fa-chevron-right"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span>workinfo@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span>+1 234 567 890</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>Jordan, Amman</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h4>Subscribe to Our Newsletter</h4>
            <p>Get the latest updates and offers on our services.</p>
          </div>
          <form className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>© {currentYear} NobleBit-Solutions. All rights reserved.</p>
            <p>Designed by <span className={styles.designer}>MAJD</span></p>
          </div>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

