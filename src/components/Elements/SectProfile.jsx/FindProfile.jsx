import ImgFind from "./ImgFind";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function FindProfile() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return(
        <div data-aos="zoom-in-up" className="flex flex-col justify-center items-center">
            <div className="mb-4">
                <p>hubungi saya melalui :</p>
            </div>

            <div className="flex">
                <ImgFind 
                    imgFind="/instagram.png"
                    link="https://www.instagram.com/fadillaiizzar/"
                    alt="ikon instagram"
                    arialabel="Lihat Profil Instagram Fadilla Izza"
                />

                <ImgFind 
                    imgFind="/github.png"
                    link="https://github.com/fadillaiizzar"
                    alt="ikon github"
                    arialabel="Lihat Profil Github Fadilla Izza"
                />

                <ImgFind 
                    imgFind="/linkedin.png"
                    link="https://www.linkedin.com/in/fadilla-izza-rahmadani-6b3b3331a/"
                    alt="ikon linkedin"
                    arialabel="Lihat Profil Linkedin Fadilla Izza"
                />
            </div>
        </div>
    );
}

