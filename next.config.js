/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');
const withReactSvg = require('next-react-svg');
const path = require('path');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const defaultConfig = {
  swcMinify: true,
  include: path.resolve(__dirname, 'public/icons'),
  webpack(config) {
    return config;
  },
  i18n,
  reactStrictMode: true,
};

const hocs = [
  {
    hoc: withPWA,
    props: {
      pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        sw: 'service-worker.js',
        mode: 'production',
      },
    },
  },
  {
    hoc: withReactSvg,
    props: {},
  },
  {
    hoc: withBundleAnalyzer,
    props: {},
  },
];
const configWithHocs = hocs.reduce(
  (accumulator, hocConfig) =>
    hocConfig.hoc({ ...accumulator, ...hocConfig.props }),
  defaultConfig
);

module.exports = configWithHocs;
