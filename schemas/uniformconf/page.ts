import { ArrayField, DocumentType, SlugField, StringField } from '@sanity/schema-types-react';

export const pageSchema: DocumentType = {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    } as StringField,
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        slugify: (input: string) => {
          return input.startsWith('/') ? input.toLowerCase() : `/${input.toLowerCase()}`;
        },
      },
    } as SlugField,
    // note: `array` field type is useful for one-to-many references. whereas `reference` field type is 1:1.
    // also note: by default `array` field type will store inline instances of objects. For our use, though,
    // we want to store references to existing objects.
    // Therefore we use an `array` field containing `reference` objects.
    {
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'callToAction' },
            { type: 'hero' },
            { type: 'personalizedHero' },
            { type: 'registrationForm' },
            { type: 'talksList' },
            { type: 'whyAttend' },
          ],
        },
      ],
    } as ArrayField,
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
};
