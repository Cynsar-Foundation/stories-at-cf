export const websiteConfig = {
    name: 'websiteConfig',
    title: 'Website Configurations',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'intro',
        title: 'intro',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
    ]
  }
  