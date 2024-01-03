import Image from "next/image";
import React from "react";
import urlFor from "../../../lib/urlFor";
import Technology from "./Technology";

function ProjectCard({ project }) {
  return (
    <div className="col-span-1 row-span-1 flex cursor-pointer shadow-md rounded-lg h-full w-full">
      <div className="relative overflow-hidden bg-no-repeat bg-cover w-full h-full">
        {project?.mainImage && (
          <div className="flex justify-center items-center w-full h-full">
            <div className="relative w-full shadow-lg h-full">
              <Image
                // fill={true}
                width={1200}
                height={800}
                className="rounded-lg object-cover w-full h-full"
                src={urlFor(project.mainImage).url()}
                alt={project.name || "Project Image"}
              />
            </div>
          </div>
        )}
        <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-center items-center w-full h-full hover:opacity-100 opacity-0 z-50 transition duration-300 ease-in-out text-sm md:text-lg text-white bg-black bg-opacity-70 space-y-2 rounded-lg">
          {/* <div className=""> */}

          <p className="font-bold text-base md:text-lg">{project?.title}</p>

          <div className="text-xs md:text-sm pb-1 md:pb-2 px-2 md:px-10 text-center font-medium">
            <p>{project?.shortDescription}</p>
          </div>

          <div className="flex flex-row flex-wrap justify-center place-content-center space-x-2 mx-2 md:mx-4 font-medium">
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
