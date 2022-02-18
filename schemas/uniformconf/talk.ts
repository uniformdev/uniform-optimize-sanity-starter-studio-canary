import { DocumentType, StringField, BlockField } from '@sanity/schema-types-react';

export const talkSchema: DocumentType = {
  title: 'Talk',
  name: 'talk',
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
      name: 'unfrmOptIntentTag',
      type: 'uniform.intenttags',
      title: 'Intent Tags',
    } as StringField,
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
};
