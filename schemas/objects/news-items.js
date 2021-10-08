import button from "./atoms/button";

export default {
  name: "news-items",
  title: "News Items",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    button,
  ],
};
