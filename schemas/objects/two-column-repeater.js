import button from "./atoms/button";

export default {
  name: "two-column-repeater",
  title: "2 Column Repeater",
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
