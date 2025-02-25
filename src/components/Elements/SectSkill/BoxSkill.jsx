import { useRef } from "react";
import DetailBox from "./DetailBox";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function BoxSkill() {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const boxDetails = [
        { id : 1 , text : "HTML" , imgDetail : "/html.png" , alt : "logo html"},
        { id : 2 , text : "CSS" , imgDetail : "/css.png" , alt : "logo css"},
        { id : 3 , text : "JAVA SCRIPT" , imgDetail : "/javascript.png" , alt : "logo javascript"},
        { id : 4 , text : "REACT" , imgDetail : "/react.png" , alt : "logo react"},
        { id : 5 , text : "TAILWIND" , imgDetail : "/tailwind.png" , alt : "logo tailwind"},
        { id : 6 , text : "GIT" , imgDetail : "/git.png" , alt : "logo git"},
        { id : 7 , text : "FIGMA" , imgDetail : "/figma.png" , alt : "logo figma"},
    ];

    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return (
        <div data-aos="zoom-in-up" className="relative flex justify-center items-center px-14">
            <button onClick={scrollLeft} className="absolute text-white left-3 sm:left-5 w-12 h-12 bg-gray-600 rounded-full hover:bg-gray-700 z-10">
                {"<"}
            </button>

            <div ref={scrollContainer} className="relative flex justify-start items-center overflow-hidden mx-4 sm:mx-8 w-full">
                <div className="flex justify-center items-center gap-5 py-4 min-w-max">
                    {boxDetails.map ((item) => (
                        <DetailBox key={item.id} text={item.text} imgDetail={item.imgDetail} alt={item.alt}/>
                    ))}
                </div>
            </div>

            <button onClick={scrollRight} className="absolute text-white right-3 sm:right-5 w-12 h-12 bg-gray-600 rounded-full hover:bg-gray-700 z-10">
                {">"}
            </button>
        </div>
    );
}
