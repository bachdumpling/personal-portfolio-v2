import "@/styles/globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
