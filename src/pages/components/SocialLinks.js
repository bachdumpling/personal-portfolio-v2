import React, { useEffect, useState } from "react";
import { useTheme } from "../../../lib/themeContext";
import LinkedInIcon from "./icons/LinkedInIcon.jsx";
import DocumentIcon from "./icons/DocumentIcon.jsx";
import GithubIcon from "./icons/GithubIcon.jsx";
import Link from "next/link";
import { client } from "../../../lib/sanity.client";

async function fetchSocialLinks() {
  const query = '*[_type == "socialLinks"]';
  const data = await client.fetch(query);
  return data[0]; // Assuming there's only one document for social links
}

function SocialLinks() {
  const { theme } = useTheme();
  const fillColor = theme === "dark" ? "#FFFFFF" : "#000000";

  const [socialLinks, setSocialLinks] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      const links = await fetchSocialLinks();
      setSocialLinks(links);
    };

    fetchLinks();
  }, []);

  if (!socialLinks) return null;

  return (
    <div className="flex flex-row space-x-4">
      {socialLinks.github && (
        <Link target="_blank" href={socialLinks.github}>
          <GithubIcon className="w-6 h-6" fill={fillColor} />
        </Link>
      )}
      {socialLinks.linkedin && (
        <Link target="_blank" href={socialLinks.linkedin}>
          <LinkedInIcon className="w-6 h-6" fill={fillColor} />
        </Link>
      )}
      {socialLinks.resume && (
        <Link target="_blank" href={socialLinks.resume}>
          <DocumentIcon className="w-6 h-6" fill={fillColor} />
        </Link>
      )}
    </div>
  );
}

export default SocialLinks;
