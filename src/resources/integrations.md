---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/resources/integrations.html'
---
# Integrations

[[toc]]

## Overview

Forge provides a few third-party integrations that you can install on your server to provide additional features to your server. We'll discuss each of these below.

## Monitoring Integrations

### Blackfire.io

[Blackfire](https://blackfire.io/) provides thorough PHP application profiling and is our recommended solution for monitoring your PHP application's performance. After providing your server ID and token, Blackfire will be installed and configured for your server.

### Papertrail

[Papertrail](https://papertrailapp.com/) provides hosted log monitoring and searching for your PHP application. If you are using Laravel, just configure your application to use the `syslog` driver.

## Circle Permissions

You may grant a circle member authority to configure and manage integrations by granting the `server:manage-php` permission.
