import { AnimatePresence, motion as m } from "framer-motion";
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Technology, { TechnologyModal } from "../components/Technology";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import GitHub from "../components/icons/github.svg";
import Image from "next/image";
import ProjectDetail from "../components/ProjectDetail";
import { useRouter } from "next/router";

import { client } from "../../../lib/sanity.client";
import urlFor from "../../../lib/urlFor";
import Link from "next/link";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "project"]`);
  return {
    props: {
      projects,
    },
  };
}

function Project({ setOneProjectDetail, oneProjectDetail, projects }) {
  console.log("projects: ", projects);

  const router = useRouter();
  const [openProject, setOpenProject] = useState(false);
  const [oneProject, setOneProject] = useState([]);

  const projectCards = projects
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((project) => {
      return (
        <div
          onClick={(e) => {
            setOneProject(project);
            setOpenProject(!openProject);
          }}
        >
          <ProjectCard
            project={project}
            key={project._id}
            setOpenProject={setOpenProject}
          />
        </div>
      );
    });

  return (
    <Layout>
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 0 }}
      >
        <div className="max-w-4xl mx-5 lg:mx-auto pt-10 overflow-y-hidden">
          <h1 className="text-5xl font-extrabold pb-8">Project.</h1>
          <div
            className={`grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-5 mx-2 my-2 py-2`}
          >
            {projectCards}
          </div>
          <div>
            {projects.map((project) => (
              <div key={project.slug.current}>
                <Link href={`/project/${project.slug.current}`}>
                  <p>{project.title}</p>
                </Link>
                {/* Other project details */}
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {openProject ? (
            <div>
              {/* Main modal */}
              <div className="overflow-y-hidden overflow-x-hidden fixed top-0 left-0 right-0 z-50 w-full h-full bg-black bg-opacity-80 transition-all duration-300 ease-in-out">
                <m.div
                  initial={{ x: "100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full h-full md:max-w-xl bg-[#FBFCF8] shadow-xl inset-y-0 right-0"
                >
                  {/* Modal content */}
                  <div className="py-6 px-6 relative h-full w-full">
                    <div
                      onClick={() => {
                        setOpenProject(false);
                      }}
                      className="border-b-2 pb-3 cursor-pointer"
                    >
                      <ArrowLeftCircleIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="pt-5 text-lg md:text-xl font-bold">
                        {oneProject.title}
                      </p>
                    </div>
                    <div>
                      <p className="pb-2 text-sm md:text-md text-gray-500">
                        {oneProject.shortDescription}
                      </p>
                    </div>

                    <div className="w-full h-88 shadow-md">
                      <Image
                        width={500}
                        height={500}
                        className="bg-cover"
                        src={urlFor(projects[0].mainImage).url()}
                      />
                    </div>

                    <div>
                      <div className="pt-5 flex justify-between items-center">
                        <p className="text-md md:text-lg font-semibold">
                          About
                        </p>
                        <button
                          onClick={() => {
                            setOneProjectDetail(oneProject);
                            router.push(`/project/${oneProject.id}`);
                          }}
                          className="text-sm text-gray-500"
                        >
                          See more ...
                        </button>
                      </div>
                      <p className="text-black text-justify text-xs md:text-sm">
                        {oneProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <p className="pt-5 text-md md:text-lg font-semibold">
                        Technologies
                      </p>
                      <div className="flex justify-start items-center space-x-4 overflow-x-auto overflow-y-hidden scrollbar-hide">
                        {oneProject.technology.map((tech) => {
                          return <TechnologyModal tech={tech} />;
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="flex gap-2 pt-5 text-md md:text-lg font-semibold justify-start items-center">
                        <a href="https://github.com/bachdumpling">
                          <GlobeAltIcon className="w-5 h-5" name="My github" />
                        </a>
                        <p className="">Website</p>
                      </div>
                      {oneProject.website ? (
                        <div className="flex flex-col font-semibold text-xs md:text-sm">
                          <a
                            className="hover:underline"
                            href={oneProject?.website}
                            target="_blank"
                          >
                            {oneProject?.website}
                          </a>
                        </div>
                      ) : (
                        <p className="text-gray-500 text-justify text-xs md:text-sm">
                          Details coming soon...
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="flex gap-2 pt-5 text-md md:text-lg font-semibold justify-start items-center">
                        <a href="https://github.com/bachdumpling">
                          <Image
                            src={GitHub}
                            className="w-5 h-5"
                            name="My github"
                          />
                        </a>
                        <p className="">GitHub</p>
                      </div>
                      <div className="flex flex-col font-semibold text-xs md:text-sm">
                        <a
                          className="hover:underline"
                          href={oneProject.github.githubClient}
                        >
                          {oneProject.github.githubClient}
                        </a>

                        <a
                          className="hover:underline"
                          href={oneProject.github.githubServer}
                        >
                          {oneProject.github.githubServer}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <div className="border w-full bg-black absolute">
                      <p>Open Project </p>
                </div> */}
                </m.div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
export default Project;
