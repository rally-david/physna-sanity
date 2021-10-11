const moduleTitle = "Accordion";

export default {
  name: "accordion",
  title: moduleTitle,
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Title",
      type: "string",
    },
    {
      name: "accordion_items",
      title: "Accordion Items",
      type: "array",
      of: [
        {
          name: "accordion_item",
          title: "Accordion Item",
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "text",
            },
            {
              name: "button",
              type: "button",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "content",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || moduleTitle,
        subtitle: `Module > ${moduleTitle}`,
        media: media,
      };
    },
  },
};
