import { FC, ReactNode } from 'react';

import { Box, BoxProps, Container, ContainerProps } from '@mui/material';

interface Props extends ContainerProps {
  children: ReactNode;
  isPadded?: boolean;
  contentProps?: BoxProps;
}

export const ContentSpacer: FC<Props> = (props) => {
  const {
    children,
    isPadded = true,
    maxWidth = 'xl',
    contentProps = {},
    ...restContainerProps
  } = props;
  const { sx: contentSx, ...restContentProps } = contentProps;
  const paddingProps = { ...(isPadded ? { py: 3 } : { p: 0 }) };

  return (
    <Container maxWidth={maxWidth} {...restContainerProps}>
      <Box sx={{ ...paddingProps, ...contentSx }} {...restContentProps}>
        {children}
      </Box>
    </Container>
  );
};
