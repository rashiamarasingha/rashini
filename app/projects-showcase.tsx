"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  logo?: string;
  logoText?: string;
  href?: string;
}

export default function ProjectsShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const firstRowControls = useAnimationControls();
  const secondRowControls = useAnimationControls();

  // References for measuring container width
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  // First row projects (left to right)
  const firstRowProjects: Project[] = [
    {
      id: "jobplus",
      title: "JobPlus - Job Finder Mobile App",
      description:
        "Job Plus is a job-hunting app that connects job seekers with opportunities through a seamless and user-friendly experience.",
      image: "/jobplus.svg",
      logoText: "JobPlus",
      href: "https://www.behance.net/gallery/194949341/JobPlus-Job-Finder-Mobile-App",
    },
    {
      id: "register-onboarding",
      title: "Register Onboarding - Dashboard UI Design",
      description:
        "Register Onboarding & Dashboard UI ensures a smooth sign-up and intuitive user experience with a clean, accessible interface.",
      image: "/ht-manage.svg",
      logo: "HireHo",
      logoText: "HR Management Register Onboarding",
      href: "https://www.behance.net/gallery/221216139/Register-Onboarding-Dashboard-UI-Design",
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Web Application",
      description:
        "A modern, intuitive interface for seamless interactions, smooth conversations, and an engaging experience with a visually appealing design.",
      image: "/ai-chatbot.svg",
      href: "https://www.behance.net/gallery/221738371/AI-Chatbot-Web-Application",
    },
  ];

  // Second row projects (right to left)
  const secondRowProjects: Project[] = [
    {
      id: "interior-design-1",
      title: "Interior Design Studio Website - Landing Page",
      description:
        "Interior Design Studio Website - Landing Page showcases elegant designs with a sleek, user-friendly interface, creating a captivating first impression.",
      image: "/interior-design.svg",
      href: "https://www.behance.net/gallery/221029193/Interior-Design-Studio-Website-Landing-Page",
    },
    {
      id: "interior-design-2",
      title: "Task Management System ",
      description:
        "Task Management System simplifies workflow with intuitive task tracking, collaboration, and productivity-boosting features. ",
      image: "/task-management.svg",
      href: "https://www.behance.net/gallery/221121985/Task-Management-System-UI-Design",
    },
    {
      id: "task-management-2",
      title: "RetinaWise - Eye Disease Detecting Mobile App",
      description:
        "A mobile app revolutionising eye health management by providing a convenient tool for early detection of eye diseases.",
      image: "/ratina-wise.svg",
      href: "https://www.behance.net/gallery/194533059/RetinaWise-Eye-Disease-Detecting-Mobile-App",
    },
  ];

  // Set up the animations on component mount
  useEffect(() => {
    if (firstRowRef.current && secondRowRef.current) {
      // For the first row (left to right)
      const firstRowWidth = firstRowRef.current.scrollWidth;
      // const firstRowVisibleWidth = firstRowRef.current.offsetWidth;

      // For the second row (right to left)
      const secondRowWidth = secondRowRef.current.scrollWidth;
      // const secondRowVisibleWidth = secondRowRef.current.offsetWidth;

      // Animate first row (left to right)
      firstRowControls.start({
        x: [0, -firstRowWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });

      // Animate second row (right to left)
      secondRowControls.start({
        x: [-secondRowWidth / 2, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [firstRowControls, secondRowControls]);

  return (
    <div
      className="bg-[#F0F7FF] py-16 px-4 md:px-6 overflow-hidden"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              variant="outline"
              className="rounded-full py-6 px-12 font-urbanist font-semibold border-[#171717] bg-[#F0F7FF] text-[#171717] text-[22px]"
            >
              Projects
            </Button>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-[34px] lg:text-[40px] font-inter font-medium text-[#1C1C57] mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover My Design Journey
          </motion.h2>
          <motion.p
            className="text-[#1C1C57] font-inter font-normal max-w-2xl mx-auto text-[18px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Explore the projects that define my design expertise and creativity.
          </motion.p>
        </motion.div>

        {/* First row carousel - Left to Right */}
        <div className="mb-8 w-full" ref={firstRowRef}>
          <motion.div className="flex" animate={firstRowControls}>
            {/* Double the projects for seamless loop */}
            {[...firstRowProjects, ...firstRowProjects].map(
              (project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="bg-white p-5 rounded-[14px] hover:border-[#c5e0fc] shadow-md  hover:shadow-lg overflow-hidden border w-[400px] h-[520px]  md:w-[642px] md:h-fit mx-4 flex-shrink-0 hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="relative rounded-[10px]   h-[250px] bg-white overflow-hidden">
                    <div
                      className={`w-full h-full transition-transform duration-500 ${
                        hoveredProject === project.id
                          ? "scale-105"
                          : "scale-100"
                      }`}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-5 flex flex-col justify-between h-[166px]">
                    <div>
                      <h3 className="font-medium font-inter text-xl text-slate-900 mb-3 ">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 font-inter font-normal text-[16px] mb-6 text-base line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="border rounded-[52px] w-fit px-4 py-2 bg-linear-to-r from-[#a3a2a2] to-[#ffffff]">
                      <Link
                        href={`${project.href}`}
                        className="inline-flex items-center gap-1 text-black text-[16px] font-normal font-inter  group"
                      >
                        View project
                        <span
                          className={`ml-1 transition-transform flex justify-center items-center duration-300 bg-black rounded-full w-6 h-6 ${
                            hoveredProject === project.id ? "translate-x-1" : ""
                          }`}
                        >
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* Second row carousel - Right to Left */}
        <div className="w-full " ref={secondRowRef}>
          <motion.div className="flex" animate={secondRowControls}>
            {/* Double the projects for seamless loop */}
            {[...secondRowProjects, ...secondRowProjects].map(
              (project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="bg-white p-5 rounded-[14px] hover:border-[#c5e0fc] hover:shadow-lg  overflow-hidden shadow-md border border-slate-100 w-[400px] h-[520px]  md:w-[642px] md:h-fit  mx-4 flex-shrink-0 hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="relative rounded-[14px]  h-[250px] bg-white overflow-hidden">
                    <div
                      className={`w-full h-full transition-transform duration-500 ${
                        hoveredProject === project.id
                          ? "scale-105"
                          : "scale-100"
                      }`}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-5 flex flex-col justify-between h-[166px]">
                    <div>
                      <h3 className="font-medium font-inter text-xl text-slate-900 mb-3 ">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 font-inter font-normal text-[16px] mb-6 text-base line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="border rounded-[52px] w-fit px-4 py-2 bg-linear-to-r from-[#a3a2a2] to-[#ffffff]">
                      <Link
                        href={`${project.href}`}
                        className="inline-flex items-center gap-1 text-black text-[16px] font-normal font-inter  group"
                      >
                        View project
                        <span
                          className={`ml-1 transition-transform flex justify-center items-center duration-300 bg-black rounded-full w-6 h-6 ${
                            hoveredProject === project.id ? "translate-x-1" : ""
                          }`}
                        >
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block">
            <a href="https://www.behance.net/rashiamarasingha" className="inline-block">
              <Button className="rounded-[8px] font-inter font-medium text-[16px] bg-[#007BFF] hover:bg-blue-600 text-white py-6 px-8">
                Explore More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
