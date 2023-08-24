export const PLANS = [
  {title: 'Cover Image', value: 'Cover Image'},
  {title: 'Inside Blog Left', value: 'Inside Blog Left'},
  {title: 'Inside Blog Right', value: 'Inside Blog Right'}
]
export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stepTitle',
              title: 'Step Title',
              type: 'string',
              options: {
                list: PLANS.map(({title, value}) => ({title, value})),
              },
            },
            {
              name: 'stepContent',
              title: 'Step Content',
              type: 'text',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image' }],
              options: {
                layout: 'grid' // This will display the images in a grid layout in the studio
              }
            }
          ],
          preview: {
            select: {
              title: 'stepTitle',
              subtitle: 'stepContent',
            },
          },
        },
      ]
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      authors: 'authors[].name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { authors } = selection;
      return {
        ...selection,
        subtitle: authors && authors.length > 0 ? `by ${authors.join(', ')}` : '',
      };
    },
  },
}

