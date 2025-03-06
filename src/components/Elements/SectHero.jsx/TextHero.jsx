import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function TextHero() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out", 
        once: true, 
        });
    }, []);

    return(
        <div data-aos="zoom-in-up">
            <h1 className="text-lg sm:text-xl">Hi, Disini Dengan </h1>
            <h2 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.6)'}} className="text-3xl sm:text-4xl font-bold mt-3 mb-8">Fadilla Izza Rahmadani</h2>
            <p className="text-base sm:text-lg font-semibold">Front End Web Developer</p>
        </div>
    );
}