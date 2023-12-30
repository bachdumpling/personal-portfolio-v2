import React from "react";
import { useTheme } from "../../../lib/themeContext";
import LinkedInIcon from "./icons/LinkedInIcon.js";
import DocumentIcon from "./icons/DocumentIcon.js";
import GithubIcon from "./icons/GithubIcon.js";
import Link from "next/link";

function SocialLinks() {
  const { theme } = useTheme();
  const fillColor = theme === "dark" ? "#FFFFFF" : "#000000"; // Change as per your color needs

  return (
    <div className="flex flex-row space-x-4">
      <Link href="https://github.com/bachdumpling">
        <GithubIcon className="w-6 h-6" fill={fillColor} />
      </Link>
      <Link href="https://www.linkedin.com/in/bachhoangle/">
        <LinkedInIcon className="w-6 h-6" fill={fillColor} />
      </Link>
      <Link href="https://drive.google.com/file/d/10nnloQtrAujyDqxdxJYaIkeS4R7Uaq3p/view?usp=sharing">
        <DocumentIcon className="w-6 h-6" fill={fillColor} />
      </Link>
    </div>
  );
}

export default SocialLinks;
