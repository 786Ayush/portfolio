"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import Tabbutton from "./Tabbutton";

const TABDATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Tailwind</li>
        <li>React</li>
        <li>C++</li>
        <li>Problem Solving skill</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.tech in Computer Science</li>
        <li>GL bajaj group of institution</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Participated in various contests</li>
        <li>Participated in hackathons</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Passionate MERN developer with a strong foundation in React,
            Node.js, and Express. I've successfully built diverse projects,
            including a YouTube clone, showcasing my expertise in creating
            seamless user experiences. With a keen eye for detail and a focus on
            performance, I'm dedicated to bringing your ideas to life. Let's
            collaborate and transform your vision into functional, elegant web
            applications."
          </p>
          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </Tabbutton>
          </div>
          <div className="mt-8">
            {TABDATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
