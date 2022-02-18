import { ImageField, DocumentType, StringField, BlockField } from '@sanity/schema-types-react';

export const whyAttendSchema: DocumentType = {
  title: 'Why Attend',
  name: 'whyAttend',
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
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
    } as BlockField,
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { accept: 'image/*' },
    } as ImageField,
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
};
