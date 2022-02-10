## 👶 Getting Started (HTTPS development)

Required Node and Npm versions:

```
"node": ">=15.14.0",
"npm": ">=7.8.0"
```

Install same node version as used in .nvmrc and install npm packages:

```
nvm use
npm install
```

Generate SSL certificate with [mkcert](https://github.com/FiloSottile/mkcert):

```
// in root
cd server/certificates
mkcert -install
mkcert --key-file localhost.dev-key.pem  --cert-file localhost.dev.pem ocb.local "*.localhost"
```
