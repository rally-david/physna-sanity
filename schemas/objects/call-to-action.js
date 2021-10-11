const moduleTitle = "Call to Action";

export default {
  name: "call-to-action",
  title: moduleTitle,
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
        title: title || moduleTitle,
        subtitle: `Module > ${moduleTitle}`,
        media: media,
      };
    },
  },
};
