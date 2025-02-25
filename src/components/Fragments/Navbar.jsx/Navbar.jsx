import { useState } from "react";
import BtnNav from "../../Elements/SectNav/BtnNav";

export default function Navbar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleHamburger = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="hidden md:flex justify-center pt-12 cursor-pointer font-semibold">
                <div className="flex shadow-2xl rounded-full">
                    <BtnNav
                        textnav="Beranda"
                        radius="rounded-l-full"
                        padx="pl-10 px-4"
                        href="#beranda"
                    />

                    <BtnNav 
                        textnav="Profile"
                        href="#profile"
                    />

                    <BtnNav 
                        textnav="Pendidikan"
                        href="#education"
                    />

                    <BtnNav 
                        textnav="Keahlian"
                        href="#skill"
                    />

                    <BtnNav 
                        textnav="Proyek"
                        href="#proyek"
                    />

                    <BtnNav 
                        textnav="Sertifikat"
                        radius="rounded-r-full"
                        padx="pr-10 px-4"
                        href="#sertifikat"
                    />
                </div>
            </div>

            <div id="hamburger" className="md:hidden flex cursor-pointer pt-10 justify-end mr-7">
                <BtnNav 
                    textnav="☰"
                    radius="rounded-full"
                    padx="px-6"
                    onClick={handleHamburger}
                />
            </div>

            <div id="mobile-menu" className={`md:hidden mr-7 ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="flex items-end mt-10 py-4 cursor-pointer flex-col font-semibold bg-cbeige w-fit ml-auto pl-24 rounded-lg">
                    <BtnNav
                        textnav="Beranda"
                        href="#beranda"
                    />

                    <BtnNav 
                        textnav="Profile"
                        href="#profile"
                    />

                    <BtnNav 
                        textnav="Pendidikan"
                        href="#education"
                    />

                    <BtnNav 
                        textnav="Keahlian"
                        href="#skill"
                    />

                    <BtnNav 
                        textnav="Proyek"
                        href="#proyek"
                    />

                    <BtnNav 
                        textnav="Sertifikat"
                        href="#sertifikat"
                    />
                </div>
            </div>
        </div>
    );
}