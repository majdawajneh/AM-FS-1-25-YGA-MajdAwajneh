"use client";

import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    React.createElement("section", { id: "contact", className: styles.contact },
      React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
          React.createElement("span", { className: styles.label }, "Contact"),
          React.createElement("h2", { className: styles.title }, "Let's Work Together"),
          React.createElement("p", { className: styles.subtitle }, 
            "Have a project in mind? Let's discuss how we can bring your vision to life."
          )
        ),
        React.createElement("div", { className: styles.content },
          React.createElement("div", { className: styles.info },
            React.createElement("div", { className: styles.infoItem },
              React.createElement("div", { className: styles.infoIcon }, "\u2709"),
              React.createElement("div", null,
                React.createElement("h4", null, "Email"),
                React.createElement("p", null, "hello@majd.dev")
              )
            ),
            React.createElement("div", { className: styles.infoItem },
              React.createElement("div", { className: styles.infoIcon }, "\u260E"),
              React.createElement("div", null,
                React.createElement("h4", null, "Phone"),
                React.createElement("p", null, "+962 7X XXX XXXX")
              )
            ),
            React.createElement("div", { className: styles.infoItem },
              React.createElement("div", { className: styles.infoIcon }, "\u2304"),
              React.createElement("div", null,
                React.createElement("h4", null, "Location"),
                React.createElement("p", null, "Amman, Jordan")
              )
            )
          ),
          React.createElement("form", { className: styles.form, action: "#" },
            React.createElement("div", { className: styles.formGroup },
              React.createElement("input", { type: "text", placeholder: "Your Name", className: styles.input, required: true }),
              React.createElement("input", { type: "email", placeholder: "Your Email", className: styles.input, required: true })
            ),
            React.createElement("input", { type: "text", placeholder: "Subject", className: styles.input, required: true }),
            React.createElement("textarea", { placeholder: "Your Message", rows: 5, className: styles.textarea, required: true }),
            React.createElement("button", { type: "submit", className: styles.submitBtn }, "Send Message")
          )
        )
      )
    )
  );
}

