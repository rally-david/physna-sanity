const moduleTitle = "Embed Greenhouse Jobs";

export default {
  name: "embed-greenhouse",
  title: moduleTitle,
  type: "object",
  fields: [
    {
      name: "embedCode",
      title: "Embed Code",
      type: "text",
      rows: 5,
    },
  ],
  preview: {
    select: {
      title: "embedCode",
      subtitle: "content",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: moduleTitle,
        subtitle: `Module > ${moduleTitle}`,
        media: media,
      };
    },
  },
};
