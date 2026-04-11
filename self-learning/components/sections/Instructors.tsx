'use client';
import Image from 'next/image';
import Link from 'next/link';
import style from "./css/Instructors.module.css";

const instructors = [
  {
    name: "Dr. Rachel Chen",
    title: "Distinguished Engineer",
    company: "Google",
    bio: "25+ years experience, created Kubernetes at Google, authored CNCF whitepapers.",
    students: "12K",
    courses: "8",
    rating: "5.0",
    image: "/instructors/rachel-chen.jpg"
  },
  {
    name: "Carlos Rodriguez",
    title: "VP Engineering", 
    company: "Meta",
    bio: "Engineering leader for 2B+ user products, React Core Team contributor.",
    students: "8.5K",
    courses: "12",
    rating: "4.9",
    image: "/instructors/carlos-rodriguez.jpg"
  },
  {
    name: "Dr. Aisha Khan",
    title: "ML Director",
    company: "OpenAI",
    bio: "PhD Stanford, built production ML systems serving 100M+ daily inferences.",
    students: "15K",
    courses: "10",
    rating: "5.0",
    image: "/instructors/aisha-khan.jpg"
  },
  {
    name: "James Whitaker",
    title: "SRE Director",
    company: "Netflix",
    bio: "Created Netflix's Chaos Engineering platform, 99.99% global uptime.",
    students: "9K",
    courses: "7",
    rating: "4.9",
    image: "/instructors/james-whitaker.jpg"
  },
  {
    name: "Priya Venkatesh",
    title: "Staff Security Architect",
    company: "Microsoft",
    bio: "Zero Trust pioneer, authored Azure security framework used by Fortune 500.",
    students: "11K",
    courses: "9",
    rating: "5.0",
    image: "/instructors/priya-venkatesh.jpg"
  }
];

export default function Instructors() {
  return (
    <section id="instructors" className={style.instructors}>
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.sectionTitle}>World-Class Engineering Faculty</h2>
          <p className={style.subtitle}>
            Learn directly from technical leaders at the world's most innovative companies.
          </p>
        </div>
        <div className={style.instructorsGrid}>
          {instructors.map((instructor, index) => (
            <div key={index} className={style.instructorCard}>
              <div className={style.instructorImage}>
                <Image 
                  src={instructor.image} 
                  alt={instructor.name}
                  fill
                  className={style.image}
                />
                <div className={style.liveIndicator}></div>
              </div>
              <div className={style.instructorContent}>
                <div className={style.instructorHeader}>
                  <h3 className={style.instructorName}>{instructor.name}</h3>
                  <div className={style.instructorTitles}>
                    <span className={style.title}>{instructor.title}</span>
                    <span className={style.company}>{instructor.company}</span>
                  </div>
                </div>
                <p className={style.bio}>{instructor.bio}</p>
                <div className={style.stats}>
                  <div className={style.stat}>
                    <span className={style.statNumber}>{instructor.students} students</span>
                  </div>
                  <div className={style.rating}>
                    <span className={style.stars}>★{instructor.rating}</span>
                    <span>({instructor.courses} courses)</span>
                  </div>
                </div>
                <Link href={`/instructors/${instructor.name.toLowerCase().replace(/\s+/g, '-')}`} className={style.viewCourses}>
                  View Courses →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
