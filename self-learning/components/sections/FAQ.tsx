'use client';
import { useState } from 'react';
import Link from 'next/link';
import style from "./css/FAQ.module.css";

const faqs = [
  {
    question: "What experience level is required?",
    answer: "Minimum 3+ years professional experience. Senior Engineer or equivalent required for admission."
  },
  {
    question: "Are there prerequisites?",
    answer: "Strong proficiency in systems programming, distributed systems, and production deployments required."
  },
  {
    question: "What is the time commitment?",
    answer: "20-30 hours/week. 6-month programs with live cohorts and 1:1 mentorship."
  },
  {
    question: "Do you provide job placement?",
    answer: "Guaranteed interviews at 50+ partner companies. 98% placement rate for completers."
  },
  {
    question: "Is financial aid available?",
    answer: "$50K scholarships available. Income-share agreements and company sponsorship programs."
  },
  {
    question: "What tools/platforms are used?",
    answer: "AWS/GCP enterprise accounts, GitHub Enterprise, production Kubernetes clusters included."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={style.faq}>
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.sectionTitle}>Admissions & Curriculum</h2>
          <p className={style.subtitle}>
            Frequently asked questions from engineering managers and senior individual contributors.
          </p>
        </div>
        <div className={style.faqs}>
          {faqs.map((faq, index) => (
            <div key={index} className={style.faqItem}>
              <button 
                className={`${style.question} ${openIndex === index ? style.active : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className={style.questionText}>{faq.question}</span>
                <span className={`${style.arrow} ${openIndex === index ? style.active : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`${style.answer} ${openIndex === index ? style.active : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.applyCta}>
          <h3>Ready to accelerate your engineering career?</h3>
          <Link href="/apply" className={style.btnPrimary}>Apply Now</Link>
        </div>
      </div>
    </section>
  );
}
