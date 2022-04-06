# SSL

[[toc]]

## Overview

Forge supports installing custom SSL certificates and using LetsEncrypt to generate free certificates for your websites.

## LetsEncrypt

[LetsEncrypt](https://letsencrypt.org) provides free SSL certificates that are recognized across all major browsers.

If you need to install LetsEncrypt for multiple domains, you may separate multiple domains using commas.

:::warning Cloning a LetsEncrypt Certificate

Because of the LetsEncrypt renewal process, it is not possible to clone LetsEncrypt certificates to other sites. You should simply issue a new LetsEncrypt certificate for that site.
:::

### Renewing LetsEncrypt Certificates

Forge will **automatically** renew your LetsEncrypt certificates within 21 days or less before expiration. Renewal will take place at a random day and time to avoid overwhelming the LetsEncrypt servers.

If something goes wrong while renewing a certificate, Forge will notify the server owner via email.

### Wildcard Subdomain LetsEncrypt Certificates

To install a LetsEncrypt certificate with support for wildcard subdomains, you will need to list both the wildcard subdomain and the root domain in your domain list: `*.domain.com, domain.com`. LetsEncrypt only supports the `dns-01` challenge type when issuing wildcard certificates, so you will need to provide API credentials for your DNS provider.

Forge currently supports the following LetsEncrypt wildcard DNS providers:

- Cloudflare
- DNSimple
- DigitalOcean
- Linode
- OVH
- Route53

#### Cloudflare API Token

If you are using [Cloudflare](https://cloudflare.com) to manage your DNS, your Cloudflare API token must have the `Zone.Zone.Read` and `Zone.DNS.Edit` permissions. In addition, the token must have permissions on **all** zones attached to your Cloudflare account.

#### Cloudflare Universal SSL certificates

Cloudflare [provides](https://developers.cloudflare.com/ssl/edge-certificates/universal-ssl/enable-universal-ssl/) free SSL certificates to all connected domains and all their first-level subdomains. These certificates are automatically enabled to all domains and subdomains that have a Proxy function enabled. However, if you have highter level subdomains (e.g. `staging.api.example.com`) this Universal certificate doesn't cover them and may cause a `ERR_SSL_VERSION_OR_CIPHER_MISMATCH` error displayed in your visitors browsers. For such subdomains we recommend you to disable Cloudflare proxying and use your traditional SSL certificate installed on your Forge server directly (e.g. LetsEncrypt).
