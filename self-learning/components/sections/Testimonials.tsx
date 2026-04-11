'use client';
import style from "./css/Testimonials.module.css";

const testimonials = [
  {
    quote: "Elevated from Senior to Staff Engineer in 9 months. The system design track and production ML systems course were game-changers.",
    author: "Alex Chen",
    title: "Staff Engineer @ Netflix",
    company: "Netflix"
  },
  {
    quote: "Kubernetes Operator Development and GitOps tracks directly led to my Principal Engineer promotion. Real enterprise content.",
    author: "Priya Sharma",
    title: "Principal Engineer @ AWS",
    company: "AWS"
  },
  {
    quote: "ML Platform Engineering track gave me production MLOps experience I couldn't get anywhere else. Now leading ML infra team.",
    author: "David Kim",
    title: "ML Platform Lead @ Uber",
    company: "Uber"
  },
  {
    quote: "Security Architect track was comprehensive — from zero trust to compliance automation. Landed CISO role at fintech unicorn.",
    author: "Maria Gonzalez",
    title: "CISO @ ScaleFi",
    company: "ScaleFi"
  },
  {
    quote: "Performance Engineering track transformed how I think about systems. eBPF + distributed tracing content is unparalleled.",
    author: "James Wilson",
    title: "Performance Lead @ Stripe",
    company: "Stripe"
  },
  {
    quote: "Cloud Native Architect track prepared me for CTO role. Working with real FAANG engineers was invaluable.",
    author: "Sarah Patel", 
    title: "CTO @ BuildScale",
    company: "BuildScale"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={style.testimonials}>
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.sectionTitle}>Trusted by Engineering Leaders</h2>
          <p className={style.subtitle}>
            Senior engineers and architects who've accelerated their careers with our professional programs.
          </p>
        </div>
        <div className={style.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={style.testimonialCard}>
              <div className={style.quoteIcon}>“</div>
              <p className={style.quote}>{testimonial.quote}</p>
              <div className={style.authorSection}>
                <div className={style.authorInfo}>
                  <div className={style.authorAvatar}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className={style.authorName}>{testimonial.author}</div>
                    <div className={style.authorTitle}>{testimonial.title}</div>
                  </div>
                </div>
                <div className={style.company}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
