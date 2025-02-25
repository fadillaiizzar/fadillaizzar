import HeadingSatu from "../Text/HeadingSatu";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function BgEducation() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return(
        <>
            <div className="h-[820px] cust:h-[560px] relative flex items-start text-center justify-center">
                <div data-aos="zoom-in-up">
                    <HeadingSatu 
                        pt = "pt-14"
                        htext = "Rangkaian Proses Pendidikan"
                        px = "px-5"
                        pb = "sm:pb-10"
                    />
                </div>
                
                <div data-aos="zoom-in-up" className="cust:flex gap-6 rounded-t-3xl p-4 cust:p-6 absolute top-32 cust:top-36  mt-10 sm:mt-0">
                    <BoxEducation 
                        imgBoxEdu="/smk 2 yogyakarta.png"
                        textEdu="SMK Negeri 2 Yogyakarta"
                        textLulus="2022 - Sekarang"
                        mb="mb-7"
                        width="w-32"
                        height="h-32"
                        alt="logo smk 2 yogyakarta"
                    />
                    
                    <BoxEducation 
                        imgBoxEdu="/smp 2 bantul.png"
                        textEdu="SMP Negeri 2 Bantul"
                        textLulus="2019 - 2022"
                        mb="mb-0"
                        width="w-28"
                        height="h-28"
                        alt="logo smp 2 bantul"
                        rb="rounded-bl-3xl"
                        rt="rounded-tr-3xl"
                    />
                </div>
            </div>
        </>
    );
}

function BoxEducation(props) {
    const { rt = "rounded-tl-3xl" , rb = "rounded-br-3xl" , mb , imgBoxEdu , width , height , alt , textEdu , textLulus } = props;

    return(
        <div className={`${rt} ${rb} ${mb} bg-cbeige py-8 w-72 sm:w-[430px] sm:h-[320px] flex flex-col justify-center items-center cust:mb-0 shadow-2xl`}>
            <img src={imgBoxEdu} className= {`${width} ${height} mb-7 object-cover`} alt= {`${alt}`} />
            <p className="mb-2 text-center font-semibold">{textEdu}</p>
            <p>{textLulus}</p>
        </div>
    );
}