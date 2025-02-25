import BoxSertif from "./BoxSertif";
import TextSertif from "./TextSertif";

export default function SertifSection() {
    return(
        <div id="sertifikat" className="pt-32 px-5 sm:px-14">
            <TextSertif />
            <BoxSertif />
        </div>
    );
}