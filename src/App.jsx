import Footer from "./components/Fragments/Footer/Footer.jsx";
import Beranda from "./components/Layouts/Beranda";
import Education from "./components/Layouts/Education.jsx";
import Profile from "./components/Layouts/Profile.jsx";
import Project from "./components/Layouts/Project.jsx";
import Sertif from "./components/Layouts/Sertificate.jsx";
import Skill from "./components/Layouts/Skill.jsx";

export default function App() {
  return (
    <div id="beranda" className="bg-csky font-poppins text-cdeepnavy pt-14">
      <Beranda />
      <Profile />
      <Education />
      <Skill />
      <Project />
      <Sertif />
      <Footer />
    </div>
  );
}