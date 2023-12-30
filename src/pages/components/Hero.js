import React, { useEffect, useState } from "react";
import avatar from "./assets/avatar1.png";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { animate, motion as m } from "framer-motion";
import MainIntro from "./MainIntro";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../../../lib/themeContext";
import ProjectCard from "./ProjectCard";

function Hero({ projects }) {
  const { theme } = useTheme();

  function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("lehoangbach7802@gmail.com");
  }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
      className={`w-full h-full ${
        theme === "dark"
          ? "bg-dark-background text-white"
          : "bg-white text-black"
      }`}
    >
      {/* <div
      className={
        theme === "dark"
          ? "bg-dark-background text-white"
          : "bg-white text-black"
      }
    > */}
      <div className="pageLayout">
        <div className="flex">
          <div className="bg-gray-900/5 bg-dark-foreground relative w-32 h-32 grid place-items-center rounded-full drop-shadow-md">
            <Image className="w-32 h-32" src={avatar} />
            <div className="absolute w-10 h-10 right-2 grid place-items-center rounded-full bg-slate-50 drop-shadow-md bottom-0 translate-y-2">
              <p className="text-3xl">🤝</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 md:space-y-2">
          <div className="md:mt-14 md:mb-8 mt-8">
            <MainIntro />
          </div>
          <p className="text-sm md:text-lg py-5 text-justify md:text-left text-slate-600">
            I&apos;m a developer 📱, digital creator 📷, & curious optimist 🦦.
            Right now, I&apos;m probably exploring new hobbies, activities, and
            general knowledge; but I&apos;m always ready to collaborate with
            creatives and businesses.
          </p>
          <p className="text-sm md:text-lg leading-10 md:leading-normal text-slate-600">
            View my
            <Link href="/about">
              <span className={`heroBtn`}>About</span>,
            </Link>{" "}
            <Link href="/project">
              <span className={`heroBtn`}>Projects</span>, or
            </Link>{" "}
            <Link href="/contact">
              <span className={`heroBtn`}>Contact</span>.
            </Link>
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <h1 className="text-3xl font-extrabold mb-6 md:mb-8">
            Recent Projects
          </h1>
          <div
            className={`grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-6 my-2`}
          >
            {projects?.map((project) => (
              <Link href={`/project/${project.slug.current}`} key={project._id}>
                <ProjectCard project={project} />
              </Link>
            ))}
          </div>
        </div>

        <Link href="/project">
          <div className="pt-4 md:pt-4 flex space-x-3 cursor-pointer">
            <p className="text-slate-600 text-md hover:underline">
              See more projects
            </p>
            <div className="rotate-90 ">
              <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
            </div>
          </div>
        </Link>
      </div>
      {/* </div> */}
    </m.div>
  );
}

export default Hero;
