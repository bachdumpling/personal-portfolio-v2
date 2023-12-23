import GitHub from "./icons/github.svg";
import React, { useEffect, useState } from "react";
import projectData from "./projectData";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

function ProjectDetail({ oneProjectDetail }) {
  let projectDetail = oneProjectDetail;
  let id = usePathname();

  projectData.find((project) => {
    if (project.id == id) {
      projectDetail = project;
    }
  });
  console.log(projectDetail.embed);

  return (
    <div className="max-w-4xl mx-5 lg:mx-auto pt-10 mb-40 h-full">
      <h1 className="text-5xl font-extrabold">{projectDetail.name}</h1>
      {/* <div className="flex gap-2">
          <a href="https://github.com/bachdumpling">
            <img src={GitHub} className="w-5 h-5" name="My github" />
          </a>
        GitHub
      </div> */}

      <div className="py-4 text-gray-500 text-lg">
        <span>{projectDetail.shortDescription}</span>
      </div>

      {projectDetail.embed && (
        <div className="aspect-video w-full h-full flex justify-center items-center">
          <iframe
            className="w-full h-full md:w-full md:h-[600px] relative rounded-md"
            src={projectDetail?.embed}
            allow="fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      )}

      {projectDetail.embed
        ? null
        : projectDetail?.imageDescription?.map((item) => {
            return (
              <div className="w-full h-88 shadow-md my-4">
                <img className="bg-cover" src={item} />
              </div>
            );
          })}
      <Footer />
    </div>
  );
}

export default ProjectDetail;
