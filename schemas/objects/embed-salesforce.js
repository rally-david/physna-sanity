const moduleTitle = "Embed Salesforce Form";

export default {
  name: "embed-salesforce",
  title: moduleTitle,
  type: "object",
  fields: [
    {
      name: "embed_code",
      title: "Embed Code",
      type: "text",
      rows: 5,
    },
  ],
  preview: {
    select: {
      title: "embed_code",
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
