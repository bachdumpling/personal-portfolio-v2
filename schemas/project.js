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
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    {
      name: "github",
      title: "Github",
      type: "object",
      fields: [
        {name: 'githubClient', type: 'url', title: 'Github Client'},
        {name: 'githubServer', type: 'url', title: 'Github Server'},
      ],
    },
    {
      name: "technology",
      title: "Technology",
      type: "array",
      of: [{ type: "string" }],
    },
    defineField({
      name: "embed",
      title: "Embeded Link",
      type: "url",
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
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
