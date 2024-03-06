import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";
import React from "react";
import Layout from "./components/Layout";
import { client } from "../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import myPortableTextComponents, {
  ImageComponent,
} from "../../lib/portableTextComponents";
import {
  FaAws,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  DiDart,
  DiGoogleCloudPlatform,
  DiPostgresql,
  DiRuby,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiRubyonrails,
  SiTailwindcss,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import urlFor from "@/lib/urlFor";
import SocialLinks from "./components/SocialLinks";

export async function getStaticProps() {
  const aboutPageData = await client.fetch(`*[_type == "aboutPage"][0]`);
  return {
    props: {
      aboutPageData,
    },
    revalidate: 60,
  };
}

function About({ aboutPageData }) {
  return (
    <Layout>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 0 }}
      >
        <div className="pageLayout">
          <h1 className="pageTitle">{aboutPageData.title}</h1>

          <div className="grid md:grid-flow-col md:grid-cols-2 grid-flow-row gap-4 mb-2 md:mb-4">
            <div className="p-0 md:p-2">
              {/* <div className="space-y-2">
                <h2 className="font-marlin-soft-bold text-sm md:text-lg text-light-text dark:text-dark-text">
                  Education
                </h2>
                <div className="pb-4 pt-0 space-x-4 flex flex-row"></div>
              </div>
               */}

              {/* add a photo */}
              <div className="flex flex-col justify-center items-center text-light-text dark:text-dark-text">
                <div className="relative">
                  <img
                    src={urlFor(aboutPageData?.mainImage).url()}
                    alt="A photo of me"
                    className="object-cover"
                  />
                  <div className="absolute scale-75 bottom-2 right-0">
                    <SocialLinks color={"#FFFFFF"} />
                  </div>
                </div>
                <p className="font-marlin-soft-regular text-xs text-center pt-2 italic tracking-wide">
                  Bach drinking iced tea and eating pho on the sidewalk. Hanoi,
                  Summer 2023. 🇻🇳 Konica C35, Kodak Potra 400 📸
                </p>
              </div>
            </div>

            <div className="p-0 md:p-2">
              <div className="space-y-2">
                <h2 className="font-marlin-soft-bold text-base md:text-lg text-light-text dark:text-dark-text">
                  Education
                </h2>
                <div className="pb-4 pt-0 space-y-3 flex flex-col text-sm font-marlin-soft-regular text-light-text dark:text-dark-text">
                  <div className="flex justify-start items-center mt-auto">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Fordham_Rams_logo.svg/800px-Fordham_Rams_logo.svg.png"
                      alt="Fordham University logo"
                      className="w-6 h-6 mr-2"
                    />
                    BSc @ Fordham University | 2024
                  </div>

                  <div className="flex justify-start items-center mt-auto">
                    <img
                      src="https://asset.brandfetch.io/idOwP83A7y/idRzIcdhQI.png?updated=1708917155311"
                      className="w-6 h-auto mr-2"
                    />
                    SWE @ Flatiron School | 2022
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-marlin-soft-bold text-base md:text-lg text-light-text dark:text-dark-text">
                  Languages
                </h2>
                <div className="pb-4 pt-0 space-x-4 flex flex-row justify-start items-center">
                  <IoLogoJavascript className="w-6 h-6 text-yellow-500 dark:text-yellow-4000" />
                  <DiRuby className="w-6 h-6 text-red-500 dark:text-red-400" />
                  <FaPython className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  <DiDart className="w-6 h-6 text-blue-500 dark:text-blue-300" />
                  <FaHtml5 className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                  <FaCss3Alt className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-marlin-soft-bold text-base md:text-lg text-light-text dark:text-dark-text">
                  Frameworks
                </h2>
                <div className="pb-4 pt-0 space-x-4 flex flex-row justify-start items-center">
                  <FaReact className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  <SiRubyonrails className="w-6 h-6 text-red-500 dark:text-red-400" />
                  <RiFlutterFill className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  <SiTailwindcss className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  <SiNextdotjs className="w-6 h-6 text-black dark:text-light-secondary" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-marlin-soft-bold text-base md:text-lg text-light-text dark:text-dark-text">
                  Clouds, Databases, & Tools
                </h2>
                <div className="pb-4 pt-0 space-x-4 flex flex-row justify-start items-center">
                  <FaAws className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
                  <DiGoogleCloudPlatform className="w-7 h-7 text-blue-500 dark:text-blue-400" />
                  <FaGithub className="w-5 h-5 text-black dark:text-light-secondary" />
                  <BiLogoPostgresql className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <PortableText
              value={aboutPageData.body}
              components={{
                ...myPortableTextComponents,
                types: {
                  image: ({ value }) => (
                    <ImageComponent value={value} hasBackground={false} />
                  ),
                },
              }}
            />
          </div>
        </div>
      </m.div>
    </Layout>
  );
}

export default About;
