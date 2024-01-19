export default {
  name: "photo",
  title: "Photo",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enables image cropping
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          options: {
            isHighlighted: true, // Puts this field in a prominent position
          },
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
      ],
    },
  ],
};
