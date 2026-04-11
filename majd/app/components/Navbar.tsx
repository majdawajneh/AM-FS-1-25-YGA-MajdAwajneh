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
    React.createElement("nav", { className: getNavClass() },
      React.createElement("div", { className: styles.container },
        React.createElement(Link, { href: "#home", className: styles.logo },
          React.createElement("span", { className: styles.logoDot }, "."),
          "Majd"
        ),
        React.createElement("div", { className: getLinksClass() },
          navLinks.map(function(link) {
            return React.createElement(Link, {
              key: link.name,
              href: link.href,
              className: styles.navLink,
              onClick: function() { setMobileOpen(false); }
            }, link.name);
          }),
          React.createElement(Link, {
            href: "#contact",
            className: styles.ctaBtn,
            onClick: function() { setMobileOpen(false); }
          }, "Let's Talk")
        ),
        React.createElement("button", {
          className: styles.mobileToggle,
          onClick: function() { setMobileOpen(!mobileOpen); },
          "aria-label": "Toggle menu"
        },
          React.createElement("span", { className: getHamburgerClass() })
        )
      )
    )
  );
}

