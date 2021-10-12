export default {
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
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
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
