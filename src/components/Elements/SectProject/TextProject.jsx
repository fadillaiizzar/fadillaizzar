import HeadingSatu from "../Text/HeadingSatu";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function TextProject() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);
    
    return(
        <div data-aos="zoom-in-up" className="mb-12">
            <div className="flex justify-center text-center">
                <HeadingSatu 
                    mdMb = "mb-3"
                    pt = "pt-24"
                    htext="Perjalanan Proyek Digital"
                />
            </div>

            <p className="flex justify-center text-center">Proyek - proyek ini menjadi bukti perjalanan saya dalam belajar dan menciptakan, dimulai dari elemen sederhana hingga aplikasi web yang terstruktur dan terintegrasi</p>
        </div>
    );
}