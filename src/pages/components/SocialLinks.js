import React from "react";
import { useTheme } from "../../../lib/themeContext";
import LinkedInIcon from "./icons/LinkedInIcon";
import DocumentIcon from "./icons/DocumentIcon";
import GithubIcon from "./icons/GithubIcon";

function SocialLinks() {
  const { theme } = useTheme();
  const fillColor = theme === "dark" ? "#FFFFFF" : "#000000"; // Change as per your color needs

  return (
    <div className="flex flex-row space-x-4">
      <a href="https://github.com/bachdumpling">
        <GithubIcon className="w-5 h-5" fill={fillColor} />
      </a>
      <a href="https://www.linkedin.com/in/bachhoangle/">
        <LinkedInIcon className="w-5 h-5" fill={fillColor} />
      </a>
      <a href="https://drive.google.com/file/d/10nnloQtrAujyDqxdxJYaIkeS4R7Uaq3p/view?usp=sharing">
        <DocumentIcon className="w-5 h-5" fill={fillColor} />
      </a>
    </div>
  );
}

export default SocialLinks;
