'use client';
import { useState, useRef, useEffect } from "react";
import style from "./css/Landing.module.css";
import Animations from "../css/Typing.module.css";

const sentences = [
  "Master Modern Software Engineering",
  "Enterprise Fullstack Development",
  "From Algorithms to Production Systems",
  "Architect Scalable Cloud Applications", 
  "Advanced Data Engineering & ML Ops",
  "Professional DevOps & SRE Practices"
];

export default function Landing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const typeSpeed = 100;
  const deleteSpeed = 30;

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = sentences[sentenceIndex];
      if (!isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        } else {
          const nextIndex = (sentenceIndex + 1) % sentences.length;
          setSentenceIndex(nextIndex);
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, sentenceIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const term = searchTerm.trim();
    if (term) {
      console.log("Professional search for:", term);
      document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section id="home" className={style.landing}>
      <div className={style.landingContent}>
        <h1 className={`${Animations.typewriter} ${Animations.professional}`}>
          {displayText}
          <span className={Animations.cursor}>|</span>
        </h1>
        <p className={style.landingSubtitle}>
          Professional training for senior developers. Enterprise architectures, cloud-native systems, 
          production ML pipelines, and scalable infrastructure.
        </p>
        <div className={style.searchContainer}>
          <input 
            ref={inputRef}
            className={style.landinginput} 
            type="text" 
            placeholder="Search advanced courses (Kubernetes, GraphQL, Microservices...)"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button className={style.landingButton} onClick={handleSearch}>
            Explore Curriculum
          </button>
        </div>
        <div className={style.stats}>
          <div className={style.stat}>
            <span className={style.statNum}>50K+</span>
            <span>Professionals Trained</span>
          </div>
          <div className={style.stat}>
            <span className={style.statNum}>200+</span>
            <span>Enterprise Partners</span>
          </div>
          <div className={style.stat}>
            <span className={style.statNum}>98%</span>
            <span>Job Placement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
