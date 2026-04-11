"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "UI/UX Design", "Responsive Design", "API Development", "Git"
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Awards Won" },
  ];

  return (
    React.createElement("section", { id: "about", className: styles.about },
      React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.grid },
          React.createElement("div", { className: styles.imageSection },
            React.createElement("div", { className: styles.imageWrapper },
              React.createElement("div", { className: styles.imagePlaceholder },
                React.createElement("span", { className: styles.initials }, "MA")
              ),
              React.createElement("div", { className: styles.experienceBadge },
                React.createElement("span", { className: styles.badgeNumber }, "5+"),
                React.createElement("span", { className: styles.badgeText }, "Years Exp.")
              )
            ),
            React.createElement("div", { className: styles.decoration })
          ),
          React.createElement("div", { className: styles.content },
            React.createElement("span", { className: styles.label }, "About Me"),
            React.createElement("h2", { className: styles.title }, 
              "Creative Designer & Full-Stack Developer"
            ),
            React.createElement("p", { className: styles.description },
              "I'm a passionate Full-Stack Developer and UI/UX Designer based in Amman, Jordan. " +
              "With over 5 years of experience, I specialize in creating exceptional digital " +
              "experiences that combine stunning visuals with powerful functionality."
            ),
            React.createElement("p", { className: styles.description },
              "My approach focuses on understanding client needs and delivering solutions that " +
              "not only meet but exceed expectations. I believe in clean code, modern design " +
              "principles, and continuous learning to stay at the forefront of technology."
            ),
            React.createElement("div", { className: styles.skills },
              React.createElement("h3", { className: styles.skillsTitle }, "Tech Stack"),
              React.createElement("div", { className: styles.skillTags },
                skills.map(function(skill) {
                  return React.createElement("span", { key: skill, className: styles.skillTag }, skill);
                })
              )
            ),
            React.createElement("a", { href: "#contact", className: styles.ctaButton },
              "Let's Work Together"
            )
          )
        ),
        React.createElement("div", { className: styles.statsSection },
          stats.map(function(stat, index) {
            return React.createElement(motion.div, {
              key: stat.label,
              className: styles.statCard,
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1, duration: 0.5 },
              viewport: { once: true }
            },
              React.createElement("span", { className: styles.statNumber }, stat.number),
              React.createElement("span", { className: styles.statLabel }, stat.label)
            );
          })
        )
      )
    )
  );
}

