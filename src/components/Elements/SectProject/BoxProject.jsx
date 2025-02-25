import DetailProject from "./DetailProject";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function BoxProject() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);
    
    return(
        <div className="px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div data-aos="zoom-in-up">
                    <DetailProject 
                        text="Janji Suci Seserahan"
                        penjelasan="Menyediakan layanan dekorasi seserahan yang estetik untuk momen pernikahan"
                        imgProject="/janji suci seserahan.png"
                        tools1="REACT"
                        tools2="TAILWIND"
                        link="https://janjisuciseserahan.vercel.app/"
                    />
                </div>

                <div data-aos="zoom-in-up">
                    <DetailProject 
                        text="Berlian Tiga"
                        penjelasan="Membuat dan mencetak nota pembelian pelanggan pada bengkel mobil"
                        imgProject="/nota berlian tiga.png"
                        tools1="REACT"
                        tools2="TAILWIND"
                        link="https://berliantiga.vercel.app/"
                    />
                </div>

                <div data-aos="zoom-in-up">
                    <DetailProject 
                        text="Luxury Room"
                        penjelasan="Mempermudah anda menyewa apartemen dengan layanan terbaik"
                        imgProject="/luxuryroom.png"
                        tools1="REACT"
                        tools2="TAILWIND"
                        link="https://luxuryroom.vercel.app/"
                    />
                </div>

                <div data-aos="zoom-in-up">
                    <DetailProject 
                        text="Socialse"
                        penjelasan="Mengoptimalkan konten dan memperkuat strategi digital akun media sosial anda"
                        imgProject="/socialse.png"
                        tools1="HTML"
                        tools2="TAILWIND"
                        link="https://socialse.vercel.app/"
                    />
                </div>                
            </div>
        </div>
    );
}