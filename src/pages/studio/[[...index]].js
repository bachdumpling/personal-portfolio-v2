import Head from "next/head";
import { NextStudio } from "next-sanity/studio";
import { NextStudioHead } from "next-sanity/studio/head";

import config from "../../../sanity.config";
import Layout from "../components/Layout";

export default function StudioPage() {
  return (
    <Layout hideNavFooter={false}>
      <Head>
        <NextStudioHead />
      </Head>
      <NextStudio config={config} />
    </Layout>
  );
}
