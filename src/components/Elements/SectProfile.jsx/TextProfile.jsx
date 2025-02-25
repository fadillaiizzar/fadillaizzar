import HeadingSatu from "../Text/HeadingSatu";
import FindProfile from "./FindProfile";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function TextProfile() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return(
        <>
            <div className="flex flex-col text-center lg:w-2/3 py-10 px-5 sm:px-14 lg:pl-0 lg:pr-24">
                <div data-aos="zoom-in-up">
                    <HeadingSatu 
                        htext = "Sekilas Tentang Saya"
                    />
                </div>
                <p data-aos="zoom-in-up" className="mb-8">Halo! Saya Fadilla Izza Rahmadani seorang pelajar dari SMKN 2 Yogyakarta Jurusan Sistem Informasi Jaringan dan Aplikasi yang berdomisili di Bantul. Saat ini saya secara mendalam mengeksplorasi dunia teknologi, dengan fokus utama pada pengembangan antarmuka web</p>
                <FindProfile />
            </div>
        </>
    );
}