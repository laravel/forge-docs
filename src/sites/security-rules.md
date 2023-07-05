---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/security-rules.html'
---
# Security Rules

[[toc]]

## Overview

Forge can configure password protection on your sites using [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). You can choose whether to protect your entire site or a specific path.

## Managing Security Rules

### Creating a Security Rule

You may create a new Security Rule from your site's management dashboard in Forge. You must supply a security rule name, which some browsers will display in their authentication prompt, as well as at least one set of credentials. If you need to add multiple credentials, you can click the **+** button to add a new username and password combination.

Once you've configured your security rule, click the **Add Security Rule** button.

## Credentials

Forge creates a unique `.htpasswd` file for each security rule, meaning each secured path may have its own set of credentials. This also means that you will need to re-enter the same credentials when securing multiple paths. If you need to modify the credentials, you can find the `.htpasswd` file at `/etc/nginx/forge-conf/.../server/.htpasswd-{ruleId}` on your servers.

:::warning Security Rule Password Storage

Forge does not store your security Rule passwords on our servers.
:::

## Customization

Nginx allows you to add further access restrictions such as allowing and denying access to users by IP address. Forge does not provide the ability to configure this, but you are free to customize your own protected site configuration. Forge creates a `/etc/nginx/forge-config/.../server/protected_site-{ruleId}.conf` configuration file for protected sites. You can read more about Nginx and basic access authentication [in the Nginx documentation](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/#).

## Circle Permissions

You may grant a circle member authority to create and manage security rules by granting the `site:manage-security` permission.
