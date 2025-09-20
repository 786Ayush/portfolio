"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-secondary-600">
              Hello,I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Ayush Gupta", // Your name
                1000,
                "MERN Dev", // Short for MERN Developer
                1000,
                "Next.js Dev", // Professional Next.js developer
                1000,
                "TailwindCSS", // Styling framework
                1000,
                "PostgresSQL", // Database
                1000,
                "FastAPI Dev", // Experience with FastAPI
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I’m a dedicated MERN and Full-Stack developer with hands-on
            experience building scalable, high-performance web applications. My
            projects range from ERP platforms for furniture businesses,
            face-attendance systems with salary automation, and invoice
            generation using Puppeteer, to HireKingdom, a job search platform.
          </p>
          <div className="">
            <Link
              href={"https://wa.me/9756573003/"}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black"
            >
              Hire Me
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover: bg-slate-800 text-white  mt-3">
              <Link
                href={
                  "https://drive.google.com/file/d/1vApoUVexVcWxCcntXliOXlztg_LYCgBt/view?usp=sharing"
                }
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                {" "}
                Download CV
              </Link>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Me.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={700}
              height={700}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
