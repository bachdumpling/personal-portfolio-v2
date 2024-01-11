import React from "react";
import "@/src/styles/globals.css";
import Head from "next/head";
import { ThemeProvider, useTheme } from "../../lib/themeContext";
import { Toaster } from "@/components/ui/toaster";

const ThemedAppContainer = ({ children }) => {
  const { theme } = useTheme();
  const backgroundColor =
    theme === "dark" ? "bg-dark-background" : "bg-light-background";

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
        <Toaster />
      </ThemedAppContainer>
    </ThemeProvider>
  );
}
