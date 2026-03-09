"use client";

import { useEffect, useState } from "react";
import styles from "./css/Landing.module.css";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.landing} id="home">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles["landing-back-video"]}
      >
        <source src="/Assets/videos/First-Div-Back.mp4" />
      </video>

      {/* Dark Overlay */}
      <div className={styles.videoOverlay}></div>

      {/* Floating Orbs */}
      <div className={styles.backgroundEffects}>
        <div 
          className={styles.orb1}
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        ></div>
        <div 
          className={styles.orb2}
          style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        ></div>
        <div 
          className={styles.orb3}
          style={{ transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)` }}
        ></div>
      </div>

      {/* Content */}
      <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
        <div className="text-center text-light">
          <span className={styles.subtitle}>🚀 Welcome to NobleBit-Solutions</span>
          
          <h1 className={styles.title}>
            Build Your <span className={styles.highlight}>Web Application</span> & Website
          </h1>
          
          <p className={`${styles.description} fs-6 text-white-50 mb-4 mt-4`}>
            Vercel provides the developer tools and cloud infrastructure to build, 
            scale, and secure a faster, more personalized web.
          </p>
          
          <div className={styles.buttonGroup}>
            <button 
              className={styles.primaryBtn} 
              onClick={scrollToServices}
            >
              Get Started
              <span className={styles.btnArrow}>→</span>
            </button>
            <button className={styles.secondaryBtn}>
              View Portfolio
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Fast Delivery</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Professional Design</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}

