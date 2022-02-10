import { IncomingMessage } from 'http';
import { ParsedUrlQuery } from 'querystring';

import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';
import { GetServerSidePropsContext, NextApiRequest } from 'next';

import { AvailableLocales } from '@app/localization/types';

export type AugmentedRequest = IncomingMessage & {
  cookies: { [name: string]: string };
  query: Record<string, string>;
};

export type AugmentedGetServerSideProps<
  T extends unknown = Record<string, never>,
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (context: AugmentedGetServerSidePropsContext<Q>) => Promise<{ props: T }>;

export type AugmentedGetServerSidePropsContext<
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = GetServerSidePropsContext<Q> & {
  req: AugmentedRequest;
  previewData?: AugmentedPreviewData;
  locale?: AvailableLocales;
};

interface AugmentedPreviewData {
  ref?: string;
}

export type AugmentedNextApiRequest = NextApiRequest & AugmentedRequest;

export interface DevtoolsOptions {
  initialIsOpen?: boolean;
  panelProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  closeButtonProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  toggleButtonProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  position?: DevtoolsPosition;
  containerElement?: string | any;
}

type DevtoolsPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface ErrorHandlerParams {
  hideToast: boolean;
  showRawError: boolean;
}
