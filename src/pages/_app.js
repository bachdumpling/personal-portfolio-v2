import React from "react";
import "@/styles/globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Head from "next/head";
import { ThemeProvider, useTheme } from "../../lib/themeContext";

const ThemedAppContainer = ({ children }) => {
  const { theme } = useTheme();
  const backgroundColor =
    theme === "dark" ? "bg-dark-background" : "bg-light-background"; // Update these class names based on your Tailwind config

  return <div className={`${backgroundColor} min-h-screen`}>{children}</div>;
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Bach Le</title>
      </Head>
      <ThemedAppContainer>
        <Component {...pageProps} />
      </ThemedAppContainer>
    </ThemeProvider>
  );
}
