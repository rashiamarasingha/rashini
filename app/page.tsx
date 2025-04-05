'use client';

import { useState, useEffect } from 'react';
import ServicesSection from "./services";
import ProjectsShowcase from "./projects-showcase";
import Blogs from "./blogs";
import Footer from "./footer";
import { Home } from "./home";
import AboutMe from "./aboutme";
import Carousal from "./carousal";
import Loader from './Loader';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Home />
          <Carousal />
          <AboutMe />
          <ServicesSection />
          <ProjectsShowcase />
          <Blogs />
          <Footer />
        </>
      )}
    </>
  );
}