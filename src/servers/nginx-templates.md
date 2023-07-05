---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/nginx-templates.html'
---
# Nginx Templates

[[toc]]

## Overview

Nginx templates allow you to customize the Nginx site configuration that Forge uses when creating your new site.

:::warning Broken Nginx Templates May Cause Downtime

Nginx templates that are not valid will prevent Nginx from properly working and your existing sites may stop responding. You should proceed with caution when creating and deploying custom Nginx templates.
:::

## Creating Templates

You may create your own Nginx templates from within a server's management dashboard. When creating a new template, you need to provide a template name and the template's content. Forge will provide a default template that you may alter as required.

:::tip TLSv1.3

Although the default template does not show support for TLSv1.3, Forge will automatically update a site to support it if the server is able to do so.
:::

### Template Variables

Forge provides several variables that can be used within your templates to dynamically alter their content for new sites:

<div v-pre>

| Variable | Description |
| -------- | ----------- |
| `{{DIRECTORY}}` | The site's configured web directory, e.g. `/public` |
| `{{DOMAINS}}` | The site's configured domains to respond to, e.g. `laravel.com alias.laravel.com` |
| `{{PATH}}` | The site's web accessible directory, e.g. `/home/forge/laravel.com/public` |
| `{{PORT}}` | The IPv4 port the site should listen to (`:80`). If the site name is `default`, this variable will also contain `default_server` |
| `{{PORT_V6}}` | The IPV6 port to listen to (`[::]:80`). If the site name is `default`, this variable will also contain `default_server` |
| `{{PROXY_PASS}}` | The PHP socket to listen on, e.g. `unix:/var/run/php/php8.0-fpm.sock` |
| `{{ROOT_PATH}}` | The root of the configured site, e.g. `/home/forge/laravel.com` |
| `{{SERVER_PUBLIC_IP}}` | The public IP address of the server |
| `{{SERVER_PRIVATE_IP}}` | The private IP address of the server, if available |
| `{{SITE}}` | The site's name, e.g. `laravel.com`. This differs from `{{DOMAINS}}` in that it does not include site aliases. |
| `{{SITE_ID}}` | The site's ID, e.g. `12345` |
| `{{USER}}` | The site's user, e.g. `forge` |

</div>

When using these variables, you should ensure that they exactly match the syntax shown above.

## Managing Templates

You may edit the name and content of your Nginx template at any time. Changes to a template will not affect existing sites that use the template.

Deleting a template will not remove any sites which were configured to use it.

## Circle Permissions

The ability to manage Nginx Templates is determined by the `site:manage-nginx` permission. This permission is also used to restrict the ability to edit an existing site's Nginx configuration file.
