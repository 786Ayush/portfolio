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
        <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
        <li>Next.js & TailwindCSS</li>
        <li>PostgreSQL & Prisma ORM</li>
        <li>FastAPI & AI integrations (OpenAI, Deepgram)</li>
        <li>WebSocket, Redis & Bull Queues</li>
        <li>Problem Solving & DSA</li>
        <li>Deployment & Nginx</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech in Computer Science</li>
        <li>GL Bajaj Group of Institutions</li>
      </ul>
    ),
  },
  {
    title: "Experience / Projects",
    id: "projects",
    content: (
      <ul className="list-disc pl-2">
        <li>Built AI chat/voice bots with FastAPI and OpenAI</li>
        <li>Automated face attendance and salary calculation system</li>
        <li>Developed invoice generation automation using Puppeteer</li>
        <li>Created ERP system for furniture business management</li>
        <li>Developed HireKingdom job search platform</li>
        <li>Frontend for medical document app with Redis-Bull queues</li>
        <li>Contributed to Codedynamos and YouTube automation bots</li>
        <li>Built real-time coding game with group DSA challenges</li>
        <li>Converted Figma designs to production-ready Next.js code</li>
        <li>Implemented CRM Figma designs into Next.js applications</li>
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
        <Image src="/about-image.png" alt="About Me" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate Full-Stack Developer specializing in MERN,
            Next.js, and TailwindCSS, with hands-on experience in PostgreSQL,
            Prisma, and FastAPI. I have delivered diverse projects—from
            AI-powered chat bots to ERP systems and real-time coding
            games—focusing on clean code, performance, and seamless user
            experiences. Let’s collaborate to turn innovative ideas into
            functional, elegant web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </Tabbutton>
            <Tabbutton
              selectTab={() => handleTabChange("projects")}
              active={tab === "projects"}
            >
              Experience / Projects
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
