import { FC } from 'react';
import { RichText, RichTextProps } from 'prismic-reactjs';

import { linkResolver } from '@app/slice-machine/linkResolver';
import { SxTheme } from '@app/theme/types';
import { Box } from '@mui/system';

interface Props extends Omit<RichTextProps, 'linkResolver'> {
  containerSx?: SxTheme;
}

export const CustomRichText: FC<Props> = (props) => {
  const { containerSx, ...rest } = props;

  return (
    <Box sx={containerSx}>
      <RichText linkResolver={linkResolver} {...rest} />
    </Box>
  );
};
