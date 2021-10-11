export default {
  name: "title",
  title: "Title",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Title",
      type: "string",
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
        subtitle: "Module > Simple Title",
        media: media,
      };
    },
  },
};
