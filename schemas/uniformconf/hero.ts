import { DocumentType, ImageField, StringField, UrlField } from '@sanity/schema-types-react';

export const heroSchema: DocumentType = {
  title: 'Hero',
  name: 'hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    } as StringField,
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    } as StringField,
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    } as StringField,
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { accept: 'image/*' },
    } as ImageField,
    {
      name: 'unfrmOptIntentTag',
      type: 'uniform.intenttags',
      title: 'Intent Tags',
    } as StringField,
    {
      name: 'buttonLink',
      type: 'url',
      title: 'Button Link',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true }),
    } as UrlField,
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
};
