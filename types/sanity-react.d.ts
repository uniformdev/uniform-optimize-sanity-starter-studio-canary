// https://github.com/sanity-io/sanity/issues/1857

// types _mostly_ borrowed from here (added a few field types):
// https://gist.github.com/barbogast/4bea3ad77272fafe0af3d4f70446d037

declare module '@sanity/schema-types-react' {
  import { ReactElement, ComponentType } from 'react';

  export type Meta = {
    parent: { [key: string]: any };
    path: string[];
    document: { [key: string]: any };
  };

  export type CustomRuleCallback = (field: any, meta: Meta) => true | string | Promise<true | string>;

  export type RuleType = {
    required: () => RuleType;
    custom: (cb: CustomRuleCallback) => RuleType;
    min: (min: number) => RuleType;
    max: (max: number) => RuleType;
    length: (exactLength: number) => RuleType;
    greaterThan: (gt: number) => RuleType;
    uri: (options: { scheme: string[]; allowRelative?: boolean; relativeOnly?: boolean }) => RuleType;
  };

  export type Validation = (rule: RuleType) => RuleType;

  export type CommonFieldProps = {
    name: string;
    type: string;
    title?: string;
    fieldset?: string;
    validation?: Validation;
    description?: string;
    hidden?: boolean;
    readOnly?: boolean;
    options?: {
      isHighlighted?: boolean; // is only available on fields within an image
    };
    icon?: ComponentType; // is only available for elements of which include a block
    inputComponent?: ComponentType;
  };

  export type StringField = CommonFieldProps & {
    options?: {
      list: { title: string; value: string }[];
      layout?: string;
    };
  };

  export type TextField = CommonFieldProps & {
    rows: number;
  };

  export type Span = {
    _type: 'span';
    text: string;
  };

  export type BlockField = {
    styles?: Array<{
      title: string;
      value: string;
      blockEditor?: {
        render: ComponentType;
      };
      icon?: ComponentType;
    }>;
    lists?: Array<{
      title: string;
      value: string;
    }>;
    marks?: {
      decorators?: Array<{ title: string; value: string; icon?: ComponentType }>;
      // note: annotations type may be incomplete
      annotations?: Array<{ name: string; title: string; type: string; to?: { type: string } }>;
    };
    of?: ArrayOf[];
  };

  type ArrayOf = ObjectType | ReferenceField | ImageField | { type: string } | BlockField;

  export type ArrayField = CommonFieldProps & {
    name: string;
    of: ArrayOf[];
  };

  export type FilterFunctionResult = { filter: string; filterParams?: string };
  export type FilterFunction = (args: {
    document: { [key: string]: any };
    parentPath: string[];
    parent: any[];
  }) => FilterFunctionResult;
  export type ReferenceField = CommonFieldProps & {
    to: { type: string }[];
    options: {
      filter: string | FilterFunction;
      filterParams?: { [key: string]: string };
    };
  };

  export type ImageField = CommonFieldProps & {
    options?: {
      metadata?: Array<'exif' | 'location' | 'lqip' | 'palette'>;
      hotspot?: boolean;
      // default value is true
      storeOriginalFilename: boolean;
      accept?: string;
      sources?: string[];
    };
  };

  export type SlugField = CommonFieldProps & {
    options?: {
      source?: string;
      maxLength?: number;
      slugify: (input: string) => string;
      isUnique: (proposedSlug: string) => boolean;
    };
  };

  export type UrlField = CommonFieldProps;

  export type NumberField = CommonFieldProps & {
    options?: {
      list?: Array<number | { title: string; value: number }>;
    };
  };

  export type Field =
    | CommonFieldProps
    | StringField
    | TextField
    | ArrayField
    | ReferenceField
    | ImageField
    | ObjectType
    | BlockField
    | SlugField
    | UrlField;

  export type Preview = {
    select?: { [key: string]: string };
    prepare?: (selection: { [key: string]: any }) => { title?: string; subtitle?: string }; // eslint-disable-line @typescript-eslint/no-explicit-any
    component?: (props: PreviewProps) => ReactElement;
  };

  export type Fieldset = {
    name: string;
    title: string;
    options?: { collapsible: boolean; collapsed?: boolean };
  };

  export type ObjectType = {
    type: 'object';
    title?: string;
    name: string;
    fields: Field[];
    validation?: Validation;
    preview?: Preview;
    fieldsets?: Fieldset[];
    description?: string;
    options?: { collapsible?: boolean; collapsed?: boolean };
  };

  export type DocumentType = {
    type: 'document';
    name: string;
    fields: Field[];
    title?: string;
    validation?: Validation;
    preview?: Preview;
    fieldsets?: Fieldset[];
    initialValue?: { [key: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any
    orderings?: {
      name: string;
      title: string;
      by: { field: string; direction: string }[];
    }[];
  };

  export type PreviewProps = {
    value: {
      [key: string]: any;
    };
  };

  export type Body2TextProps = { children: React.FunctionComponent<any> };
}
