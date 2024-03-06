import React, { useState } from "react";
import Layout from "./components/Layout";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { motion as m } from "framer-motion";

export async function getStaticProps() {
  const photoCollections = await client.fetch(
    `*[_type == "photoCollection"]{
      _id,
      title,
      description,
      creationDate,
      "photos": photos[]{
        "imageUrl": image.asset->url,
        _key,
        image {
          alt,
          caption
        }
      }
    } | order(_creationDate desc)`
  );
  return {
    props: {
      photoCollections,
    },
    revalidate: 60,
  };
}

function Journal({ photoCollections }) {
  console.log(photoCollections);
  const [selectedCollection, setSelectedCollection] = useState(
    photoCollections[0]._id
  );
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openLightbox = (photo) => setSelectedPhoto(photo);
  const closeLightbox = () => setSelectedPhoto(null);

  return (
    <Layout>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 0 }}
         className="pageLayout">
        <h1 className="pageTitle">Journal.</h1>
        <div className="pageContent mb-6">
          <div className="flex pb-4 no-scrollbar overflow-x-auto">
            {/* Collection Buttons */}
            {photoCollections?.map((collection) => (
              <h2
                key={collection._id}
                className={`border-[0.2px] shadow-md font-medium flex flex-initial dark:text-dark-text text-light-text mr-4 text-sm md:text-base px-4 py-1 md:px-4 rounded-md cursor-pointer whitespace-nowrap text-center justify-center items-center ${
                  selectedCollection === collection._id
                    ? "bg-light-secondary dark:bg-dark-secondary"
                    : "hover:bg-light-secondary dark:hover:bg-dark-secondary"
                } border-light-accent dark:border-dark-accent transition-all duration-300 cursor-pointer ease-out`}
                onClick={() => setSelectedCollection(collection._id)}
              >
                {collection.title}
              </h2>
            ))}
          </div>
          {/* Display the description of Selected Collection */}
          <div className="mb-4 md:mb-8">
            <p className="mb-2 text-light-text dark:text-dark-text text-sm md:text-base text-justify">
              {
                photoCollections.find(
                  (collection) => collection._id === selectedCollection
                )?.description
              }
            </p>
            {/* Display the creationDate (json date) of Selected Collection */}
            <p className="text-light-text dark:text-dark-text text-sm md:text-base text-end">
              {new Date(
                photoCollections.find(
                  (collection) => collection._id === selectedCollection
                )?.creationDate
              ).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                // hour: "2-digit",
                // minute: "2-digit",
                // second: "2-digit",
              })}
            </p>
          </div>

          {/* Display Photos of Selected Collection */}
          <div className="columns-1 md:columns-2 space-y-4 md:space-y-6 md:gap-6">
            {selectedCollection &&
              photoCollections
                .find((collection) => collection._id === selectedCollection)
                ?.photos.map((photo) => (
                  <div
                    key={photo._key}
                    className="shadow-md dark:shadow-gray-900 cursor-pointer"
                    onClick={() => openLightbox(photo)}
                  >
                    <img
                      src={urlFor(photo?.imageUrl)}
                      alt={photo.image.alt}
                      className="grid-span-1"
                    />
                    {/* <p>{photo?.image?.caption}</p> */}
                  </div>
                ))}
          </div>
        </div>
      </m.div>

      {/* Lightbox for Fullscreen Photo */}
      {selectedPhoto && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-[0.91] z-50 flex flex-col justify-center items-center px-6 sm: p-24 md:p-32 cursor-pointer"
          onClick={closeLightbox}
        >
          <img
            src={urlFor(selectedPhoto?.imageUrl)}
            alt={selectedPhoto.image.alt}
            className="shadow-lg max-w-full max-h-full z-50 mb-4 md:mb-6"
          />
          <p className="text-dark-text italic text-center text-xs sm:text-sm md:text-base sm:w-4/6 w-full">
            {selectedPhoto?.image?.caption}
          </p>
        </div>
      )}
    </Layout>
  );
}

export default Journal;
