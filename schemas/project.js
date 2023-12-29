import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    {
      name: "prototype",
      title: "Prototype",
      type: "url",
    },
    {
      name: "github",
      title: "Github",
      type: "object",
      fields: [
        { name: "githubClient", type: "url", title: "Github Client" },
        { name: "githubServer", type: "url", title: "Github Server" },
      ],
    },
    {
      name: "technology",
      title: "Technology",
      type: "array",
      of: [{ type: "string" }],
    },
    defineField({
      name: "iframeEmbed",
      title: "Iframe Embed",
      type: "object",
      fields: [
        {
          name: "url",
          title: "URL",
          type: "url",
          description: "The URL to embed.",
        },
        {
          name: "width",
          title: "Width",
          type: "number",
        },
        {
          name: "height",
          title: "Height",
          type: "number",
        },
      ],
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    }),
    // defineField({
    //   name: "body",
    //   title: "Body",
    //   type: "blockContent",
    // }),
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: { isHighlighted: true },
            },
            // Include other fields if needed, like alt text
          ],
        },
        // You can include other types as well, such as video or custom components
      ],
    },
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return { ...selection, subtitle: author && `by ${author}` };
  //   },
  // },
});
