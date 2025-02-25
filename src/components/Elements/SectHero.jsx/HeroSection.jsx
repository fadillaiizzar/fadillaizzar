import BtnHero from "./BtnHero";
import TextHero from "./TextHero";

export default function HeroSection() {
    return(
        <div className="flex flex-col mt-36 px-7 py-5 items-center text-center">
            <TextHero />
            <BtnHero
                text="Download CV"
            />
        </div>
    );
}