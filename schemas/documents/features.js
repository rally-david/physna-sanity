export default {
  name: "features",
  title: "Features",
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
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
