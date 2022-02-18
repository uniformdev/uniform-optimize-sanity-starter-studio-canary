import { ImageField, DocumentType, StringField, UrlField } from '@sanity/schema-types-react';

export const callToActionSchema: DocumentType = {
  title: 'Call To Action',
  name: 'callToAction',
  type: 'document',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
    } as StringField,
    {
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
    } as StringField,
    {
      name: 'buttonLink',
      type: 'url',
      title: 'Button Link',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    } as UrlField,
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    } as StringField,
    {
      name: 'buttonImage',
      type: 'image',
      title: 'Button Image',
      options: { accept: 'image/*' },
    } as ImageField,
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'heading',
    },
  },
};
