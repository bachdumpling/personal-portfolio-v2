import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../../../lib/themeContext";

function Nav() {
  const params = usePathname();
  const { theme, setTheme } = useTheme();
  const [openNav, setOpenNav] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const themeClasses =
    theme === "dark"
      ? "bg-dark-background text-dark-text"
      : "bg-light-background text-light-text";

  const navItems = [
    // { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/project", title: "Project" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <div
      className={`flex justify-between py-12 md:pt-16 max-w-3xl mx-6 md:mx-auto lg:mx-auto ${
        theme === "dark"
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      {/* Left */}
      <Link href="/">
        <p className="absolute text-xl font-bold uppercase tracking-wide cursor-pointer">
          Bach Le.
        </p>
      </Link>

      {/* Right */}
      <div className="grid-flow-col grid-rows-1 grid-cols-4 w-96 justify-items-center text-lg invisible md:visible inline-grid gap-x-10">
        {navItems.map((item) => (
          <div key={item.href} className="col-span-1">
            <Link href={item.href}>
              <p
                className={`navBtn ${
                  params === item.href
                    ? "font-bold text-light-accent dark:text-dark-accent"
                    : ""
                }`}
              >
                {item.title}
              </p>
            </Link>
          </div>
        ))}
        <div onClick={toggleTheme} className="navBtn col-span-1">
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </div>
      </div>

      {/* Mobile Nav Toggle */}
      <div
        onClick={() => setOpenNav(true)}
        className="sm:hidden visible cursor-pointer"
      >
        <Bars3Icon className="w-6 h-6" />
      </div>

      {openNav && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          className="justify-center items-center flex fixed inset-0 z-50 bg-light-background dark:bg-dark-background py-10 overflow-hidden"
        >
          <div className="relative w-full h-full px-4 bg-light-background dark:bg-dark-background inset-0 z-50 overflow-hidden">
            <div className="flex justify-between absolute top-6 left-8 right-8">
              <div onClick={toggleTheme}>
                {theme === "dark" ? (
                  <SunIcon className="w-6 h-6" />
                ) : (
                  <MoonIcon className="w-6 h-6" />
                )}
              </div>
              <XMarkIcon
                className="h-6 w-6"
                onClick={() => setOpenNav(false)}
              />
            </div>

            <div className="flex flex-col justify-center items-center space-y-10 font-bold mt-16">
              {["/", "/about", "/project", "/contact"].map((path, index) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={index}
                >
                  <Link href={path}>
                    <p
                      onClick={() => setOpenNav(false)}
                      className={`${params === path ? "font-semibold" : ""}`}
                    >
                      {path.substring(1).toUpperCase() || "HOME"}
                    </p>
                  </Link>
                  {params === path && (
                    <div className="w-full flex justify-center">
                      <div className="mt-1 w-16 h-[1px] bg-light-accent dark:bg-dark-accent rounded-md "></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </m.div>
      )}
    </div>
  );
}

export default Nav;
