import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { ContentSpacer } from '@templates/common/ContentSpacer';

export const Offline: FC = () => {
  const { t } = useTranslation();

  return (
    <ContentSpacer isPadded={false}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={6} my={2}>
          <Card variant="outlined">
            <CardContent
              component={Box}
              mx={{ xs: 2, sm: 10 }}
              my={{ xs: 8, sm: 15 }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                textAlign="center"
              >
                <Grid item xs={12}>
                  <Typography
                    variant="h1"
                    component="h1"
                    fontSize={{ xs: 70, sm: 120 }}
                    lineHeight={{ xs: '70px', sm: '90px' }}
                  >
                    {t('offline:offline')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" component="h2" fontSize={20}>
                    {t('offline:title')}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ContentSpacer>
  );
};
