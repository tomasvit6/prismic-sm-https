import React, { FC } from 'react';
import Head from 'next/head';
import { SSRConfig, useTranslation } from 'next-i18next';
import SliceZone from 'next-slicezone';

import { AugmentedGetServerSideProps } from '@app/fetch/types';
import { makeTranslations } from '@app/localization/i18n';
import { SliceSimulator } from '@prismicio/slice-simulator-react';
import { SliceResolver } from '@ui/slice-machine/SliceResolver';

import state from '../.slicemachine/libraries-state.json';

type Props = SSRConfig;

const SliceSimulatorPage: FC<Props> = () => {
  const { t } = useTranslation();
  const tabTitle = t('sliceSimulator:tabTitle');

  return (
    <>
      <Head>
        <title>{tabTitle}</title>
      </Head>
      <SliceSimulator
        sliceZone={(props) =>
          (<SliceZone {...props} resolver={SliceResolver} />) as any
        }
        state={state as any}
      />
    </>
  );
};

export const getServerSideProps: AugmentedGetServerSideProps<Props> = async (
  ctx
) => {
  const { translations } = await makeTranslations(ctx.locale, [
    'sliceSimulator',
  ]);

  return {
    props: translations,
  };
};

export default SliceSimulatorPage;
