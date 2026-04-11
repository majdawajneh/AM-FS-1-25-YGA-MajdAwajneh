'use client';
import style from "./css/Features.module.css";

const features = [
  {
    icon: "🏢",
    title: "Production System Design",
    desc: "Learn to architect systems handling millions of users with 99.99% uptime guarantees."
  },
  {
    icon: "🔧",
    title: "Real-World Codebases",
    desc: "Work with enterprise-grade repositories from FAANG-level engineers and CTOs."
  },
  {
    icon: "👨‍💼",
    title: "Executive Instructors",
    desc: "Current Engineering Managers/VPs from Google, Meta, AWS, and unicorn startups."
  },
  {
    icon: "🌐",
    title: "Global Engineering Network",
    desc: "Connect with 10K+ senior engineers, exclusive job referrals, onsite opportunities."
  },
  {
    icon: "🚀",
    title: "Cloud Credits Included",
    desc: "$5K AWS/GCP credits + enterprise toolchains for hands-on production deployments."
  },
  {
    icon: "📜",
    title: "Staff-Level Certification",
    desc: "Verifiable credentials recognized by Big Tech recruiters and technical committees."
  }
];

export default function Features() {
  return (
    <section id="features" className={style.features}>
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.sectionTitle}>Engineered for Professional Growth</h2>
          <p className={style.subtitle}>
            Not just courses — complete career acceleration for experienced developers targeting staff+ roles.
          </p>
        </div>
        <div className={style.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={style.featureCard}>
              <div className={style.featureIcon}>{feature.icon}</div>
              <h3 className={style.featureTitle}>{feature.title}</h3>
              <p className={style.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
