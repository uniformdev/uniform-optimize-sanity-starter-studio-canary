import { DocumentType, StringField, NumberField } from '@sanity/schema-types-react';

export const talksListSchema: DocumentType = {
  title: 'Talks List',
  name: 'talksList',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    } as StringField,
    {
      name: 'titleWhenPersonalized',
      type: 'string',
      title: 'Title When Personalized',
    } as StringField,
    {
      name: 'numberToShow',
      type: 'number',
      title: 'Number of Talks To Show',
    } as NumberField,
    {
      name: 'registerButtonText',
      type: 'string',
      title: 'Register Button Text',
    } as StringField,
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
    },
  },
};
