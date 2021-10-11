export default {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        { type: "banner" },
        { type: "title" },
        { type: "call-to-action" },
        { type: "news-feed" },
      ],
    },
  ],
};
