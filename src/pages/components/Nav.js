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

  return (
    <div
      className={`flex justify-between py-12 md:pt-16 max-w-3xl mx-6 lg:mx-auto ${themeClasses}`}
    >
      {/* Left */}
      <Link href="/">
        <div>
          <p className="absolute text-xl font-bold uppercase tracking-wide cursor-pointer">
            Bach Le.
          </p>
        </div>
      </Link>

      {/* Right */}
      {/* <div className="hidden md:visible"> */}
      <div className="grid-flow-col grid-rows-1 grid-cols-4 w-96 justify-items-center text-lg invisible md:visible inline-grid gap-x-10">
        <div className="col-span-1">
          {params === "/about" ? (
            <>
              <Link href="/about">
                <p className="navBtn font-bold text-light-accent dark:text-dark-accent">
                  About
                </p>
              </Link>
            </>
          ) : (
            <Link href="/about">
              <p className="navBtn">About</p>
            </Link>
          )}
        </div>

        <div className="col-span-1">
          {params === "/project" ? (
            <Link href="/project">
              <p className="navBtn font-semibold text-light-accent dark:text-dark-accent">
                Project
              </p>
            </Link>
          ) : (
            <Link href="/project">
              <p className="navBtn">Project</p>
            </Link>
          )}
        </div>

        <div className="col-span-1">
          {params === "/contact" ? (
            <Link href="/contact">
              <p className="navBtn font-semibold text-light-accent dark:text-dark-accent">
                Contact
              </p>
            </Link>
          ) : (
            <Link href="/contact">
              <p className="navBtn">Contact</p>
            </Link>
          )}
        </div>

        <div className="navBtn col-span-1">
          <div onClick={toggleTheme} className="navBtn col-span-1">
            {theme === "dark" ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>
      {/* </div> */}

      <div
        onClick={() => {
          setOpenNav(true);
          console.log("opened");
        }}
        className="sm:hidden visible cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {openNav ? (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <div
            className="justify-center items-center flex fixed inset-0 z-50 bg-light-background dark:bg-dark-background border py-10 overflow-hidden"
            // style={{transition: 'opacity 0.25s ease'}}
          >
            <div className="relative w-full h-full px-4 bg-light-background dark:bg-dark-background inset-0 z-50 border overflow-hidden">
              <div className="h-6 w-6 ml-5 bg-transparent border-0 text-black font-light float-left leading-none outline-none focus:outline-none z-50">
                <div onClick={toggleTheme} className="navBtn col-span-1">
                  {theme === "dark" ? (
                    <SunIcon className="w-6 h-6" />
                  ) : (
                    <MoonIcon className="w-6 h-6" />
                  )}
                </div>
              </div>

              <XMarkIcon
                className="h-6 w-6 pr-auto mr-5 bg-transparent border-0 font-light float-right leading-none outline-none focus:outline-none navBtn"
                onClick={() => setOpenNav(false)}
              />

              <div className="flex flex-col justify-center items-center space-y-10 font-bold">
                <div className="flex flex-col justify-center items-center">
                  <Link href="/">
                    <p
                      onClick={() => {
                        setOpenNav(false);
                      }}
                    >
                      HOME
                    </p>
                  </Link>
                  {params === "/" ? (
                    <div className="w-full flex justify-center">
                      <div className="mt-1 w-16 h-[1px] bg-light-accent dark:bg-dark-accent rounded-md "></div>
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Link href="/about">
                    <p
                      onClick={() => {
                        setOpenNav(false);
                      }}
                    >
                      ABOUT
                    </p>
                  </Link>
                  {params === "/about" ? (
                    <div className="w-full flex justify-center">
                      <div className="mt-1 w-16 h-[1px] bg-light-accent dark:bg-dark-accent rounded-md "></div>
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Link href="/project">
                    <p
                      onClick={() => {
                        setOpenNav(false);
                      }}
                    >
                      PROJECT
                    </p>
                  </Link>
                  {params === "/project" ? (
                    <div className="w-full flex justify-center">
                      <div className="mt-1 w-24 h-[1px] bg-light-accent dark:bg-dark-accent rounded-md "></div>
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col justify-center items-center">
                  <Link href="/contact">
                    <p
                      onClick={() => {
                        setOpenNav(false);
                      }}
                    >
                      CONTACT
                    </p>
                  </Link>
                  {params === "/contact" ? (
                    <div className="w-full flex justify-center">
                      <div className="mt-1 w-24 h-[1px] bg-light-accent dark:bg-dark-accent rounded-md "></div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </m.div>
      ) : null}
    </div>
  );
}

export default Nav;
