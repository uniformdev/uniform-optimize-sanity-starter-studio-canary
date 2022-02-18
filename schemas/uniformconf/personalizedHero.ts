import { DocumentType, StringField, ArrayField } from '@sanity/schema-types-react';

export const personalizedHeroSchema: DocumentType = {
  title: 'Personalized Hero',
  name: 'personalizedHero',
  type: 'document',
  fields: [
    {
      name: 'personalizedHeroName',
      type: 'string',
      title: 'Personalized Hero Name',
      validation: (Rule) => Rule.required(),
    } as StringField,
    // note: `array` field type is useful for one-to-many references. whereas `reference` field type is 1:1.
    // also note: by default `array` field type will store inline instances of objects. For our use, though,
    // we want to store references to existing objects.
    // Therefore we use an `array` field containing `reference` objects.
    {
      name: 'heroVariations',
      type: 'array',
      title: 'Hero Variations',
      of: [
        {
          type: 'reference',
          to: [{ type: 'hero' }],
        },
      ],
    } as ArrayField,
  ],
  preview: {
    select: {
      title: 'personalizedHeroName',
    },
  },
};
