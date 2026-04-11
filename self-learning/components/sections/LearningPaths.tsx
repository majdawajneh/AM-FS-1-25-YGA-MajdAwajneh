'use client';
import Link from "next/link";
import style from "./css/LearningPaths.module.css";

const paths = [
  {
    icon: "🏗️",
    title: "Cloud Native Architect", 
    duration: "24 Weeks",
    projects: 18,
    steps: [
      "Distributed Systems Fundamentals",
      "Kubernetes Operator Development",
      "Service Mesh (Istio/Linkerd)",
      "Cloud Native Storage (Ceph)",
      "GitOps + ArgoCD",
      "Production Observability Stack"
    ]
  },
  {
    icon: "🔬",
    title: "ML Platform Engineer",
    duration: "28 Weeks",
    projects: 22,
    steps: [
      "Production ML Infrastructure",
      "Feature Platform (Feast)",
      "Model Serving (Seldon/Triton)",
      "Experimentation Platform",
      "ML Metadata (MLflow)",
      "MLOps @ Scale"
    ]
  },
  {
    icon: "⚡",
    title: "Performance Engineer",
    duration: "20 Weeks",
    projects: 15,
    steps: [
      "Advanced Profiling (eBPF)",
      "Distributed Tracing (Tempo)",
      "Database Internals (CockroachDB)",
      "Frontend Performance (Partytown)",
      "Low Latency Systems"
    ]
  },
  {
    icon: "🔐",
    title: "Security Architect",
    duration: "22 Weeks",
    projects: 16,
    steps: [
      "Zero Trust Implementation",
      "Secrets Management (Vault)",
      "Threat Modeling at Scale",
      "Cloud Security (CSPM)",
      "Compliance Automation",
      "Incident Response Engineering"
    ]
  }
];

export default function LearningPaths() {
  return (
    <section id="paths" className={style.learningPaths}>
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.sectionTitle}>Professional Learning Tracks</h2>
          <p className={style.subtitle}>
            Complete career acceleration programs designed with CTOs from FAANG companies.
          </p>
        </div>
        <div className={style.pathsGrid}>
          {paths.map((path, index) => (
            <div key={index} className={style.pathCard}>
              <div className={style.pathHeader}>
                <div className={style.pathIcon}>{path.icon}</div>
                <h3 className={style.pathTitle}>{path.title}</h3>
              </div>
              <div className={style.pathMeta}>
                <span>{path.duration} • {path.projects} Projects</span>
                <span>Staff-Level Certification</span>
              </div>
              <ol className={style.stepsList}>
                {path.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className={style.stepItem}>
                    <div className={style.stepNumber}>{stepIndex + 1}</div>
                    <span className={style.stepText}>{step}</span>
                  </li>
                ))}
              </ol>
              <Link href={`/paths/${path.title.toLowerCase().replace(/\s+/g, '-')}`} className={style.pathCta}>
                Start Track →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
