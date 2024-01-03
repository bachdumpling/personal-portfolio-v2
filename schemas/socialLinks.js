// schemas/socialLinks.js
export default {
  name: "socialLinks",
  title: "Social Links",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "github",
      title: "GitHub",
      type: "url",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    },
    {
      name: "resume",
      title: "Resume",
      type: "url",
    },
    // Add other social links as needed
  ],
};
