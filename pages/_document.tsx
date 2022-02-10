import { Children } from 'react';
import { DocumentInitialProps } from 'next/dist/shared/lib/utils';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { ServerStyleSheets } from '@mui/styles';

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const materialUiSheets = new ServerStyleSheets();
    const view = ctx.renderPage;

    ctx.renderPage = () =>
      view({
        enhanceApp: (App) => {
          const EnhancedApp = (props) =>
            materialUiSheets.collect(<App {...props} />);
          EnhancedApp.displayName = 'EnhancedApp';

          return EnhancedApp;
        },
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...Children.toArray(initialProps.styles),
        materialUiSheets.getStyleElement(),
      ],
    };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
