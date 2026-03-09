"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/Features.module.css";

interface Feature {
  icon: string;
  number: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "fa-laptop-code",
    number: "1",
    title: "Great Designs",
    description: "We design perfect websites that capture your brand identity and engage your audience with stunning visuals."
  },
  {
    icon: "fa-code",
    number: "2",
    title: "Web Development",
    description: "We build robust and scalable web applications using the latest technologies like React, Next.js, and TypeScript."
  },
  {
    icon: "fa-arrow-up-right-dots",
    number: "3",
    title: "SEO Optimization",
    description: "We optimize your website for search engines to drive organic traffic and improve your online visibility."
  }
];

export default function Features() {
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
    <section className={styles.features} id="services" ref={sectionRef}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>💡 Our Services</span>
          <h1 className={styles.title}>
            We Are Good <span className={styles.highlight}>At</span>
          </h1>
          <p className={styles.description}>
            Some of these stuff under
          </p>
        </div>

        <div className="row pt-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`col-md-6 col-lg-4 mb-4 ${styles.featureCol}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`${styles.featureCard} ${isVisible ? styles.visible : ""}`}>
                <div className={styles.iconWrapper}>
                  <div className={styles.numberBadge}>{feature.number}</div>
                  <div className={styles.iconCircle}>
                    <i className={`fa-solid ${feature.icon}`}></i>
                  </div>
                </div>
                <h2 className={styles.featureTitle}>{feature.title}</h2>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.cardDecoration}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

