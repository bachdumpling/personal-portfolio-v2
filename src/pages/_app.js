import "@/styles/globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
