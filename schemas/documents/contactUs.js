export default {
  name: "contactUs",
  title: "Contact Us",
  type: "document",
  fields: [
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
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
