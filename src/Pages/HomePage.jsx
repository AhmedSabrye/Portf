import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import PortfolioHeroV2 from "../components/sections/PortfolioHeroV2";
import ProjectsV2 from "../components/sections/ProjectsV2";
import BioSectionV2 from "../components/sections/BioSectionV2";
import SkillsSectionV2 from "../components/sections/SkillsSectionV2";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll">
      <Navbar />
      <Element name="home">
        <PortfolioHeroV2 />
      </Element>
      <Element name="projects">
        <ProjectsV2 />
      </Element>
      <Element name="bio">
        <BioSectionV2 />
      </Element>
      <Element name="skills">
        <SkillsSectionV2 />
      </Element>
      <Footer />
    </div>
  );
}
