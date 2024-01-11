import { motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { client } from "../../../lib/sanity.client";
import Layout from "../components/Layout";
import ProjectModal from "../components/ProjectModal";
import Loading from "../components/Loading";

export async function getStaticProps() {
  const projects = await client.fetch(
    `*[_type == "project"] | order(_createdAt desc)`
  );
  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

function Project({ projects }) {
  const [openProject, setOpenProject] = useState(false);
  const [oneProject, setOneProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  useEffect(() => {
    if (projects && projects.length > 0) {
      setIsLoading(false); // Update the loading state when projects are loaded
    }
  }, [projects]);

  const projectCards = projects.map((project) => {
    return (
      <div
        onClick={(e) => {
          setOneProject(project);
          setOpenProject(!openProject);
        }}
        key={project._id}
      >
        <ProjectCard
          project={project}
          key={project._id}
        />
      </div>
    );
  });

  if (isLoading) return <Loading />; 

  return (
    <Layout>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 0 }}
      >
        <div className="pageLayout overflow-y-hidden">
          <h1 className="pageTitle">Project.</h1>
          <div className="pageContent">
            <div
              className={`grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-6 mb-2 pb-2`}
            >
              {projectCards}
            </div>
          </div>

          {/* Project Modal */}
          {openProject && (
            <ProjectModal
              oneProject={oneProject}
              isOpen={openProject}
              onClose={() => setOpenProject(false)}
            />
          )}
        </div>
      </m.div>
    </Layout>
  );
}
export default Project;
