"use client";

import React from "react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.pexels.com/photos/35098524/pexels-photo-35098524.jpeg",
    },
    {
      title: "Finance Dashboard",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/35098524/pexels-photo-35098524.jpeg",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/35098524/pexels-photo-35098524.jpeg",
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      image: "https://images.pexels.com/photos/35098524/pexels-photo-35098524.jpeg",
    },
    {
      title: "Healthcare Platform",
      category: "Full Stack",
      image: "https://images.pexels.com/photos/35098524/pexels-photo-35098524.jpeg",
    },
    {
      title: "Restaurant App",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/35098524/pexels-photo-35098524.jpeg",
    },
  ];

  return (
    React.createElement("section", { id: "gallery", className: styles.gallery },
      React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
          React.createElement("span", { className: styles.label }, "Portfolio"),
          React.createElement("h2", { className: styles.title }, "Recent Projects"),
          React.createElement("p", { className: styles.subtitle }, 
            "A showcase of my recent work spanning web development, mobile apps, and UI/UX design."
          )
        ),
        React.createElement("div", { className: styles.grid },
          projects.map(function(project) {
            return React.createElement("div", { key: project.title, className: styles.card },
              React.createElement("div", { className: styles.imageWrapper },
                React.createElement("img", { src: project.image, alt: project.title, className: styles.image }),
                React.createElement("div", { className: styles.overlay },
                  React.createElement("span", { className: styles.category }, project.category),
                  React.createElement("h3", { className: styles.projectTitle }, project.title)
                )
              )
            );
          })
        )
      )
    )
  );
}

