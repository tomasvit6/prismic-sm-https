import { FC } from 'react';

import { AnyResolvedSlice } from '@app/slice-machine/types';
import * as sharedSlices from '@slices/index';

import { SliceFallback } from './SliceFallback';

interface Props {
  sliceName: string;
  i: number;
  slice?: AnyResolvedSlice;
}

export const SliceResolver: FC<Props> = (props) => {
  const showSliceFallback = () => <SliceFallback {...props} />;

  return sharedSlices[props.sliceName] ?? showSliceFallback;
};
