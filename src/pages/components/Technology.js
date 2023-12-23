import React from "react";

function Technology({ tech }) {
  return (
    <div className="px-2 py-1 w-fit h-fit flex justify-center items-center rounded-full bg-white bg-opacity-20 text-white shadow-md">
      <p>{tech}</p>
    </div>
  );
}

export function TechnologyModal({ tech }) {
  return (
    <div className="border w-fit h-fit text-center px-4 my-2 py-2 bg-[#efe9e4] rounded-md">
      <p className="md:text-sm text-xs font-bold">{tech}</p>
    </div>
  );
}

export default Technology;
