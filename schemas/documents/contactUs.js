export default {
  name: "contactUs",
  title: "Contact Us",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    },
    {
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        { type: "banner" },
        { type: "call-to-action" },
        { type: "fifty-fifty" },
        { type: "embed-salesforce" },
      ],
    },
  ],
};
