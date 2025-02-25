import ImgProfile from "./ImgProfile";
import TextProfile from "./TextProfile";

export default function ProfileSection() {
    return(
        <div id="profile" className="lg:flex justify-center items-center pt-40 pb-10">
            <ImgProfile 
                imgSrc="/profile dilla.jpeg"
            />
            <TextProfile />
        </div>
    );
}