# Applications

[[toc]]

## Overview

Forge provides first-class support for applications running [Laravel](https://laravel.com), allowing you to quickly toggle and configure:

- Laravel's Task Scheduler
- Laravel Horizon Daemon
- Laravel Octane Daemon
- Inertia.js Server Side Rendering (SSR) Daemon

![Laravel Panel](/img/laravel-panel.png)

To accomplish this, Forge parses the `composer.json` and `composer.lock` files from your application and inspects for the presence and version of the packages above.

## Laravel Scheduler

You may quickly enable or disable the Laravel scheduler via the "Laravel Scheduler" toggle. Forge will create the required [Scheduler](/resources/scheduler.html) for you.

:::tip Scheduler Configuration

Forge will automatically configure the scheduler to run every minute using the site's configured PHP version.
:::

## Laravel Horizon

You may quickly enable or disable the Laravel Horizon daemon via the "Laravel Horizon" toggle. Forge will create the required Horizon daemon for you.

If the site's deploy script does not contain the `horizon:terminate` command, Forge will automatically append it for you.

### Converting Existing Daemons

If your server is already configured with a daemon that runs Laravel Horizon, Forge will offer to convert the daemon for you. This process links the site's ID and the daemon's ID together, allowing Forge to manage the daemon for you.

## Laravel Octane

You may quickly enable or disable the Laravel Octane daemon via the "Laravel Octane" toggle. Forge will create the required Octane daemon for you.

When enabling the Octane daemon, Forge will ask you to provide a few more details. If you previously created your site without selecting the "Laravel Octane" project type, Forge will also offer to convert the site's Nginx configuration to use Laravel Octane.

![Enabling Laravel Octane](/img/laravel-octane-application.png)

If the site's deploy script does not contain the `octane:reload` command, Forge will automatically append it for you.

### Converting Existing Daemons

If your server is already configured with a daemon that runs Laravel Octane, Forge will offer to convert the daemon for you. This process links the site's ID and the daemon's ID together, allowing Forge to manage the daemon for you.

## Inertia Server Side Rendering

You may quickly enable or disable the Inertia SSR daemon via the "Inertia SSR" toggle. Forge will create the required Inertia SSR daemon for you.

When enabling the Inertia daemon, Forge will ask you to provide a few more details. You may also choose whether Forge should update your deploy script to append the Inertia SSR stop command.

![Enabling Inertia SSR](/img/inertia-application.png)

### Converting Existing Daemons

If your server is already configured with a daemon that runs Inertia SSR, Forge will offer to convert the daemon for you. This process links the site's ID and the daemon's ID together, allowing Forge to manage the daemon for you.
