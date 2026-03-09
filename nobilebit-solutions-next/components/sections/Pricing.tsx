"use client";

import { useState } from "react";
import styles from "./css/Pricing.module.css";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  badge?: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Economy Plan",
    price: "$199",
    description: "Perfect for individuals & small businesses",
    badge: "Basic",
    features: [
      { text: "1–3 responsive pages", included: true },
      { text: "Modern, clean design", included: true },
      { text: "Fast loading speed", included: true },
      { text: "Contact form or WhatsApp", included: true },
      { text: "Basic SEO optimization", included: true },
      { text: "Delivery within 5–10 days", included: true },
      { text: "Admin panel", included: false },
      { text: "Technical support", included: false },
    ],
  },
  {
    name: "Pro Plan",
    price: "$399",
    description: "Most popular choice 🔥",
    badge: "Most Popular",
    popular: true,
    features: [
      { text: "Up to 7 custom pages", included: true },
      { text: "Professional UI/UX design", included: true },
      { text: "Performance optimization", included: true },
      { text: "Advanced SEO setup", included: true },
      { text: "Social media integration", included: true },
      { text: "Easy admin panel", included: true },
      { text: "1 month support", included: true },
      { text: "Delivery within 10–15 days", included: true },
    ],
  },
  {
    name: "Enterprise Plan",
    price: "$799+",
    description: "Complete custom solution",
    badge: "Premium",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Fully custom development", included: true },
      { text: "E-commerce / booking system", included: true },
      { text: "High-level security", included: true },
      { text: "Full SEO optimization", included: true },
      { text: "Ongoing technical support", included: true },
      { text: "Scalable architecture", included: true },
      { text: "Custom delivery timeline", included: true },
    ],
  },
];

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section className={styles.Pricing} id="pricing">
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>💰 Pricing Plans</span>
          <h1 className={styles.title}>
            Choose the Perfect <span className={styles.highlight}>Plan</span> for Your Business
          </h1>
          <p className={styles.description}>
            Flexible pricing that scales with your business. No hidden fees, transparent costs.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ""} ${hoveredPlan === index ? styles.hovered : ""}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  ⭐ Most Popular
                </div>
              )}
              
              <div className={styles.planHeader}>
                <span className={styles.planBadge}>{plan.badge}</span>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.price.replace("$", "")}</span>
                  {plan.price !== "$799+" && <span className={styles.period}>/project</span>}
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <div className={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className={`${styles.featureItem} ${feature.included ? styles.included : styles.excluded}`}
                    style={{ animationDelay: `${featureIndex * 0.05}s` }}
                  >
                    <span className={styles.featureIcon}>
                      {feature.included ? "✓" : "✗"}
                    </span>
                    <span className={styles.featureText}>{feature.text}</span>
                  </div>
                ))}
              </div>

              <button className={styles.selectButton}>
                Get Started <span className={styles.arrow}>→</span>
              </button>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h3>🚀 Need a Custom Solution?</h3>
              <p>Every business is unique. Let's discuss your specific requirements and create a tailored package just for you.</p>
            </div>
            <a href="/contact" className={styles.ctaButton}>
              Talk to an Expert <span>💬</span>
            </a>
          </div>
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛡️</span>
            <span>30-Day Money Back</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span>Fast Delivery</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🔒</span>
            <span>Secure Payments</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💯</span>
            <span>100% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}

