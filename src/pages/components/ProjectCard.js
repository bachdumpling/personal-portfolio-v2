import Image from "next/image";
import React from "react";
import urlFor from "../../../lib/urlFor";
import Technology from "./Technology";

function ProjectCard({ project }) {
  return (
    <div className="col-span-1 row-span-1 flex cursor-pointer shadow-md rounded-lg h-full w-full">
      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full h-full">
        {project?.mainImage && (
          <Image
            width={200}
            height={200}
            className="w-full h-full rounded-lg"
            src={urlFor(project.mainImage).url()}
            alt={project.name || "Project Image"}
          />
        )}
        <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-center items-center w-full h-full hover:opacity-100 opacity-0 z-50 transition duration-300 ease-in-out text-sm md:text-lg text-white bg-black bg-opacity-70 space-y-2 rounded-lg">
          {/* <div className=""> */}

          <p className="font-bold text-lg md:text-xl">{project?.name}</p>

          <p className="text-sm md:text-md px-12 pb-2 text-center font-semibold">
            {project?.shortDescription}
          </p>

          <div className="flex flex-row space-x-2 text-xs mx-10 font-semibold">
            {project?.technology.map((tech) => {
              return <Technology tech={tech} key={tech} />;
            })}
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
