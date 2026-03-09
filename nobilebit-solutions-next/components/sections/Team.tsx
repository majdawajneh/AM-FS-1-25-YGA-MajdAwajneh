"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/Team.module.css";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Majd Al-Awajneh",
    role: "CEO & Founder",
    image: "/Assets/images/lamp.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Majd Al-Awajneh",
    role: "Lead Developer",
    image: "/Assets/images/lamp.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Majd Al-Awajneh",
    role: "UI/UX Designer",
    image: "/Assets/images/lamp.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "Majd Al-Awajneh",
    role: "Marketing Manager",
    image: "/Assets/images/lamp.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

export default function Team() {
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

  return (
    <section className={styles.team} id="team" ref={sectionRef}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>👥 Our Team</span>
          <h1 className={styles.title}>
            Meet The <span className={styles.highlight}>Team</span>
          </h1>
          <p className={styles.description}>
            The brilliant minds behind NobleBit-Solutions
          </p>
        </div>

        <div className="row text-center justify-content-center">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={`col-md-6 col-lg-3 mb-4 ${styles.teamCol}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`${styles.teamCard}`}>
                <div className={styles.imageWrapper}>
                  <img 
                    className="img-fluid" 
                    src={member.image} 
                    alt={member.name}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.socialLinks}>
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className={styles.socialBtn}>
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className={styles.socialBtn}>
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className={styles.socialBtn}>
                          <i className="fa-brands fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

