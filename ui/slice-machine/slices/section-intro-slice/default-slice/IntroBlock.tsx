import { FC, useMemo } from 'react';
import { RichTextBlock } from 'prismic-reactjs';

import { hasRichTextContent } from '@app/slice-machine/richText';
import { ItemPosition, TextColor } from '@app/slice-machine/types';
import { typedSx } from '@app/theme/sxTheme';
import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { CustomRichText } from '@ui/slice-machine/CustomRichText';

interface Props {
  title: RichTextBlock[];
  titleColor: TextColor | null;
  showDivider: boolean | null;
  subtitle: RichTextBlock[];
  subtitleColor: TextColor | null;
  position: ItemPosition | null;
}

export const IntroBlock: FC<Props> = (props) => {
  const {
    title,
    titleColor,
    position,
    subtitle,
    subtitleColor,
    showDivider,
  } = props;
  const memoStyles = useMemo(
    () => styles({ titleColor, subtitleColor, position }),
    [titleColor, subtitleColor, position]
  );

  return (
    <Stack
      sx={memoStyles.container}
      divider={showDivider ? <Divider sx={memoStyles.divider} /> : undefined}
    >
      {hasRichTextContent(title) && (
        <Box sx={memoStyles.title}>
          <CustomRichText render={title} />
        </Box>
      )}
      {hasRichTextContent(subtitle) && (
        <Box sx={memoStyles.subtitle}>
          <CustomRichText render={subtitle} />
        </Box>
      )}
    </Stack>
  );
};

interface StyleProps {
  titleColor: TextColor | null;
  subtitleColor: TextColor | null;
  position: ItemPosition | null;
}

const styles = ({ titleColor, subtitleColor, position }: StyleProps) =>
  typedSx({
    container: {
      textAlign: position,
      '& * p': {
        m: 0,
      },
    },
    title: {
      color: titleColor,
    },
    subtitle: {
      color: subtitleColor,
    },
    divider: {
      width: 200,
      margin: '0 auto',
      borderColor: titleColor,
    },
  });
