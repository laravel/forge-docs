# Applications

[[toc]]

## Overview

Forge provides first-class support for applications running [Laravel](https://laravel.com), allowing you to quickly toggle and configure:

- Laravel's Task Scheduler
- Laravel Horizon Daemon
- Laravel Octane Daemon
- Laravel Reverb Daemon
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

You may quickly enable or disable the Laravel Octane daemon via the "Laravel Octane" toggle. Forge will create the required Octane daemon and install Octane dependencies for you.

When enabling the Octane daemon, Forge will ask you to provide the port number you would like to use for the Octane server as well as your Octane server of choice.

![Enabling Laravel Octane](/img/laravel-octane-application.png)

If the site's deploy script does not contain the `octane:reload` command, Forge will automatically append it for you.

:::tip Before Enabling Octane

Before enabling Laravel Octane, you must set the `OCTANE_SERVER` environment variable to the Octane server you choose.
:::

### Converting Existing Daemons

If your server is already configured with a daemon that runs Laravel Octane, Forge will offer to convert the daemon for you. This process links the site's ID and the daemon's ID together, allowing Forge to manage the daemon for you.

## Laravel Reverb

Determining the correct server type for hosting Laravel Reverb depends on your configuration requirements. You may use the table below to help inform your decision:

| Configuration                                                           | App Server | Web Server |
|-------------------------------------------------------------------------|:----------:|:----------:|
| Reverb server alongside Laravel application                             | ⊙          |            |
| Dedicated Reverb server                                                 |            | ⊙          |
| Dedicated Reverb server with Pulse                                      | ⊙          |            |
| Dedicated Reverb server with Pulse (seperate ingest and / or database)  |            | ⊙          |

Once your preferred server has been provisioned, you should [add a new site](/sites/the-basics.html#creating-sites) and [install your Reverb-enabled Laravel application](/sites/the-basics.html#apps-projects) from your version control provider of choice.

Now, you may quickly enable or disable Laravel Reverb via the "Laravel Reverb" toggle within Forge's application panel. When enabling Reverb, Forge will create the Reverb daemon, install the required dependencies, and configure the server for optimum performance.

Additionally, Forge will prompt for additional information required to setup the server per your requirements.

![Enabling Laravel Reverb](/img/laravel-reverb-application.png)

- **Public Hostname:** Used to update the Nginx confuguration of the site, allowing Reverb connections to be accepted by the server on the given hostname. Forge will default to a subdomain of the site's current hostname, but you are free to customize this value. For example, if the site's hostname is `example.com`, Forge will default Reverb's hostname to `ws.example.com`.
- **Port:** Used to instruct the Reverb daemon which server port it should run on. Forge will proxy requests for the given public hostname to this port.
- **Maximum Concurrent Connections:** The number of connections your Reverb server can handle will depend on a combination of the resources available on the server and the amount of connections and messages being processed. You should enter the number of connections the server can manage before it should prevent new connections. This option will update the server's allowed open file limit, Nginx's allowed open file and connection limit, and install the `ev` event loop if required.

If the site's deploy script does not contain the `reverb:restart` command, Forge will automatically append it for you.

### SSL
If an SSL certificate exists for your site which protects Reverb's configured hostname, Forge will automatically install it when enabling Reverb, ensuring your Reverb server is accessible via secure WebSockets (wss).

If Reverb has been installed before a valid certificate is available, you may request a new certificate for Reverb's configured hostname and Forge will automatically install it as soon as it is issued. Forge will also pre-populate the "Domains" input with Reverb's hostname when requesting a certificate.

### Converting Existing Daemons

If your server is already configured with a daemon that runs Laravel Reverb, Forge will manage the daemon for you. This process links the site's ID and the daemon's ID together, allowing Forge to manage the daemon on your behalf.

:::warning Disabling Reverb

When disabling Reverb, Forge will remove the daemon and ensure the public hostname is no longer accessible. However, any settings Forge updated when enabling Reverb, such as open file and connection limits, will not be reset and any PHP extensions installed will not be removed.
:::

## Inertia Server Side Rendering

You may quickly enable or disable the Inertia SSR daemon via the "Inertia SSR" toggle. Forge will create the required Inertia SSR daemon for you.

When enabling the Inertia daemon, Forge will ask you to provide a few more details. You may also choose whether Forge should update your deploy script to append the Inertia SSR stop command.

![Enabling Inertia SSR](/img/inertia-application.png)

### Converting Existing Daemons

If your server is already configured with a daemon that runs Inertia SSR, Forge will offer to convert the daemon for you. This process links the site's ID and the daemon's ID together, allowing Forge to manage the daemon for you.

## Circle Permissions

You may grant a circle member authority to run arbitrary commands in a site's directory by granting the `server:create-schedulers` and `server:create-daemons` permissions.
