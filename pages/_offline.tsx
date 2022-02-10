import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { SSRConfig, useTranslation } from 'next-i18next';

import { makeTranslations } from '@app/localization/i18n';
import { AvailableLocales } from '@app/localization/types';
import { Offline } from '@templates/Offline';

const OfflinePage: NextPage<InferGetStaticPropsType<
  typeof getStaticProps
>> = () => {
  const { t } = useTranslation();
  const tabTitle = t('offline:tabTitle');

  return (
    <>
      <Head>
        <title>{tabTitle}</title>
      </Head>
      <Offline />
    </>
  );
};

export const getStaticProps: GetStaticProps<SSRConfig> = async (ctx) => {
  const {
    translations,
  } = await makeTranslations(ctx.locale as AvailableLocales, ['offline']);

  return {
    props: translations,
  };
};

export default OfflinePage;
