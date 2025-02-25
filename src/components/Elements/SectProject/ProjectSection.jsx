import BoxProject from "./BoxProject";
import TextProject from "./TextProject";

export default function ProjectSection() {
    return(
        <div id="proyek" className="px-5 sm:px-14 pt-12">
            <TextProject />
            <BoxProject />
        </div>
    );
}