import React from "react";
import Navbar from "../components/Navbar";
import PortfolioHeroV2 from "../components/sections/PortfolioHeroV2";
import ProjectsV2 from "../components/sections/ProjectsV2";
import BioSectionV2 from "../components/sections/BioSectionV2";
import SkillsSectionV2 from "../components/sections/SkillsSectionV2";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <PortfolioHeroV2 />
      <ProjectsV2 />
      <BioSectionV2 />
      <SkillsSectionV2 />
      <Footer />
    </>
  );
}
