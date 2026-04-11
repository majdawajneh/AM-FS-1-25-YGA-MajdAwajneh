"use client";

import { use, useEffect } from "react";

export default function ClientEffects(){
    useEffect(() => {
        // Smooth scrolling for navigation links
        const handleNavClick = (e: Event) =>{
            const target = e.target as HTMLElement;
            const id  = target.id;
    
            let sectionId = "";
            switch(id){
                case "aboutus":
                    sectionId = "stuff";
                    break;
                case "pric":
                    sectionId = "pricing";
                    break;
            }}
    })
}