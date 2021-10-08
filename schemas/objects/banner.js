import button from "./atoms/button";

import React from "react";

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
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    button,
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "content",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title,
        subtitle: "Module > Banner",
        media: media,
      };
    },
  },
};
