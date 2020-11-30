# Nginx Templates

[[toc]]

## Overview

Nginx templates allow you to customize the Nginx site configuration that Forge uses when creating your new site. If you have configured an Ngins template, it will be available for use when creating a new site. It is not possible to change the Nginx template after a site has been created.

:::warning Broken Nginx Templates May Cause Downtime

Nginx templates that are not valid will prevent Nginx from properly working and your existing sites may stop responding.
:::

## Creating Templates

You may create your own Nginx templates from within the server's dashboard. When creating a new template, you need to provide a template name and the template's content. Forge will provide the default template that you may alter as required.

:::tip TLSv1.3

Although the default template does not show support for TLSv1.3, Forge will automatically update a site to support it if the server is able to do so.
:::

### Template Variables

Forge provides several variables that can be used within your templates to dynamically alter the content for new sites:

| Variable | Description |
| -------- | ----------- |
| `DIRECTORY` | The site's configured web directory, e.g. `/public` |
| `DOMAINS` | The site's configured domains to respond to, e.g. `laravel.com alias.laravel.com` |
| `PATH` | The site's full directory including web directory, e.g. `/home/forge/laravel.com/public` |
| `PORT` | The IPv4 port to listen to `:80`. If the site name is `default` this will also add `default_server` |
| `PORT_V6` | The IPV6 port to listen to `[::]:80`. If the site name is `default` this will also add `default_server` |
| `PROXY_PASS` | The PHP socket to listen on, e.g. `unix:/var/run/php/php8.0-fpm.sock`. This will also account for isolated user sockets. |
| `ROOT_PATH` | The root of the configured site, e.g. `/home/forge/laravel.com` |
| `SITE` | The site's name, e.g. `laravel.com`. This differs from `DOMAINS` as it does not include aliases. |
| `USER` | The site's user, e.g. `forge`. This will be the name of the isolated user. |

The variables may be used by wrapping them in double "curly braces". All of the following examples are examples of valid variable usage:

<div v-pre>

- `{{ PORT }}`
- `{{PORT}}`
- `{{ port }}`
- `{{port}}`

</div>

## Managing Templates

You may edit the name and content of your Nginx template at any time. Changes to a template will not affect existing sites that use the template.

Deleting a template will not remove any sites which were configured to use it.
