"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/Techs.module.css";

interface Tech {
  id: number;
  name: string;
  image: string;
  category: string;
}

const techs: Tech[] = [
  { id: 1, name: "HTML5", image: "/Assets/images/html-logo.png", category: "Frontend" },
  { id: 2, name: "CSS3", image: "/Assets/images/css-logo.png", category: "Frontend" },
  { id: 3, name: "JavaScript", image: "/Assets/images/js-logo.png", category: "Frontend" },
  { id: 4, name: "React", image: "/Assets/images/React-logo.png", category: "Framework" },
  { id: 5, name: "Next.js", image: "/Assets/images/Nextjs-logo.png", category: "Framework" },
  { id: 6, name: "MongoDB", image: "/Assets/images/mongo-db.png", category: "Database" },
];

export default function Techs() {
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
    <section className={styles.techs} id="techs" ref={sectionRef}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>🛠️ Technologies</span>
          <h1 className={styles.title}>
            Our <span className={styles.highlight}>Tech Stack</span>
          </h1>
          <p className={styles.description}>
            We use the latest and most reliable technologies
          </p>
        </div>

        <div className={styles.techsGrid}>
          {techs.map((tech, index) => (
            <div 
              key={tech.id}
              className={`${styles.techCard} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.techInner}>
                <div className={styles.techImageWrapper}>
                  <img 
                    src={tech.image} 
                    alt={tech.name}
                    className={styles.techImage}
                    title={tech.name}
                  />
                </div>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techCategory}>{tech.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p>Need a custom technology solution?</p>
          <a href="/contact" className={styles.ctaButton}>
            Let's Discuss <span>💬</span>
          </a>
        </div>
      </div>
    </section>
  );
}

