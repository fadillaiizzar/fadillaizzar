import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import { Download } from "lucide-react";

export default function BtnHero(props) {
    const { backg = "bg-cteal", textcolor = "text-cbeige", width, text, link = "/cv/CV FADILLA IZZA RAHMADANI.pdf" } = props;

    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        window.open(link, "_blank");
        const a = document.createElement("a");
        a.href = link;
        a.download = link.split("/").pop(); 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <button 
            onClick={handleClick}
            data-aos="zoom-in"
            className={`${backg} ${textcolor} ${width} hover:bg-cdeepnavy cursor-pointer flex justify-center items-center opacity-100 px-7 py-2 rounded-3xl mt-16 shadow-xl`}
        >
            <Download className="mr-2 w-5 h-5" />
            {text}
        </button>
    );
}