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
