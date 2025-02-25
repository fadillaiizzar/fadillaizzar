import HeadingSatu from "../Text/HeadingSatu";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function TextSertif() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return(
        <div data-aos="zoom-in-up">
            <HeadingSatu 
                htext="Eksplorasi Kompetensi Dasar"
                mdMb = "mb-3"
            />

            <p className="flex justify-center text-center mb-14">Saya telah mengikuti pelatihan untuk mengeksplor dasar - dasar pengembangan web, memperluas wawasan, serta meningkatkan keterampilan teknis yang diperlukan dalam pengembangan aplikasi berbasis web</p>
        </div>
    );
}