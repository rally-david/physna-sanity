export default {
  name: "image_hot_spot",
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
    },
  ],
};
