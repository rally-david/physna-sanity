export default {
  name: "careers",
  title: "Careers",
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
        { type: "accordion" },
        { type: "call-to-action" },
        { type: "fifty-fifty" },
        { type: "embed-greenhouse" },
      ],
    },
  ],
};
