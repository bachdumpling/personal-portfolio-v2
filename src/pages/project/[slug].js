import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProjectBySlug } from "../../../lib/sanity";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import GitHub from "../components/icons/github.svg";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { TechnologyModal } from "../components/Technology";
import { PortableText } from "@portabletext/react";
import portableTextComponents from "../../../lib/portableTextComponents";
import Layout from "../components/Layout";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const data = await getProjectBySlug(slug);
      setProject(data);
    };

    fetchData();
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  return (
    <Layout>
      <div className="md:max-w-4xl md:mx-5 lg:mx-auto z-0 mx-5 pt-10">
        <div className="h-full w-full">
          <div className="pb-8">
            <p className="text-2xl md:text-5xl font-bold">{project.title}</p>
          </div>

          <div className="flex justify-center items-center w-full h-44 md:h-96">
            <div className="relative w-full md:w-3/4 shadow-lg h-full">
              <Image
                fill={true}
                className="object-cover"
                src={urlFor(project.mainImage).url()}
                alt={project.title}
              />
            </div>
          </div>

          <div>
            <div className="pt-5 flex justify-between items-center">
              <p className="text-md md:text-lg font-semibold">About</p>
            </div>
            <p className="text-black text-justify text-xs md:text-sm">
              {project.longDescription}
            </p>
          </div>

          <div>
            <p className="pt-5 text-md md:text-lg font-semibold">
              Technologies
            </p>
            <div className="flex justify-start items-center space-x-4 overflow-x-auto overflow-y-hidden scrollbar-hide">
              {project.technology.map((tech) => {
                return <TechnologyModal tech={tech} key={Math.random()} />;
              })}
            </div>
          </div>

          <div>
            <div className="flex gap-2 pt-5 text-md md:text-lg font-semibold justify-start items-center">
              <a href="https://github.com/bachdumpling">
                <GlobeAltIcon className="w-5 h-5" name="My github" />
              </a>
              <p className="">Website</p>
            </div>
            {project.website ? (
              <div className="flex flex-col font-semibold text-xs md:text-sm">
                <a
                  className="hover:underline"
                  href={project?.website}
                  target="_blank"
                >
                  {project?.website}
                </a>
              </div>
            ) : (
              <p className="text-gray-500 text-justify text-xs md:text-sm">
                Details coming soon...
              </p>
            )}
          </div>

          <div>
            <div className="flex gap-2 pt-5 text-md md:text-lg font-semibold justify-start items-center">
              <a href="https://github.com/bachdumpling">
                <Image src={GitHub} className="w-5 h-5" name="My github" />
              </a>
              <p className="">GitHub</p>
            </div>
            <div className="flex flex-col font-semibold text-xs md:text-sm">
              <a className="hover:underline" href={project.github.githubClient}>
                {project.github.githubClient}
              </a>

              <a className="hover:underline" href={project.github.githubServer}>
                {project.github.githubServer}
              </a>
            </div>
          </div>

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
