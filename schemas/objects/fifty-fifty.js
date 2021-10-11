export default {
  name: "fifty-fifty",
  title: "50-50",
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
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          initialValue: "50-50 Photo",
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
        title: title,
        subtitle: "Module > 50-50",
        media: media,
      };
    },
  },
};
