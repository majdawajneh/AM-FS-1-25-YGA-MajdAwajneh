"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: "in", href: "#" },
    { name: "GitHub", icon: "gh", href: "#" },
    { name: "Twitter", icon: "tw", href: "#" },
    { name: "Instagram", icon: "ig", href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "E-Commerce", href: "#" },
    { name: "Consulting", href: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <motion.div 
            className={styles.brandSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="#home" className={styles.logo}>
              <span className={styles.logoDot}>.</span>
              <span className={styles.logoText}>Majd</span>
            </Link>
            <p className={styles.description}>
              Full-Stack Developer & UI/UX Designer crafting exceptional digital experiences with modern technologies.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name.charAt(0)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className={styles.linkSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.linkArrow}>→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className={styles.linkSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionTitle}>Services</h3>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className={styles.link}>
                    <span className={styles.linkArrow}>→</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className={styles.contactSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionTitle}>Get In Touch</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉</div>
                <span>hello@majd.dev</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <span>Amman, Jordan</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📱</div>
                <span>+962 7X XXX XXXX</span>
              </div>
            </div>
            <Link href="#contact" className={styles.ctaButton}>
              Let's Talk
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.copyright}>
            <span>© {currentYear} Majd Awajneh. All rights reserved.</span>
          </div>
          <div className={styles.poweredBy}>
            <span>Made with </span>
            <span className={styles.heart}>❤</span>
            <span> and passion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

