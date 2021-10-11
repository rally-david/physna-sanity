export default {
  name: "careers",
  title: "Careers",
  type: "document",
  fields: [
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
