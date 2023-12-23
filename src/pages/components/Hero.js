import React, { useEffect, useState } from "react";
import avatar from "./assets/avatar1.png";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { animate, motion as m } from "framer-motion";
import MainIntro from "./MainIntro";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("lehoangbach7802@gmail.com");
  }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <div className="md:max-w-4xl md:mx-5 lg:mx-auto z-0 pt-10 mx-5 pb-10">
        <div className="flex">
          <div className="bg-gray-900/5 relative w-32 h-32 grid place-items-center rounded-full drop-shadow-sm">
            <Image className="w-32 h-32" src={avatar} />
            <div className="absolute w-10 h-10 right-2 grid place-items-center rounded-full bg-slate-50 drop-shadow-md bottom-0 translate-y-2">
              <p className="text-3xl">🤝</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 md:space-y-2">
          <div className="md:pt-14 md:pb-5 pt-10">
            <MainIntro />
          </div>
          <p className="text-gray-500 text-sm md:text-lg py-5 text-justify md:text-left">
            I`&apos;`m a developer 📱, digital creator 📷, & curious optimist
            🦦. Right now, I`&apos;`m probably exploring new hobbies,
            activities, and general knowledge; but I`&apos;`m always ready to
            collaborate with creatives and businesses.
          </p>
          {/* <p className="text-gray-500 text-sm md:text-lg leading-10 md:leading-normal">
            View my
            <Link to="/about">
              <span className={`heroBtn`}>About</span>,
            </Link>{" "}
            <Link to="/resume">
              <span className={`heroBtn`}>Resume</span>,
            </Link>{" "}
            <Link to="/project">
              <span className={`heroBtn`}>Projects</span>, or
            </Link>{" "}
            <Link to="/contact">
              <span className={`heroBtn`}>Contact</span> me.
            </Link>
          </p> */}
        </div>

        {/* <Link href="/about"> */}
        <div className="pt-5 md:pt-10 flex space-x-3 cursor-pointer">
          <p className="text-gray-500 text-md hover:underline">
            See more about me
          </p>
          <div className="rotate-90 ">
            <ArrowUpIcon className="w-5 rotate-90 animate-bounce" />
          </div>
        </div>
        {/* </Link> */}
      </div>
    </m.div>
  );
}

export default Hero;
