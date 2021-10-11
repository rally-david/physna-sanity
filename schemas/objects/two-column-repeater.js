const moduleTitle = "2 Column Repeater";

export default {
  name: "two-column-repeater",
  title: moduleTitle,
  type: "object",
  fields: [
    {
      name: "column_1_heading",
      title: "Column 1 Heading",
      type: "string",
    },
    {
      name: "column_1_items",
      title: "Column 1 Items",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
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
              title: "CTA Button",
              type: "button",
            },
            {
              name: "image",
              title: "Image",
              type: "image_hot_spot",
            },
          ],
        },
      ],
    },
    {
      name: "column_2_heading",
      title: "Column 2 Heading",
      type: "string",
    },
    {
      name: "column_2_items",
      title: "Column 2 Items",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
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
              title: "CTA Button",
              type: "button",
            },
            {
              name: "image",
              title: "Image",
              type: "image_hot_spot",
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
