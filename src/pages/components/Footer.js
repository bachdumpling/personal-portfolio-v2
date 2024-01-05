import React from "react";
import SocialLinks from "./SocialLinks";
import { useTheme } from "../../../lib/themeContext";

function Footer() {
  const { theme } = useTheme();

  const themeClasses =
    theme === "dark" ? "bg-dark-background text-dark-text" : "bg-light-background text-light-text";

  return (
    <div
      className={`${themeClasses} md:max-w-3xl mx-6 md:mx-auto lg:mx-auto pt-10 pb-20`}
    >
      <div className="flex h-full flex-row justify-end items-center">
        <SocialLinks />
      </div>
    </div>
  );
}

export default Footer;
