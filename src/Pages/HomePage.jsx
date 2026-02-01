import React from "react";
import Navbar from "../components/Navbar";
import PortfolioHeroV2 from "../components/sections/PortfolioHeroV2";
import ProjectsV2 from "../components/sections/ProjectsV2";
import SlidesSection from "../components/sections/SlidesSection";
import BioSectionV2 from "../components/sections/BioSectionV2";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSectionV2 from "../components/sections/SkillsSectionV2";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <PortfolioHeroV2 />
      <ExperienceSection />
      <ProjectsV2 />
      <SlidesSection />
      <BioSectionV2 />
      <SkillsSectionV2 />
      <Footer />
    </div>
  );
}
