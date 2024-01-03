import React from "react";

function Technology({ tech }) {
  return (
    <div className="px-2 py-1 md:px-3 md:py-1 w-fit h-fit flex justify-center items-center rounded-full bg-white bg-opacity-20 text-white shadow-md mb-1 md:mb-2 text-[8px] md:text-[10px]">
      <p>{tech}</p>
    </div>
  );
}

export function TechnologyModal({ tech }) {
  return (
    <div className="dark:text-dark-text text-dark-text flex min-w-fit h-fit text-center px-4 my-2 py-2 bg-light-accent rounded-md">
      <p className="md:text-sm text-xs font-semibold">{tech}</p>
    </div>
  );
}

export default Technology;
