import Image from "next/image";
import DesignNav from "./DesignNav";
import Section3 from "./aboutme";
import ServicesSection from "./services";
import ProjectsShowcase from "./projects-showcase";
import Blogs from "./blogs";
import Footer from "./footer";
import { Home } from "./home";
import AboutMe from "./aboutme";

export default function Page() {
  return (
    <>
      <Home />
      <AboutMe />
      <ServicesSection />
      <ProjectsShowcase />
      <Blogs />
      <Footer />
    </>
  );
}
