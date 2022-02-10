import { FC, useMemo } from 'react';

import { BackgroundColor } from '@app/slice-machine/types';
import { typedSx } from '@app/theme/sxTheme';
import { Box } from '@mui/system';
import { ContentSpacer } from '@templates/common/ContentSpacer';

import { SectionIntro } from '../types';
import { IntroBlock } from './IntroBlock';

interface Props {
  slice: SectionIntro;
}

export const DefaultSectionIntro: FC<Props> = (props) => {
  const { slice } = props;
  const {
    position,
    showDivider,
    subtitle,
    subtitleColor,
    title,
    titleColor,
    backgroundColor,
  } = slice.primary;
  const memoStyles = useMemo(
    () =>
      styles({
        backgroundColor,
      }),
    [backgroundColor]
  );

  return (
    <Box sx={memoStyles.root}>
      <ContentSpacer>
        <IntroBlock
          title={title}
          titleColor={titleColor}
          position={position}
          subtitle={subtitle}
          subtitleColor={subtitleColor}
          showDivider={showDivider}
        />
      </ContentSpacer>
    </Box>
  );
};

interface StyleProps {
  backgroundColor: BackgroundColor | null;
}

const styles = ({ backgroundColor }: StyleProps) =>
  typedSx({
    root: {
      backgroundColor,
    },
  });
