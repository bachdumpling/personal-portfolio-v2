// src/lib/portableTextComponents.js
import { PortableTextComponents } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import urlFor from "./urlFor";

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="z-0 dark:bg-white dark:p-6 dark:mt-6 dark:mb-16 rounded-lg">
      <img
        src={urlFor()
          .image(value)
          // .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        className="z-10 mx-auto mt-10 mb-20 dark:mt-0 dark:mb-0 mix-blend-multiply"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const myPortableTextComponents = {
  types: {
    image: SampleImageComponent,
    // ... other custom types
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl md:text-4xl font-semibold mb-4 mt-10">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-3xl font-semibold mb-4 mt-10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-2xl font-semibold mb-4 mt-10">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base md:text-xl font-semibold">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-sm md:text-lg font-semibold">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm md:text-base font-semibold">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="text-base mb-6  text-justify">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-10">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-10">{children}</ol>
    ),
    // Add custom list styles if you have any
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
    // Add custom list item styles if you have any
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          className="hover:underline text-gray-500"
          href={value.href}
          rel={rel}
        >
          {children}
        </a>
      );
    },
    // ... other custom marks
  },
  // ... other custom components for block, list, listItem, etc.
};

export default myPortableTextComponents;
