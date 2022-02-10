import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AnyResolvedSlice } from '@app/slice-machine/types';
import { typedSx } from '@app/theme/sxTheme';
import { Box, Grid, Typography } from '@mui/material';

interface Props {
  sliceName: string;
  i: number;
  slice?: AnyResolvedSlice;
}

export const SliceFallback: FC<Props> = (props) => {
  const { sliceName } = props;
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Grid
        container
        flexDirection="column"
        spacing={2}
        alignItems="center"
        textAlign="center"
      >
        <Grid item>
          <Typography variant="h4" component="h2">
            {t('common:sliceNotFound', { sliceName })}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" maxWidth={320}>
            {' '}
            {t('common:registerSlice')}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = typedSx({
  root: {
    display: 'flex',
    height: 250,
    alignItems: 'center',
    background: 'light.dark',
  },
});
