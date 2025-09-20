"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  // High-value / impactful projects first
  {
    id: 1,
    title: "Chat/Voice Bot",
    description: "AI-powered chat and voice bot using FastAPI, OpenAI, and Deepgram.",
    image: "/chat.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Face Attendance System",
    description: "Automated face recognition attendance system with salary calculation.",
    image: "/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 3,
    title: "Invoice Generation Automation",
    description: "Automated invoice creation using Puppeteer to improve efficiency.",
    image: "/about-image.png",
    tag: ["All", "Web", "Automation"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "ERP for Furniture Business",
    description: "Full-stack ERP system integrating inventory, sales, and reporting.",
    image: "/about-image.png",
    tag: ["All", "Web", "ERP"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 5,
    title: "HireKingdom",
    description: "Job search platform enabling seamless job listings, search, and applications.",
    image: "/hirekingdom.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 6,
    title: "Medical Document Summary Frontend",
    description: "Frontend app integrated with Redis-Bull queues for batch AI processing.",
    image: "/about-image.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 7,
    title: "Codedynamos Platform",
    description: "Platform empowering students through internships and hands-on tech experience.",
    image: "/codedynamos.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/786Ayush/Codedynamos",
    previewUrl: "https://codedynamos.com",
  },
  {
    id: 8,
    title: "Next.js Portfolio Website",
    description: "A professional portfolio showcasing my projects, skills, and experience.",
    image: "/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/786Ayush/portfolio",
    previewUrl: "https://portfolioofayushgupta.netlify.app/",
  },
  {
    id: 9,
    title: "YouTube Clone",
    description: "React-based YouTube clone fetching video data via API for seamless viewing.",
    image: "/youtubeclone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/786Ayush/youtube-clone",
    previewUrl: "https://youtube-cloonee.netlify.app/",
  },
  {
    id: 10,
    title: "Weather Forecast App",
    description: "A web app displaying live weather updates using API integration.",
    image: "/wheather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/786Ayush/WeatherApp",
    previewUrl: "https://786ayush.github.io/WeatherApp/",
  },
  {
    id: 12,
    title: "Freelance Figma → Code",
    description: "Converted Figma designs to production-ready code under product management guidance.",
    image: "/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 13,
    title: "CRM Figma → Next.js",
    description: "Implemented CRM designs in Next.js with full responsiveness.",
    image: "/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 14,
    title: "Real-time Coding Game",
    description: "Competitive coding game delivering random DSA challenges to groups in real-time.",
    image: "/coding_game.png",
    tag: ["All", "Web", "Game"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 15,
    title: "React DApp Portfolio",
    description: "A decentralized application (DApp) project demonstrating React and blockchain integration.",
    image: "/about-image.png",
    tag: ["All", "dapp"],
    gitUrl: "#",
    previewUrl: "#",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (navTag) => {
    setTag(navTag);
  };
  const filterProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="dapp"
          isSelected={tag === "dapp"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
