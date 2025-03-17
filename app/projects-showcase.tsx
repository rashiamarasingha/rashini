"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  logo?: string;
  logoText?: string;
}

export default function ProjectsShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "jobplus",
      title: "JobPlus - Job Finder Mobile App",
      description:
        "Job Plus is a job-hunting app that connects job seekers with opportunities through a seamless and user-friendly experience.",
      image: "/Placeholder Image-2.svg",
      logoText: "JobPlus",
    },
    {
      id: "register-onboarding",
      title: "Register Onboarding - Dashboard UI Design",
      description:
        "Register Onboarding & Dashboard UI ensures a smooth sign-up and intuitive user experience with a clean, accessible interface.",
      image: "/Placeholder Image-3.svg",
      logo: "HireHo",
      logoText: "HR Management Register Onboarding",
    },
    {
      id: "interior-design",
      title: "Interior Design Studio Website - Landing Page",
      description:
        "Interior Design Studio Website - Landing Page showcases elegant designs with a sleek, user-friendly interface, creating a captivating first impression.",
      image: "/Placeholder Image-4.svg",
    },
    {
      id: "task-management",
      title: "Task Management System",
      description:
        "Task Management System simplifies workflow with intuitive task tracking, collaboration, and productivity-boosting features.",
      image: "/Placeholder Image-5.svg",
    },
  ];

  // Stagger effect for projects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-slate-50 py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              variant="outline"
              className="rounded-full px-6 py-1 h-auto text-sm font-medium bg-white"
            >
              Projects
            </Button>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover Our Success Stories
          </motion.h2>
          <motion.p
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Explore our curated collection of successful projects.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100"
            >
              <div className="relative h-[220px] bg-slate-800 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <motion.h3
                  className="font-bold text-lg text-slate-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-slate-600 mb-4 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 group"
                  >
                    View project
                    <motion.span
                      animate={{
                        x: hoveredProject === project.id ? 5 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
              Explore More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
