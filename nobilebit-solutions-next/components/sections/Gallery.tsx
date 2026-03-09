"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/Gallery.module.css";

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: "design", image: "/Assets/images/gallerypics.jpg", title: "Portfolio Website" },
  { id: 2, category: "code", image: "/Assets/images/gallerypics.jpg", title: "E-commerce Platform" },
  { id: 3, category: "photo", image: "/Assets/images/gallerypics.jpg", title: "Brand Identity" },
  { id: 4, category: "app", image: "/Assets/images/gallerypics.jpg", title: "Mobile App" },
  { id: 5, category: "design", image: "/Assets/images/gallerypics.jpg", title: "Dashboard UI" },
  { id: 6, category: "code", image: "/Assets/images/gallerypics.jpg", title: "Web Application" },
  { id: 7, category: "photo", image: "/Assets/images/gallerypics.jpg", title: "Photography Site" },
  { id: 8, category: "app", image: "/Assets/images/gallerypics.jpg", title: "SaaS Platform" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "design", label: "Design" },
  { id: "code", label: "Code" },
  { id: "photo", label: "Photo" },
  { id: "app", label: "App" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
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

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className={styles.gallery} id="gallery" ref={sectionRef}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>🎨 Our Work</span>
          <h1 className={styles.title}>
            We Make <span className={styles.highlight}>This</span>
          </h1>
          <p className={styles.description}>
            Prepared to be amazed
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterBtn} ${activeFilter === category.id ? styles.active : ""}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className={`${styles.galleryItem} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={styles.galleryImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.projectCategory}>{item.category}</span>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    <button className={styles.viewBtn}>
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreBtn}>
            More Works
            <span className={styles.btnArrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

