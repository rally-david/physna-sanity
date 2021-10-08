export default {
  name: "resources",
  title: "Resources",
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
        { type: "two-column-repeater" },
        { type: "call-to-action" },
      ],
    },
  ],
};
