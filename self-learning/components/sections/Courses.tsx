'use client';
import Link from "next/link";
import style from "./css/Courses.module.css";

const courses = [
  {
    icon: "⚛️",
    title: "Advanced React & Next.js",
    desc: "Server Components, App Router, RSC, Streaming, Partial Prerendering, Enterprise patterns.",
    level: "Advanced • 60h"
  },
  {
    icon: "☁️",
    title: "Kubernetes & DevOps",
    desc: "Production K8s clusters, Helm charts, CI/CD pipelines, observability with Prometheus/Grafana.",
    level: "Advanced • 80h"
  },
  {
    icon: "🔗",
    title: "GraphQL & tRPC",
    desc: "Federated schemas, Apollo/URQL, type-safe APIs, subscriptions, performance optimization.",
    level: "Advanced • 40h"
  },
  {
    icon: "🐳",
    title: "Docker & Microservices",
    desc: "Container orchestration, service mesh (Istio), DDD, CQRS, Event Sourcing patterns.",
    level: "Advanced • 50h"
  },
  {
    icon: "🧠",
    title: "Production ML Systems",
    desc: "MLOps pipelines, feature stores, model serving (Seldon/Triton), A/B testing frameworks.",
    level: "Expert • 100h"
  },
  {
    icon: "📈",
    title: "System Design",
    desc: "Design scalable systems like Twitter/Netflix. Caching, sharding, CAP theorem, tradeoffs.",
    level: "Senior • 30h"
  },
  {
    icon: "🔒",
    title: "Zero Trust Security",
    desc: "AuthN/Z, JWT/OAuth, secrets management, penetration testing, compliance (SOC2/GDPR).",
    level: "Advanced • 45h"
  },
  {
    icon: "⚙️",
    title: "Performance Engineering",
    desc: "Profiling, tracing (OpenTelemetry), eBPF, low-latency systems, database optimization.",
    level: "Expert • 55h"
  }
];

export default function Courses() {
  return (
    <section id="courses" className={style.courses}>
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.coursesTitle}>Professional Development Courses</h2>
          <p className={style.coursesSubtitle}>
            Enterprise-grade training for senior engineers and architects. Production-ready skills.
          </p>
        </div>
        <div className={style.coursesGrid}>
          {courses.map((course, index) => (
            <Link key={index} href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className={style.courseLink}>
              <div className={style.courseCard}>
                <div className={style.courseHeader}>
                  <div className={style.courseIcon}>{course.icon}</div>
                  <div className={style.courseBadges}>
                    <span className={style.badge}>Enroll Now</span>
                  </div>
                </div>
                <h3 className={style.courseTitle}>{course.title}</h3>
                <p className={style.courseDesc}>{course.desc}</p>
                <div className={style.courseFooter}>
                  <span className={style.courseLevel}>{course.level}</span>
                  <span className={style.courseStudents}>1,247 enrolled</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
