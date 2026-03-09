"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/Stuff.module.css";

export default function Stuff() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stuff} id="about" ref={sectionRef}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>📋 About Us</span>
          <h1 className={styles.title}>
            Some Stuff <span className={styles.highlight}>About Us</span>
          </h1>
          <p className={styles.description}>
            The Great Team
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className={`${styles.contentCard} ${isVisible ? styles.visible : ""}`}>
              <div className={styles.iconBox}>
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h2 className={styles.sectionTitle}>We're More Than Just A Web Agency</h2>
              <p className={styles.sectionText}>
                At NobleBit-Solutions, we specialize in creating stunning, high-performance 
                websites and web applications that help businesses thrive in the digital landscape.
              </p>
              <p className={styles.sectionText}>
                Our team of experts combines creativity with technical expertise to deliver 
                solutions that not only look great but also drive real results for your business.
              </p>
              <a href="/contact" className={styles.actionBtn}>
                Start Your Project
                <span className={styles.btnArrow}>→</span>
              </a>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className={`${styles.imageWrapper} ${isVisible ? styles.visible : ""}`}>
              <img 
                className="img-fluid" 
                src="/Assets/images/stuff.jpg" 
                alt="About NobleBit-Solutions"
              />
              <div className={styles.imageDecoration}></div>
              <div className={styles.imageBadge}>
                <span className={styles.badgeNumber}>5+</span>
                <span className={styles.badgeText}>Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <i className="fa-solid fa-check"></i>
            </div>
            <h4>Quality Assured</h4>
            <p>We deliver only the best quality projects</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <i className="fa-solid fa-clock"></i>
            </div>
            <h4>On-Time Delivery</h4>
            <p>We meet every deadline</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <i className="fa-solid fa-headset"></i>
            </div>
            <h4>24/7 Support</h4>
            <p>We're always here to help</p>
          </div>
        </div>
      </div>
    </section>
  );
}

