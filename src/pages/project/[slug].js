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
  const { url, width, height } = project?.iframeEmbed || {};
  const aspectRatio = (width / height) * 100;

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const data = await getProjectBySlug(slug);
      setProject(data);
    };

    fetchData();
  }, [slug]);

  if (!project) return <Loading />;

  return (
    <Layout>
      <div className="md:max-w-4xl md:mx-5 lg:mx-auto z-0 mx-5 pt-10">
        <div className="h-full w-full">
          <div className="pb-8 flex ">
            <p className="text-2xl md:text-5xl font-bold">{project.title}</p>

            {project?.website && (
              <div className="flex justify-center mt-auto px-6 cursor-pointer">
                <Link
                  className="text-gray-500 text-sm md:text-base underline md:no-underline hover:underline"
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
                  className="text-gray-500 text-sm md:text-base underline md:no-underline hover:underline"
                  href={project?.prototype}
                  target="_blank"
                >
                  Prototype
                </Link>
              </div>
            )}
          </div>

          {project?.animatedGif ? (
            <div className="flex justify-center items-center my-4 md:my-8 shadow-lg w-full h-full">
              <Image
                width={1200}
                height={800}
                className="object-cover"
                src={urlFor(project.animatedGif).url()}
                alt={project.title + " - Animated GIF"}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center my-4 md:my-8 shadow-lg w-full h-full">
              <Image
                width={1200}
                height={800}
                className="object-cover"
                src={urlFor(project.mainImage).url()}
                alt={project.title}
              />
            </div>
          )}

          <div>
            <div className="mt-10 mb-4 flex justify-between items-center">
              <p className="text-lg md:text-2xl font-semibold">About</p>
            </div>
            <p className="text-black text-justify text-sm md:text-base">
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
              <p className="text-lg md:text-2xl font-semibold">Technologies</p>
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
    </Layout>
  );
};

export default ProjectPage;
