import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function ImgProfile(props) {
    const { imgSrc } = props;

    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return(
        <div data-aos="zoom-in-up" className="flex lg:w-1/3 justify-center items-center rounded-lg">
            <img src={imgSrc} className="rounded-lg rounded-t-full w-64 h-64 object-cover shadow-2xl border-cteal border-4" alt="foto profile dilla"/>
        </div>
    );
}