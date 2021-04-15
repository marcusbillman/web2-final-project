export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show this project on the Home page",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "additionalImages",
      title: "Additional images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption / Alt text",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "roleTags",
      title: "My roles",
      type: "array",
      of: [{ type: "reference", to: { type: "roleTag" } }],
    },
    {
      name: "techTags",
      title: "Technologies used",
      type: "array",
      of: [{ type: "reference", to: { type: "techTag" } }],
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      description: "E.g. '2021' or 'Nov 2020–Feb 2021'",
    },
    {
      title: "Primary link",
      name: "primaryLink",
      type: "link",
      description: "Preferrably a live website",
    },
    {
      title: "Secondary link",
      name: "secondaryLink",
      type: "link",
      description: "E.g. a GitHub repository",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description: "Only for internal use, not shown on the front-end",
    },
  ],
  initialValue: () => ({
    featured: true,
    primaryLink: {
      text: "Visit site",
      _type: "link",
    },
    secondaryLink: {
      text: "GitHub repo",
      _type: "link",
    },
    publishedAt: new Date().toISOString(),
  }),
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
