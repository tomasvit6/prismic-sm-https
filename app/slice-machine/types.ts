import { Link } from 'prismic-reactjs';

export interface SliceObject<
  P extends Record<string, any>,
  I extends Record<string, any>,
  V extends string = 'default-slice'
> {
  slice_label: null | string;
  slice_type: SliceType;
  variation: V;
  primary: P;
  items: I[];
  version?: string;
  name?: string;
  id?: string;
}

export type SliceType = 'section_intro';

export type RelationField<
  T extends Record<string, any> | undefined = undefined
> = Partial<
  T extends undefined
    ? {
        uid: string;
        url: string;
      } & RelationFieldBase
    : {
        data: T;
      } & RelationFieldBase
>;

interface RelationFieldBase {
  id: string;
  type: string;
  tags: string[];
  slug: string;
  lang: string;
  first_publication_date: string;
  last_publication_date: string;
  link_type: 'Document';
  isBroken: false;
}

export interface WebLink {
  link_type: 'Web';
  url?: string;
  target?: LinkTarget;
}

export type Image = Record<string, never> | ImageStructure;

export interface ImageStructure {
  alt: string;
  copyright: null | string;
  dimensions: Dimensions;
  url: string;
}

export interface Dimensions {
  width: number | null;
  height: number | null;
}

export type LinkType = Link & { label?: string };

export interface ParsedLink {
  title: string;
  href?: string;
  target?: LinkTarget;
}

export type LinkTarget = '_blank';

export type AnyResolvedSlices = AnyResolvedSlice[];

export type AnyResolvedSlice = SliceObject<
  Record<string, any>,
  Record<string, any>
>;

export type TextColor =
  | 'text.primary'
  | 'light.main'
  | 'dark.main'
  | 'primary.main'
  | 'secondary.main';

export type BackgroundColor =
  | 'transparent'
  | 'light.main'
  | 'dark.main'
  | 'primary.main'
  | 'secondary.main';

export type ItemPosition = 'left' | 'center' | 'right';

export type BackgroundImageFit = 'cover' | 'contain';

export type ButtonBackgroundColor = 'primary' | 'secondary';
