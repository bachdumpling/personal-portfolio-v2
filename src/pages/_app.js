import "@/styles/globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div className="font-inter">
      <Head>
        <title>Bach Le</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
