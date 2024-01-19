export default {
  name: "photoCollection",
  title: "Photo Collection",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "creationDate",
      title: "Creation Date",
      type: "datetime",
    },
    {
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "photo" }], // Reference to photo object
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
