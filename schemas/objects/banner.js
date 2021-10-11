export default {
  name: "banner",
  title: "Banner",
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
    {
      name: "button",
      title: "CTA Button",
      type: "button",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image_hot_spot",
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
        title: title,
        subtitle: "Module > Banner",
        media: media,
      };
    },
  },
};
