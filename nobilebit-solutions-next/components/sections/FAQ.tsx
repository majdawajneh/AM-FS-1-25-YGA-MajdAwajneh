"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "ما هي الخدمات التي تقدمها NobleBit-Solutions؟",
    answer: "نقدم مجموعة شاملة من خدمات تطوير الويب تشمل: تصميم المواقع الاحترافي، تطوير التطبيقات باستخدام React و Next.js، تحسين محركات البحث (SEO)، تصميم واجهات المستخدم (UI/UX)، والتطوير الكامل للنظام الأمامي والخلفي."
  },
  {
    question: "كم من الوقت يستغرق بناء موقع إلكتروني؟",
    answer: "مدة المشروع تعتمد على تعقيد الموقع. المواقع البسيطة تستغرق من 5-10 أيام عمل، بينما المواقع المتقدمة مثل المتاجر الإلكترونية قد تستغرق من 2-4 أسابيع.，我们将提供具体的时间表."
  },
  {
    question: "هل تقدمون خدمات الصيانة والدعم بعد الإطلاق؟",
    answer: "نعم بالطبع! نحن نقدم دعماً فنياً مستمراً يشمل: إصلاح الأخطاء والمشكلات التقنية، تحديث المحتوى، إضافة ميزات جديدة، وتحسين الأداء. يمكنكم اختيار خطة الدعم المناسبة لاحتياجاتكم."
  },
  {
    question: "ما هي التقنيات التي تستخدمونها في التطوير؟",
    answer: "نستخدم أحدث التقنيات وأفضل الممارسات في الصناعة: Next.js و React للواجهة الأمامية، TypeScript للأنظمة الأساسية، Tailwind CSS للتنسيق، Node.js للخدمات الخلفية، وقواعد بيانات MongoDB و PostgreSQL."
  },
  {
    question: "هل يمكنني تحديث محتوى الموقع بنفسي؟",
    answer: "نعم بالطبع! نقوم بتطوير موقعكم مع لوحة تحكم سهلة الاستخدام تتيح لكم إدارة المحتوى بسهولة تامة دون الحاجة لأي خبرة تقنية. كما نقدم تدريباً مجانياً على استخدام لوحة التحكم."
  },
  {
    question: "ما هي تكلفة تطوير موقع إلكتروني؟",
    answer: "تكلفة المشروع تعتمد على متطلباتكم المحددة.我们有三种定价方案：经济型（个人和小型企业）、专业型（成长型企业）和企业型（大型项目）。请联系我们获取定制报价."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="FAQ-section" ref={sectionRef}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>❓ FAQ</span>
          <h1 className={styles.title}>
            Frequently <span className={styles.highlight}>Asked Questions</span>
          </h1>
          <p className={styles.description}>
            إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا لتطوير الويب
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isVisible ? styles.visible : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className={`${styles.faqQuestion} w-100 d-flex justify-content-between align-items-center`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={`${styles.icon} ${openIndex === index ? styles.rotate : ""}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                <div className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ""}`}>
                  <div className={styles.answerContent}>
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>هل لديك سؤال آخر؟</p>
          <a href="/contact" className={styles.ctaButton}>
            تواصل معنا <span>💬</span>
          </a>
        </div>
      </div>
    </section>
  );
}

