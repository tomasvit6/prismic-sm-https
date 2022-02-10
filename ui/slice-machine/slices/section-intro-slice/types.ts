import { RichTextBlock } from 'prismic-reactjs';

import {
  BackgroundColor,
  ItemPosition,
  SliceObject,
  TextColor,
} from '@app/slice-machine/types';

export type SectionIntro = SliceObject<
  SectionIntroPrimary,
  Record<string, never>
>;

export interface SectionIntroPrimary {
  title: RichTextBlock[];
  titleColor: TextColor | null;
  showDivider: boolean | null;
  subtitle: RichTextBlock[];
  subtitleColor: TextColor | null;
  position: ItemPosition | null;
  backgroundColor: BackgroundColor | null;
}
