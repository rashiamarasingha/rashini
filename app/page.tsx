import ServicesSection from "./services";
import ProjectsShowcase from "./projects-showcase";
import Blogs from "./blogs";
import Footer from "./footer";
import { Home } from "./home";
import AboutMe from "./aboutme";
  import Carousal from "./carousal";

export default function Page() {
  return (
    <>
      <Home />
      <Carousal />
      <AboutMe />
      <ServicesSection />
      <ProjectsShowcase />
      <Blogs />
      <Footer />
    </>
  );
}
