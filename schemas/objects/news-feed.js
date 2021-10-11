const moduleTitle = "News Feed";

export default {
  name: "news-feed",
  title: moduleTitle,
  type: "object",
  fields: [
    {
      name: "featuredPosts",
      title: "Featured Posts",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "newsDetail" },
            { type: "featuresDetail" },
            { type: "resourcesDetail" },
          ],
        },
      ],
    },
    {
      name: "newsPost",
      title: "News Post",
      type: "reference",
      to: [{ type: "newsDetail" }],
    },
    {
      title: "Show News Feed?",
      name: "released",
      type: "boolean",
      initialValue: true,
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
