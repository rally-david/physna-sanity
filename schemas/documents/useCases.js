export default {
  name: "useCases",
  title: "Use Cases",
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
      ],
    },
  ],
};
