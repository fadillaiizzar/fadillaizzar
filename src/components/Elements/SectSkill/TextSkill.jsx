import HeadingSatu from "../Text/HeadingSatu";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function TextSkill() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);
    
    return(
        <div data-aos="zoom-in-up" className="flex justify-center items-center px-5">
            <HeadingSatu 
                mdMb = "mb-24"
                pt = "pt-36"
                htext = "Keahlian Dalam Setiap Proyek"
                px = "px-5"
            />
        </div>
    );
}