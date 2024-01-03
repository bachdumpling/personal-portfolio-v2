import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProjectBySlug } from "../../../lib/sanity";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { TechnologyModal } from "../components/Technology";
import { PortableText } from "@portabletext/react";
import portableTextComponents from "../../../lib/portableTextComponents";
import Layout from "../components/Layout";
import Link from "next/link";
import Loading from "../components/Loading";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [project, setProject] = useState(null);
  const [isGifLoading, setIsGifLoading] = useState(true); // New state for GIF loading

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const data = await getProjectBySlug(slug);
      setProject(data);
    };

    fetchData();
  }, [slug]);

  // Helper function to handle GIF load
  const handleGifLoad = () => {
    setIsGifLoading(false); // Set loading state to false when GIF is loaded
  };

  if (!project) return <Loading />; // Display loading animation while project data is being fetched

  const mainImage = project.mainImage ? urlFor(project.mainImage).url() : null;
  const animatedGif = project.animatedGif
    ? urlFor(project.animatedGif).url()
    : null;

  return (
    <Layout>
      <div className="pageLayout">
        <div className="h-full w-full dark:text-dark-text">
          <div className="pageTitle flex">
            <h1 className>{project.title}</h1>
            {project?.website && (
              <div className="flex justify-center mt-auto px-6 cursor-pointer">
                <Link
                  className="text-light-accent dark:text-dark-accent font-semibold text-sm md:text-base underline md:no-underline hover:underline"
                  href={project?.website}
                  target="_blank"
                >
                  Production
                </Link>
              </div>
            )}

            {project?.prototype && (
              <div className="flex justify-center mt-auto cursor-pointer">
                <Link
                  className="text-light-accent dark:text-dark-accent font-semibold text-sm md:text-base underline md:no-underline hover:underline"
                  href={project?.prototype}
                  target="_blank"
                >
                  Prototype
                </Link>
              </div>
            )}
          </div>

          {/* {project?.animatedGif ? (
            <div className="flex justify-center items-center my-2 md:my-4 shadow-lg w-full h-full">
              <img
                width={1200}
                height={800}
                className="object-cover"
                src={urlFor(project.animatedGif).url()}
                alt={project.title + " - Animated GIF"}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center my-2 md:my-4 shadow-lg w-full h-full">
              <Image
                width={1200}
                height={800}
                className="object-cover"
                src={urlFor(project.mainImage).url()}
                alt={project.title}
              />
            </div>
          )} */}

          {animatedGif ? (
            <>
              {isGifLoading && <Loading />}
              {/* Display loading animation while GIF is loading */}
              <img
                src={animatedGif}
                onLoad={handleGifLoad} // Event to indicate image has finished loading
                style={{ display: isGifLoading ? "none" : "block" }} // Hide GIF until it's loaded
                alt={project.title + " - Animated GIF"}
              />
            </>
          ) : (
            mainImage && (
              <Image
                src={mainImage}
                width={1200}
                height={800}
                alt={project.title}
              />
            )
          )}

          <div className="pageContent">
            <div>
              <div className="mt-10 mb-4 flex justify-between items-center">
                <p className="text-lg md:text-2xl font-semibold dark:text-dark-text text-light-text ">
                  About
                </p>
              </div>
              <p className="text-light-text dark:text-dark-text text-justify text-sm md:text-base dark:text-dark-text text-light-text ">
                {project?.longDescription.split("\n").map((line, index) => (
                  // <p key={index}>{line}</p>
                  <span key={index}>
                    {line}
                    {index !==
                      project?.longDescription.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <div className="mt-10 mb-4 flex justify-between items-center">
                <p className="text-lg md:text-2xl font-semibold dark:text-dark-text text-light-text ">
                  Technologies
                </p>
              </div>
              <div className="flex justify-start items-center space-x-4 overflow-x-auto overflow-y-hidden scrollbar-hide">
                {project.technology.map((tech) => {
                  return <TechnologyModal tech={tech} key={Math.random()} />;
                })}
              </div>
            </div>

            {/* <div
            className="iframe-container"
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: `${aspectRatio}%`,
              height: 0,
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              src={url}
              allowFullScreen
            />
          </div> */}

            <div className="">
              <PortableText
                value={project.body}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
