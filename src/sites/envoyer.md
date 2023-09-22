# Envoyer

[[toc]]

## Overview

Forge now offers zero downtime deployments, thanks to a seamless first-party integration with [Envoyer](https://envoyer.io). Envoyer's zero downtime deployments ensure you avoid even those brief milliseconds of downtime while the server updates your code.

## Creating an Envoyer API Token

To kick things off, you'll need active subscriptions for both [Laravel Forge](https://forge.laravel.com/auth/register) and [Envoyer](https://envoyer.io/auth/register). Once you’re set up, navigate to your Envoyer dashboard and [create a new API token](https://envoyer.io/user/profile?name=Laravel%20Forge&scopes=projects:create,deployments:create,servers:create#/api). At a minimum, Forge requires the following scopes:

```
deployments:create
projects:create
servers:create
```

:::tip Envoyer API Access

To future-proof the integration, consider providing Forge with additional access permissions. You can update your Envoyer’s API token in Forge at any point.
:::

## Linking Your Envoyer Account To Forge

Next, it’s time to link Forge with your Envoyer API token. Navigate to your account settings in Forge and click on the [Envoyer navigation item](https://forge.laravel.com/user-profile/envoyer).

![Envoyer panel in Forge's Account settings](/img/forge-envoyer-panel.png)

## Creating New Sites With Envoyer

When creating a new site in Forge, you’ll notice a new option labeled “Configure with Envoyer”. Toggle this option to reveal a dropdown menu, where you can either select an existing Envoyer project or create a brand new one.

![Creating a new site with Envoyer](/img/envoyer-new-site.png)

![Creating a new Envoyer project from Forge](/img/new-envoyer-project.png)

## Envoyer Sites In Forge

To deploy your Envoyer project within Forge, simply click the “Deploy Now” button, just as you would with any other site in Forge. The “Deployment Trigger URL” is also available for use in a CI environment.

Additionally, Forge has been updated to align perfectly with Envoyer projects:

- Commands are executed from the `/current` directory.
- The Environment panel will display a read-only version of the `.env` file. Continue to use Envoyer to manage your environment file, especially since it may need to be synchronized across multiple servers.
- The site’s Packages panel is disabled to ensure the `auth.json` file remains intact through subsequent deployments.

![Application panel when a project is configured with Envoyer](/img/site-panel-with-envoyer.png)

## Migrating An Existing Site To Envoyer

Before migrating your Forge site to Envoyer, ensure your site directory does not contain a directory called `releases` or `current`. This is essential to allow Envoyer to create these directories during the project installation on your server.

Next, access the Envoyer dashboard and navigate to the relevant project. Within the project settings, select "Import Forge Server," then choose the appropriate server and site before clicking "Import Server."

![Import server from Forge](/img/import-server-from-forge.png)

After adding the server details, it's crucial to test the connection to ensure that Envoyer can communicate with your server effectively. You can test the connection status from the server overview.

![Server connection status](/img/server-connection-status.png)

Click on the "Manage Environment" option, unlock your environment, and sync it to the new server. This action will replace the contents of the existing `.env` file in the site directory on the server.

![Sync environment variables](/img/sync-environment.png)

Now, you should initiate a deployment from Envoyer. Once the deployment is complete, Envoyer will copy the latest version of your application into the releases directory of your site and add a symlink to `/current`.

Your site should still be accessible, but the old version is still being served. To address this, navigate to the "Meta" panel in Forge and prefix the web directory with `/current`. For example, if your site's web directory is currently `/public`, update it to `/current/public`. Doing so will instruct Nginx to serve your application from `/home/forge/example.com/current/public` – the location where Envoyer has installed the latest version of your application.

![Update web directory](/img/update-web-directory.png)

You should now tidy your site directory by ensuring it only contains the `releases`, `current`, and `storage` directories. After ensuring you have backed up anything you need, you may remove everything else, including any dotfiles and directories such as `.git`, `.gitattributes`, etc.

Forge should now recognize your site as being managed by Envoyer in the "Envoyer" panel. You can now go ahead and link the two together by selecting the relevant project from the options provided.

![Link Forge with Envoyer](/img/forge-envoyer-link.png)

By following these steps, you can ensure a smooth migration of your Forge site to Envoyer and leverage Envoyer's zero downtime deployment capabilities.
