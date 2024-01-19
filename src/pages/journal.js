import React, { useState } from "react";
import Layout from "./components/Layout";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

export async function getStaticProps() {
  const photoCollections = await client.fetch(
    `*[_type == "photoCollection"]{
      _id,
      title,
      "photos": photos[]{
        "imageUrl": image.asset->url,
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
  const [selectedCollection, setSelectedCollection] = useState(null);

  return (
    <Layout>
      <div className="pageLayout">
        <h1 className="pageTitle">Journal.</h1>
        <div className="pageContent">
          <div className="flex mb-4 no-scrollbar overflow-x-auto">
            {/* Collection Buttons */}
            {photoCollections?.map((collection) => (
              <h2
                key={collection._id}
                className={`border font-medium flex flex-initial dark:text-dark-text text-light-text  mr-4 text-sm md:text-base px-3 py-1 md:px-3 rounded-md cursor-pointer whitespace-nowrap ${
                  selectedCollection === collection._id
                    ? "bg-light-primary dark:bg-dark-secondary"
                    : "hover:bg-light-primary dark:hover:bg-dark-secondary"
                } border-light-accent dark:border-dark-accent transition-all duration-300 cursor-pointer ease-out`}
                onClick={() => setSelectedCollection(collection._id)}
              >
                {collection.title}
              </h2>
            ))}
          </div>

          {/* Display Photos of Selected Collection */}
          <div className="columns-1 md:columns-2 space-y-4 md:space-y-6 md:gap-6">
            {selectedCollection &&
              photoCollections
                .find((collection) => collection._id === selectedCollection)
                ?.photos.map((photo) => (
                  <div key={photo._key} className="">
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
      </div>
    </Layout>
  );
}

export default Journal;