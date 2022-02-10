import dynamic from 'next/dynamic';

import { SectionIntroSliceProps } from '@ui/slice-machine/slices/section-intro-slice/SectionIntroSlice';

const SectionIntroSlice = dynamic<SectionIntroSliceProps>(() =>
  import('@ui/slice-machine/slices/section-intro-slice/SectionIntroSlice').then(
    (val) => val.SectionIntroSlice
  )
);

export default SectionIntroSlice;
