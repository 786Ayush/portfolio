"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "It contain all my professional details.",
    image: "/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/786Ayush/portfolio",
    previewUrl: "https://portfolioofayushgupta.netlify.app/",
  },
  {
    id: 2,
    title: "Codedynamos",
    description: "Codedynamos empowers students through internships, offering hands-on experience in tech and IT services.",
    image: "/codedynamos.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/786Ayush/Codedynamos",
    previewUrl: "https://codedynamos.com",
  },
  {
    id: 5,
    title: "YouTube Clone Website",
    description: "it is react website in which the data is taken from the api",
    image: "/youtubeclone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/786Ayush/youtube-clone",
    previewUrl: "https://youtube-cloonee.netlify.app/",
  },
  {
    id: 3,
    title: "Weather Forecasting Website",
    description: "it takes the data from api",
    image: "/wheather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/786Ayush/WeatherApp",
    previewUrl: "https://786ayush.github.io/WeatherApp/",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/about-image.png",
    tag: ["All","dapp"],
    gitUrl: "/",
    previewUrl: "/",
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
