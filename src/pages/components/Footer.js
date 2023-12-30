import React from "react";
import SocialLinks from "./SocialLinks";
import { useTheme } from "../../../lib/themeContext";

function Footer() {
  const { theme } = useTheme();

  const themeClasses =
    theme === "dark" ? "bg-dark-background text-white" : "bg-white text-black";
  const textColor = theme === "dark" ? "text-slate-200" : "text-slate-600";

  return (
    <div
      className={`${themeClasses} md:max-w-4xl lg:mx-auto pt-10 pb-20 px-6 md:px-0`}
    >
      <div className="flex h-full flex-row justify-end items-center">
        <SocialLinks />
      </div>
    </div>
  );
}

export default Footer;
