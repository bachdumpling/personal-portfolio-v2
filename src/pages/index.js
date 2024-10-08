import Head from "next/head";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import { client } from "../../lib/sanity.client";
import Script from "next/script";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

export async function getStaticProps() {
  const projects = await client.fetch(
    `*[_type == "project" && isFeatured == true] | order(_createdAt desc)[0...4]`
  );
  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default function Home({ projects }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (projects) {
      setIsLoading(false);
    }
  }, [projects]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NPH3NVGK6N"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NPH3NVGK6N');
        `}
      </Script>
      <Head>
        <title>Bach Le</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero projects={projects} />
      </main>
    </Layout>
  );
}
