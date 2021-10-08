export default {
  name: "embed-salesforce",
  title: "Embed Salesforce Form",
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
      name: "embed_code",
      title: "Embed Code",
      type: "text",
    },
  ],
};
