import React from "react";
import "@/src/styles/globals.css";
import Head from "next/head";
import { ThemeProvider, useTheme } from "../../lib/themeContext";
import { Toaster } from "@/components/ui/toaster";

const ThemedAppContainer = ({ children }) => {
  const { theme } = useTheme();
  const backgroundColor =
    theme === "dark" ? "bg-dark-background" : "bg-light-background";

  return (
    <div className={`${backgroundColor} min-h-screen font-inter relative`}>
      <div className="absolute inset-0 bg-noise blur-[0.2px] md:[mask-image:linear-gradient(250deg,white,rgba(255,255,255,0))] [mask-image:linear-gradient(140deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Bach Le</title>
      </Head>
      <ThemedAppContainer>
        <Component {...pageProps} />
        <Toaster />
      </ThemedAppContainer>
    </ThemeProvider>
  );
}
