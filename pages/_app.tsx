import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import 'react-toastify/dist/ReactToastify.css';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { TENANT_THEMES } from '@app/theme/constants';
import { ThemeProvider } from '@mui/styles';

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

interface Composition {
  getInitialProps: (
    appContext: AppContext
  ) => Promise<AppInitialProps & Partial<AppProps>>;
}

const MyApp: FC<AppProps> & Composition = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={TENANT_THEMES.default}>
      <QueryClientProvider client={QUERY_CLIENT}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & Partial<AppProps>> => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default appWithTranslation(MyApp);
