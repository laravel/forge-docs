---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/php.html'
---
# PHP

[[toc]]

## Overview

Forge makes it easy to install and configure multiple versions of PHP on your server. Each installed PHP version runs its own FPM process. In addition, you may [update the PHP version used by specific sites at any time](/1.0/sites/the-basics.html#php-version).

:::danger Manual PHP Installations

If you choose to manually install PHP versions on your server, Forge will not be aware of those PHP installations. Forge is only aware of PHP installations that are managed through the Forge dashboard.
:::

## Multiple PHP Versions

When provisioning a server, you must decide which version of PHP you want to install by default. The `php` binary on your server will point to the installed version selected at the time of its creation.

Once the server has been created, Forge makes it easy to install additional versions alongside the default version. In the following documentation we will discuss how to manage these additional PHP versions.

### Installation

You can install additional versions of PHP via the **PHP** tab on a server's management dashboard. Once an additional version of PHP has been installed, you may select it when creating a site or when switching a site's PHP version.

When you install a new version of PHP onto your server, Forge will create and configure the PHP-FPM process for that version. This means that your server will be running multiple versions of PHP at once.

### Uninstalling Additional PHP Versions

You can choose to uninstall a version of PHP so long as:

- There are other versions installed.
- The version you wish to uninstall is not the server's default version for new sites.
- The version you wish to uninstall is not the server's default version on the CLI.
- The version you wish to uninstall is not used by any sites.

### CLI

When an additional version of PHP has been installed, you may reference it on the CLI via `phpx.x`, replacing the `x.x` with the version number (e.g. `php8.1`). The `php` binary will always point to the active CLI version (if changed from the default).

### Default PHP Installation

The "default" PHP version is the version of PHP that will be used by default when creating a new site on the server.

When selecting a new version of PHP as your server's "default" version, the PHP versions used by existing sites **will not be updated**.

### Updating PHP Between Patch Releases

You can upgrade your PHP installations between patch releases of PHP at any time using the **Patch Version** button. Typically, these updates should not cause any breaking changes to your server, although a few seconds of downtime is possible.

### PHP Betas / Release Candidates

PHP "beta" and "release candidate" releases are often available on Forge weeks before their final release. This allows you to experiment with upcoming major PHP versions on sites that are not in production. However, some Forge features, PHP features, and PHP extensions may not work as expected during that period. In addition, once that PHP version becomes stable, **you will need to fully uninstall and **re-install** the PHP version.**

## Common PHP Configuration Settings

:::danger Configuration Settings

Changing the following settings will apply the changes to all versions of PHP installed on the server.
:::

### Max File Upload Size

You may configure the maximum file upload size through the **PHP** tab of the server management dashboard. This value should be provided in megabytes. For reference, `1024MB` is `1GB`.

### Max Execution Time

You may configure the maximum execution time through the **PHP** tab of the server management dashboard. This value should be provided in seconds.

### OPcache

Optimizing the PHP OPcache for production will configure OPcache to store your compiled PHP code in memory to greatly improve performance. If you choose to optimize OPcache for production, you should verify that your deployment script [reloads the PHP-FPM service](/1.0/servers/cookbook.html#restarting-php-fpm) at the end of each deployment.

## Circle Permissions

Circle members will require the `server:manage-php` permission to manage PHP installations and configurations. This permission is also required to manage integrations with Blackfire.io and Papertrail.
