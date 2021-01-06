# PHP

[[toc]]

## Overview

Forge makes it easy to install and configure multiple versions of PHP on your server. Each installed version runs its own FPM process, which your [sites can be switched to](/1.0/sites/management.html#php) at any time.

:::danger Manual PHP Installations
Forge will not be aware of any additional installations of PHP that were performed manually on the server.
:::

## Multiple PHP Versions

When provisioning a server, you must decide which version of PHP you want to install by default. The `php` binary will point to the installed version selected at the time of creation.

Forge makes it easy to install additional versions alongside the default version by running multiple PHP-FPM processes.

### Installation

You can install additional versions of PHP between 5.6 and 8.0. Click the **Install** button to start the process. Once the version has been installed, you may select it when creating a site, or switching a site's PHP version.

When you install a version of PHP onto your server, Forge will create and configure the PHP-FPM process for that version. This means that your server will be running multiple versions of PHP at once.

### Uninstall

You can choose to uninstall a version of PHP so long as:

- There are other versions installed.
- The version you wish to remove is not the server's default for new sites.
- The version you wish to remove is not the server's default on the CLI.
- The version you wish to remove is not used by any sites.

To uninstall a version, click the pencil dropdown button and then click **Uninstall PHP x.x**.

### CLI

When a version of PHP has been installed you may reference it on the CLI via `phpx.x`, replacing the `x.x` with the version number (e.g. `php8.0`). The `php` binary will always point to the active CLI version (if changed from the default).

### Set As Default

You can set the default version of PHP used when creating a new site.

:::warning Switching Default
When switching the default version, **existing sites will not be updated**. This is so that you can update each site individually, without risking any upgrade issues.
:::

### Patch Versions

You can upgrade patch versions of PHP at any time using the **Patch Version** button. Forge will attempt to update PHP without making any adjustments to the configurations.

## PHP Configuration

Forge makes it easy to configure common PHP settings.

:::tip Configuration Notice
Due to the way that these settings work, they will apply to all versions of PHP installed on the server. If you need to, you may manually configure these values on the server.
:::

### Max File Upload Size

You may configure the maximum file upload size through the Forge dashboard. This value should be provided in Megabytes. For reference, `1024MB` is `1GB`.

### Max Execution Time

You may configure the maximum execution time through the Forge dashboard. This value should be provided in seconds. This can be temporarily overwritten within your application codebase.

### OPcache

Optimizing the PHP OPcache for production will configure OPcache to store your compiled PHP code in memory to greatly improve performance. If you choose to optimize OPcache for production, you should verify that your deployment script reloads the PHP FPM service at the end of each deployment.
