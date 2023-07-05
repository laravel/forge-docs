---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/redirects.html'
---
# Redirects

[[toc]]

## Overview

Forge allows you to configure redirects that can be configured to automatically redirect visitors from one page to another. These redirect rules can be created via the "Redirects" tab of the site's management dashboard.

## Creating Redirects

Redirects are wrappers around Nginx's [`rewrite` rules](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite) and can use the full redirect syntax supported by Nginx, including regular expressions. For example, you could use `^/$` to only match the root of the domain.

## Temporary vs. Permanent Redirects

Forge supports two types of redirects:

- Permanent (HTTP Status Code 301)
- Temporary (HTTP Status Code 302)

Although both of these redirect types are typically invisible to the user, the browser will treat them differently and it is important to know the difference.

### Temporary Redirects

When the browser encounters a temporary redirect, it will take you to the destination and forget that it was redirected from the original page. If you were to change the destination page and then visited the original page again, the browser would see the new redirect location and take you there.

### Permanent Redirects

With a permanent redirect, the browser will remember that it was redirected away from the original page. To save making another network request, the next time the browser visits the original page, it will see that it was redirected and immediately visit that page instead.

Although you can change the destination of a permanent redirect, you will need to clear the browser cache before you visit the original page again. It's considered bad practice to change a permanent redirect, so be careful when doing so.

## Circle Permissions

You may grant a circle member authority to create and manage redirects by granting the `site:manage-redirects` permission.
