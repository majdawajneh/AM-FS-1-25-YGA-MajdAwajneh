"use client";

import { useEffect } from "react";

export default function ClientEffects() {
    useEffect(() => {
        // Smooth scrolling for navigation links
        const handleNavClick = (e: Event) => {
            const target = e.target as HTMLElement;
            const id = target.id;
            
            let sectionId = "";
            switch(id) {
                case "aboutus":
                    sectionId = "stuff";
                    break;
                case "pric":
                    sectionId = "pricing";
                    break;
                case "serv":
                    sectionId = "services";
                    break;
                case "galle":
                    sectionId = "galler";
                    break;
                case "ourclients":
                    sectionId = "ourclientsid";
                    break;
                case "FAQ":
                    sectionId = "FAQ-section";
                    break;
            }
            
            if (sectionId) {
                e.preventDefault();
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        // Add event listeners to nav links
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", handleNavClick);
        });

        // Navbar scroll effect
        const handleScroll = () => {
            const navbar = document.querySelector(".fixed-top");
            const scrollY = window.scrollY;
            
            let bgColor: string, textColor: string;
            
            if (scrollY >= 2900) {
                bgColor = "var(--dusty-Blue-color)";
                textColor = "white";
            } else if (scrollY >= 2000) {
                bgColor = "var(--Buttercream-color)";
                textColor = "var(--dusty-Blue-color)";
            } else if (scrollY >= 300) {
                bgColor = "var(--dusty-Blue-color)";
                textColor = "white";
            } else {
                bgColor = "transparent";
                textColor = "white";
            }
            
            if (navbar) {
                (navbar as HTMLElement).style.backgroundColor = bgColor;
                const brandName = document.querySelector(".navbar-brand-name");
                if (brandName) (brandName as HTMLElement).style.color = textColor;
                
                // Change color of all nav links
                const navLinkIds = ["home", "aboutus", "pric", "blog", "serv", "galle", "ourclients", "FAQ", "contact"];
                navLinkIds.forEach(linkId => {
                    const element = document.getElementById(linkId);
                    if (element) element.style.color = textColor;
                });
            }
        };

        // Features logo animation on scroll
        const handleFeaturesScroll = () => {
            const features = document.querySelector(".features") as HTMLElement;
            const featuresImages = document.querySelectorAll(".features img");
            
            if (features && window.scrollY >= features.offsetTop - 100) {
                featuresImages.forEach((ele) => {
                    (ele as HTMLElement).style.width = "250px";
                    (ele as HTMLElement).style.height = "230px";
                    (ele as HTMLElement).style.transition = "0.4s";
                });
            } else {
                featuresImages.forEach((ele) => {
                    (ele as HTMLElement).style.width = "145px";
                    (ele as HTMLElement).style.height = "130px";
                    (ele as HTMLElement).style.transition = "0.4s";
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleFeaturesScroll);

        // Initial call
        handleScroll();
        handleFeaturesScroll();

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener("click", handleNavClick);
            });
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleFeaturesScroll);
        };
    }, []);

    return null;
}

