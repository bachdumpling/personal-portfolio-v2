import React from "react";
import { ArrowLeftCircleIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../lib/urlFor";
import { TechnologyModal } from "../components/Technology";
import GitHub from "./icons/github.svg";
import { motion as m } from "framer-motion";

const ProjectModal = ({ oneProject, isOpen, onClose }) => {
  if (!isOpen || !oneProject) return null;

  return (
    <div className="overflow-x-hidden fixed top-0 left-0 right-0 z-50 w-full h-full bg-dark-background bg-opacity-90 transition-all duration-400 ease-in-out">
      <m.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.75 }}
        className="absolute w-full h-full md:max-w-xl bg-light-background  shadow-xl inset-y-0 right-0 overflow-y-scroll overflow-x-hidden no-scrollbar"
      >
        {/* Modal content */}
        <div className="sticky bottom-0 left-0 right-0">
          <div
            onClick={onClose}
            className="border-b-2 border-light-accent pb-3 cursor-pointer text-light-accent p-4"
          >
            <ArrowLeftCircleIcon className="w-7 h-7 " />
          </div>
        </div>
        <div className="p-4 md:p-6 relative h-full w-full">
          <div>
            <p className="pt-5 text-xl md:text-3xl font-bold ">
              {oneProject.title}
            </p>
          </div>
          <div>
            <p className="pb-2 text-sm md:text-base text-light-accent">
              {oneProject.shortDescription}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full shadow-lg h-full">
              <Image
                // fill={true}
                width={1200}
                height={800}
                className="object-cover"
                src={urlFor(oneProject.mainImage).url()}
                alt={oneProject.title || "Project Image"}
              />
            </div>
          </div>

          <div>
            <div className="pt-5 flex justify-between items-center">
              <p className="text-base md:text-lg font-semibold">About</p>
            </div>
            <p className="text-light-text text-justify text-xs md:text-sm">
              {/* {oneProject.longDescription} */}
              {oneProject?.longDescription
                .split("\n")
                .map((line, index, array) => (
                  <span key={index}>
                    {line}
                    {index !==
                      oneProject?.longDescription.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
            </p>
          </div>

          <div>
            <p className="pt-5 text-base md:text-lg font-semibold">
              Technologies
            </p>
            <div className="flex justify-start items-center space-x-4 overflow overflow-x-auto overflow-y-hidden no-scrollbar">
              {oneProject.technology.map((tech) => (
                <TechnologyModal tech={tech} key={tech} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-2 pt-5 text-base md:text-lg font-semibold justify-start items-center">
              <a href="https://github.com/bachdumpling">
                <GlobeAltIcon className="w-5 h-5" name="My github" />
              </a>
              <p className="">Links</p>
            </div>
            {oneProject?.website || oneProject?.prototype ? (
              <div className="flex flex-col font-semibold text-xs md:text-sm">
                <Link href={oneProject?.website} target="_blank">
                  Production:{" "}
                  <span className="linkStyle">{oneProject?.website}</span>
                </Link>
              </div>
            ) : (
              <p className="text-light-text text-justify text-xs md:text-sm ">
                Details coming soon...
              </p>
            )}

            {oneProject?.prototype && (
              <div className="flex flex-col font-semibold text-xs md:text-sm">
                <Link href={oneProject?.prototype} target="_blank">
                  Prototype:{" "}
                  <span className="linkStyle">{oneProject?.prototype}</span>
                </Link>
              </div>
            )}

            {!oneProject?.website && !oneProject?.prototype && (
              <p className="text-light-text text-justify text-xs md:text-sm">
                Details coming soon...
              </p>
            )}
          </div>

          <div>
            <div className="flex gap-2 pt-5 text-base md:text-lg font-semibold justify-start items-center ">
              <a href="https://github.com/bachdumpling">
                <Image
                  src={GitHub}
                  className="w-5 h-5"
                  name="My github"
                  alt="My github"
                />
              </a>
              <p className="">GitHub</p>
            </div>
            <div className="flex flex-col font-semibold text-xs md:text-sm">
              <a
                className="linkStyle"
                href={oneProject?.github?.githubClient}
              >
                {oneProject?.github?.githubClient}
              </a>

              <a
                className="linkStyle"
                href={oneProject?.github?.githubServer}
              >
                {oneProject?.github?.githubServer}
              </a>
            </div>
          </div>

          {!oneProject?.github?.githubClient &&
            !oneProject?.github?.githubServer && (
              <p className="text-light-accent text-justify text-xs md:text-sm">
                Details coming soon...
              </p>
            )}
        </div>

        <Link href={`/project/${oneProject.slug.current}`}>
          <div className="flex w-full h-12 bg-light-accent text-dark-text sticky bottom-0 left-0 right-0">
            <button className="text-base w-full text-center md:text-lg font-semibold">
              View More
            </button>
          </div>
        </Link>
      </m.div>
    </div>
  );
};

export default ProjectModal;
