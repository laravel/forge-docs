# Redirects

[[toc]]

## Overview

Redirects can be configured to automatically take visitors from one page to another and can be created from the "Redirects" tab.

## Creating Redirects

Redirects are wrappers around Nginx's [`rewrite`](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite) rules and can use the full syntax, including regular expressions. For example, you could use `= /` to only match the root of the domain.

## Temporary vs Permanent

Forge supports two types of redirects:

- Permanent (HTTP Status Code 301)
- Temporary (HTTP Status Code 302)

Although both of these redirect types are invisible to the user, the browser will treat them differently and it is important to know the difference.

### Temporary

When the browser encounters a temporary redirect, it will take you to the destination and forget that it was redirected from the original page. If you were to change the destination page and then visited the original page again, the browser would see the new redirect location and take you there.

### Permanent

With a permanent redirect, the browser will remember that it was redirected away from the original page. To save making another network request, the next time the browser visits the original page, it will see that it was redirected and immediately visit that page instead.

Although you can change the destination of a permanent redirect, you will need to clear the browser cache before you visit the original page again. It's considered bad practice to change a permanent redirect, so be careful when doing so.
