// In your Next.js src/lib/sanity.js
import { client } from "./sanity.client";

export const getProjectBySlug = async (slug) => {
  const query = `*[slug.current == $slug][0]`;
  const params = { slug };
  return await client.fetch(query, params);
};
