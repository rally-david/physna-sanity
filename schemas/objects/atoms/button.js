export default {
  name: "button",
  title: "CTA Button",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "Link URL",
      type: "string",
    },
    {
      name: "target",
      title: "Link Target",
      type: "string",
      initialValue: "_self",
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
};
