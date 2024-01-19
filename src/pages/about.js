import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";
import React from "react";
import Layout from "./components/Layout";
import { client } from "../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import myPortableTextComponents from "../../lib/portableTextComponents";

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
          <h1 className="pageTitle">{aboutPageData.title}.</h1>

          <div className="">
            <PortableText
              value={aboutPageData.body}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </m.div>
    </Layout>
  );
}

export default About;
