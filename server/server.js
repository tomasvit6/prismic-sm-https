/* eslint-disable */
const express = require('express');
const next = require('next');
const { italic } = require('colors');
const loadEnvConfig = require('@next/env').loadEnvConfig;
const compression = require('compression');
const http = require('http');
const https = require('https');
const { validateCertificate } = require('./certificates/validation');

const isDevelopment = process.env.NODE_ENV !== 'production'; // initial NODE_ENV is set in package.json script

loadEnvConfig(process.cwd(), isDevelopment);

const appEnv = process.env.NEXT_PUBLIC_APP_ENV || 'local';
const port = process.env.PORT || 443;
const app = next({ dev: isDevelopment });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const isLocal = appEnv === 'local';
    let privateKey = null;
    let certificate = null;

    if (isLocal) {
      privateKey = validateCertificate(
        'server/certificates/localhost.dev-key.pem',
        'SSL Private Key'
      );
      certificate = validateCertificate(
        'server/certificates/localhost.dev.pem',
        'SSL Certificate'
      );

      if (!privateKey || !certificate) {
        process.exit();
      }

      // Skip certificate verification
      https.globalAgent.options.rejectUnauthorized = false;
    }

    if (!isDevelopment) {
      server.use(compression());
    }

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    const httpServer = http.createServer(server);
    const httpsServer = https.createServer(
      { key: privateKey, cert: certificate },
      server
    );
    const protocolServer = isLocal ? httpsServer : httpServer;

    protocolServer.listen(port, (err) => {
      const protocol = isLocal ? 'https' : 'http';

      if (err) {
        throw err;
      }

      if (isDevelopment) {
        console.log(
          `> Ready on:
            \n  ${protocol}://localhost.${italic('<domain>')}:${port}
            \nApp environment: [${appEnv}]
          `.green
        );
      } else {
        console.log(
          `> Ready on:
            \n  ${protocol}://localhost:${port}
            \nApp environment: [${appEnv}]
          `.green
        );
      }
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
