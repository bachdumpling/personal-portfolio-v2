import React from "react";

function Technology({ tech }) {
  return (
    <div className="px-3 py-1.5 md:px-6 md:py-2.5 w-fit h-fit flex justify-center items-center rounded-full bg-white bg-opacity-20 text-white shadow-md mb-3 md:mb-6 text-[8px] md:text-sm">
      <p>{tech}</p>
    </div>
  );
}

export function TechnologyModal({ tech }) {
  return (
    <div className="flex border min-w-fit h-fit text-center px-4 my-2 py-2 bg-[#efe9e4] rounded-md">
      <p className="md:text-sm text-xs font-semibold">{tech}</p>
    </div>
  );
}

export default Technology;
