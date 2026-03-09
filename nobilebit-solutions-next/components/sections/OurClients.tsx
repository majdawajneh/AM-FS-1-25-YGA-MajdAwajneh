"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/OurClients.module.css";

interface Client {
  id: number;
  name: string;
  company: string;
  logo: string;
  testimonial: string;
  rating: number;
}

const clients: Client[] = [
  {
    id: 1,
    name: "أحمد محمد",
    company: "شركة التقنية المتقدمة",
    logo: "/Assets/images/lamp.png",
    testimonial: "تجربة رائعة مع فريق NobleBit-Solutions! أنشئوا لنا موقعاً تجارياً احترافياً ساعدنا في زيادة مبيعاتنا بنسبة 150%. الخدمة كانت ممتازة والتواصل مستمر طوال المشروع.",
    rating: 5
  },
  {
    id: 2,
    name: "سارة عبدالله",
    company: "مؤسسة سارة للتصميم",
    logo: "/Assets/images/lamp.png",
    testimonial: "موقعهم ساعدني في تحقيق حلمي بافتتاح متجري الإلكتروني. التصميم عصري والسرعة ممتازة. أنصح كل من يبحث عن اح professionalism بالتعامل معهم.",
    rating: 5
  },
  {
    id: 3,
    name: "خالد عمر",
    company: "شركة عمر العقارية",
    logo: "/Assets/images/lamp.png",
    testimonial: "أحسن قرار اتخذته كان اختيار NobleBit لتطوير موقع شركتنا. الفريق محترف جداً وفهموا احتياجاتنا من أول جلسة. الآن نملك موقعاً يعكس مستوى شركتنا.",
    rating: 5
  },
  {
    id: 4,
    name: "ليلى حسن",
    company: "مركز ليلى التعليمي",
    logo: "/Assets/images/lamp.png",
    testimonial: "فريق مذهل! أنشئوا لنا منصة تعليمية متكاملة سهلت على طلابنا الوصول للمحتوى. الدعم الفني ممتاز جداً.",
    rating: 5
  }
];

// Additional logos for ticker
const clientLogos = [
  "/Assets/images/lamp.png",
  "/Assets/images/React-logo.png",
  "/Assets/images/Nextjs-logo.png",
  "/Assets/images/node-v24.13.0-x64.msi",
  "/Assets/images/mongo-db.png",
];

export default function OurClients() {
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

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        <i className={i < rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
      </span>
    ));
  };

  return (
    <section className={styles.ourClients} id="ourclientsid" ref={sectionRef}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>💬 Testimonials</span>
          <h1 className={styles.title}>
            Our <span className={styles.highlight}>Clients</span>
          </h1>
          <p className={styles.description}>
            نفخر بثقة عملائنا ونجاحهم. إليك بعض آراء العملاء الذين وثقوا بنا
          </p>
        </div>

        {/* Client Logos - Scrolling */}
        <div className={styles.logoTicker}>
          <div className={styles.logoTrack}>
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                <img src={logo} alt="Client Logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="row text-center pt-5 pb-5 justify-content-center">
          {clients.map((client, index) => (
            <div 
              key={client.id} 
              className={`col-md-6 col-lg-4 mb-4 ${styles.testimonialCard}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`${styles.card} bg-white h-100`}>
                <div className={styles.cardHeader}>
                  <img 
                    src={client.logo} 
                    alt={client.company} 
                    className={styles.clientLogo}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.rating}>
                    {renderStars(client.rating)}
                  </div>
                  <blockquote className={`${styles.quote} text-black-50 mb-4`}>
                    "{client.testimonial}"
                  </blockquote>
                  <div className={styles.clientInfo}>
                    <h5 className="mb-1 fw-bold">{client.name}</h5>
                    <p className="mb-0 text-muted small">{client.company}</p>
                  </div>
                </div>
                <div className={styles.quoteIcon}>
                  <i className="fa-solid fa-quote-left"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`${styles.stats} row mt-5 pt-4`}>
          <div className="col-6 col-md-3 mb-3">
            <div className={styles.statItem}>
              <h3 className="fw-bold">+150</h3>
              <p className="mb-0">مشروع ناجح</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className={styles.statItem}>
              <h3 className="fw-bold">+80</h3>
              <p className="mb-0">عميل سعيد</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className={styles.statItem}>
              <h3 className="fw-bold">5+</h3>
              <p className="mb-0">سنوات خبرة</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className={styles.statItem}>
              <h3 className="fw-bold">24/7</h3>
              <p className="mb-0">دعم فني</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <p className="mb-3">هل تريد أن تكون جزءاً من نجاحنا؟</p>
          <a href="/contact" className={styles.ctaButton}>
            ابدأ مشروعك الآن <span>🚀</span>
          </a>
        </div>
      </div>
    </section>
  );
}

