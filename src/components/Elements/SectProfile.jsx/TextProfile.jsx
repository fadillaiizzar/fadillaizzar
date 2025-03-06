import HeadingSatu from "../Text/HeadingSatu";
import FindProfile from "./FindProfile";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import { Mail } from "lucide-react";

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
                <p data-aos="zoom-in-up" className="mb-1">Halo! Saya Fadilla Izza Rahmadani seorang pelajar dari SMKN 2 Yogyakarta Jurusan Sistem Informasi Jaringan dan Aplikasi yang berdomisili di Bantul. Saat ini saya secara mendalam mengeksplorasi dunia teknologi, dengan fokus utama pada pengembangan antarmuka web</p>
                <div className="mb-5 flex justify-center">
                    <Mail color="#0F1A2B" className="mr-2"/>
                    <p>fadillaiizzarm@gmail.com</p>
                </div>
                <FindProfile />
            </div>
        </>
    );
}