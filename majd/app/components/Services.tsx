"use client";

import React from "react";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      icon: "01",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    },
    {
      icon: "02",
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
    },
    {
      icon: "03",
      title: "Mobile Apps",
      description: "Responsive mobile applications that work seamlessly across all devices.",
    },
    {
      icon: "04",
      title: "API Development",
      description: "Robust and scalable RESTful APIs designed for optimal performance.",
    },
    {
      icon: "05",
      title: "E-Commerce",
      description: "Full-featured online stores with secure payment integration and easy management.",
    },
    {
      icon: "06",
      title: "Consulting",
      description: "Expert advice on technology stack, architecture, and best practices.",
    },
  ];

  return (
    React.createElement("section", { id: "services", className: styles.services },
      React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
          React.createElement("span", { className: styles.label }, "Services"),
          React.createElement("h2", { className: styles.title }, "What I Can Do For You"),
          React.createElement("p", { className: styles.subtitle }, 
            "Professional services tailored to bring your digital vision to life with cutting-edge technology and design."
          )
        ),
        React.createElement("div", { className: styles.grid },
          services.map(function(service) {
            return React.createElement("div", { key: service.title, className: styles.card },
              React.createElement("span", { className: styles.iconNumber }, service.icon),
              React.createElement("h3", { className: styles.cardTitle }, service.title),
              React.createElement("p", { className: styles.cardDescription }, service.description),
              React.createElement("div", { className: styles.cardArrow }, "\u2192")
            );
          })
        )
      )
    )
  );
}

