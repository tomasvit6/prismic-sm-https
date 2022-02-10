import { FC } from 'react';

import { DefaultSectionIntro } from './default-slice/DefaultSectionIntro';
import { SectionIntro } from './types';

export interface SectionIntroSliceProps {
  slice: SectionIntro;
}

export const SectionIntroSlice: FC<SectionIntroSliceProps> = (props) => {
  const { slice } = props;

  return <DefaultSectionIntro slice={slice} />;
};
