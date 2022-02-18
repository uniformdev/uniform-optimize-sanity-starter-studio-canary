import { DocumentType, StringField } from '@sanity/schema-types-react';

export const registrationFormSchema: DocumentType = {
  title: 'Registration Form',
  name: 'registrationForm',
  type: 'document',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
    } as StringField,
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    } as StringField,
    {
      name: 'registeredText',
      type: 'string',
      title: 'Registered Text',
    } as StringField,
  ],
  // https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'heading',
    },
  },
};
